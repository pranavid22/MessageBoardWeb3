let contractAddress = "Y0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8"; // Replace after deploying
let contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMessage",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "message",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let provider;
let signer;
let contract;

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        await ethereum.request({ method: 'eth_requestAccounts' });
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        alert("Wallet Connected!");
        fetchMessage();
    } else {
        alert("Please install MetaMask!");
    }
}

async function sendMessage() {
    const message = document.getElementById("messageInput").value;
    if (!message) return alert("Please enter a message!");

    const tx = await contract.setMessage(message);
    await tx.wait();
    alert("Message posted!");
    fetchMessage();
}

async function fetchMessage() {
    const latestMessage = await contract.getMessage();
    document.getElementById("latestMessage").innerText = latestMessage;
}

document.getElementById("connectButton").onclick = connectWallet;
document.getElementById("sendButton").onclick = sendMessage;
