<template>
    <div id="player-container">
        <transition name="player-raft">
            <img
                    v-if="playerState.onARaft"
                    :class="['raft-img', playerState.onARaft]"
                    :src="require(`@/assets/sprites/items/greenRaft-greenLink.png`)"
                    :style="raft_style"
            >
        </transition>
        <img
                :class="['player-img', playerState.currentAction, playerState.currentDirection, `animation-${playerState.animationIndex}`]"
                :src="require(`@/assets/sprites/link/${getPlayerSpriteName()}.png`)"
                :style="player_style"
        />
    </div>
</template>

<script>
    export default {
        name: 'player',
        data() {
            return {
                playerState: {
                    coordinates: {x: 8, y: 12},
                    currentDirection: "down",
                    animationIndex: 0,
                    currentAction: "walking",
                    color: "green",
                    currentSword: null,
                    currentSecondaryItem: null,
                    inventory: [
                        "pizza"
                    ],
                    currentRupees: 0,
                    onARaft: false
                }
            }
        },
        props: {
            gameState: Object,
            itemMeta: Object
        },
        methods: {
            handleMove(newDirection) {
                const { coordinates, animationIndex } = this.playerState

                let targetCoordinates = this.translateMoveCoordinatesForDirection(newDirection, {x: coordinates.x, y: coordinates.y})
                this.checkForRaftMove(targetCoordinates)
                let isMoveValid = this.isMoveValid(targetCoordinates)

                // character moves regardless to provide UI feedback
                animationIndex >= 1 ? this.playerState.animationIndex = 0 : this.playerState.animationIndex += 1
                this.playerState.currentDirection = newDirection
                if (isMoveValid) this.playerState.coordinates = {x: targetCoordinates.x, y: targetCoordinates.y}
                this.checkForItems()
            },
            translateMoveCoordinatesForDirection(newDirection, coordinates) {
                if (newDirection === 'right') return {x: coordinates.x + 1, y: coordinates.y}
                else if (newDirection === 'left') return {x: coordinates.x - 1, y: coordinates.y}
                else if (newDirection === 'down') return {x: coordinates.x, y: coordinates.y + 1}
                else if (newDirection === 'up') return {x: coordinates.x, y: coordinates.y - 1}
            },
            isMoveValid(coordinates) {
                const { overworld } = this.gameState.currentScreen
                for (const tile of overworld) {
                    if (coordinates.x === tile.coordinates.x && coordinates.y === tile.coordinates.y) {
                        // these are tiles that allow walking
                        const walkableTile = tile.name.includes('bridge') || tile.name.includes('bank') || tile.name.includes('ladder')
                        if (walkableTile) {
                            return true
                        }
                        this.checkForPathFromTile(tile)
                        return false
                    }
                }
                if (this.checkMoveForNewMap(coordinates)) return false
                if (!this.isMoveInMapBounds(coordinates)) return false
                return true
            },
            /**
             * Conditions required to use raft:
             * 1. Player has raft in inventory
             * 2. Player is on map 0_2 (because this map is the only dock in the game)
             * 3. Player attempts to move north one tile off dock
             */
            checkForRaftMove(coordinates) {
                if (this.playerState.inventory.includes('greenRaft')) {
                    if (this.gameState.currentScreen.name === '0_2') {
                        if (coordinates.x === 8 && coordinates.y === 7) {
                            this.playerState.onARaft = true
                            setTimeout(() => this.playerState.onARaft = false, 1500)
                            setTimeout(() => this.$emit('triggerNewMapLoad', 'up'), 1500)
                            setTimeout(() => this.playerState.coordinates.y = this.gameState.currentScreen.mapBoundaries.max.y, 1500)
                        }
                    }
                }
            },
            /**
             * Conditions when a tile will have a path to a new map:
             * 1. If a tile has newMap key
             * 2. If a tile has a newMap key AND tile has secret key AND secret value matches name value
             */
            checkForPathFromTile(tile) {
                if (tile.newMap) {
                    if (tile.secret && (tile.secret !== tile.name)) return
                    this.$emit('triggerNewMapLoad', tile.newMap)
                } else return
                const { startCoordinates, mapType } = this.gameState.currentScreen
                if (mapType !== 'surface') this.playerState.coordinates = startCoordinates
            },
            isMoveInMapBounds(coordinates) {
                const { mapBoundaries, mapType } = this.gameState.currentScreen

                if (mapType === 'cave' || mapType === 'shop') {
                    const playerInCaveEntrance = ((coordinates.x !== 7 && coordinates.x !== 8) && coordinates.y >= mapBoundaries.max.y - 1)
                    if (playerInCaveEntrance) return false
                }
                const isValidXMove = coordinates.x > mapBoundaries.min.x - 1 && coordinates.x < mapBoundaries.max.x + 1
                const isValidYMove = coordinates.y > mapBoundaries.min.y - 1 && coordinates.y < mapBoundaries.max.y + 1
                return isValidXMove && isValidYMove
            },
            /**
             * Dungeons, shops, and caves are current one screen, with a two cell width exit at the bottom of the
             * screen, whereas Surface maps transition to a new map if the player makes a move that would move the
             * player beyond the viewable screen.
             *
             * Dungeon exits are aligned with the bottom wall.
             *
             * Shop and Cave exits are one row below the bottom wall.
             *
             * @param coordinates
             * @return {boolean}
             */
            checkMoveForNewMap(coordinates) {
                const { mapType, mapBoundaries, exitCoordinates, name } = this.gameState.currentScreen

                let isPlayerOnExit
                if (mapType === 'dungeon') {
                    // dungeon exit is aligned with dungeon wall
                    isPlayerOnExit = ((coordinates.x === 7 || coordinates.x === 8) && coordinates.y === mapBoundaries.max.y + 1)
                    if (isPlayerOnExit) {
                        this.playerState.coordinates = exitCoordinates
                        this.$emit('triggerNewMapLoad', 'door')
                        return true
                    }
                    return false
                } else if (mapType === 'cave' || mapType === 'shop') {
                    // but shops and caves are 1 row below the bottom wall
                    isPlayerOnExit = ((coordinates.x === 7 || coordinates.x === 8) && coordinates.y === mapBoundaries.max.y)

                    if (isPlayerOnExit) {
                        this.playerState.coordinates = exitCoordinates
                        this.$emit('triggerNewMapLoad', 'door')
                        return true
                    }
                    return false
                }

                // surface maps
                if (coordinates.x > mapBoundaries.max.x) {
                    this.playerState.coordinates.x = mapBoundaries.min.x
                    this.$emit('triggerNewMapLoad', 'right')
                    return true
                } else if (coordinates.x < mapBoundaries.min.x) {
                    this.playerState.coordinates.x = mapBoundaries.max.x
                    this.$emit('triggerNewMapLoad', 'left')
                    return true
                } else if (coordinates.y > mapBoundaries.max.y) {
                    // this is a raft move down, but the animation is not implemented yet
                    if (name === '0_3') this.playerState.coordinates = {x: 8, y: 8}
                    else this.playerState.coordinates.y = mapBoundaries.min.y
                    this.$emit('triggerNewMapLoad', 'down')
                    return true
                } else if (coordinates.y < mapBoundaries.min.y) {
                    this.playerState.coordinates.y = mapBoundaries.max.y
                    this.$emit('triggerNewMapLoad', 'up')
                    return true
                }
                return false
            },
            checkForItems() {
                const { gameState, playerState, itemMeta, addItem } = this

                const itemsToAdd = []
                let tempLink = playerState
                for (const item of gameState.currentScreen.items) {
                    // this handles items that are between coordinates (ie greenSword in cave1)
                    const playerNearItemX = (Math.abs(item.coordinates.x - playerState.coordinates.x))
                    const playerNearItemY = (Math.abs(item.coordinates.y - playerState.coordinates.y))
                    const playerIsOnItem = playerNearItemX < 1 && playerNearItemY < 1
                    if (!playerIsOnItem) continue

                    const itemIsAvailable = itemMeta[item.name].isAvailable
                    if (!itemIsAvailable) continue

                    const itemIsAffordable = item.cost && item.cost > playerState.currentRupees
                    if (itemIsAffordable) continue

                    // rupees can be picked up unlimited times, but all other items only occur once
                    if (!item.name.includes('Rupee')) itemMeta[item.name].isAvailable = false
                    itemsToAdd.push(item)
                    if (item.events) {
                        Object.entries(item.events).forEach(([eventName, eventFn]) => {
                            if (eventName === 'updateLink') tempLink = eventFn(tempLink)
                            item.coordinates = {x: -100, y: -100}
                        })
                    }
                }

                itemsToAdd.forEach(addItem)
                this.playerState = tempLink
            },
            addItem(item) {
                // TODO - need to call animateItemAcquisition
                const { currentSword, currentSecondaryItem, currentRupees } = this.playerState

                if (item.name.includes('Rupee')) {
                    this.playerState.currentRupees += 50
                    this.$emit('updateRupees', item)
                    return
                }
                if (item.cost && item.cost <= currentRupees) {
                    this.playerState.currentRupees -= item.cost
                    this.$emit('updateRupees', item)
                }
                if (!currentSword && item.name.includes('Sword')) {
                    this.playerState.currentSword = item
                    this.$emit('equipSword', item)
                    return
                }
                // blueCandle is the only item implemented that equips to secondary slot
                if (!currentSecondaryItem && item.name === 'blueCandle') {
                    this.playerState.currentSecondaryItem = item.name
                    this.$emit('equipSecondaryItem', item)
                    return
                }
                if (item.name === 'greenRaft') {
                    this.$emit('updateObjectives', 15)
                }
                if (item.name === 'dungeonTriforce') {
                    this.$emit('updateObjectives', 19)
                    // console.log('picking up triforce')
                    // this.animateItemAcquisition(item)
                    // return
                }
            },
            // animateItemAcquisition(item) {
            //     // `link_${currentAction}_${currentDirection}_${color}_${animationIndex}`
            //     console.log('animating: ', item)
            //
            //     setTimeout(() => {
            //         this.playerState.animationIndex = 1
            //         this.playerState.currentAction = 'celebrating'
            //         item.coordinates = {x: this.playerState.coordinates.x, y: this.playerState.coordinates.y - 1}
            //         console.log(this.playerState.coordinates)
            //         // item.coordinates = {x: -100, y: -100}
            //     }, 100)
            // },
            animateAttack() {
                // attacks are only animated for now because there are no mobs
                this.playerState.currentAction = 'attacking'
                this.playerState.animationIndex = 0
                setTimeout(() => this.playerState.animationIndex = 1, 100)
                this.playerState.animationIndex = 0
                setTimeout(() => this.playerState.currentAction = 'walking', 250)
            },
            getPlayerSpriteName() {
                // file name was too complicated to have in html
                const { currentAction, currentDirection, color, animationIndex } = this.playerState

                if (currentAction === 'celebrating') return `link_${currentAction}_${color}_${animationIndex}`
                return `link_${currentAction}_${currentDirection}_${color}_${animationIndex}`
            },
        },
        computed: {
            player_style() {
                if (this.playerState.onARaft === true) return {visibility: 'hidden'}
                return {
                    visibility: 'visible',
                    top: `${this.playerState.coordinates.y * 4}rem`,
                    left: `${this.playerState.coordinates.x * 4}rem`
                }
            },
            raft_style() {
                return {
                    top: `${this.playerState.coordinates.y * 4}rem`,
                    left: `${this.playerState.coordinates.x * 4}rem`
                }
            }
        }
    }
</script>

<style>
    .player-img {
        position: absolute;
        height: 4rem;
        z-index: 2;
    }

    .player-img.attacking.down.animation-1 {
        width: 4.25rem;
        height: 7.1rem;
    }

    .player-img.attacking.up.animation-1 {
        width: 4rem;
        height: 7rem;
        transform: translateY(-3rem);
    }

    .player-img.attacking.left.animation-1 {
        width: 7rem;
        transform: translateX(-3rem);
    }

    .raft-img {
        position: absolute;
        height: 4rem;
        z-index: 1;
    }

    .player-raft-enter-to {
        transform: translateY(-16rem);
    }

    .player-raft-enter-active {
        transition: all 1.5s linear;
    }
</style>
