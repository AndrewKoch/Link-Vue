
const map = {

    name: "cave1",
    mapType: "cave",
    startCoordinates: {x: 8, y: 13},
    exitCoordinates: {x: 4, y: 6},
    items: [
        {
            name: "greenSword",
            coordinates: {x: 7.5, y: 10.5},
            events: {
                updateLink(link) {
                    return { ...link }
                },
            }
        }
    ],
    border: 'cave_border',
    overworld: [
        {name: "old_man", coordinates: {x: 7.5, y: 9}},
        {name: "fire0", coordinates: {x: 5, y: 9}},
        {name: "fire0", coordinates: {x: 10, y: 9}},
        {name: "caveText1", coordinates: {x: 3, y: 7.5}}
    ]

}

export default map
