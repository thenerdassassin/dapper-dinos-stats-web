import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  Image,
  theme,
  AspectRatio,
} from "@chakra-ui/react"
import { Traits } from "./Traits"
import { Stats } from "./Stats"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" maxH="70vh" p={3} gap={4} bg='#fffcf2'>
        {/* Dino Image */}
        <GridItem rowSpan={2} colSpan={2} minHeight="250px" minWidth="250px">
          <AspectRatio minHeight="250px" ratio={1}>
            <Image src='https://img.dapperdinos.com/thumb/dinos/vY0uUdtS8R4P3cM.png' alt='naruto' /> 
          </AspectRatio>
        </GridItem>

        <Stats acceleration={52}/>

        <GridItem colSpan={6} colStart={1}>
          <Traits title="Peek-a-boo"/>
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
)
