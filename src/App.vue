<template>
    <div id="app">
        <link-map />
    </div>
</template>

<script>
import LinkMap from "./components/organisms/LinkMap"

export default {
    name: 'App',
        components: {
            LinkMap,
        }
}
</script>

<style>
    body {
        background-color: black;
        overflow: hidden;
    }

    @font-face {
        font-family: PressStart2P-Regular;
        src: url('./assets/fonts/PressStart2P-Regular.ttf')
    }

    #app {
        box-sizing: border-box;

        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>
