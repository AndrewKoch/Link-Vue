
const map = {
    name: "1_2",
    mapType: "surface",
    mapBoundaries: {
        min: {x: 0, y: 4},
        max: {x: 15, y: 14}
    },
    items: [],
    overworld: [
        // top right wall
        {name: "green_bush", coordinates: {x: 9, y: 4}},
        {name: "green_bush", coordinates: {x: 10, y: 4}},
        {name: "green_bush", coordinates: {x: 11, y: 4}},
        {name: "green_bush", coordinates: {x: 12, y: 4}},
        {name: "green_bush", coordinates: {x: 13, y: 4}},
        {name: "green_bush", coordinates: {x: 14, y: 4}},
        {name: "green_bush", coordinates: {x: 15, y: 4}},
        {name: "green_bush", coordinates: {x: 9, y: 5}},
        {name: "green_bush", coordinates: {x: 10, y: 5}},
        {name: "green_bush", coordinates: {x: 11, y: 5}},
        {name: "green_bush", coordinates: {x: 12, y: 5}},
        {name: "green_bush", coordinates: {x: 13, y: 5}},
        {name: "green_bush", coordinates: {x: 14, y: 5}},
        {name: "green_bush", coordinates: {x: 15, y: 5}},

        // bottom right wall
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

        // bottom left wall
        {name: "green_rock_wall_04", coordinates: {x: 0, y: 10}},
        {name: "green_rock_wall_04", coordinates: {x: 1, y: 10}},
        {name: "green_rock_wall_04", coordinates: {x: 2, y: 10}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 11}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 11}},
        {name: "green_rock_wall_01", coordinates: {x: 2, y: 11}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 12}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 12}},
        {name: "green_rock_wall_01", coordinates: {x: 2, y: 12}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 2, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 2, y: 14}},

        // bush field
        {name: "green_bush", coordinates: {x: 10, y: 8}},
        {name: "green_bush", coordinates: {x: 12, y: 8}},
        {name: "green_bush", coordinates: {x: 13, y: 8}},
        {
            name: "red_bush",
            coordinates: {x: 10, y: 10},
            secret: "green_stairs",
            newMap: "cave"
        },
        {name: "green_bush", coordinates: {x: 12, y: 10}},
        {name: "green_bush", coordinates: {x: 13, y: 10}},


        // horizontal shoreline
        {name: "shoreline_bottom", coordinates: {x: 0, y: 8}},
        {name: "shoreline_bottom", coordinates: {x: 1, y: 8}},
        {name: "shoreline_bottom", coordinates: {x: 2, y: 8}},
        {name: "shoreline_bottom", coordinates: {x: 3, y: 8}},
        {name: "shoreline_bottom", coordinates: {x: 4, y: 8}},
        {name: "shoreline_bottom", coordinates: {x: 5, y: 8}},
        {name: "shoreline_bottom_left_up", coordinates: {x: 6, y: 8}},

        // vertical shoreline
        {name: "shoreline_up_left", coordinates: {x: 6, y: 7}},
        {name: "shoreline_up_left", coordinates: {x: 6, y: 6}},
        {name: "shoreline_up_left", coordinates: {x: 6, y: 5}},
        {name: "shoreline_up_left", coordinates: {x: 6, y: 4}},

        // ocean
        {name: "river0", coordinates: {x: 0, y: 4}},
        {name: "river0", coordinates: {x: 1, y: 4}},
        {name: "river0", coordinates: {x: 2, y: 4}},
        {name: "river0", coordinates: {x: 3, y: 4}},
        {name: "river0", coordinates: {x: 4, y: 4}},
        {name: "river0", coordinates: {x: 5, y: 4}},
        {name: "river0", coordinates: {x: 0, y: 5}},
        {name: "river0", coordinates: {x: 1, y: 5}},
        {name: "river0", coordinates: {x: 2, y: 5}},
        {name: "river0", coordinates: {x: 3, y: 5}},
        {name: "river0", coordinates: {x: 4, y: 5}},
        {name: "river0", coordinates: {x: 5, y: 5}},
        {name: "river0", coordinates: {x: 0, y: 6}},
        {name: "river0", coordinates: {x: 1, y: 6}},
        {name: "river0", coordinates: {x: 2, y: 6}},
        {name: "river0", coordinates: {x: 3, y: 6}},
        {name: "river0", coordinates: {x: 4, y: 6}},
        {name: "river0", coordinates: {x: 5, y: 6}},
        {name: "river0", coordinates: {x: 0, y: 7}},
        {name: "river0", coordinates: {x: 1, y: 7}},
        {name: "river0", coordinates: {x: 2, y: 7}},
        {name: "river0", coordinates: {x: 3, y: 7}},
        {name: "river0", coordinates: {x: 4, y: 7}},
        {name: "river0", coordinates: {x: 5, y: 7}}
    ]
}

export default map
