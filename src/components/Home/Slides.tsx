import Link from 'next/link';

import { Flex, Heading, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';

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
        {datas.map(data => (
          <SwiperSlide key={data.uid}>
            <Flex
              bgImage={`url('${data.data.image.url}')`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              w="100%"
              h="100%"
              justify="center"
              align="center"
            >
              <Link href={`/Continent/${data.uid}`}>
                <a>
                  <Heading
                    fontSize={["1.5rem", "3rem"]}
                    textAlign="center"
                    color="white"
                  >
                    {data.data.title}
                  </Heading>
                  <Text
                    fontSize={["0.875rem", "1.5rem"]}
                    color="white"
                    m="4"
                    textAlign="center"
                  >
                    {data.data.subtitle}
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