import React, { useContext } from "react";
import NavigationBar from "./NavigationBar";
import { UserContext } from "./UserContext";

function Header() {
  // const { user } = useContext(UserContext);
  //console.log(user)

  return (
    <>
    <div itemID="header">
      <div className="">
        <NavigationBar className={"col-lg-10 offset-lg-1 my-4"}></NavigationBar>
      </div>
    </div>
    </>
  );
}

export default Header;
