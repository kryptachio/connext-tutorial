import { ethers } from "hardhat";

const main = async () => {
  const SourceGreeting = await ethers.getContractFactory('SourceGreeting');
  const sourceGreetingContract = await SourceGreeting.deploy("0x0C70d6E9760DEE639aC761f3564a190220DF5E44");
  await sourceGreetingContract.deployed();
  console.log("Contract deployed to:", sourceGreetingContract.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
