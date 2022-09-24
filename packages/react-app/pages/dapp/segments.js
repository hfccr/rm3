import React from "react";
import { Segments as SegmentsComponent } from "./../../components/Segments";
import { CompleteToContinue } from "../../components/CompleteToContinue";
import { Web3Consumer } from "./../../helpers/Web3Context";

function Segments({ web3 }) {
  return <CompleteToContinue ChildComponent={SegmentsComponent} web3={web3} requiresServices />;
}

export default Web3Consumer(Segments);
