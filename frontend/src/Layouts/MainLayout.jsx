import {  useState } from "react";

import Footer from "../componets/Layout/Footer/Footer";
import Header from "../componets/Layout/header/Header";
import Proptypes from "prop-types"
import Search from "../componets/Modals/Search/Search";
// import { Dialog } from "../componets/Modals/Dialog/Dialog";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  // const [isDialogShow, setIsDialogShow] = useState(false);

  // useEffect(() => {
  //   const dialogStatus = localStorage.getItem("dialog")
  //     ? JSON.parse(localStorage.getItem("dialog"))
  //     : localStorage.setItem("dialog", JSON.stringify(true));

  //   setTimeout(() => {
  //     setIsDialogShow(dialogStatus);
  //   }, 2000);
  // }, []);

  return (
    <div className="main-layout">
      {/* <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} /> */}
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
