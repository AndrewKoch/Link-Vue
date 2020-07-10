
const map = {
    name: "0_3",
    mapType: "surface",
    mapBoundaries: {
        min: {x: 0, y: 4},
        max: {x: 15, y: 14}
    },
    items: [],
    overworld: [
        // blue ladder
        {name: "blue_ladder", coordinates: {x: 8, y: 13}},
        {name: "blue_ladder", coordinates: {x: 8, y: 14}},

        // dungeon entrance
        {name: "dungeon_green_entrance_pedestal_top_left", coordinates: {x: 4, y: 7}},
        {name: "dungeon_green_entrance_pedestal_top_right", coordinates: {x: 5, y: 7}},
        {name: "dungeon_green_entrance_pedestal_bottom_left", coordinates: {x: 4, y: 8}},
        {name: "dungeon_green_entrance_pedestal_bottom_right", coordinates: {x: 5, y: 8}},

        {name: "dungeon_green_entrance_pedestal_top_left", coordinates: {x: 11, y: 7}},
        {name: "dungeon_green_entrance_pedestal_top_right", coordinates: {x: 12, y: 7}},
        {name: "dungeon_green_entrance_pedestal_bottom_left", coordinates: {x: 11, y: 8}},
        {name: "dungeon_green_entrance_pedestal_bottom_right", coordinates: {x: 12, y: 8}},

        {name: "dungeon_green_entrance_pedestal_top_left", coordinates: {x: 7, y: 7}},
        {name: "dungeon_green_entrance_top_middle", coordinates: {x: 8, y: 7}},
        {name: "dungeon_green_entrance_pedestal_top_right", coordinates: {x: 9, y: 7}},
        {name: "dungeon_green_entrance_pedestal_bottom_left", coordinates: {x: 7, y: 8}},
        {
            name: "overworld_cave_door",
            coordinates: {x: 8, y: 8},
            newMap: "dungeon"
        },
        {name: "dungeon_green_entrance_pedestal_bottom_right", coordinates: {x: 9, y: 8}},

        // ocean
        {name: "ocean", coordinates: {x: 0, y: 4}},
        {name: "ocean", coordinates: {x: 0, y: 5}},
        {name: "ocean", coordinates: {x: 0, y: 6}},
        {name: "ocean", coordinates: {x: 0, y: 7}},
        {name: "ocean", coordinates: {x: 0, y: 8}},
        {name: "ocean", coordinates: {x: 0, y: 9}},
        {name: "ocean", coordinates: {x: 0, y: 10}},
        {name: "ocean", coordinates: {x: 0, y: 11}},
        {name: "ocean", coordinates: {x: 0, y: 12}},
        {name: "ocean", coordinates: {x: 0, y: 13}},
        {name: "ocean", coordinates: {x: 0, y: 14}},

        {name: "ocean", coordinates: {x: 15, y: 4}},
        {name: "ocean", coordinates: {x: 15, y: 5}},
        {name: "ocean", coordinates: {x: 15, y: 6}},
        {name: "ocean", coordinates: {x: 15, y: 7}},
        {name: "ocean", coordinates: {x: 15, y: 8}},
        {name: "ocean", coordinates: {x: 15, y: 9}},
        {name: "ocean", coordinates: {x: 15, y: 10}},
        {name: "ocean", coordinates: {x: 15, y: 11}},
        {name: "ocean", coordinates: {x: 15, y: 12}},
        {name: "ocean", coordinates: {x: 15, y: 13}},
        {name: "ocean", coordinates: {x: 15, y: 14}},

        // bottom wall
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 2, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 3, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 4, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 5, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 6, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 7, y: 13}},

        {name: "brown_rock_wall_04", coordinates: {x: 9, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 10, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 11, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 12, y: 13}},
        {name: "brown_rock_wall_04", coordinates: {x: 13, y: 13}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 13}},
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 2, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 3, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 4, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 5, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 6, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 7, y: 14}},

        {name: "brown_rock_wall_01", coordinates: {x: 9, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 10, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 11, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 12, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 13, y: 14}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 14}},

        // top wall
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 2, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 3, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 4, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 5, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 6, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 7, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 8, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 9, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 10, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 11, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 12, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 13, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 4}},
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 2, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 3, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 4, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 5, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 6, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 7, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 8, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 9, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 10, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 11, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 12, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 13, y: 5}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 5}},

        // left side wall
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 6}},
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 7}},
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 8}},
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 9}},
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 10}},
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 11}},
        {name: "brown_rock_wall_01", coordinates: {x: 1, y: 12}},

        // right side wall
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 6}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 7}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 8}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 9}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 10}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 11}},
        {name: "brown_rock_wall_01", coordinates: {x: 14, y: 12}},
    ]
}

export default map
