import React, { useContext } from "react";
import { Web3Consumer } from "../helpers/Web3Context";
import { Splash } from "./../components/Splash";

function About({ web3 }) {
  console.log(`🗄 web3 context:`, web3);

  return <Splash />;
}

export default Web3Consumer(About);
