<template>
    <div id="player-fire-container">
        <transition name="fire" class="fire-transition">
            <img
                v-if="isActive"
                :class="['player-fire-img', playerDirection]"
                :src="require(`@/assets/sprites/items/fire${animationIndex}.png`)"
                :style="fire_style"
            >
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'player-fire',
        props: {
            /**
             * Push to this array every time you want to animate fire.
             * Must use with .sync
             * @type {{x: number, y: number, direction: 'right' | 'left' | 'up' | 'down'}[]}
             */
            triggeredOnCoordinatesArray: { type: Array, required: true },
        },
        watch: {
            triggeredOnCoordinatesArray (newEventArray) {
                this.animateEvent(newEventArray)
            },
        },
        data () {
            return {
                playerDirection: '',
                isActive: false,
                coordinates: {x: -100, y: -100},
                animationIndex: 0,
            }
        },
        computed: {
            fire_style() {
                return {
                    top: `${this.coordinates.y * 4}rem`,
                    left: `${this.coordinates.x * 4}rem`
                }
            }
        },
        methods: {
            animateEvent (newEventArray) {
                if (!newEventArray.length) return
                if (!this.isActive) {
                    newEventArray.forEach((coordinates) => {
                        this.animateFire(coordinates)
                    })
                }
                this.$emit('update:triggeredOnCoordinatesArray', [])
            },
            /**
             * order of operations:
             * 1. change character animation to attacking-0
             * 2. determine destination coordinates for fire
             * 3. determine if fire is going to trigger a secret
             * 4. animate the fire
             * 5. resolve the secret when fire is complete
             */
            animateFire (coordinates) {
                const { x, y, direction } = coordinates
                // cycle player animation
                this.$emit('startAnimateFire')
                this.playerDirection = direction
                this.isActive = true
                let fireCoordinates = this.translateFireCoordinatesForDirection(direction, {x: x, y: y})
                this.coordinates.x = fireCoordinates.x
                this.coordinates.y = fireCoordinates.y

                // animate the fire
                for (let i = 100; i <= 2000; i += 100) {
                    setTimeout(() => this.animationIndex = (i % 200 / 100), i)
                }
                setTimeout(() => this.isActive = false, 2000)
                setTimeout(() =>  this.coordinates = {x: -100, y: -100}, 2100)
            },
            translateFireCoordinatesForDirection(direction, coordinates) {
                let fireCoordinates

                if (direction === 'right') fireCoordinates = {x: coordinates.x + 2, y: coordinates.y}
                else if (direction === 'left') fireCoordinates = {x: coordinates.x - 2, y: coordinates.y}
                else if (direction === 'up')fireCoordinates = {x: coordinates.x, y: coordinates.y - 2}
                else if (direction === 'down')fireCoordinates = {x: coordinates.x, y: coordinates.y + 2}
                return fireCoordinates
            }
        },
    }
</script>

<style>
    .player-fire-img {
        position: absolute;
        height: 4rem;
    }

    .fire-enter.right {
        transform: translateX(-5rem);
    }

    .fire-enter.left {
        transform: translateX(5rem);
    }

    .fire-enter.up {
        transform: translateY(5rem);
    }

    .fire-enter.down {
        transform: translateY(-5rem);
    }

    .fire-enter-active {
        transition: all 1s ease;
    }

    .fire-leave-active {
        transition: all 2s linear;
    }

    .fire-leave-to {
        display: none;
    }
</style>
