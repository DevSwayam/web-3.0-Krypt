import react , { useEffect , useState } from 'react ';
import { ethers } from 'ethers';

import { contractABI , contractAddress } from '../utils/constant';

export const TransactionContext = React.createContext();

const { ethereum } =  window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress , contractABI , signer);
    return transactionContract;
}
export const TransactionProvider = ({ children }) => {
 const[currentAccount , setCurrentAccount] = useState(initialState);
 const[formData , setFormData] = useState({addressTo:'' , amount: '', keyWord:'' , messag:'' });
 const handleChange = (e, name) => {
    setFormData ((prevState) => ({ ...prevState, [name]:e.target.value }))
 }

    const checkIfWallerIsConnected = async () => {
        try {
            if(!ethereum) return alert("please install MetaMask to connect krypt or read redme.md from swayam's git hub repository  ");

            const accounts = await ethereum.request({method: 'eth_accounts'});
            if(accounts.length){
                setCurrentAccount(accounts[0]);
    
                // getALLTRANSACTIONS();
            }else{
                console.log('no accounts found');
            }
            console.log(accounts);
        } catch (error) {
            console.log(error);
            throw new Error("no ethereum object By your account to connect wallet read reademe.md from swayam's repo")
        }
        
    }

    const connectWallet = async () => {
        try{
            if(!ethereum) return alert("please install MetMask to connect krypt or read redme.md from swayam's git hub repository ");
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        }catch(error){
            console.log(error);
            throw new Error("no ethereum object By your account to connect wallet read reademe.md from swayam's repo")
        }
    }

    const sendTransaction = async () =>{
        try{
            if(!ethereum) return alert("please install MetaMask to connect krypt or read redme.md from swayam's git hub repository  ");
            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208'
                }]
            })
            console.log(error);
            throw new Error("no ethereum object By your account to connect wallet read reademe.md from swayam's repo")
        }
    }

    useEffect(() => {
        checkIfWallerIsConnected();
    }, []);
    return (
        <TransactionContext.Provider value={{connectWallet , currentAccount , formData , setFormData ,handleChange}}>
            {children}
        </TransactionContext.Provider>
    );
}