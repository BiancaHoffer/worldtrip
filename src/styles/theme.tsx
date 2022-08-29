import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        white: {
            "200": "#F5F8FA"
        },
        yellow: {
           "500": "#FFBA08"
        },
        gray: {
            "100": "#DADADA",
            "400": "#999999",
            "500": "#47585B",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.500'
            }
        }
    }
})