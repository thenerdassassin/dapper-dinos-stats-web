import {
    Center,
    Text,
    VStack
} from "@chakra-ui/react"
import { format } from 'react-string-format';

interface DinoStatProps {
    statTitle: string;
    startingValue: number;
    maxValue: number;
}

export const DinoStat: React.FC<DinoStatProps> = ({ statTitle, startingValue, maxValue }) => {

    return (
            <VStack>
                <Text>{statTitle}</Text>
                <Text>{maxValue > 0 ? format('{0}/{1}', startingValue, maxValue) : startingValue}</Text>
            </VStack>

    )
}