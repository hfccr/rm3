import React, { useContext } from "react";
import { Web3Consumer } from "../../helpers/Web3Context";
import { Contract, Account, Header } from "../../components";

function About({ web3 }) {
  console.log(`🗄 web3 context:`, web3);

  return (
    <>
      <>dapp</>
    </>
  );
}

export default Web3Consumer(About);
