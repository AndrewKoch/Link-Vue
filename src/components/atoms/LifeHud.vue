<template>
    <div id="life-hud">
        <h3 class="life-hud-title"> -LIFE- </h3>
        <div class="heart-container">
            <img
                    v-for="(heart, index) in items"
                    :key="index"
                    class="heart-img"
                    :src="require(`@/assets/sprites/items/${heart.name}.png`)"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'life-hud',
        data() {
            return {
                items: [
                    {name: "heart"},
                    {name: "heart"},
                    {name: "heart"},
                    {name: "heart"},
                    {name: "heart"},
                    {name: "halfHeart"},
                    {name: "emptyHeart"},
                    {name: "emptyHeart"},
                    {name: "emptyHeart"}
                ]
            }
        }
    }
</script>

<style>
    #life-hud {
        float: left;
        width: 29%;
        height: 75%;
        padding-top: 5%;
    }

    .life-hud-title {
        font-family: PressStart2P-Regular;
        font-size: 2rem;
        color: darkred;
    }

    .heart-container {
        position: relative;
        height: 25%;
    }

    .heart-img {
        height: 65%;
        margin: .5%;
    }
</style>
