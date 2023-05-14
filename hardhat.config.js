/**
* @type import('hardhat/config').HardhatUserConfig
*/

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
 solidity: {
   version: "0.8.18",
   settings: {
     optimizer: {
       enabled: true,
       runs: 200,
     },
   },
 },
 networks: {
   hardhat: {},
   ethereum: {
     url: "https://api.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet",
     accounts: [process.env.MNEMONIC],
   },
   sepolia: {
     url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
     accounts: [process.env.MNEMONIC],
   },
 },
};