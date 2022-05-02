import {
  useState,
  useEffect,
} from "react"
import {
  ChakraProvider,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Input,
  theme,
  Hide,
  Text,
  VStack,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { Traits } from "./components/Traits"
import { Stats } from "./components/Stats"
import { Dino } from "./services/DinoModel"

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [dinoNumber, setDinoNumber] = useState<number|undefined>(undefined)
  const [dino, setDino] = useState<Dino | undefined>(undefined)

  const onDinoNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Validate Value
    setSearchValue(event.currentTarget.value)
  }

  const getDino = () => {
    setDinoNumber(parseInt(searchValue))
    setSearchValue('')
  }

  useEffect(() => {
    const fetchDino = async() => {
      const url = "https://5fkdfj7lgf.execute-api.us-east-1.amazonaws.com/dino/" + dinoNumber
      const response = await fetch(url)
      const dinoJson = await response.json()
      setDino(JSON.parse(dinoJson))
    }

    fetchDino().catch(console.error)
  }, [dinoNumber]);

  return <ChakraProvider theme={theme}>
      <Grid minH="50vh" maxH="70vh" p={25} gap={4} fontSize={"x-large"} fontFamily={"flintstone"}>
        {/* Dino Title */}
        <GridItem rowSpan={1} colSpan={1}>
          <Text noOfLines={1} fontSize={"4xl"} alignContent={"start"} fontWeight="extrabold">Dapper Dino #{dinoNumber}</Text>
        </GridItem>

        {/* Search Bar */}
        <GridItem rowSpan={1} colSpan={1} colStart={5}>
          <Input placeholder='Dino Number' size='lg' 
            onChange={onDinoNumberChange} value={searchValue}/>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} colStart={6}>
        <Button leftIcon={<SearchIcon />} colorScheme='blue' variant='outline' onClick={getDino}>
          Find Dino
          </Button>
        </GridItem>

        {/* TODO: set Dino Image */}
        <GridItem rowSpan={2} colSpan={2} rowStart={2} minHeight="250px" minWidth="300px">
              <Image src='https://img.dapperdinos.com/thumb/dinos/vY0uUdtS8R4P3cM.png' alt='Dino Image' />
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
