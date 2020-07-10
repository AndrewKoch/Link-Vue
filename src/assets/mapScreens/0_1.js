
const map = {
    name: "0_1",
    mapType: "surface",
    mapBoundaries: {
        min: {x: 0, y: 4},
        max: {x: 15, y: 14}
    },
    items: [
    ],
    overworld: [
        // bottom left wall
        // {name: "green_rock_wall_04", coordinates: {x: 0, y: 14}},
        // {name: "green_rock_wall_04", coordinates: {x: 1, y: 14}},
        {name: "green_rock_wall_04", coordinates: {x: 2, y: 13}},
        {name: "green_rock_wall_02", coordinates: {x: 3, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 2, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 3, y: 14}},

        // bottom right wall
        {name: "green_rock_wall_04", coordinates: {x: 7, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 8, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 9, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 10, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 11, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 12, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 13, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 14, y: 13}},
        {name: "green_rock_wall_04", coordinates: {x: 15, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 7, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 8, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 9, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 10, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 11, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 12, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 13, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 14}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 14}},

        // top left wall
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 5}},

        // blocking side wall?
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 6}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 7}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 7}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 8}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 8}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 9}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 9}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 10}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 10}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 11}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 11}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 12}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 12}},
        {name: "green_rock_wall_01", coordinates: {x: 0, y: 13}},
        {name: "green_rock_wall_01", coordinates: {x: 1, y: 13}},

        // top right wall-ish
        {name: "green_rock_wall_01", coordinates: {x: 10, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 12, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 14, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 4}},
        {name: "green_rock_wall_01", coordinates: {x: 10, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 12, y: 5}},
        {name: "green_rock_wall_06", coordinates: {x: 14, y: 5}},
        {name: "green_rock_wall_01", coordinates: {x: 15, y: 5}},

        // boulder field
        {name: "brown_boulder", coordinates: {x: 10, y: 7}},
        {name: "brown_boulder", coordinates: {x: 10, y: 9}},
        {name: "brown_boulder", coordinates: {x: 10, y: 11}},
        {name: "brown_boulder", coordinates: {x: 12, y: 8}},
        {name: "brown_boulder", coordinates: {x: 12, y: 10}},

        // bridge
        {name: "brown_bridge", coordinates: {x: 5, y: 9}},
        {name: "brown_bridge", coordinates: {x: 6, y: 9}},

        // river
        {name: "river0", coordinates: {x: 5, y: 4}},
        {name: "river0", coordinates: {x: 6, y: 4}},
        {name: "river0", coordinates: {x: 5, y: 5}},
        {name: "river0", coordinates: {x: 6, y: 5}},
        {name: "river0", coordinates: {x: 5, y: 6}},
        {name: "river0", coordinates: {x: 6, y: 6}},
        {name: "river0", coordinates: {x: 5, y: 7}},
        {name: "river0", coordinates: {x: 6, y: 7}},
        {name: "river0", coordinates: {x: 5, y: 8}},
        {name: "river0", coordinates: {x: 6, y: 8}},
        {name: "river0", coordinates: {x: 5, y: 9}},
        {name: "river0", coordinates: {x: 6, y: 9}},
        {name: "river0", coordinates: {x: 5, y: 10}},
        {name: "river0", coordinates: {x: 6, y: 10}},
        {name: "river0", coordinates: {x: 5, y: 11}},
        {name: "river0", coordinates: {x: 6, y: 11}},
        {name: "river0", coordinates: {x: 5, y: 12}},
        {name: "river0", coordinates: {x: 6, y: 12}},
        {name: "river0", coordinates: {x: 5, y: 13}},
        {name: "river0", coordinates: {x: 6, y: 13}},
        {name: "river0", coordinates: {x: 5, y: 14}},
        {name: "river0", coordinates: {x: 6, y: 14}},

    ]
}

export default map
