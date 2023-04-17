// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Auction {
    using SafeMath for uint256; // Prevent overflow when working with uint256

    uint256 public endTime;     // Timestamp for auction to end
    uint256 public startTime;   // Timestamp for commencement of auction
    uint public maxBid;         // Maximum bid so far for the item
    address public maxBidder;   // The address of the maximum bidder
    address public creator;     // The address of the auction creator
    Bid[] public bids;          // A collection of users involved in the bid
    uint public tokenId;        // The id of the token
    bool public isCancelled;    // Whether the auction is ditched by the creator
    bool public isDirectBuy;    // Whether the auction ended early by direct buy
    uint public minIncrement;   // The minimum increament for each subsequent bids
    uint public directBuyPrice; // The price for direct buy
    uint public startPrice;     // The initial price for the auction
    address public nftAddress;  // The address of the NFT contract
    IERC721 _nft;               // The NFT under bid

    enum AuctionState {
        OPEN,
        CANCELLED,
        ENDED,
        DIRECT_BUY
    }

    struct Bid {
        address sender;
        uint256 bid;
    }

    event NewBid(address bidder, uint bid);
    event WithdrawToken(address withdrawer);
    event WithdrawFunds(address withdrawer, uint256 amount);
    event AuctionCancelled();

    constructor(
        address _creator,
        uint _endTime,
        uint _minIncrement,
        uint _directBuyPrice,
        uint _startPrice,
        address _nftAddress,
        uint _tokenId
    ) {
        creator = _creator;
        endTime = block.timestamp + _endTime;
        startTime = block.timestamp;
        minIncrement = _minIncrement;
        directBuyPrice = _directBuyPrice;
        startPrice = _startPrice;
        _nft = IERC721(_nftAddress);
        nftAddress = _nftAddress;
        tokenId = _tokenId;
        maxBidder = _creator;
    }

    function allBids()
        external
        view
        returns (address[] memory, uint256[] memory)
    {
        address[] memory addrs = new address[](bids.length);
        uint256[] memory bidPrice = new uint256[](bids.length);
        for (uint256 i = 0; i < bids.length; i++) {
            addrs[i] = bids[i].sender;
            bidPrice[i] = bids[i].bid;
        }
        return (addrs, bidPrice);
    }

    function placeBid()
        external
        payable
        returns (bool)
    {
        require(bids.length < 5); // Only 5 bidders allowed for 1 auction
        require(msg.sender != creator); // Creator cannot participate in bid
        require(getAuctionState() == AuctionState.OPEN); // Status must be open
        require(msg.value > startPrice); // The bid price must bigger than initial price
        require(msg.value > maxBid + minIncrement); // The bid price must bigger than max bid with increment

        address lastHighestBidder = maxBidder;
        uint256 lastHighestBid = maxBid;
        maxBid = msg.value;
        maxBidder = msg.sender;

        if (msg.value >= directBuyPrice) {
            isDirectBuy = true;
        }

        bids.push(Bid(msg.sender, msg.value)); // Add new bid to list of bids

        if (lastHighestBid != 0) {
            payable(lastHighestBidder).transfer(lastHighestBid); // Refund the previous highest bid
        }

        emit NewBid(msg.sender, msg.value);

        return true;
    }
    
    // Withdraw the token after the auction ends
    function withdrawToken()
        external
        payable
        returns (bool)
    {
        require(
            getAuctionState() == AuctionState.ENDED ||
            getAuctionState() == AuctionState.DIRECT_BUY
        );
        require(msg.sender == maxBidder);

        _nft.transferFrom(address(this), maxBidder, tokenId);

        emit WithdrawToken(maxBidder);
        return true;
    }

    // Withdraw the funds after the auction ends
    function withdrawFunds()
        external
        payable
        returns (bool)
    {
        require(
            getAuctionState() == AuctionState.ENDED ||
            getAuctionState() == AuctionState.DIRECT_BUY
        );
        require(msg.sender == creator);
        payable(creator).transfer(maxBid);
        emit WithdrawFunds(msg.sender, maxBid);
        return true;
    }

    // Cancel the auction
    function cancelAuction()
        external
        payable
        returns (bool)
    {
        require(msg.sender == creator);
        require(getAuctionState() == AuctionState.OPEN);
        require(maxBid == 0);

        isCancelled = true;
        _nft.transferFrom(address(this), creator, tokenId);
        emit AuctionCancelled();
        return true;
    }

    function getAuctionState()
        public
        view
        returns (AuctionState)
    {
        if (isCancelled) return AuctionState.CANCELLED;
        if (isDirectBuy) return AuctionState.DIRECT_BUY;
        if (block.timestamp >= endTime) return AuctionState.ENDED;
        return AuctionState.OPEN;
    }
}
