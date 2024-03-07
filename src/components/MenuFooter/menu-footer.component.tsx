import { FC } from "react";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { SiGoogleforms } from "react-icons/si";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { Layout, Typography } from "antd";

import "swiper/css";
import "swiper/css/pagination";

import "../../index.css";

const MenuFooter: FC = () => {
  const { Footer } = Layout;
  const { Text } = Typography;
  return (
    <Footer className="fixed bottom-0 py-3 z-10 bg-white">
      <div className="flex gap-12 -mx-7">
        <div className="flex flex-col items-center gap-1">
          <IoHome className="w-6 h-6 text-red-600" />
          <Text className="text-xs text-red-600">Home</Text>
        </div>
        <div className="flex flex-col items-center  gap-1">
          <FaRegCalendarCheck className="w-6 h-6" />
          <Text className="text-xs">Attendance</Text>
        </div>
        <div className="flex flex-col items-center z-10 -mt-10  gap-1">
          <div className="p-5 bg-red-600 rounded-full">
            <VscSignOut className="w-6 h-6 text-white" />
          </div>
          <Text className="text-xs text-red-600">Check Out</Text>
        </div>
        <div className="flex flex-col items-center  gap-1">
          <SiGoogleforms className="w-6 h-6" />
          <Text className="text-xs">Form</Text>
        </div>
        <div className="flex flex-col items-center  gap-1">
          <IoSettingsSharp className="w-6 h-6" />
          <Text className="text-xs">Setting</Text>
        </div>
      </div>
      <div className="absolute inset-x-0 z-0 top-0 h-1 bg-gradient-to-b from-gray-200 via-transparent to-transparent" />
    </Footer>
  );
};

export default MenuFooter;
