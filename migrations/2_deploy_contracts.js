const Ballots = artifacts.require("Ballot");
const NFT = artifacts.require("NFT");
const Market = artifacts.require("Market");

module.exports = function (deployer) {
  var namesOfProposal = ["dhyey", "Fenil", "Heet", "NOTA"];
  deployer.deploy(Ballots, namesOfProposal);
  deployer.deploy(Ballots);
  deployer.deploy(NFT);
  deployer.deploy(Market);
};
