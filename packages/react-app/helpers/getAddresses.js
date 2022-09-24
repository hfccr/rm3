import { utils } from "ethers";

export const getAddresses = rows => {
  const addresses = new Set();
  rows.forEach(row => {
    Object.keys(row).forEach(key => {
      const value = row[key];
      if (utils.isAddress(value)) {
        addresses.add(value);
      }
    });
  });
  return [...addresses];
};
