const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId, "My Blockchain Job NFT","MBJNFT", "https://my-json-server.typicode.com/kostka-tech/my-blockchain-job-nft/tokens/");
};