import { useState } from "react";

import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import { getPrismicClient } from "../../services/prismic";
import * as prismicH from '@prismicio/helpers';

import { VStack, Flex, Heading, Grid, Text } from "@chakra-ui/react";

import { BannerContinent } from "../../components/Continent/bannerContinent";
import { CardCity } from "../../components/Continent/CardCity";
import { InfosContinent } from "../../components/Continent/InfosContinent";
import { TextContinent } from "../../components/Continent/TextContinent";
import { useRouter } from "next/router";

interface ContinentDatas {
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
  continent: ContinentDatas;
}

export default function Continent({ continent }: ContinentProps) {
  const [dataContinent, setData] = useState(continent);
  const router = useRouter()

  if (router.isFallback) {
    return <Text>Carregando...</Text>
  }

  return (
    <>
      {dataContinent && (
        <>
          <Head>
            <title>{`${dataContinent.data.title} ● worldtrip`}</title>
          </Head>

          <VStack>

            <BannerContinent
              title={dataContinent.data.title}
              banner={dataContinent.data.banner.url}
            />
            <Flex
              w="100%"
              maxWidth={1160}
              justifyContent="center"
              py={["4", "8", "8", "20"]}
            >
              <Grid
                templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
                alignItems="center"
                px={["4", "4", "4", "4", "0"]}
                gap={[3, 6, 6, 8]}
              >
                <TextContinent text={dataContinent.data.text} />
                <InfosContinent infos={dataContinent.data.infos} />
              </Grid>
            </Flex>

            <Flex
              w="100%"
              maxWidth={1160}
              justifyContent="center"
              align={["flex-start", "center", "center", "flex-start", "flex-start"]}
              direction="column"
            >
              {dataContinent.data.booleancity === false ?
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
                    templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr", "repeat(4, 1fr)"]}
                    gap={8}
                    my="8"
                    alignSelf="center"
                  >
                    <CardCity citys={dataContinent.data.citys} />
                  </Grid>
                </>
              }
            </Flex>
          </VStack>
        </>
      )}

    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});
  const { slug } = params;

  const response = await prismic.getByUID('posts', String(slug))

  const continent: ContinentDatas = {
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

  // console.log(JSON.stringify(continent, null, 2));
  return {
    props: {
      continent,
    },
    revalidate: 60 * 30,
  }
}