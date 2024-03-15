import { FC } from "react";
import { LiaCoinsSolid } from "react-icons/lia";
import { PiCheckLight } from "react-icons/pi";
import { GiPill } from "react-icons/gi";
import { Avatar, Badge, Typography } from "antd";

const { Text } = Typography;

type INotificationProps = {
  title: string;
  message: string;
};

const Notification: FC<INotificationProps> = ({ title, message }) => {
  return (
    <div className="flex justify-between mx-4">
      <div className="flex gap-2">
        <div className="mt-2">
          <Badge
            count={
              title.toLowerCase() === "reimbursement" ? (
                <PiCheckLight
                  style={{
                    padding: "1px",
                    borderRadius: "100%",
                    backgroundColor: "#20c72d",
                    color: "#ffffff",
                  }}
                />
              ) : (
                <GiPill
                  style={{
                    padding: "1px",
                    borderRadius: "100%",
                    backgroundColor: "#20c72d",
                    color: "#ffffff",
                  }}
                />
              )
            }
            offset={[-5, 35]}
          >
            <Avatar
              shape="square"
              style={{
                background: "linear-gradient(to right, #c31432, #240b36)",
              }}
              icon={<LiaCoinsSolid className="text-yellow-600" />}
              size="large"
            />
          </Badge>
        </div>
        <div className="flex flex-col w-[80%]">
          <Typography.Title level={4} style={{ marginBottom: "-2px" }}>
            {title}
          </Typography.Title>
          <Text className="text-xs text-justify">{message}</Text>
        </div>
      </div>
      <div className="w-[20%]">
        <Text className="text-xs text-gray-300">Today</Text>
      </div>
    </div>
  );
};

export default Notification;
