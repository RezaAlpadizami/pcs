import { FC } from "react";

import { Layout, Flex } from "antd";

import "swiper/css";
import "swiper/css/pagination";

import "../../index.css";
import HeaderComponent from "../../components/Header/header.component";
import ProfileCard from "../../components/Profile/profile.component";
import ActivitysToday from "../../components/Activitys/activitys.component";
import SliderComponent from "../../components/Slider/slider.component";
import ListOnlineComponent from "../../components/ListOnline/list-online.component";
import MenuFooter from "../../components/MenuFooter/menu-footer.component";

const Dashboard: FC = () => {
  return (
    <div className="w-[30vw] bg-white">
      <Flex>
        <Layout className="rounded-lg overflow-hidden w-full bg-white gap-8 pb-28 relative">
          <HeaderComponent />
          <ProfileCard />
          <ActivitysToday />
          <SliderComponent />
          <ListOnlineComponent />
          <MenuFooter />
        </Layout>
      </Flex>
    </div>
  );
};
export default Dashboard;
