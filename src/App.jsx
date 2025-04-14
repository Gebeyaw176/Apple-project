import { useState } from "react";
import Header from "./Componenets/Header/Header";
import AlertSection from "./Componenets/MainSection/AlertSection";
import SectionOne from "./Componenets/SectionOne/SectionOne";
import SectionTwo from "./Componenets/SectionTwo/SectionTwo";
import SectionThree from "./Componenets/SectionThree/SectionThree";
import SectionFour from "./Componenets/SectionFour/SectionFour";
import SectionFive from "./Componenets/SectionFive/SectionFive";
import SectionSix from "./Componenets/SectionSix/SectionSix";
import Footer from "./Componenets/Footer/Footer";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import YoutubeVideos from "./Componenets/YoutubeVideos/YoutubeVideos";
import MainSection from "./Componenets/MainSection/MainSection";
import { Route, Routes } from "react-router-dom";
import Mac from "./Componenets/pages/Mac";
import Iphone from "./Componenets/pages/Iphone";
import Ipad from "./Componenets/pages/ipad";
import Watch from "./Componenets/pages/watch";
import Tv from "./Componenets/pages/tv";
import Music from "./Componenets/pages/Music";
import Support from "./Componenets/pages/Support";
import Four04 from "./Componenets/pages/Four04";
import Sharedpage from "./Componenets/Sharedpage/Sharedpage";
import Search from "./Componenets/pages/Search";
import Cart from "./Componenets/pages/Cart";
function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Sharedpage />}> */}
          <Route path="/" element={<MainSection />}></Route>
          <Route path="Mac" element={<Mac />}></Route>
          <Route path="iphone" element={<Iphone />}></Route>
          <Route path="Ipad" element={<Ipad />}></Route>
          <Route path="Watch" element={<Watch />}></Route>
          <Route path="Tv" element={<Tv />}></Route>
          <Route path="Music" element={<Music />}></Route>
          <Route path="Support" element={<Support />}></Route>
          <Route path="*" element={<Four04 />}></Route>
          <Route path="Search" element={<Search />}></Route>
          <Route path="Cart" element={<Cart />}></Route>
        {/* </Route> */}
      </Routes>
      <AlertSection/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      // <YoutubeVideos/>
      <Footer />
    </>
  );
}
export default App;
