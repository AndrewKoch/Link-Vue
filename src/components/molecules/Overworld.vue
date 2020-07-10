<template>
    <div id="overworld" class="overworld-container">
        <surface
                v-if="currentScreen.mapType === 'surface'"
                :current-screen.sync="currentScreen"
        />
        <dungeon
                v-else-if="currentScreen.mapType === 'dungeon'"
                :current-screen.sync="currentScreen"
        />
        <cave
                v-else-if="currentScreen.mapType === 'cave' || currentScreen.mapType === 'shop'"
                :item-meta="itemMeta"
                :current-screen.sync="currentScreen"
                @initializeMapBoundaries="initializeMapBoundaries"
        />
    </div>
</template>

<script>
    import Surface from "@/components/atoms/Surface"
    import Dungeon from "@/components/atoms/Dungeon"
    import Cave from "@/components/atoms/Cave"

    import map0_0 from "@/assets/mapScreens/0_0"
    import map0_1 from "@/assets/mapScreens/0_1"
    import map0_2 from "@/assets/mapScreens/0_2"
    import map0_3 from "@/assets/mapScreens/0_3"
    import map1_0 from "@/assets/mapScreens/1_0"
    import map1_1 from "@/assets/mapScreens/1_1"
    import map1_2 from "@/assets/mapScreens/1_2"
    import map1_3 from "@/assets/mapScreens/1_3"
    import map2_0 from "@/assets/mapScreens/2_0"
    import map2_1 from "@/assets/mapScreens/2_1"
    import map2_2 from "@/assets/mapScreens/2_2"
    import map2_3 from "@/assets/mapScreens/2_3"
    import map2_4 from "@/assets/mapScreens/2_4"
    import map3_0 from "@/assets/mapScreens/3_0"
    import map3_1 from "@/assets/mapScreens/3_1"
    import map3_2 from "@/assets/mapScreens/3_2"
    import map3_3 from "@/assets/mapScreens/3_3"
    import map3_4 from "@/assets/mapScreens/3_4"
    import map3_5 from "@/assets/mapScreens/3_5"

    import caveMap1 from "@/assets/mapScreens/cave1"
    import caveMap2 from "@/assets/mapScreens/cave2"
    import caveMap3 from "@/assets/mapScreens/cave3"
    import caveMap4 from "@/assets/mapScreens/cave4"
    import caveMap5 from "@/assets/mapScreens/cave5"
    import caveMap6 from "@/assets/mapScreens/cave6"
    import caveMap7 from "@/assets/mapScreens/cave7"

    import dungeonMap1_0_0 from "@/assets/mapScreens/dungeon1_0_0"

    export default {
        name: 'overworld',
        components: { Surface, Dungeon, Cave },
        props: {
            currentScreen: Object,
            itemMeta: Object
        },
        data() {
            return {
                adjacentMaps: {
                    "0_0": {up: map0_1, right: map1_0, cave: caveMap3},
                    "0_1": {up: map0_2, right: map1_1, down: map0_0},
                    "0_2": {up: map0_3, right: map1_2, down: map0_1},
                    "0_3": {down: map0_2, dungeon: dungeonMap1_0_0},
                    "1_0": {left: map0_0, up: map1_1, right: map2_0},
                    "1_1": {left: map0_1, down: map1_0, right: map2_1, cave: caveMap2},
                    "1_2": {left: map0_2, up: map1_3, right: map2_2, cave: caveMap6},
                    "1_3": {down: map1_2, right: map2_3},
                    "2_0": {left: map1_0, right: map3_0, up: map2_1, cave: caveMap1},
                    "2_1": {left: map1_1, right: map3_1, down: map2_0},
                    "2_2": {left: map1_2, right: map3_2, dungeon: dungeonMap1_0_0},
                    "2_3": {left: map1_3, right: map3_3},
                    "2_4": {left: map2_3, right: map3_4, cave: caveMap4},
                    "3_0": {left: map2_0, up: map3_1, dungeon: dungeonMap1_0_0},
                    "3_1": {left: map2_1, up: map3_2, down: map3_0},
                    "3_2": {left: map2_2, up: map3_3, down: map3_1},
                    "3_3": {left: map2_3, up: map3_4, down: map3_2, cave: caveMap5},
                    "3_4": {left: map2_4, down: map3_3, up: map3_5},
                    "3_5": {down: map3_4, cave: caveMap7},
                    "dungeon1_0_0": {door: map0_3},
                    "cave1": {door: map2_0},
                    "cave2": {door: map1_1},
                    "cave3": {door: map0_0},
                    "cave4": {door: map2_4},
                    "cave5": {door: map3_3},
                    "cave6": {door: map1_2},
                    "cave7": {door: map3_5}
                }
            }
        },
        methods: {
            /**
             * This is the map loader
             *
             * Order of Operations
             * 1. Player.checkMoveForNewMap emits direction of new map to LinkMap.triggerNewMapLoad
             * 2. LinkMap calls Overworld.loadNewMap
             * 3. Overworld.loadNewMap changes local data to load new map
             */
            loadNewMap(newMap) {
                this.$emit('loadNewMap', this.adjacentMaps[this.currentScreen.name][newMap])
            },
            initializeMapBoundaries(newMapBoundaries) {
                this.currentScreen.mapBoundaries = newMapBoundaries
            },
        }
    }
</script>

<style>
    #overworld {
        width: 100%;
        height: 74%;
    }

    .map-container {
        display: inline-block;
        height: 97.5%;
        width: 64rem;
        float: left;
    }
</style>
