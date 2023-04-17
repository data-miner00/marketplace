import { ethers } from "hardhat";

async function main() {
  const AuctionManager = await ethers.getContractFactory("AuctionManager");
  const auctionManager = await AuctionManager.deploy();
  await auctionManager.deployed();
  const auctionManagerAddress = auctionManager.address;

  console.log("Auction Manager deployed to: ", auctionManagerAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
