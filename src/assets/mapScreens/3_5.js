
const map = {
    name: "3_5",
    mapType: "surface",
    mapBoundaries: {
        min: {x: 0, y: 4},
        max: {x: 15, y: 14}
    },
    items: [],
    overworld: [
        // blocking right wall
        {name: "brown_bush", coordinates: {x: 15, y: 6}},
        {name: "brown_bush", coordinates: {x: 14, y: 7}},
        {name: "brown_bush", coordinates: {x: 15, y: 7}},
        {name: "brown_bush", coordinates: {x: 14, y: 8}},
        {name: "brown_bush", coordinates: {x: 15, y: 8}},
        {name: "brown_bush", coordinates: {x: 14, y: 9}},
        {name: "brown_bush", coordinates: {x: 15, y: 9}},
        {name: "brown_bush", coordinates: {x: 14, y: 10}},
        {name: "brown_bush", coordinates: {x: 15, y: 10}},
        {name: "brown_bush", coordinates: {x: 14, y: 11}},
        {name: "brown_bush", coordinates: {x: 15, y: 11}},
        {name: "brown_bush", coordinates: {x: 15, y: 12}},

        // blocking left wall
        {name: "brown_bush", coordinates: {x: 0, y: 6}},
        {name: "brown_bush", coordinates: {x: 0, y: 7}},
        {name: "brown_bush", coordinates: {x: 0, y: 8}},
        {name: "brown_bush", coordinates: {x: 0, y: 9}},

        // bottom right wall
        {name: "brown_bush", coordinates: {x: 9, y: 13}},
        {name: "brown_bush", coordinates: {x: 10, y: 13}},
        {name: "brown_bush", coordinates: {x: 11, y: 13}},
        {name: "brown_bush", coordinates: {x: 12, y: 13}},
        {name: "brown_bush", coordinates: {x: 13, y: 13}},
        {name: "brown_bush", coordinates: {x: 14, y: 13}},
        {name: "brown_bush", coordinates: {x: 15, y: 13}},
        {name: "brown_bush", coordinates: {x: 9, y: 14}},
        {name: "brown_bush", coordinates: {x: 10, y: 14}},
        {name: "brown_bush", coordinates: {x: 11, y: 14}},
        {name: "brown_bush", coordinates: {x: 12, y: 14}},
        {name: "brown_bush", coordinates: {x: 13, y: 14}},
        {name: "brown_bush", coordinates: {x: 14, y: 14}},
        {name: "brown_bush", coordinates: {x: 15, y: 14}},

        // top wall
        {name: "brown_bush", coordinates: {x: 0, y: 4}},
        {name: "brown_bush", coordinates: {x: 1, y: 4}},
        {name: "brown_bush", coordinates: {x: 2, y: 4}},
        {name: "brown_bush", coordinates: {x: 3, y: 4}},
        {name: "brown_bush", coordinates: {x: 4, y: 4}},
        {name: "brown_bush", coordinates: {x: 5, y: 4}},
        {name: "brown_bush", coordinates: {x: 6, y: 4}},
        {name: "brown_bush", coordinates: {x: 7, y: 4}},
        {name: "brown_bush", coordinates: {x: 8, y: 4}},
        {name: "brown_bush", coordinates: {x: 9, y: 4}},
        {name: "brown_bush", coordinates: {x: 10, y: 4}},
        {name: "brown_bush", coordinates: {x: 11, y: 4}},
        {name: "brown_bush", coordinates: {x: 12, y: 4}},
        {name: "brown_bush", coordinates: {x: 13, y: 4}},
        {name: "brown_bush", coordinates: {x: 14, y: 4}},
        {name: "brown_bush", coordinates: {x: 15, y: 4}},
        {name: "brown_bush", coordinates: {x: 0, y: 5}},
        {name: "brown_bush", coordinates: {x: 1, y: 5}},
        {name: "brown_bush", coordinates: {x: 2, y: 5}},
        {name: "brown_bush", coordinates: {x: 3, y: 5}},
        {name: "brown_bush", coordinates: {x: 4, y: 5}},
        {name: "brown_bush", coordinates: {x: 5, y: 5}},
        {name: "brown_bush", coordinates: {x: 6, y: 5}},
        {name: "brown_bush", coordinates: {x: 7, y: 5}},
        {name: "brown_bush", coordinates: {x: 8, y: 5}},
        {name: "brown_bush", coordinates: {x: 9, y: 5}},
        {name: "brown_bush", coordinates: {x: 10, y: 5}},
        {name: "brown_bush", coordinates: {x: 11, y: 5}},
        {name: "brown_bush", coordinates: {x: 12, y: 5}},
        {name: "brown_bush", coordinates: {x: 13, y: 5}},
        {name: "brown_bush", coordinates: {x: 14, y: 5}},
        {name: "brown_bush", coordinates: {x: 15, y: 5}},

        // bush field
        {name: "brown_bush", coordinates: {x: 14, y: 6}},
        {name: "green_bush", coordinates: {x: 11, y: 7}},
        {name: "green_bush", coordinates: {x: 13, y: 8}},
        {name: "green_bush", coordinates: {x: 11, y: 9}},
        {
            name: "red_bush",
            coordinates: {x: 13, y: 10},
            secret: "green_stairs",
            newMap: "cave"
        },
        {name: "green_bush", coordinates: {x: 11, y: 11}},
        {name: "brown_bush", coordinates: {x: 14, y: 12}},

        // vertical shoreline
        {name: "ocean_shoreline_up_left", coordinates: {x: 6, y: 11}},
        {name: "ocean_shoreline_up_left", coordinates: {x: 6, y: 12}},
        {name: "ocean_shoreline_up_left", coordinates: {x: 6, y: 13}},
        {name: "ocean_shoreline_up_left", coordinates: {x: 6, y: 14}},

        // shoreline turn
        {name: "shoreline_turn_up_left", coordinates: {x: 6, y: 10}},

        // horizontal shoreline
        {name: "ocean_shoreline_up", coordinates: {x: 0, y: 10}},
        {name: "ocean_shoreline_up", coordinates: {x: 1, y: 10}},
        {name: "shoreline_up", coordinates: {x: 2, y: 10}},
        {name: "shoreline_up", coordinates: {x: 3, y: 10}},
        {name: "shoreline_up", coordinates: {x: 4, y: 10}},
        {name: "shoreline_up", coordinates: {x: 5, y: 10}},

        // ocean
        {name: "ocean", coordinates: {x: 0, y: 11}},
        {name: "ocean", coordinates: {x: 1, y: 11}},
        {name: "river0", coordinates: {x: 2, y: 11}},
        {name: "river0", coordinates: {x: 3, y: 11}},
        {name: "river0", coordinates: {x: 4, y: 11}},
        {name: "river0", coordinates: {x: 5, y: 11}},
        {name: "ocean", coordinates: {x: 0, y: 12}},
        {name: "ocean", coordinates: {x: 1, y: 12}},
        {name: "river0", coordinates: {x: 2, y: 12}},
        {name: "river0", coordinates: {x: 3, y: 12}},
        {name: "river0", coordinates: {x: 4, y: 12}},
        {name: "river0", coordinates: {x: 5, y: 12}},
        {name: "ocean", coordinates: {x: 0, y: 13}},
        {name: "ocean", coordinates: {x: 1, y: 13}},
        {name: "river0", coordinates: {x: 2, y: 13}},
        {name: "river0", coordinates: {x: 3, y: 13}},
        {name: "river0", coordinates: {x: 4, y: 13}},
        {name: "river0", coordinates: {x: 5, y: 13}},
        {name: "ocean", coordinates: {x: 0, y: 14}},
        {name: "ocean", coordinates: {x: 1, y: 14}},
        {name: "river0", coordinates: {x: 2, y: 14}},
        {name: "river0", coordinates: {x: 3, y: 14}},
        {name: "river0", coordinates: {x: 4, y: 14}},
        {name: "river0", coordinates: {x: 5, y: 14}},
    ]
}

export default map
