import Footer from "../../components/footer/Footer";
import LeftBar from "../../components/leftbar/LeftBar";
import RightBar from "../../components/Rightbar/RightBar";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  return (
    <div
      className="text-center bg-opacity-10 bg-[url('https://i.ibb.co.com/b7csHpT/jack-b-zgr-QNSgp38c-unsplash.jpg')]"
    >
      <Topbar></Topbar>
      <div className="flex justify-center">
        <div className="">
          <LeftBar></LeftBar>
        </div>
        <div className=""> 
          <img className="" src="/banner.png" alt="" />
        </div>
        <div className="">
          <RightBar></RightBar>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
