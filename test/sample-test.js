const { ethers } = require("hardhat");

describe("Demo", function () {
  it("Set and Get String", async function () {
    const Demo = await ethers.getContractFactory("Demo");
    const demo = await Demo.deploy();
    await demo.deployed();

    const setinfo = await demo.setInfo("Hola, World!");

    // wait until the transaction is mined
    await setinfo.wait();

    const getinfo = await demo.getInfo();

    console.log(getinfo);
  });
});
