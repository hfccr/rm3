import React from "react";
import SetupForm from "./SetupForm";

export default function PublisherSetup({ web3 }) {
  return (
    <>
      <SetupForm web3={web3} />
    </>
  );
}
