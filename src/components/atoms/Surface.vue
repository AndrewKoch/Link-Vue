<template>
    <div id="surface" class="map-container">
        <div v-for="(tile, index) in currentScreen.overworld" :key="index" class="overworld-tile-container">
            <div
                    v-if="tile.name === 'overworld_cave_door'"
                    :class="['overworld-tile-img', 'overworld-cave-door']"
                    :style="getCssLocationByCoordinates(tile.coordinates)"
            />

            <img    v-else
                    :class="['overworld-tile-img', tile.name]"
                    :src="require(`@/assets/sprites/overworld/${tile.name}.png`)"
                    :style="getCssLocationByCoordinates(tile.coordinates)"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'surface',
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
    #surface {
        background-color: #FFFACD;
        width: 64.02rem;
    }

    .overworld-tile-img {
        position: absolute;
        height: 4rem;
    }

    .overworld-cave-door {
        position: absolute;
        height: 4rem;
        width: 4rem;
        background-color: black;
    }

    .overworld-tile-img.boulder {
        z-index: -1;
    }

    .overworld-tile-img.bush {
        z-index: -1;
    }

    .overworld-tile-img.brown_bridge {
        z-index: 1;
    }

</style>
