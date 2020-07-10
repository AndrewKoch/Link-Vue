<template>
    <div id="cave" class="map-container">
        <div class="cave-container-outer">
            <img
                    :class="['cave-border-img', 'map-border']"
                    :src="require(`@/assets/sprites/overworld/${currentScreen.border}.png`)"
            >
            <h3 class="cave-dialog">{{ currentScreen.caveText }}</h3>
        </div>
        <img
                v-for="(tile, index) in currentScreen.overworld"
                :key="index"
                :class="tile.name"
                class="cave-tile-img"
                :src="require(`@/assets/sprites/overworld/${tile.name}.png`)"
                :style="getCssLocationByCoordinates(tile.coordinates)"
        >
        <div v-if="currentScreen.mapType === 'shop'" class="shop-container">
            <div class="price-row">
                <div class="rupee-container">
                    <img class="rupee-img" :src="require('@/assets/sprites/items/blueRupee.png')" />
                    <p class="rupee-text">X</p>
                </div>
                <div
                        v-for="(item, index) in currentScreen.items"
                        :key="index"
                        class="shop-item-container"
                        :style="!itemMeta[item.name].isAvailable ? toggleCssVisibility() : ''"
                >
                    <img
                            :class="['shop-item-img', item.name]"
                            :src="require(`@/assets/sprites/items/${item.name}.png`)"
                    />
                    <p
                            class="item-cost"
                    >
                        {{ item.cost }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const mapBoundaries = {
        min: {x: 2, y: 6},
        max: {x: 13, y: 14}
    }

    // TODO this could be initialized just like mapBoundaries
    // const startCoordinates = {x: 8, y: 13}

    export default {
        name: 'cave',
        props: {
            currentScreen: Object,
            itemMeta: Object
        },
        created() {
            this.$emit('initializeMapBoundaries', mapBoundaries)
        },
        methods: {
            getCssLocationByCoordinates(coordinates) {
                return {left: `${coordinates.x * 4}rem`, top: `${coordinates.y * 4}rem`}
            },
            toggleCssVisibility() {
                return {visibility: 'hidden'}
            }
        }
    }
</script>

<style>
    .cave-container-outer {
        position: relative;
        height: 100%;
    }

    .cave-dialog {
        position: absolute;
        width: 45%;
        margin-top: -54%;
        margin-left: 27%;
        font-family: PressStart2P-Regular;
        font-size: 2rem;
        color: white;
    }

    .cave-border-img {
        height: 100%;
        z-index: -2;
    }

    .cave-tile-img {
        position: absolute;
        height: 4rem;
    }

    .shop-container {
        height: 30%;
        font-family: PressStart2P-Regular, sans-serif;
        font-size: 2rem;
        margin-top: -32%;
        margin-left: 16.2%;
    }

    .price-row {
        position: relative;
        display: flex;
    }

    .shop-item-container {
        position: relative;
        margin: 0 3.5%;
    }

    .item-cost {
        color: white;
        padding: 3.1% 3.2%;
        vertical-align: center;
    }

    .rupee-container {
        margin: 2.25%;
        color: white;
        display: flex;
        height: 25%;
    }

    .rupee-text {
        padding-left: 20%;
        margin-bottom: 0;
    }

    .rupee-img {
        height: 4rem;
        padding-top: 17.5%;
    }

    .shop-item-img {
        height: 4rem;
    }

    .shop-item-img.blueRing {
        height: 2rem;
        padding: 1rem 0;
    }
</style>
