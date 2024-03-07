import { FC } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Layout, Flex, Typography, Card } from "antd";

import "swiper/css";
import "swiper/css/pagination";

import "../../index.css";
import profileImg2 from "../../assets/profile-img-2.png";
import { dummyDataSlider } from "../../dummy-data";

const { Content } = Layout;
const { Text } = Typography;

const SliderComponent: FC = () => {
  return (
    <Content className="mx-5">
      <Flex gap="middle" vertical>
        <Text className="font-bold text-sm">PCS News</Text>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
        >
          {dummyDataSlider.map((data, index) => (
            <SwiperSlide key={index}>
              <Card>
                <Flex vertical gap="small">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500 overflow-hidden">
                        <img src={profileImg2} alt="gambar2" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <Text className="font-bold text-orange-600">
                          {data.name}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <Text className="text-xs">{data.day}</Text>
                      <Text className="text-xs">{data.date}</Text>
                    </div>
                  </div>
                  <div className="flex flex-col mx-2">
                    {data.content.map((paragraph, idx) => (
                      <Text key={idx}>{paragraph}</Text>
                    ))}
                  </div>
                </Flex>
              </Card>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <Card>
              <Flex vertical gap="small">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500 overflow-hidden">
                      <img src={profileImg2} alt="gambar2" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <Text className="font-bold text-orange-600">
                        Ana Riswati
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Text className="text-xs">Senin</Text>
                    <Text className="text-xs">30 Mei 2022</Text>
                  </div>
                </div>
                <div className="flex flex-col mx-2">
                  <Text>
                    Kalimat 1 - Lorem ipsum dolor sit amet, consectetur
                  </Text>
                  <Text>
                    Kalimat 2 - Lorem ipsum dolor sit amet, consectetur
                  </Text>
                  <Text>
                    Kalimat 3 - Lorem ipsum dolor sit amet, consectetur
                  </Text>
                  <Text>
                    Kalimat 4 - Lorem ipsum dolor sit amet, consectetur
                  </Text>
                </div>
              </Flex>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Flex vertical gap="small">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500 overflow-hidden">
                      <img src={profileImg2} alt="gambar2" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <Text className="font-bold text-orange-600">
                        Ana Riswati
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Text className="text-xs">Senin</Text>
                    <Text className="text-xs">30 Mei 2022</Text>
                  </div>
                </div>
                <div className="flex flex-col mx-2">
                  <Text>
                    Kalimat 1 - Lorem ipsum dolor sit amet, consectetur
                  </Text>
                  <Text>
                    Kalimat 2 - Lorem ipsum dolor sit amet, consectetur
                  </Text>
                  <Text>
                    Kalimat 3 - Lorem ipsum dolor sit amet, consectetur
                  </Text>
                  <Text>
                    Kalimat 4 - Lorem ipsum dolor sit amet, consectetur
                  </Text>
                </div>
              </Flex>
            </Card>
          </SwiperSlide> */}
        </Swiper>
      </Flex>
    </Content>
  );
};

export default SliderComponent;
