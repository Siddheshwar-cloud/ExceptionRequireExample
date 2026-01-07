const hre = require("hardhat");

async function main() {
    const ExceptionExample = await ethers.getContractFactory("ExceptionExample");

    const exceptionExample = await ExceptionExample.deploy();

    await exceptionExample.waitForDeployment();

    console.log(
        "ExceptionExample deployed to:",
        await exceptionExample.getAddress()
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
