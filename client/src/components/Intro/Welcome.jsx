import { useState, useEffect } from 'react';
import Web3 from 'web3';

function Welcome() {
  const [isConnected, setIsConnected] = useState(false);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      // Check if the user is already connected to MetaMask
      window.ethereum
        .request({ method: 'eth_accounts' })
        .then((accounts) => {
          if (accounts.length > 0) {
            setIsConnected(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const connectWallet = async () => {
    try {
      // Request MetaMask to connect
      await web3.eth.requestAccounts();
      setIsConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="welcome">
      <h1>👋 Welcome to Nft Marketplace</h1>
      {!isConnected ? (
        <button className="wallet-button" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <p className='wcont'>Wallet Connected</p>
      )}
    </div>
  );
}

export default Welcome;

