import React from "react";
import { Campaigns as CampaignsComponent } from "./../../components/Campaigns";
import { CompleteToContinue } from "../../components/CompleteToContinue";
import { Web3Consumer } from "./../../helpers/Web3Context";

function Campaigns({ web3 }) {
  return <CompleteToContinue ChildComponent={CampaignsComponent} web3={web3} requiresServices />;
}

export default Web3Consumer(Campaigns);
