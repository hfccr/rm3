import React from "react";
import { Publish as PublishComponent } from "./../../components/Publish";
import { CompleteToContinue } from "../../components/CompleteToContinue";
import { Web3Consumer } from "./../../helpers/Web3Context";

function Publish({ web3 }) {
  return <CompleteToContinue ChildComponent={PublishComponent} web3={web3} requiresServices />;
}

export default Web3Consumer(Publish);
