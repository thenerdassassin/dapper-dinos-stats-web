import {
    Center,
    GridItem,
    Text,
    VStack
  } from "@chakra-ui/react"

  import { DinoStat } from "./DinoStat"
interface StatsProps {
    acceleration: number;
}

export const Stats: React.FC<StatsProps> = ({ acceleration }) => {

    return (
        <>
            <GridItem colSpan={1} colStart={3} bg='papayawhip'>
                <DinoStat statTitle={"Acceleration"} startingValue={52} maxValue={97}/>
            </GridItem>
            <GridItem colSpan={1} colStart={4} bg='papayawhip'>
                <DinoStat statTitle={"Agility"} startingValue={52} maxValue={97}/>
            </GridItem>
            <GridItem colSpan={1} colStart={5} bg='papayawhip'>
                <DinoStat statTitle={"Attack"} startingValue={52} maxValue={97}/>
            </GridItem>
            <GridItem colSpan={1} colStart={6} bg='papayawhip'>
                <DinoStat statTitle={"Defense"} startingValue={52} maxValue={97}/>
            </GridItem>

            <GridItem colSpan={1} colStart={3} bg='papayawhip'>
                <DinoStat statTitle={"Health"} startingValue={52} maxValue={97}/>
            </GridItem>
            <GridItem colSpan={1} colStart={4} bg='papayawhip'>
                <DinoStat statTitle={"Health"} startingValue={52} maxValue={97}/>
            </GridItem>
            <GridItem colSpan={1} colStart={5} bg='papayawhip'>
                <DinoStat statTitle={"Bonus Points"} startingValue={12} maxValue={-1}/>
            </GridItem>
            <GridItem colSpan={1} colStart={6} bg='papayawhip'>
                <DinoStat statTitle={"Total Points"} startingValue={52} maxValue={97}/>
            </GridItem>
        </>
    )
}