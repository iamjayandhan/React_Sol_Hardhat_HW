import React, { useState } from 'react';
import { ethers } from 'ethers';

// connect react - solidity
// import Web3 from 'web3';

const Metamask = () => {

    const [errorMessage,setErrorMessage] = useState(null);
    const [defaultAccount,setDefaultAccount] = useState(null); 
    const [userBalance,setUserBalance] = useState(null);

    //Connect Account
    const connectWallet = () => {
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result=> {
                accountChanged([result[0]])
            })
        }
        else{
            setErrorMessage('Install MetaMask please!!')
        }
    }

    //Change Account
    const accountChanged = (accountName) =>{
        setDefaultAccount(accountName)
        getUserBalance(accountName)
    }

    //Balance
    const getUserBalance = (accountAddress) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
          .then(balance => {
            setUserBalance(ethers.formatEther(balance));
          });
      }
      
    //   const web3 = new Web3('YOUR_PROVIDER_URL'); // Replace 'YOUR_PROVIDER_URL' with your Ethereum provider URL, e.g., Infura or local Ganache



  return (
    <div>
        <p>MetaMask Connection</p>

        <button onClick={connectWallet}>Connect Wallet</button>
        <h3>Address: {defaultAccount}</h3>
        <h3>Balance: {userBalance}</h3>
        {errorMessage}
    </div>
  )
}

export default Metamask;
