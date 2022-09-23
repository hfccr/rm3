import React, { useContext } from "react";
import { Contract, Account, Header } from "../components";
import { Splash } from "../components/Splash";
import { Web3Consumer } from "../helpers/Web3Context";

function Home({ web3 }) {
  console.log(`🗄 web3 context:`, web3);

  return (
    <>
      {/* Main Page Content start */}
      <div className="flex flex-1 flex-col h-screen w-full items-center">
        <div className="text-center">
          <Splash {...web3} />
          {/* <Contract
            name="YourContract"
            signer={web3.userSigner}
            provider={web3.localProvider}
            address={web3.address}
            blockExplorer={web3.blockExplorer}
            contractConfig={web3.contractConfig}
          /> */}
        </div>
      </div>
    </>
  );
}

export default Web3Consumer(Home);
