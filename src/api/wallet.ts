import Web3 from 'web3';
import Web3Modal from 'web3modal';

function connectWeb3Model() {
  const providerOptions = {
    injected: {
      display: {
        name: 'Injected',
        description: 'Connect with the provider in your Browser',
      },
      package: null,
    },
  };
  const web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    providerOptions, // required
  });

  return web3Modal;
}

export async function connectWallet() {
  const web3Modal = connectWeb3Model();
  const provider: any = await web3Modal.connect();
  const web3: Web3 = new Web3(provider);

  // Get the Wallet object of the connected account
  const accounts: any = await web3.eth.getAccounts();

  // These three passed to the API
  const address: string = accounts[0].toLocaleLowerCase();
  return address;
}
