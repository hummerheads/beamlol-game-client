import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";
const tele = window.Telegram.WebApp;

const Main = () => {

  useEffect(() => {
    tele.ready();
  })
  return (
    <div className="min-h-full max-h-full bg-gray-400">
      <Topbar></Topbar>
      <Outlet/>
      <Footer className="fixed inset-x-0 bottom-0 bg-gray-800 text-white p-4" />
    </div>
  );
};

export default Main;

