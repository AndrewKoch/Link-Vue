
const map = {

    name: "2_0",
    mapType: "surface",
    mapBoundaries: {
        min: {x: 0, y: 4},
        max: {x: 15, y: 14}
    },
    items: [
        // {
        //     name: "blueCandle",
        //     coordinates: {x: 7, y: 12},
        //     events: {
        //         updateLink(link) {
        //             return { ...link, currentSecondaryItem: "blueCandle", inventory: ["blueCandle", ...link.inventory] }
        //         },
        //     }
        // },
    ],
    overworld: [
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 2, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 3, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 4, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 5, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 6, y: 4}},

        {name: "green_rock_wall_01", coordinates: {x: 0, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 2, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 3, y: 5}},
        {
            name: "overworld_cave_door",
            coordinates: {x: 4, y: 5},
            newMap: "cave"
        },

        {name: "green_rock_wall_01", coordinates: {x: 5, y: 5}},
        {name: "green_rock_wall_07", coordinates: {x: 6, y: 5}},

        {name: "green_rock_wall_01", coordinates: {x: 0, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 2, y: 6}},
        {name: "green_rock_wall_07", coordinates: {x: 3, y: 6}},

        {name: "green_rock_wall_01", coordinates: {x: 0, y: 7}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 7}},
        {name: "green_rock_wall_07", coordinates: {x: 2, y: 7}},

        {name: "green_rock_wall_01", coordinates: {x: 0, y: 8}},
        {name: "green_rock_wall_07", coordinates: {x: 1, y: 8}},

        {name: "green_rock_wall_04", coordinates: {x: 0, y: 10}},
        {name: "green_rock_wall_02", coordinates: {x: 1, y: 10}},

        {name: "green_rock_wall_01", coordinates: {x: 0, y: 11}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 11}},

        {name: "green_rock_wall_01", coordinates: {x: 0, y: 12}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 12}},

        {name: "green_rock_wall_01", coordinates: {x: 0, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 2, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 3, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 4, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 5, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 6, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 7, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 8, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 9, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 10, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 11, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 12, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 13, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 13}},

        {name: "green_rock_wall_01", coordinates: {x: 0, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 2, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 3, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 4, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 5, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 6, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 7, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 8, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 9, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 10, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 11, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 12, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 13, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 14}},

        {name: "green_rock_wall_01", coordinates: {x: 13, y: 12}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 12}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 12}},

        {name: "green_rock_wall_01", coordinates: {x: 13, y: 11}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 11}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 11}},

        {name: "green_rock_wall_04", coordinates: {x: 13, y: 10}},
        {name: "green_rock_wall_04", coordinates: {x: 14, y: 10}},
        {name: "green_rock_wall_04", coordinates: {x: 15, y: 10}},

        {name: "green_rock_wall_06", coordinates: {x: 9, y: 8}},
        {name: "green_rock_wall_05", coordinates: {x: 10, y: 8}},
        {name: "green_rock_wall_05", coordinates: {x: 11, y: 8}},
        {name: "green_rock_wall_05", coordinates: {x: 12, y: 8}},
        {name: "green_rock_wall_05", coordinates: {x: 13, y: 8}},
        {name: "green_rock_wall_05", coordinates: {x: 14, y: 8}},
        {name: "green_rock_wall_05", coordinates: {x: 15, y: 8}},

        {name: "green_rock_wall_01", coordinates: {x: 9, y: 7}},
        {name: "green_rock_wall_01", coordinates: {x: 10, y: 7}},
        {name: "green_rock_wall_01", coordinates: {x: 11, y: 7}},
        {name: "green_rock_wall_01", coordinates: {x: 12, y: 7}},
        {name: "green_rock_wall_01", coordinates: {x: 13, y: 7}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 7}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 7}},

        {name: "green_rock_wall_01", coordinates: {x: 9, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 10, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 11, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 12, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 13, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 6}},

        {name: "green_rock_wall_01", coordinates: {x: 9, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 10, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 11, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 12, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 13, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 5}},

        {name: "green_rock_wall_01", coordinates: {x: 9, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 10, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 11, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 12, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 13, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 4}}
    ]
}

export default map
