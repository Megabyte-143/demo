const hre = require("hardhat");

async function main() {
  const Demo = await hre.ethers.getContractFactory("Demo");
  const demo = await Demo.deploy();

  await demo.deployed();

  console.log("Contract Deployed to:", demo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
