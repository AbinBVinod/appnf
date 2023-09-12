// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
        _tokenIdCounter.increment();
    }

    function burnNFT(uint256 tokenId) public onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        _burn(tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory tokenURI) public onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        _setTokenURI(tokenId, tokenURI);
    }
}
