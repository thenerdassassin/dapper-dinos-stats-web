import {
  useState,
  useEffect
} from "react"
import {
  ChakraProvider,
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  theme,
  Hide,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Traits } from "./components/Traits"
import { Stats } from "./components/Stats"
import { Dino } from "./services/DinoModel"

function App() {
  const [dino, setDino] = useState<Dino | undefined>(undefined)
  useEffect(() => {
    const fetchDino = async() => {
      const response = await fetch("https://5fkdfj7lgf.execute-api.us-east-1.amazonaws.com/dino/1818")
      const dinoJson = await response.json()
      setDino(JSON.parse(dinoJson))
    }

    fetchDino().catch(console.error)
  }, []);

  return <ChakraProvider theme={theme}>
      <Grid minH="50vh" maxH="70vh" p={25} gap={4} fontSize={"x-large"} fontFamily={"flintstone"}>
        {/* TODO: set Dino Image */}
        <GridItem rowSpan={2} colSpan={2} minHeight="250px" minWidth="300px">
            <VStack>
              <Text noOfLines={1} fontSize={"4xl"} alignContent={"start"}>Dapper Dino #1818</Text>
              <Image src='https://img.dapperdinos.com/thumb/dinos/vY0uUdtS8R4P3cM.png' alt='Dino Image' />
            </VStack>

        </GridItem>

        {/* Dino Stats */}
        { dino && dino.stats &&
          <Stats acceleration={dino.stats.acceleration}
            agility={dino.stats.agility}
            attack={dino.stats.attack}
            defense={dino.stats.defense}
            health={dino.stats.health}
            speed={dino.stats.speed}
            bonusPoints={dino.stats.bonusPoints}
          />
        }

        {/* TODO: Set Properties */}
        <Hide>
          <GridItem colSpan={6} colStart={1}>
            <Traits title="Peek-a-boo" />
          </GridItem>
        </Hide>
      </Grid>
  </ChakraProvider>
}
export default App;
