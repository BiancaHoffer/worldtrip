import { useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { getPrismicClient } from "../services/prismic";
import * as prismicH from '@prismicio/helpers';

import { VStack, Text, Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Home/banner";
import { Cards } from "../components/Home/Cards";
import { Divider } from "../components/Home/divider";
import { Slides } from "../components/Home/Slides";

interface Banner {
  uid?: string;
  data: {
    title: string;
    subtitle: string;
    image: {
      url: string
    }
  }
}

interface HomeProps {
  datas: Banner[]
}

export default function Home({datas}: HomeProps) {
  const [banner, setBanner] = useState(datas)
  return (
    <>
      <Head>
        <title>Home ● worldtrip</title>
      </Head>
      
      <VStack as="main" w="100%">
          <Header /> 
          <Banner />
          <Cards />
          <Divider />
          <Text 
            fontSize={["1.25rem", "2.25rem"]} 
            textAlign="center" 
            fontWeight="500"
            pb={["4", "8"]}
           
          >
            Vamos nessa? <br/> Então escolha seu continente 
          </Text>
          
          <Slides
            datas={banner}
          />

          <Footer />
      </VStack>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  
  const response = await prismic.getByType('posts', {})

  const datas = response.results.map(data => {
    return {
      uid: data.uid,
      data: {
        title: data.data.title,  
        subtitle: data.data.subtitle,
        image: {
          url: prismicH.asImageSrc(data.data.image),
        }
      }  
    }
  })

  return {
    props: {
      datas
    }
  }
}

