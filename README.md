📜 Decentralized Message Board (dMessage)
A simple Web3 mini project where users can connect their MetaMask wallet, post short messages, and fetch the latest message stored on the blockchain!
Perfect for beginners to learn smart contracts, dApps, and blockchain integration.

✨ Features
Connect MetaMask wallet

Post a message on the blockchain

Fetch and display the latest message

Fully decentralized backend (smart contract)

📁 Project Structure
bash
Copy
Edit
your-project/
├── contracts/
│   └── MessageBoard.sol    # Solidity smart contract
└── frontend/
    ├── index.html          # Webpage to interact with smart contract
    └── app.js              # JavaScript logic to connect MetaMask & contract
🚀 How to Run
1. Prerequisites
MetaMask extension installed in your browser

2. Deploy the Smart Contract
Open Remix IDE.

Create a new file under contracts/ folder named MessageBoard.sol.

Copy and paste the contract code from contracts/MessageBoard.sol.

Compile the contract with compiler version 0.8.x.

Deploy it to a testnet using Injected Provider - MetaMask environment.

After deploying:

Copy the deployed Contract Address.

Copy the ABI.

3. Setup Frontend
Go to the frontend/app.js file.

Replace:

contractAddress with your deployed contract address.

contractABI with your copied ABI.

4. Run Local Server: "Live Server" in VS Code:

Install "Live Server" extension

Right-click on index.html

Select "Open with Live Server"
