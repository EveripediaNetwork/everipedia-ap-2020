const Web3 = require("web3");
export const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.INFURA_KOVAN_HTTP)
);
