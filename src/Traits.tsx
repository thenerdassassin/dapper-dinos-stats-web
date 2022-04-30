import {
    Box,
    Button,
    Collapse,
    Grid,
    Text,
    useDisclosure
  } from "@chakra-ui/react"

interface TraitsProps {
    title: string;
}

export const Traits: React.FC<TraitsProps> = ({title}) => {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Grid>
        <Button onClick={onToggle}>View Traits</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
            <Text>title</Text>
          </Box>
        </Collapse>
      </Grid>
    )
  }