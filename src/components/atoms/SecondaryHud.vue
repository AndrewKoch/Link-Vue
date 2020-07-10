<template>
    <div id="secondary-hud">
        <div class="secondary-hud-outer">
            <img
                    :class="['secondary-hud-img', 'secondarySlot']"
                    :src="require(`@/assets/sprites/items/secondarySlot.png`)"
            >
            <div class="secondary-hud-inner">
                <img
                        :class="['secondary-hud-img', 'secondaryItem']"
                        :src="currentSecondaryItem ? require(`@/assets/sprites/items/${currentSecondaryItem}.png`) : ''"
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'secondary-container',
        props: {
            currentSecondaryItem: String
        }
    }
</script>

<style>
    #secondary-hud {
        float: left;
        width: 10%;
        height: 100%;
    }

    .secondary-hud-outer {
        position: relative;
        margin-top: 50%;
    }

    div.secondary-hud-inner {
        position: absolute;
        height: 60%;
        margin-top: -110%;
        margin-left: 28%;
    }

    .secondary-hud-img.secondaryItem {
        height: 100%;
    }
</style>
