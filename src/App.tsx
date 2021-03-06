import React, {
  useState,
  useEffect,
} from "react"
import {
  Alert,
  AlertIcon,
  ChakraProvider,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Hide,
  Switch,
  Text,
  theme
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { Traits } from "./components/Traits"
import { Stats } from "./components/Stats"
import { Dino } from "./services/DinoModel"

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [dinoNumber, setDinoNumber] = useState<number | undefined>(undefined)
  const [dino, setDino] = useState<Dino | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [isKarma, setIsKarma] = useState<boolean>(false)

  const onDinoNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.currentTarget) {
      const targetValue = event.target.value
      if (targetValue) {
        setSearchValue(targetValue.replace(/\D/, ''))
      } else {
        setSearchValue('')
      }
    }
  }

  const getDino = () => {
    setIsError(false)
    const searchNumber = parseInt(searchValue)
    if (searchNumber || searchNumber === 0) {
      setIsLoading(true)
      setDinoNumber(parseInt(searchValue))
      setSearchValue('')
    }
  }

  const onLoadedImage = () => { setIsLoading(false) }
  const onIsKarmaSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.currentTarget) {
      setIsKarma(event.currentTarget.checked)
    }
  }

  useEffect(() => {
    const fetchDino = async () => {
      if (dinoNumber || dinoNumber === 0) {
        console.log("Dino Number: " + dinoNumber + ", isKarma:" + isKarma)
        const url = "https://5fkdfj7lgf.execute-api.us-east-1.amazonaws.com/dino/" + dinoNumber + "?isKarma=" + isKarma
        await fetch(url)
          .then(
            response => response.json())
          .then(
            dinoJson => {
              console.log(dinoJson)
              setDino(JSON.parse(dinoJson))
            }
          ).catch(err => {
            console.error("2: " + err)
            setDino(undefined)
            setIsLoading(false)
            setIsError(true)
          })
      }
    }

    fetchDino().catch(console.error)
  }, [dinoNumber]);

  return <ChakraProvider theme={theme}>
    <Heading p='25' bg='blue.900' textColor='white' size='2xl'>Dapper Dino Data</Heading>
    <Grid minH="50vh" maxH="100vh" p={25} gap={4} fontSize={"x-large"} fontFamily={"flintstone"}>
      {/* Dino Title */}
      <GridItem rowSpan={1} colSpan={1}>
        <Text noOfLines={1} fontSize={"4xl"} alignContent={"start"} fontWeight="extrabold">Dapper Dino #{dinoNumber}</Text>
      </GridItem>

      {/* Search Bar */}
      <GridItem rowSpan={1} colSpan={3} colStart={4}>
        <FormControl>
          <HStack>
            <Input placeholder='Dino Number' size='md' type="text" pattern="[0-9]*" width="200px"
              onInput={onDinoNumberChange} value={searchValue} isRequired />
            <FormLabel htmlFor='is-karma-switch' mb='0'>
              Is Karma Dino?
            </FormLabel>
            <Switch id='is-karma-switch' onChange={onIsKarmaSwitch} />
            <Button leftIcon={<SearchIcon />} colorScheme='blue' variant='outline'
              isLoading={isLoading} type='submit' onClick={getDino}>
              Find Dino
            </Button>
          </HStack>
        </FormControl>
      </GridItem>

      <GridItem rowSpan={2} colSpan={2} rowStart={2} minHeight="250px" minWidth="300px" maxWidth="50vh">
        {dino && dino.traits &&
          <Image src={dino.traits.image} alt='Dino Image' fit="fill" loading='eager' onLoad={onLoadedImage} />
        }
      </GridItem>

      {/* Dino Stats */}
      {dino && dino.stats ?
        <Stats acceleration={dino.stats.acceleration}
          agility={dino.stats.agility}
          attack={dino.stats.attack}
          defense={dino.stats.defense}
          health={dino.stats.health}
          speed={dino.stats.speed}
          bonusPoints={dino.stats.bonusPoints}
          percentileRanks={dino.percentileRanks}
        /> :
        isError &&
        <GridItem colSpan={3} colStart={2} rowStart={2}>
          <Alert status='error'>
            <AlertIcon />
            Error retrieving Dino #{dinoNumber}.
          </Alert>

        </GridItem>

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
