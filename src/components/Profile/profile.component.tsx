import { FC } from "react";

import { Layout, Flex, Typography, Card } from "antd";

import profileImg from "../../assets/profile-img.jpg";

const ProfileCard: FC = () => {
  const { Content } = Layout;
  const { Text } = Typography;
  return (
    <Content className="mx-5 -mt-5">
      <Flex gap="middle" vertical>
        <Text className="font-semibold">Hi, Good Morning!</Text>
        <Card className="rounded-2xl bg-gradient-to-br from-red-600 to-purple-700">
          <Flex gap="middle" vertical>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src={profileImg} alt="gambar" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold text-white">Tabay</h2>
                  <Text className="text-white italic text-xs">
                    UI/UX Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col">
                <Text className="text-xs text-white italic">Member since</Text>
                <Text className="text-lg text-white font-bold">
                  01 Juni 2021
                </Text>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <Text className="text-white font-light">Location</Text>
                <Text className="text-white font-bold">Kantor Sahid</Text>
              </div>
              <div className="flex flex-col justify-end">
                <Text className="text-white italic font-light">ICO</Text>
              </div>
            </div>
          </Flex>
        </Card>
      </Flex>
    </Content>
  );
};

export default ProfileCard;
