// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./Auction.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract AuctionManager {
    uint _auctionIdCounter; // The current count as Id
    mapping(uint => Auction) public auctions;

    function createAuction(
        uint _endTime,
        uint _minIncrement,
        uint _directBuyPrice,
        uint _startPrice,
        address _nftAddress,
        uint _tokenId
    ) external returns (bool) {
        require(_directBuyPrice > 0);
        require(_startPrice < _directBuyPrice);
        require(_endTime > 5 minutes);

        uint auctionId = _auctionIdCounter++;

        Auction auction = new Auction(
            msg.sender,
            _endTime,
            _minIncrement,
            _directBuyPrice,
            _startPrice,
            _nftAddress,
            _tokenId
        );

        IERC721 _nftToken = IERC721(_nftAddress);
        _nftToken.transferFrom(msg.sender, address(auction), _tokenId);
        auctions[auctionId] = auction;

        return true;
    }


    function getAuctions()
        external
        view
        returns (address[] memory _auctions)
    {
        _auctions = new address[](_auctionIdCounter);
        for (uint i = 0; i < _auctionIdCounter; i++) {
            _auctions[i] = address(auctions[i]);
        }
        return _auctions;
    }

    function getAuctionInfo(address[] calldata _auctionsList)
        external
        view
        returns (
            uint256[] memory directBuy,
            address[] memory owner,
            uint256[] memory highestBid,
            uint256[] memory tokenIds,
            uint256[] memory endTime,
            uint256[] memory startPrice,
            uint256[] memory auctionState
        )
    {
        directBuy = new uint256[](_auctionsList.length);
        owner = new address[](_auctionsList.length);
        highestBid = new uint256[](_auctionsList.length);
        tokenIds = new uint256[](_auctionsList.length);
        endTime = new uint256[](_auctionsList.length);
        startPrice = new uint256[](_auctionsList.length);
        auctionState = new uint256[](_auctionsList.length);

        for (uint256 i = 0; i < _auctionsList.length; i++) {
            directBuy[i] = Auction(auctions[i]).directBuyPrice(); // get the direct buy price
            owner[i] = Auction(auctions[i]).creator(); // get the owner of the auction
            highestBid[i] = Auction(auctions[i]).maxBid(); // get the highest bid
            tokenIds[i] = Auction(auctions[i]).tokenId(); // get the token id
            endTime[i] = Auction(auctions[i]).endTime(); // get the end time
            startPrice[i] = Auction(auctions[i]).startPrice(); // get the start price
            auctionState[i] = uint(Auction(auctions[i]).getAuctionState()); // get the auction state
        }

        return (
            directBuy,
            owner,
            highestBid,
            tokenIds,
            endTime,
            startPrice,
            auctionState
        );
    }
}