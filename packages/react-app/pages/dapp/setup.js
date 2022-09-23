import React from "react";
import SetupForm from "./../../components/PublisherSetup";
import { CompleteToContinue } from "../../components/CompleteToContinue";
import { Web3Consumer } from "./../../helpers/Web3Context";

function Setup({ web3 }) {
  return <CompleteToContinue ChildComponent={SetupForm} web3={web3} />;
}

export default Web3Consumer(Setup);
