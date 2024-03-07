import { FC } from "react";

import { Layout, Flex, Typography, Card, Avatar } from "antd";

import "swiper/css";
import "swiper/css/pagination";

import "../../index.css";
import profileImg2 from "../../assets/profile-img-2.png";
import { dummyAvatars } from "../../dummy-data";

const { Content } = Layout;
const { Text } = Typography;

const ListOnlineComponent: FC = () => {
  return (
    <Content className="mx-5">
      <Flex gap="middle" vertical>
        <Text className="font-bold text-base">Online</Text>
        <Card className="rounded-2xl">
          <Flex gap="middle">
            <Avatar.Group
              maxCount={10}
              size="large"
              maxStyle={{
                color: "#f56a00",
                background: "linear-gradient(to right, #c31432, #240b36)",
                cursor: "pointer",
              }}
            >
              {dummyAvatars.map((avatar, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <Avatar
                    size="large"
                    style={{ backgroundColor: "#f56a00" }}
                    src={profileImg2}
                  />
                  <Text className="font-bold text-[8px]">{avatar.name}</Text>
                  <Text className="text-[8px]">{avatar.company}</Text>
                </div>
              ))}
            </Avatar.Group>
          </Flex>
        </Card>
      </Flex>
    </Content>
  );
};

export default ListOnlineComponent;
