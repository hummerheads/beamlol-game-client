import Footer from "../../components/footer/Footer";
import LeftBar from "../../components/leftbar/LeftBar";
import RightBar from "../../components/Rightbar/RightBar";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  return (
    <div className="text-center mx-5" >
        <Topbar></Topbar>
        <div className="flex justify-between">
            <div className="mt-10">
                <LeftBar></LeftBar>
            </div>
            <div>
                <img className="bg-black" src="/takla.webp" alt="" />
            </div>
            <div className="mt-10">
                <RightBar></RightBar>
            </div>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
