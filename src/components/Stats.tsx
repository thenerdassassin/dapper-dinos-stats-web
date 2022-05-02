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
    bonusPoints: number
}

export const Stats: React.FC<StatsProps> = ({acceleration, agility, attack, defense, health, speed, bonusPoints}) => {
    const bonusPointsStatValue = {currentValue: bonusPoints, maxValue:-1}
    const totalPoints = {
        currentValue: acceleration.currentValue + agility.currentValue + attack.currentValue + defense.currentValue + health.currentValue + speed.currentValue,
        maxValue: acceleration.maxValue + agility.maxValue + attack.maxValue + defense.maxValue + health.maxValue + speed.maxValue + bonusPoints,
    }
    return (
        <>
            <GridItem  minWidth="125px" colSpan={1} colStart={3} bg='papayawhip'>
                <DinoStat statTitle={"Acceleration"} statValue={acceleration}/>
            </GridItem>
            <GridItem minWidth="125px" colSpan={1} colStart={4} bg='papayawhip'>
                <DinoStat statTitle={"Agility"} statValue={agility}/>
            </GridItem>
            <GridItem minWidth="125px" colSpan={1} colStart={5} bg='papayawhip'>
                <DinoStat statTitle={"Attack"} statValue={attack}/>
            </GridItem>
            <GridItem minWidth="125px" colSpan={1} colStart={6} bg='papayawhip'>
                <DinoStat statTitle={"Defense"} statValue={defense}/>
            </GridItem>

            <GridItem colSpan={1} colStart={3} bg='papayawhip'>
                <DinoStat statTitle={"Health"} statValue={health}/>
            </GridItem>
            <GridItem colSpan={1} colStart={4} bg='papayawhip'>
                <DinoStat statTitle={"Speed"} statValue={speed}/>
            </GridItem>
            <GridItem colSpan={1} colStart={5} bg='papayawhip'>
                <DinoStat statTitle={"Bonus Points"} statValue={bonusPointsStatValue}/>
            </GridItem>
            <GridItem colSpan={1} colStart={6} bg='papayawhip'>
                <DinoStat statTitle={"Total Points"} statValue={totalPoints}/>
            </GridItem>
        </>
    )
}