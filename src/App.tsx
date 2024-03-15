import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard.component";
import Notifications from "./pages/Notifications/notifications.component";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#9DB2BF",
              algorithm: true,
            },
            Input: {
              colorPrimary: "#9DB2BF",
              algorithm: true,
            },
          },
        }}
      >
        <div className="w-[30vw]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notification" element={<Notifications />} />
          </Routes>
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
