import { FC } from "react";
import { Flex } from "antd";
import TitleMenu from "../../components/TitleMenu/title-menu.component";
import Notification from "../../components/Notification/notification.component";
import { dummyDataNotification } from "../../dummy-data";

const Notifications: FC = () => {
  return (
    <Flex gap={8} vertical>
      <TitleMenu />
      {dummyDataNotification.map((data, index) => (
        <Notification title={data.title} message={data.message} />
      ))}
    </Flex>
  );
};

export default Notifications;
