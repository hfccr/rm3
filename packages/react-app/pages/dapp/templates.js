import React from "react";
import { Templates as TemplatesComponent } from "./../../components/Templates";
import { CompleteToContinue } from "../../components/CompleteToContinue";
import { Web3Consumer } from "./../../helpers/Web3Context";

function Templates({ web3 }) {
  return <CompleteToContinue ChildComponent={TemplatesComponent} web3={web3} requiresServices />;
}

export default Web3Consumer(Templates);
