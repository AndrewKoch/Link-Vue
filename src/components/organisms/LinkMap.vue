<template>
    <div
        id="link-map"
        v-focus tabindex="0"
        v-on:keyup.arrow-right="handleEvent('player', 'move', 'right')"
        v-on:keyup.arrow-left="handleEvent('player', 'move', 'left')"
        v-on:keyup.arrow-down="handleEvent('player', 'move', 'down')"
        v-on:keyup.arrow-up="handleEvent('player', 'move', 'up')"
        v-on:keyup.space="handleEvent('player', 'attack' )"
        v-on:keydown.ctrl="handleEvent('player', 'useSecondary')"
    >
        <player
                ref="playerEvent"
                :game-state="gameState"
                :item-meta="itemMeta"
                @equipSecondaryItem="equipSecondaryItem"
                @equipSword="equipSword"
                @triggerNewMapLoad="triggerNewMapLoad"
                @updateRupees="updateRupees"
                @updateObjectives="updateObjectives"
        />
        <div class="game-container">
            <main-hud
                    :captured-player-events="capturedPlayerEvents"
                    @handleEvent="handleEvent"
            />
            <overworld
                    ref="overworldEvent"
                    :current-screen="gameState.currentScreen"
                    :item-meta="itemMeta"
                    @loadNewMap="loadNewMap"
            />
        </div>
        <virtual-keyboard @handleVirtualKeyClick="handleEvent" />
        <objective-sidebar
                :objectives="objectives"
                :active-objective="activeObjective"
        />
        <div v-if="gameState.currentScreen.mapType !== 'shop'" class="item-container">
            <img
                    v-for="(item, index) in gameState.currentScreen.items"
                    :key="index"
                    :class="['item-img', item.name]"
                    :src="require(`@/assets/sprites/items/${item.name}.png`)"
                    :style="getCssLocationByCoordinates(item.coordinates)"
            />
        </div>
        <div class="magic-container">
            <player-fire
                    ref="playerFire"
                    @startAnimateFire="startAnimateFire"
                    :triggeredOnCoordinatesArray.sync="triggeredOnCoordinatesArray"
            />
        </div>
    </div>
</template>

<script>
    import MainHud from "../molecules/MainHud"
    import ObjectiveSidebar from "../atoms/ObjectiveSidebar"
    import Overworld from "../molecules/Overworld"
    import Player from "../molecules/Player"
    import PlayerFire from "../atoms/PlayerFire"
    import VirtualKeyboard from "../atoms/VirtualKeyboard"

    // map2_0 is the starting map, hence we import, declare as current screen, and import related items
    import map2_0 from '../../assets/mapScreens/2_0'

    const getItemMetaDefaults = () => ({
        isAvailable: true
    })
    export default {
        name: 'link-map',
        components: {VirtualKeyboard, MainHud, ObjectiveSidebar, Overworld, Player, PlayerFire },
        data() {
            return {
                itemMeta: Object.assign(
                    {},
                    map2_0.items.reduce((carry, item) => ({...carry, [item.name]: getItemMetaDefaults() }), {}),
                ),
                capturedPlayerEvents: {
                    currentSword: null,
                    currentSecondaryItem: null,
                    currentRupees: 0
                },
                gameState: {
                    currentScreen: map2_0,
                },
                triggeredOnCoordinatesArray: [],
                activeObjective: 0,
                objectives: [
                    {
                        text: "Use the keyboard arrows to move your character. You can also click the virtual " +
                            "keyboard in the top left!",
                    },
                    {
                        text: "Every hero needs a sword! Using your new found mobility, move the character to the " +
                            "cave door found on the current screen.",
                    },
                    {
                        text: "Step forward and collect the Green Sword from the Old Man.",
                    },
                    {
                        text: "Give the sword a try! Press spacebar to attack in whatever direction you " +
                            "are currently facing.",
                    },
                    {
                        text: "Now that you can defend yourself, leave the cave and venture deeper into the world. " +
                            "Explore and see what the world brings you! Try moving beyond the edge of your current " +
                            "map screen.",
                    },
                    // objective index 5
                    {
                        text: "During your exploration, try to find the Blue Candle. It can cast a magical fire we " +
                            "will need for the journey ahead. There may be a shop nearby...",
                    },
                    {
                        text: "Hey! It's the Blue Candle! And it's only 50 rupees! What a steal! Too bad you're " +
                            "broke... Legend has it there is a retired monster to the southwest offering a reward to " +
                            "those that can find him.",
                    },
                    {
                        text: "You found him! Go collect your reward!",
                    },
                    {
                        text: "Return to the shop and see if the Blue Candle is still available. We are so close to " +
                            "wielding ancient magic!",
                    },
                    {
                        text: "Press the control key to cast a roaring fire in the direction you are currently " +
                            "facing. If you listen closely, you can hear the fear of your foes in the distance.",
                    },
                    // objective index 10
                    {
                        text: "You're a wizard Harry! Maybe you noticed some strange looking bushes during your" +
                            "journey thus far? Maybe those bushes are... flammable?",
                    },
                    {
                        text: "You uncovered a secret cave! Let's go check it out. Maybe there is something " +
                            "interesting inside!",
                    },
                    {
                        text: "It's another retired monster! Or... maybe that's too assumptive? Anyways, the free " +
                            "rupees are a kind gesture and you should go claim your reward!",
                    },
                    {
                        text: "Weren't there some other interesting things in the shop? I wonder what else we could " +
                            "buy? The game designers must have put the other items in the game for a reason! Right? " +
                            ";) Explore the world and look for more secrets. There might be a way to buy something " +
                            "awesome like the Blue Ring or Green Raft!",
                    },
                    {
                        text: "That is a pretty sweet chunk of change! It might be time to go back to the shop and " +
                            "see if we can advance the plot a little!",
                    },
                    // objective index 15
                    {
                        text: "Oh look! You can totally afford that raft. You should buy it so we can sing that " +
                            "Lonely Island song together.",
                    },
                    {
                        text: "Ayyyy! You've got a raft! You are no longer limited to the 29% of the planet NOT " +
                            "covered in water! Anchors Aweigh! Now let's find a dock!",
                    },
                    {
                        text: "Hmmm... this dock looks interesting. Maybe I need an item to use it? Like a boat or a" +
                            "raft... Oh wait! We have a raft! Moor up and set sail for open waters!",
                    },
                    {
                        text: "Woah... I don't feel so good. That was a wild ride. It's amazing what you can do " +
                            "with CSS huh? I guess we should go check out that dungeon?",
                    },
                    {
                        text: "Wow, this place looks familiar. I recognize it from my childhood. Uh... go get the " +
                            "triforce!",
                    },
                    {
                        text: "That's it! That's all the game! Thanks for playing!",
                    },
                ]
            }
        },
        methods: {
            animatePlayerAttack () {
                this.$set(this.capturedPlayerEvents, 'currentAction', 'attacking')
                this.$set(this.capturedPlayerEvents, 'animationIndex', 0)
            },
            animatePlayerWalk () {
                this.$set(this.capturedPlayerEvents, 'currentAction', 'walking')
                this.$set(this.capturedPlayerEvents, 'animationIndex', 0)
            },
            startAnimateFire () {
                this.animatePlayerAttack()
                setTimeout(() => {
                    this.animatePlayerWalk()
                }, 100)
                this.updateObjectives(9)

            },
            handleEvent(character, action, newDirection) {
                if (action === 'attack' && this.capturedPlayerEvents.currentSword) {
                    this.updateObjectives(3)
                    const isAttacking = (this.$refs.playerEvent.playerState.currentAction === 'attacking')
                    if (!isAttacking) this.$refs.playerEvent.animateAttack()
                } else if (action === 'useSecondary') this.handleSecondaryAttack()
                else if (action === 'move') {
                    this.updateObjectives(0)
                    this.$refs.playerEvent.handleMove(newDirection)
                }
            },
            updateObjectives(completeObjective) {
                if (completeObjective === this.activeObjective) {
                    this.objectives[completeObjective].progress = true
                    this.activeObjective += 1
                }
            },
            equipSword(sword) {
                this.capturedPlayerEvents.currentSword = sword.name
                this.updateObjectives(2)
            },
            equipSecondaryItem(item) {
                this.capturedPlayerEvents.currentSecondaryItem = item.name
                this.objectives[5].progress = true
            },
            updateRupees(item) {
                if (item.name.includes('Rupee')) {
                    this.capturedPlayerEvents.currentRupees += 50

                    if (this.capturedPlayerEvents.currentRupees === 50 && this.activeObjective === 7) this.updateObjectives(7)
                    else if (this.activeObjective === 12) this.updateObjectives(12)
                    else if (this.capturedPlayerEvents.currentRupees === 200) this.updateObjectives(13)
                }
                else this.capturedPlayerEvents.currentRupees -= item.cost

            },
            handleSecondaryAttack() {
                // we spit hot fire if blueCandle is equipped
                const { currentDirection: direction, currentSecondaryItem, coordinates } = this.$refs.playerEvent.playerState

                if (currentSecondaryItem === 'blueCandle') {
                    this.triggeredOnCoordinatesArray.push({ ...coordinates, direction })
                    let fireCoordinates = this.$refs.playerFire.translateFireCoordinatesForDirection(
                        direction,
                        coordinates
                    )
                    this.checkForSecretTile(fireCoordinates)
                }
            },
            checkForSecretTile (coordinates) {
                const {x, y} = coordinates
                if (this.capturedPlayerEvents.currentSecondaryItem === 'blueCandle') {
                    // if tile has secret, handle it
                    let secretTile
                    for (const tile of this.gameState.currentScreen.overworld) {
                        console.log('tile: ', tile)
                        if (tile.coordinates.x === x && tile.coordinates.y === y) {
                            if (tile.secret) {
                                secretTile = tile
                                setTimeout(() => tile.name = secretTile.secret, 2100)
                                if (tile.name === 'red_bush') this.updateObjectives(10)
                                continue
                            }
                        }
                    }
                }
            },
            triggerNewMapLoad(newMapDirection) {
                this.$refs.overworldEvent.loadNewMap(newMapDirection)
            },
            loadNewMap(newMap) {
                if (newMap.name === 'cave1') this.updateObjectives(1)
                else if (['1_0', '2_1', '3_0'].includes(newMap.name)) this.updateObjectives(4)
                else if (newMap.name === 'cave2' && this.activeObjective === 5) this.updateObjectives(5)
                else if (newMap.name === 'cave3') this.updateObjectives(6)
                else if (newMap.name === 'cave2' && this.activeObjective === 8) this.updateObjectives(8)
                else if (['cave4', 'cave5', 'cave6', 'cave7'].includes(newMap.name)) this.updateObjectives(11)
                else if (newMap.name === 'cave2' && this.activeObjective === 14) this.updateObjectives(14)
                // 15 emits from items
                else if (newMap.name === '0_2') this.updateObjectives(16)
                else if (newMap.name === '0_3') this.updateObjectives(17)
                else if (newMap.name === 'dungeon1_0_0') this.updateObjectives(18)

                // load the new map
                this.gameState.currentScreen = newMap

                // load items on new map to itemMeta
                let areItemsAlreadyLoaded = false
                Object.entries(this.itemMeta).forEach(([key, value]) => {
                    newMap.items.forEach((item) => {
                        if (item.name=== key) areItemsAlreadyLoaded = true
                    })
                })
                if (!areItemsAlreadyLoaded) {
                    Object.assign(
                        this.itemMeta,
                        newMap.items.reduce((carry, item) => ({...carry, [item.name]: getItemMetaDefaults() }), {})
                    )
                }

            },
            getCssLocationByCoordinates(coordinates) {
                return {left: `${coordinates.x * 4}rem`, top: `${coordinates.y * 4}rem`}
            }
        },
        directives: {
            focus: {
                inserted(viewableScreen) {
                    viewableScreen.focus()
                }
            }
        }
    }
</script>

<style scoped>
    #link-map {
        font-family: PressStart2P-Regular;
        display: inline-block;
        position: relative;
        outline: none;
        height: 61rem;
        width: 86rem;
    }

    .game-container {
        float: left;
        height: 100%;
    }

    /*.item-img.blueCandle {*/
    /*    position: absolute;*/
    /*    !*padding: 1rem;*!*/
    /*    height: 4rem;*/
    /*}*/

    .item-img.powerBracelet {
        position: absolute;
        padding: 1rem;
        height: 2.5rem;
        z-index: -1;
    }

    .item-img.blueRing {
        position: absolute;
        padding: 1.5rem;
        height: 2rem;
    }

    /*.item-img.greenRaft {*/
    /*    position: absolute;*/
    /*    height: 4rem;*/
    /*}*/

    .item-img.greenSword {
        position: absolute;
        padding: 1rem;
        height: 4rem;
    }

    .item-img.redLetter {
        position: absolute;
        padding: 0 1rem;
        height: 4rem;
    }

    .item-img.dungeonTriforce {
        position: absolute;
        height: 5rem;
        transform: translate(-.5rem, -.5rem);
    }

    .item-img.blueRupee {
        position: absolute;
        height: 4rem;
        width: 2.5rem;
    }
</style>
