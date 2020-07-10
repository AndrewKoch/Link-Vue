
const map = {

    name: "3_0",
    mapType: "surface",
    mapBoundaries: {
        min: {x: 0, y: 4},
        max: {x: 15, y: 14}
    },
    items: [
        {
            name: "blueCandle",
            coordinates: {x: 12, y: 12},
            events: {
                updateLink(link) {
                    return { ...link, currentSecondaryItem: "blueCandle", inventory: ["blueCandle", ...link.inventory] }
                },
            }
        },
        // {
        //     name: "powerBracelet",
        //     coordinates: {x: 10, y: 7},
        //     events: {
        //         updateLink(link) {
        //             return { ...link, inventory: ["powerBracelet", ...link.inventory] }
        //         }
        //     },
        // }
    ],
    overworld: [

        // blocking side wall?
        {name: "green_bush", coordinates: {x: 15, y: 6}},
        {name: "green_bush", coordinates: {x: 15, y: 7}},
        {name: "green_bush", coordinates: {x: 15, y: 8}},
        {name: "green_bush", coordinates: {x: 15, y: 9}},
        {name: "green_bush", coordinates: {x: 15, y: 10}},
        {name: "green_bush", coordinates: {x: 15, y: 11}},
        {name: "green_bush", coordinates: {x: 15, y: 12}},
        {name: "green_bush", coordinates: {x: 15, y: 13}},
        {name: "green_bush", coordinates: {x: 15, y: 14}},

        // left side wall
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 7}},
        {name: "green_rock_wall_07", coordinates: {x: 1, y: 7}},
        {name: "green_rock_wall_07", coordinates: {x: 0, y: 8}},

        {name: "green_rock_wall_02", coordinates: {x: 0, y: 10}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 11}},
        {name: "green_rock_wall_02", coordinates: {x: 1, y: 11}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 12}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 12}},

        // bottom wall
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 13}},
        {name: "green_bush", coordinates: {x: 2, y: 13}},
        {name: "green_bush", coordinates: {x: 3, y: 13}},
        {name: "green_bush", coordinates: {x: 4, y: 13}},
        {name: "green_bush", coordinates: {x: 5, y: 13}},
        {name: "green_bush", coordinates: {x: 6, y: 13}},
        {name: "green_bush", coordinates: {x: 7, y: 13}},
        {name: "green_bush", coordinates: {x: 8, y: 13}},
        {name: "green_bush", coordinates: {x: 9, y: 13}},
        {name: "green_bush", coordinates: {x: 10, y: 13}},
        {name: "green_bush", coordinates: {x: 11, y: 13}},
        {name: "green_bush", coordinates: {x: 12, y: 13}},
        {name: "green_bush", coordinates: {x: 13, y: 13}},
        {name: "green_bush", coordinates: {x: 14, y: 13}},
        {name: "green_bush", coordinates: {x: 15, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 14}},
        {name: "green_bush", coordinates: {x: 2, y: 14}},
        {name: "green_bush", coordinates: {x: 3, y: 14}},
        {name: "green_bush", coordinates: {x: 4, y: 14}},
        {name: "green_bush", coordinates: {x: 5, y: 14}},
        {name: "green_bush", coordinates: {x: 6, y: 14}},
        {name: "green_bush", coordinates: {x: 7, y: 14}},
        {name: "green_bush", coordinates: {x: 8, y: 14}},
        {name: "green_bush", coordinates: {x: 9, y: 14}},
        {name: "green_bush", coordinates: {x: 10, y: 14}},
        {name: "green_bush", coordinates: {x: 11, y: 14}},
        {name: "green_bush", coordinates: {x: 12, y: 14}},
        {name: "green_bush", coordinates: {x: 13, y: 14}},
        {name: "green_bush", coordinates: {x: 14, y: 14}},
        {name: "green_bush", coordinates: {x: 15, y: 14}},

        // bush field
        {name: "green_bush", coordinates: {x: 6, y: 4}},
        {name: "green_bush", coordinates: {x: 9, y: 4}},
        {name: "green_bush", coordinates: {x: 11, y: 4}},
        {name: "green_bush", coordinates: {x: 13, y: 4}},
        {name: "green_bush", coordinates: {x: 15, y: 4}},

        {name: "green_bush", coordinates: {x: 6, y: 5}},
        {name: "green_bush", coordinates: {x: 9, y: 5}},
        {name: "green_bush", coordinates: {x: 11, y: 5}},
        {name: "green_bush", coordinates: {x: 13, y: 5}},
        {name: "green_bush", coordinates: {x: 15, y: 5}},

        {name: "green_bush", coordinates: {x: 6, y: 7}},
        {name: "green_bush", coordinates: {x: 9, y: 7}},
        {name: "green_bush", coordinates: {x: 11, y: 7}},
        {name: "green_bush", coordinates: {x: 13, y: 7}},

        {name: "green_bush", coordinates: {x: 6, y: 9}},
        {name: "green_bush", coordinates: {x: 9, y: 9}},
        {name: "green_bush", coordinates: {x: 11, y: 9}},
        {name: "green_bush", coordinates: {x: 13, y: 9}},

        {name: "green_bush", coordinates: {x: 6, y: 11}},
        {name: "green_bush", coordinates: {x: 9, y: 11}},
        {name: "green_bush", coordinates: {x: 11, y: 11}},
        {name: "green_bush", coordinates: {x: 13, y: 11}},

        {name: "green_bush", coordinates: {x: 2, y: 4}},
        {name: "green_bush", coordinates: {x: 4, y: 4}},
        {name: "green_bush", coordinates: {x: 2, y: 5}},
        {name: "green_bush", coordinates: {x: 4, y: 5}},
        {name: "green_bush", coordinates: {x: 2, y: 8}},
        {name: "green_bush", coordinates: {x: 4, y: 8}},
        {name: "green_bush", coordinates: {x: 2, y: 10}},
        {name: "green_bush", coordinates: {x: 4, y: 10}}
    ]
}

export default map
