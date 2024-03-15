import { Flex, Typography } from "antd";
import { FC } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const TitleMenu: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start w-full p-4 bg-white shadow-md">
      <Flex gap="middle">
        <IoIosArrowRoundBack
          className="mt-1 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <Text>Notifications</Text>
      </Flex>
    </div>
  );
};

export default TitleMenu;
