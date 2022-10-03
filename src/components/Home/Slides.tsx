import Link from 'next/link';

import { Flex, Heading, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { useState } from 'react';

interface Slides {
  uid?: string;
  data: {
    title: string;
    subtitle: string;
    image: {
      url: string;
    }
  } 
}
interface SlidesProps {
  datas: Slides[]
}

export function Slides({ datas }: SlidesProps) {
  const [dataSlides, setDataSlides] = useState(datas);
  console.log()
  return (
    <Flex
      w="100%"
      h={["250px","450px"]}
      maxWidth={1240}
    > 
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{clickable: true}}
        slidesPerView={1}
      >
        {dataSlides.map(slide => (
          <SwiperSlide key={slide.uid}>
            <Flex
              bgImage={`url('${slide.data.image.url}')`}
              bgPosition="center"
              bgRepeat="no-repeat"
              w="100%"
              h="100%"
              justify="center"
              align="center"
            >
              <Link href={`/Continent/${slide.uid}`}>
                <a>
                  <Heading
                    fontSize={["1.5rem", "3rem"]}
                    textAlign="center"
                    color="white"
                  >
                    {slide.data.title}
                  </Heading>
                  <Text
                    fontSize={["0.875rem", "1.5rem"]}
                    color="white"
                    m="4"
                    textAlign="center"
                  >
                    {slide.data.subtitle}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}