
import React, { useEffect, useState } from 'react';
import { ethers, utils } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

declare let window: any;

// component function
export const WhoSigned = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const [add, setAdd] = useState('')
    const [signerBalance, SetsignerBalance] = useState('')

    // Getting address
    async function getAddress(){
        const ha = await signer.getAddress()
        setAdd(ha)}

  // Getting sender balance
async function getsenderbalanace(){
    const ha = await signer.getBalance()
    SetsignerBalance(ethers.utils.formatEther(ha))
}

getsenderbalanace();
getAddress();

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked times`;
}, []);


    // Writing to the Blockchain
    const sendMoney = () => {
        signer.sendTransaction({
        to: "0x976ea74026e726554db657fa54763abd0c3a0aa9",
        value: ethers.utils.parseEther("10") })
        getsenderbalanace();
        }
    
 
   


    return( <div>
                <h1> Send That Ca$h </h1>
                <button onClick={sendMoney} >Send Randy 10 ETH</button>
                <div>{add}</div>
                <div>{signerBalance}</div>
                <button onClick={getsenderbalanace}>Update balance</button>
            </div>
   
    ) 
}



