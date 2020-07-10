
const map = {

    name: "dungeon1_0_0",
    mapType: "dungeon",
    startCoordinates: {x: 7, y: 12},
    exitCoordinates: {x: 8, y: 9},
    mapBoundaries: {
        min: {x: 2, y: 6},
        max: {x: 13, y: 12}
    },
    items: [
        {
            name: "dungeonTriforce",
            coordinates: {x: 7.5, y: 9},
            events: {
                updateLink(link) {
                    return {...link, inventory: ["dungeonTriforce", ...link.inventory]}
                },
            },
        }
    ],
    border: "dungeon_blue_exterior",
    doors: {
        top: "dungeon_blue_doorLock",
        right: "dungeon_blue_doorKeyLock",
        bottom: "dungeon_blue_doorOpen",
        left: "dungeon_blue_wall",
    },
    overworld: [
        {name: "dungeon_blue_gargoyle_left", coordinates: {x: 6, y: 8}},
        {name: "dungeon_blue_gargoyle_left", coordinates: {x: 5, y: 9}},

        {name: "dungeon_blue_gargoyle_right", coordinates: {x: 9, y: 8}},
        {name: "dungeon_blue_gargoyle_right", coordinates: {x: 10, y: 9}},

        {name: "dungeon_blue_block", coordinates: {x: 4, y: 7}},
        {name: "dungeon_blue_block", coordinates: {x: 5, y: 7}},
        {name: "dungeon_blue_block", coordinates: {x: 6, y: 7}},
        {name: "dungeon_blue_block", coordinates: {x: 7, y: 7}},
        {name: "dungeon_blue_block", coordinates: {x: 8, y: 7}},
        {name: "dungeon_blue_block", coordinates: {x: 9, y: 7}},
        {name: "dungeon_blue_block", coordinates: {x: 10, y: 7}},
        {name: "dungeon_blue_block", coordinates: {x: 11, y: 7}},

        {name: "dungeon_blue_block", coordinates: {x: 3, y: 7}},
        {name: "dungeon_blue_block", coordinates: {x: 3, y: 8}},
        {name: "dungeon_blue_block", coordinates: {x: 3, y: 9}},
        {name: "dungeon_blue_block", coordinates: {x: 3, y: 10}},

        {name: "dungeon_blue_block", coordinates: {x: 12, y: 7}},
        {name: "dungeon_blue_block", coordinates: {x: 12, y: 8}},
        {name: "dungeon_blue_block", coordinates: {x: 12, y: 9}},
        {name: "dungeon_blue_block", coordinates: {x: 12, y: 10}},

        {name: "dungeon_blue_block", coordinates: {x: 3, y: 11}},
        {name: "dungeon_blue_block", coordinates: {x: 4, y: 11}},
        {name: "dungeon_blue_block", coordinates: {x: 5, y: 11}},
        {name: "dungeon_blue_block", coordinates: {x: 6, y: 11}},

        {name: "dungeon_blue_block", coordinates: {x: 9, y: 11}},
        {name: "dungeon_blue_block", coordinates: {x: 10, y: 11}},
        {name: "dungeon_blue_block", coordinates: {x: 11, y: 11}},
        {name: "dungeon_blue_block", coordinates: {x: 12, y: 11}},
    ]
}

export default map
