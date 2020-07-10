
const map = {

    name: "cave5",
    mapType: "cave",
    startCoordinates: {x: 8, y: 13},
    exitCoordinates: {x: 12, y: 6},
    items: [
        {
            name: 'blueRupee',
            coordinates: {x: 7.75, y: 10},
            events: {
                updateLink(link) {
                    return {...link, currentRupees: link.currentRupees + 50}
                }
            }
        }
    ],
    border: 'cave_border',
    caveText: "IT'S A SECRET TO EVERYBODY.",
    overworld: [
        {name: "moblin", coordinates: {x: 7.5, y: 8}},
        {name: "fire0", coordinates: {x: 4.5, y: 8}},
        {name: "fire0", coordinates: {x: 10.5, y: 8}},
    ]
}

export default map
