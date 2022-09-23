import React from "react";
import { Web3Consumer } from "../../../helpers/Web3Context";
import { UserSelectionForm } from "./../../../components/User/UserSelectionForm";

function User({ web3 }) {
  return (
    <>
      <UserSelectionForm web3={web3} />
    </>
  );
}

export default Web3Consumer(User);
