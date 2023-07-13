const hre = require("hardhat"); // env for hardhat

async function main() {
    //deploy
  const HelloW = await hre.ethers.deployContract("HelloW");

  await HelloW.waitForDeployment();

  console.log("Hello deployed successfully!")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
