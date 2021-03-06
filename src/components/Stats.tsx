import {
    GridItem,
  } from "@chakra-ui/react"

  import { DinoStat } from "./DinoStat"
interface StatsProps {
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
    bonusPoints: number,
    percentileRanks: {
        acceleration: number,
        agility: number,
        attack: number,
        defense: number,
        health: number,
        speed: number,
    }
}

export const Stats: React.FC<StatsProps> = ({acceleration, agility, attack, defense, health, speed, bonusPoints, percentileRanks}) => {
    const bonusPointsStatValue = {currentValue: bonusPoints, maxValue:-1}
    const totalPoints = {
        currentValue: acceleration.currentValue + agility.currentValue + attack.currentValue + defense.currentValue + health.currentValue + speed.currentValue,
        maxValue: acceleration.maxValue + agility.maxValue + attack.maxValue + defense.maxValue + health.maxValue + speed.maxValue + bonusPoints,
    }
    return (
        <>
            <GridItem  minWidth="125px" colSpan={1} colStart={3} rowStart={2} bg='papayawhip'>
                <DinoStat statTitle={"Acceleration"} statValue={acceleration} percentile={percentileRanks.acceleration}/>
            </GridItem>
            <GridItem minWidth="125px" colSpan={1} colStart={4} rowStart={2} bg='papayawhip'>
                <DinoStat statTitle={"Agility"} statValue={agility} percentile={percentileRanks.agility}/>
            </GridItem>
            <GridItem minWidth="125px" colSpan={1} colStart={5} rowStart={2} bg='papayawhip'>
                <DinoStat statTitle={"Attack"} statValue={attack} percentile={percentileRanks.attack}/>
            </GridItem>
            <GridItem minWidth="125px" colSpan={1} colStart={6} rowStart={2} bg='papayawhip'>
                <DinoStat statTitle={"Defense"} statValue={defense} percentile={percentileRanks.defense}/>
            </GridItem>

            <GridItem colSpan={1} colStart={3} rowStart={3} bg='papayawhip'>
                <DinoStat statTitle={"Health"} statValue={health} percentile={percentileRanks.health}/>
            </GridItem>
            <GridItem colSpan={1} colStart={4} rowStart={3} bg='papayawhip'>
                <DinoStat statTitle={"Speed"} statValue={speed} percentile={percentileRanks.speed}/>
            </GridItem>
            <GridItem colSpan={1} colStart={5} rowStart={3} bg='papayawhip'>
                <DinoStat statTitle={"Bonus Points"} statValue={bonusPointsStatValue} percentile={undefined}/>
            </GridItem>
            <GridItem colSpan={1} colStart={6} rowStart={3} bg='papayawhip'>
                <DinoStat statTitle={"Total Points"} statValue={totalPoints} percentile={undefined}/>
            </GridItem>
        </>
    )
}