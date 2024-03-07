import { FC } from "react";
import { LuClock6, LuClock9 } from "react-icons/lu";
import { PiClockClockwiseBold } from "react-icons/pi";
import { Layout, Flex, Typography } from "antd";

const ActivitysToday: FC = () => {
  const { Content } = Layout;
  const { Text } = Typography;
  return (
    <Content className="mx-5">
      <Flex gap="middle" vertical>
        <Text className="font-bold text-base">Today's activity</Text>
        <div className="flex justify-around -mx-4">
          <div className="flex flex-col items-center gap-1">
            <LuClock9 color="red" className="w-6 h-6" />
            <Text className="font-bold">08:30</Text>
            <Text className="text-xs">Check In</Text>
          </div>
          <div className="flex flex-col items-center gap-1">
            <PiClockClockwiseBold color="red" className="w-6 h-6" />
            <Text className="font-bold text-red-600">03:00:00</Text>
            <Text className="text-xs">Working Hours</Text>
          </div>
          <div className="flex flex-col items-center gap-1">
            <LuClock6 color="red" className="w-6 h-6" />
            <Text className="font-bold">--:--</Text>
            <Text className="text-xs">Check Out</Text>
          </div>
        </div>
      </Flex>
    </Content>
  );
};

export default ActivitysToday;
