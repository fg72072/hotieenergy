// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

import "hardhat/console.sol";

contract BUSD is ERC20 {

    address public uniswapV2Pair;
    IUniswapV2Router02 public uniswapV2Router;

    constructor() ERC20("BUSD", "BUSD") {
        _mint(msg.sender, 100000000000000000000000000 *10**18);
        _mint(address(this), 100000000000000000000000000 *10**18);
    }


     function setRouterAddress(address newRouter) payable public {
       //Thank you FreezyEx
       IUniswapV2Router02 _uniswapV2Router = IUniswapV2Router02(newRouter);
         uniswapV2Pair = IUniswapV2Factory(_uniswapV2Router.factory())
            .createPair(address(this), _uniswapV2Router.WETH());
        uniswapV2Router = _uniswapV2Router;
    }


    function addLiquidity(uint256 tokenAmount, uint256 ethAmount) payable public {
        // approve token transfer to cover all possible scenarios
        _approve(address(this), address(uniswapV2Router) , tokenAmount);

        console.log("uniswapV2Pair" , uniswapV2Pair);
        
        // // add the liquidity
        uniswapV2Router.addLiquidityETH{value: ethAmount}(
            address(this),
            tokenAmount,
            0, // slippage is unavoidable
            0, // slippage is unavoidable
            msg.sender,
            block.timestamp
        );
    }
}