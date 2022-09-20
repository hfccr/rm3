import * as EpnsAPI from "@epnsproject/sdk-restapi";
import * as ethers from "ethers";

// const PK = "your_channel_address_secret_key"; // channel private key
// const Pkey = `0x${PK}`;
// const signer = new ethers.Wallet(Pkey);

export const sendNotification = async web3 => {
  const signer = web3.userSigner;
  try {
    const apiResponse = await EpnsAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `Notification TITLE:`,
        body: `Notification BODY`,
      },
      payload: {
        title: `Hie From application`,
        body: `Hello From Application`,
        cta: "",
        img: "",
      },
      recipients: "eip155:42:0xa402b7b41cBae6C6df4e7FB0076753d83b2bBc88", // recipient address
      channel: "eip155:42:0xAC457D4ED1c33fDFd19ad37C33fCdBb0168B6514", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};
