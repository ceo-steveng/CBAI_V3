const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const CBAI = await ethers.getContractFactory("CBAI");
  const cbaiContract = await CBAI.deploy(process.env.URI);

  console.log(`CBAI contract deployed at address: ${cbaiContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });