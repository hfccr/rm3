import React from "react";
import { Dashboards as DashboardsComponent } from "./../../components/Dashboards";
import { CompleteToContinue } from "../../components/CompleteToContinue";
import { Web3Consumer } from "./../../helpers/Web3Context";

function Dashboards({ web3 }) {
  return <CompleteToContinue ChildComponent={DashboardsComponent} web3={web3} requiresServices />;
}

export default Web3Consumer(Dashboards);
