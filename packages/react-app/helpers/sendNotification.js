import * as EpnsAPI from "@epnsproject/sdk-restapi";
import * as ethers from "ethers";

// const PK = "your_channel_address_secret_key"; // channel private key
// const Pkey = `0x${PK}`;
// const signer = new ethers.Wallet(Pkey);

export const sendNotification = async ({
  web3,
  templateSubject,
  templateMessage,
  templateMedia,
  templateUrl,
  segmentUsers,
}) => {
  const signer = web3.userSigner;
  const recipients = segmentUsers.map(user => `eip155:42:${user}`);
  try {
    const apiResponse = await EpnsAPI.payloads.sendNotification({
      signer,
      type: 4, // target
      identityType: 2, // direct payload
      notification: {
        title: templateSubject,
        body: templateMessage,
      },
      payload: {
        title: templateSubject,
        body: templateMessage,
        cta: templateUrl,
        img: templateMedia,
      },
      recipients, // recipient address
      channel: "eip155:42:0xAC457D4ED1c33fDFd19ad37C33fCdBb0168B6514", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};
