<template>
    <div id="virtual-keyboard">
        <div :class="['top-row', 'keyboard_row']">
            <img
                    v-for="(virtualKey, index) in keyboard.secondary_keys"
                    :key="index"
                    :class="['virtual-key-img', virtualKey.name,  {active: virtualKey.isActive}]"
                    v-on:click="handleClick(virtualKey)"
                    :src="require(`@/assets/sprites/items/virtualKeyboard/${virtualKey.name}.png`)"
            >
        </div>
        <div :class="['middle-row', 'keyboard_row']">
            <img
                    v-for="(virtualKey, index) in keyboard.primary_keys"
                    :key="index"
                    :class="['virtual-key-img', virtualKey.name,  {active: virtualKey.isActive}]"
                    v-on:click="handleClick(virtualKey)"
                    :src="require(`@/assets/sprites/items/virtualKeyboard/${virtualKey.name}.png`)"
            >
        </div>
        <div :class="['bottom-row', 'keyboard_row']">
            <img
                    v-for="(virtualKey, index) in keyboard.arrow_keys"
                    :key="index"
                    :class="['virtual-key-img', virtualKey.name,  {active: virtualKey.isActive}]"
                    v-on:click="handleClick(virtualKey)"
                    :src="require(`@/assets/sprites/items/virtualKeyboard/${virtualKey.name}.png`)"
            >
        </div>

    </div>
</template>

<script>
    export default {
        name: 'virtual-keyboard',
        data() {
            return {
                keyboard: {
                    arrow_keys: [
                        {name: 'left', action: 'move', isActive: false},
                        {name: 'right', action: 'move', isActive: false},
                        {name: 'up', action: 'move', isActive: false},
                        {name: 'down', action: 'move', isActive: false}
                    ],
                    primary_keys: [
                        {name: 'spacebar', action: 'attack', isActive: false},
                    ],
                    secondary_keys: [
                        {name: 'ctrl', action: 'useSecondary', isActive: false}
                    ]
                }
            }
        },
        methods: {
            /**
             * This emits to the MainHud which is then emitted to LinkMap. LinkMap then updates Player.
             * The Player component expects a target character, action, and direction (direction is an optional
             * parameter).
             * @param keyClick
             */
            handleClick(keyClick) {
                this.animateKeyClick(keyClick)
                this.$emit('handleVirtualKeyClick', 'player', keyClick.action, keyClick.name)
            },
            animateKeyClick(keyClick) {
                Object.entries(this.keyboard).forEach((keyType) => {
                    for (const key of keyType) {
                        if (key.name === keyClick) key.isActive = true
                    }
                })
            }
        }
    }
</script>

<style>
    #virtual-keyboard {
        float: left;
        width: 25%;
        height: 25%;
        padding-left: .5%;
        margin-top: 2%;
    }

    .keyboard_row {
        height: 30%;
    }
    .virtual-key-img {
        position: relative;
        height: 90%;
        padding: 0 1%;
    }

    .virtual-key-img:active {
        height: 77%;
        opacity: .75;
    }
</style>
