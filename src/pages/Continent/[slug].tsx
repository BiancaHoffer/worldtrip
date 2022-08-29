import { useState } from "react";

import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import { getPrismicClient } from "../../services/prismic";
import * as prismicH from '@prismicio/helpers';

import { VStack, Flex, Heading, Grid, InputGroup } from "@chakra-ui/react";

import { BannerContinent } from "../../components/Continent/bannerContinent";
import { CardCity } from "../../components/Continent/CardCity";
import { InfosContinent } from "../../components/Continent/InfosContinent";
import { TextContinent } from "../../components/Continent/TextContinent";
import { Header } from "../../components/Header";

interface Datas {
    uid?: string;
    data: {
        title: string;
        banner: {
            url: string;
        };
        text: string;
        infos: {
            number: string;
            info: string;
            boolean: boolean;
            morecitys: string;
        };
        booleancity: boolean;
        citys: {
            imagecity: {
                url: string;
            };
            city: string;
            country: string;
            flag: {
                url: string;
            };
        };
    };
}

interface ContinentProps {
    continent: Datas;
}

export default function Continent({ continent }: ContinentProps) {
    const [data, setData] = useState(continent);

    return (
        <>
            <Head>
                <title>{`${data.data.title} ● worldtrip`}</title>
            </Head>

           <VStack>
                <Header />  
                <BannerContinent 
                    title={data.data.title}
                    banner={data.data.banner.url}
                />
                <Flex
                     w="100%"
                     maxWidth={1160}
                     justifyContent="center"
                     py={["4","8", "8", "20"]}
                >
                    <Grid   
                        templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)" ]}
                        alignItems="center"
                        px={["4", "4", "4", "4", "0"]}
                        gap={[3, 6,  6,  8]}
                    >
                        <TextContinent text={data.data.text} />
                        <InfosContinent infos={data.data.infos} />   
                    </Grid>
                </Flex>

                <Flex
                    w="100%"
                    maxWidth={1160}
                    justifyContent="center"
                    align={["flex-start", "center", "center", "flex-start", "flex-start"]}
                    direction="column"
                >
                    {data.data.booleancity === false ? 
                        <></>
                    :
                        <>
                            <Heading 
                                fontWeight={["500", "500", "600", "600"]}
                                textAlign="start" 
                                fontSize={["1.5rem", "2.25rem", "2,25rem", "2.25rem"]}
                                mx="4"
                                mt={["6", "6", "8", "2"]}
                                mb="4"
                            >   
                                Cidades +100
                            </Heading>

                            <Grid
                                templateColumns={["1fr","1fr", "1fr 1fr", "1fr 1fr 1fr", "repeat(4, 1fr)"]}
                                gap={8}
                                my="8"
                                alignSelf="center"
                            >
                                <CardCity citys={data.data.citys} />
                            </Grid>
                        </>
                    }
                    
                </Flex>
           </VStack>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient({});
    const posts = await prismic.getByType('posts', {});
    const paths = posts.results.map(post => {
        return { params: { slug: post.uid } };
    })

    return {
        paths,
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;
    const prismic = getPrismicClient({});
    const response = await prismic.getByUID('posts', String(slug), {})
    
    const continent: Datas = {
        uid: response.uid,
        data: {
            title: response.data.title,
            banner: {
                url: prismicH.asImageSrc(response.data.banner)
            },
            text: prismicH.asText(response.data.text),
            infos: response.data.infos.map(info => {
                return {
                    number: info.number,
                    info: info.info,
                    boolean: info.boolean,
                    morecitys: info.morecitys,
                }
            }),
            booleancity: response.data.booleancity,
            citys: response.data.citys.map(city => {
                return {
                    imagecity: {
                        url: prismicH.asImageSrc(city.imagecity),
                    },
                    city: city.city,
                    country: city.country,
                    flag: {
                        url: prismicH.asImageSrc(city.flag),
                    },
                }
            }) 
        },    
    }

    //console.log(JSON.stringify(continent, null, 2));
    return {
        props: {
            continent,
        }
    }
}