const baseURL = "https://api.covalenthq.com/v1";
const blockchainChainId = "1";
const demoAddress = "demo.eth";

async function getWalletBalance(chainId, address) {
  const url = new URL(`${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`);
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  console.log(data);
  return data;
}

// Example address request
getWalletBalance(blockchainChainId, demoAddress);
