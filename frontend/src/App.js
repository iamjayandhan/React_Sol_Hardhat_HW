import './App.css';
import {ethers} from 'ethers'
import { JsonRpcProvider } from 'ethers/providers'
import { useState,useEffect} from 'react'

function App() {
  const [greeting,setGreeting] = useState("")
  const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
      async function fetchGreeting(){
        try{
          const provider = new JsonRpcProvider("http://127.0.0.1:8545/")
          const contractAddr = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
          const contractAbi = [
            {
              "inputs": [],
              "name": "hello",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            }
          ]

          const contract = new ethers.Contract(contractAddr,contractAbi,provider);
          const greeting = await contract.hello();
          setGreeting(greeting);
        }
        catch(error){
          console.error(error);
        }
      }
        fetchGreeting();
    },[])


    function Greet() {
    setShowGreeting(true);
  }

  return (
    <div>
      <button onClick={Greet}>click me</button>
      {showGreeting && <p>Stored value: {greeting}</p>}
    </div>
  );
}

export default App;
