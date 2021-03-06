export interface Dino {
    dinoNumber: string,
    isKarma: boolean,
    originalDinoNumber: string,
    percentileRanks: {
        acceleration: number,
        agility: number,
        attack: number,
        defense: number,
        health: number,
        speed: number,
    },
    stats: {
        acceleration: {
            currentValue: number,
            maxValue: number
        },
        agility: {
            currentValue: number,
            maxValue: number
        },
        attack: {
            currentValue: number,
            maxValue: number
        },
        defense: {
            currentValue: number,
            maxValue: number
        },
        health: {
            currentValue: number,
            maxValue: number
        },
        speed: {
            currentValue: number,
            maxValue: number
        },
        bonusPoints: number
    },
    traits: {
        image: string
        eyes: string,
        face: string,
        clothes: string,
        headwear: string,
        background: string,
        body: string,
        accessory: string
    }
}
