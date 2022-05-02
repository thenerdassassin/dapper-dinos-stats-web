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
    }
}

export const DinoStat: React.FC<DinoStatProps> = ({ statTitle, statValue }) => {

    return (
        <VStack>
            <Text>{statTitle}</Text>
            <Text> {statValue.maxValue > 0 ?
                format('{0}/{1}', statValue.currentValue, statValue.maxValue) : statValue.currentValue
            } </Text>
        </VStack>

    )
}