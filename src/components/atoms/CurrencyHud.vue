<template>
    <div id="currency-hud">
        <div :class="['currency-hud-container', 'rupee-hud-container']">
            <img :class="['rupee-hud-img', 'currency-hud-img']" :src="require(`@/assets/sprites/items/rupeeHud.png`)">
            <p :class="['rupee-hud-value', 'currency-hud-value']">{{ (currentRupees >= 100) ? currentRupees: `X${currentRupees}` }}</p>
        </div>
        <div :class="['currency-hud-container', 'key-hud-container']">
            <img :class="['key-hud-img', 'currency-hud-img']" :src="require(`@/assets/sprites/items/keyHud.png`)">
            <p :class="['key-hud-value', 'currency-hud-value']">X0</p>
        </div>
        <div :class="['currency-hud-container', 'bomb-hud-container']">
            <img :class="['bomb-hud-img', 'currency-hud-img']" :src="require(`@/assets/sprites/items/bombHud.png`)">
            <p :class="['bomb-hud-value', 'currency-hud-value']">X0</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'currency-hud',
        props: {
            currentRupees: Number
        }
    }
</script>

<style>
    #currency-hud {
        float: left;
        width: 19%;
        margin-top: 5%;
        margin-left: 2%
    }

    .rupee-hud-container {
        margin-bottom: 25%;
    }

    .currency-hud-container {
        display: flex;
        position: relative;
        width: 100%;
    }

    .currency-hud-img {
        float: left;
        height: 2.5rem;
    }

    .currency-hud-value {
        float: left;
        margin: 0;
        font-size: 2.5rem;
        color: white;
    }
</style>
