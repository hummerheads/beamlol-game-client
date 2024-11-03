import { useEffect } from "react";
import { Outlet } from "react-router-dom";
const tele = window.Telegram.WebApp;







const Main = () => {

  useEffect(() => {
    tele.ready();
  })
  return (
    <div className="min-h-full max-h-full">
      <Outlet />
    </div>
  );
};

export default Main;

