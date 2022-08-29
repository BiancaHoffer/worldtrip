import { Box, GridItem, SimpleGrid, Grid } from "@chakra-ui/react";
import { Card } from './Card';

export function Cards() {
    return (
        <Grid 
            w="100%"
            maxWidth="1160px"
            pt={["6", "12", "24"]}
            px="8"
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr 1fr", "repeat(5, 1fr)" ]} 
            justifyContent="space-between"
            gap={[1, 5]}  
        >
            <GridItem>
                <Card text="vida noturna" icon="cocktail" />
            </GridItem>
            <GridItem>
                <Card text="praia" icon="surf" />
            </GridItem>
            <GridItem>
                <Card text="moderno" icon="building" />
            </GridItem>
            <GridItem>
                    <Card text="clássico" icon="museum" />
            </GridItem>
            <GridItem colSpan={[2, 2, 1]} >
                <Card text="e mais..." icon="earth" />
            </GridItem>  
        </Grid>
   
    );
}