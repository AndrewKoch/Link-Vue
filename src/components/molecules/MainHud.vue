<template>
    <div id="main-hud">
        <div class="radar-place-holder" />
        <currency-hud :current-rupees="capturedPlayerEvents.currentRupees" />
        <div class="weapon-hud">
            <secondary-hud :current-secondary-item="capturedPlayerEvents.currentSecondaryItem" />
            <primary-hud :current-sword="capturedPlayerEvents.currentSword" />
        </div>
        <life-hud />
    </div>
</template>

<script>
    import CurrencyHud from "@/components/atoms/CurrencyHud"
    import LifeHud from "@/components/atoms/LifeHud"
    import PrimaryHud from "@/components/atoms/PrimaryHud"
    import SecondaryHud from "@/components/atoms/SecondaryHud"

    export default {

        name: 'main-hud',
        components: { CurrencyHud, PrimaryHud, SecondaryHud, LifeHud },
        props: {
            capturedPlayerEvents: Object,
        },
        methods: {
            handleVirtualKeyClick(character, action, newDirection) {
                this.$emit('handleEvent', character, action, newDirection)
            }
        }
    }
</script>

<style>
    #main-hud {
        background-color: black;
        height: 26.2%;
        width: 100%;
        margin: 0;
    }

    .radar-place-holder {
        float: left;
        height: 66%;
        width: 29%;
        margin-top: 5%;
        margin-left: 1%;
        background-color: gray;
    }
</style>
