import React from "react";
import Header from "./Header";
import { Web3Consumer } from "./../helpers/Web3Context";

function HeaderContainer({ web3 }) {
  return <Header web3={web3} />;
}

export default Web3Consumer(HeaderContainer);
