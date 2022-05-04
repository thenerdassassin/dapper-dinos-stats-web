import {
    Center,
    Text,
    VStack
} from "@chakra-ui/react"
import { format } from 'react-string-format';

interface DinoStatProps {
    statTitle: string;
    statValue: {
        currentValue: number;
        maxValue: number;
    },
    percentile: number|undefined
}

export const DinoStat: React.FC<DinoStatProps> = ({ statTitle, statValue, percentile }) => {

    return (
        <VStack>
            <Text>{statTitle}</Text>
            { percentile ?
                <Text> {statValue.currentValue} - Top {percentile}%</Text> :
                <Text> {statValue.currentValue}</Text>
            }
            {
                statValue.maxValue > 0  &&
                <Text> Max: {statValue.maxValue}</Text>
                
            }
        </VStack>

    )
}