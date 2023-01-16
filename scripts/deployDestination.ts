import { ethers } from "hardhat";

const main = async () => {
  const DestinationGreeting = await ethers.getContractFactory('DestinationGreeting');
  const destinationGreetingContract = await DestinationGreeting.deploy();
  await destinationGreetingContract.deployed();
  console.log("Contract deployed to:", destinationGreetingContract.address);
  console.log("To verify, run the following command:");
  console.log(`npx hardhat verify --network ${process.env.HARDHAT_NETWORK}`, destinationGreetingContract.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
