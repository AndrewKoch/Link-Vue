
const map = {

    name: "cave2",
    // mapType: "cave",
    mapType: "shop",
    startCoordinates: {x: 8, y: 13},
    exitCoordinates: {x: 8, y: 6},
    items: [
        {
            name: "greenRaft",
            coordinates: {x: 5, y: 10},
            cost: 200,
            events: {
                updateLink(link) {
                    return { ...link, inventory: ["greenRaft", ...link.inventory] }
                },
            }
        },
        {
            name: "blueRing",
            coordinates: {x: 7.5, y: 10},
            cost: 300,
            events: {
                updateLink(link) {
                    return { ...link, color: "blue", currentSword: "whiteSword", inventory: ["blueRing", ...link.inventory] }

                },
            }
        },
        {
            name: "blueCandle",
            coordinates: {x: 10, y: 10},
            cost: 50,
            events: {
                updateLink(link) {
                    return { ...link, currentSecondaryItem: "blueCandle", inventory: ["blueCandle", ...link.inventory] }
                },
            }
        }
    ],
    border: 'cave_border',
    caveText: "BUY SOMETHIN' WILL YA!",
    overworld: [
        {name: "green_merchant", coordinates: {x: 7.5, y: 8}},
        {name: "fire0", coordinates: {x: 4.5, y: 8}},
        {name: "fire0", coordinates: {x: 10.5, y: 8}},
    ]
}

export default map
