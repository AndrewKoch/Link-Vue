<template>
    <div id="dungeon" class="map-container">
        <img
                :class="['dungeon-border-img', 'map-border']"
                :src="require(`@/assets/sprites/overworld/${currentScreen.border}.png`)"
        >
        <img
                v-for="(door, index) in currentScreen.doors"
                :key="index"
                :class="['dungeon-door', index]"
                :src="require(`@/assets/sprites/overworld/${door}_${index}.png`)"
        >
        <img
                v-for="(tile, index) in currentScreen.overworld"
                :key="index"
                :class="tile.name"
                class="dungeon-tile-img"
                :src="require(`@/assets/sprites/overworld/${tile.name}.png`)"
                :style="getCssLocationByCoordinates(tile.coordinates)"
        >
    </div>
</template>

<script>
    export default {
        name: 'dungeon',
        props: {
            currentScreen: Object
        },
        methods: {
            getCssLocationByCoordinates(coordinates) {
                return {left: `${coordinates.x * 4}rem`, top: `${coordinates.y * 4}rem`}
            }
        }
    }
</script>

<style>
    .dungeon-tile-img {
        position: absolute;
        height: 4rem;
    }

    .dungeon-border-img {
        height: 100%;
        z-index: -2;
    }

    .dungeon-door.top {
        position: absolute;
        height: 8rem;
        left: 28rem;
        top: 16rem;
    }

    .dungeon-door.right {
        position: absolute;
        height: 8rem;
        left: 56rem;
        top: 34rem;
    }

    .dungeon-door.bottom {
        position: absolute;
        height: 8rem;
        left: 28rem;
        top: 52rem;
    }

    .dungeon-door.left {
        position: absolute;
        height: 8rem;
        left: 0rem;
        top: 34rem;
    }
</style>
