import { FC } from "react";
import { Layout, Flex, Avatar, Badge } from "antd";
import { IoNotificationsOutline } from "react-icons/io5";

const { Header } = Layout;

const HeaderComponent: FC = () => {
  return (
    <Header className="bg-white -mx-8">
      <div className="mt-4">
        <Flex justify="space-between">
          <div>
            <h1 className="text-2xl font-extrabold text-red-600">KerjaYuk!</h1>
          </div>
          <Badge dot offset={[-12, 10]}>
            <Avatar
              style={{ backgroundColor: "transparent" }}
              icon={<IoNotificationsOutline color="black" />}
            />
          </Badge>
        </Flex>
      </div>
    </Header>
  );
};

export default HeaderComponent;
