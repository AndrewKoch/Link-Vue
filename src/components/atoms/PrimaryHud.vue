<template>
    <div id="primary-hud">
        <div class="primary-hud-outer">
            <img
                    :class="['primary-hud-img', 'primarySlot']"
                    :src="require(`@/assets/sprites/items/primarySlot.png`)"
            >
            <div class="primary-hud-inner">
                <img
                        :class="['primary-hud-img', 'sword']"
                        :src="currentSword ? require(`@/assets/sprites/items/${currentSword}.png`) : ''"
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'primary-hud',
        props: {
            currentSword: String
        },
        data() {
            return {
                items: [
                    {name: "primarySlot"},
                    {name: "sword"}
                ]
            }
        }
    }
</script>

<style>
    #primary-hud {
        float: left;
        width: 10%;
        height: 100%;
    }

    .primary-hud-outer {
        position: relative;
        margin-top: 50%;
    }

    div.primary-hud-inner {
        position: absolute;
        height: 60%;
        margin-top: -110%;
        margin-left: 28%;
    }

    .primary-hud-img.sword {
        height: 100%;
    }
</style>
