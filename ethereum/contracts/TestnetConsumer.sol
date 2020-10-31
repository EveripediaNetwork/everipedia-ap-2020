pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import "https://raw.githubusercontent.com/EveripediaNetwork/everipedia-ap-2020/master/ethereum/contracts/TestnetConsumer.sol";

contract FetchPresidentialWinners {
    struct Winner {
      string winner;
      uint256 resultNow;
      uint256 resultBlock;
    }
    
    ATestnetConsumer internal winners;
    
    constructor() public {
        winners = ATestnetConsumer(0x12B7B8Dea45AF31b6303E00C735332A8b6752856);
    }
    
    
   function selectWinner(string memory _state) public view returns (string memory winner, uint256 resultNow, uint256 resultBlock)
  {
    (string memory winner, uint256 resultNow, uint256 resultBlock) = winners.presidentialWinners(_state);
    return (winner, resultNow, resultBlock);
  }
}