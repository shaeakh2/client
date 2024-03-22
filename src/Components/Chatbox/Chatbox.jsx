import {React ,useState} from 'react'
import Gpt from './Gpt';
import Usermsg from './Usermsg';
import Navbar from './Navbar';
import { IoSendSharp } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";

export default function Chatbox() {   
   const [input, setInput] = useState('');
   const [fetching, setFetching] = useState(false);     
   const [messages, setMessages] = useState([]);   
       
   const getMessage = async () => {
      setFetching(true);

      const Umsg = {
         role : "user",
         content : input
      }
      
      messages.push(Umsg);

      const options = {
         method : "POST",                  
         body: JSON.stringify({
            message : input
         }),
         headers : {            
            "Content-Type" : "application/json"
         }
       }
      try {
         const response = await fetch("http://localhost:8000/Vitalyte",options)
         const data = await response.json();
         const Gmsg = {
            role : "Vitalyter",
            content : data.choices[0].message.content
         }
         console.log(Gmsg);
         messages.push(Gmsg);                 
         setFetching(false);
         setInput('');
      } catch (error) {
         console.error(error);
      } finally{
         setFetching(false);
         setInput('');
      }
   }         
   return (
      <div className='flex flex-col items-center h-screen '>
         <div className='border-b-4 mb-2' style={{ width: "100vw" }}>
            <Navbar />
         </div>
         <div className='grid grid-cols-1 content-between w-2/5 h-dvh' >
            <div className='flex flex-col '> 
               {messages.map((msg, index) => {
                  if (msg.role === "user") {
                     return <Usermsg  key={index} msg={msg.content} />
                  } else {
                     return <Gpt key={index} msg={msg.content} />
                  }
               })}
            </div>
            <div className='flex'>
               <div className='flex justify-around items-center w-full my-2 '>
                  <input 
                  onKeyDown={(e) => { if (e.key==='Enter') { getMessage(); } }}
                  id="input"  value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter Your Symptoms" className="input border-primary border-2 focus:border-2 focus:border-primary focus:outline-none w-full mx-2" />
               </div>
               <dir data-key="13" className='btn bg-transparent border-0 mx-2' onClick={getMessage} disabled={fetching}>
                  {fetching ? <CgSandClock  className=' color-primary ' style={{ height: '35px', width: '35px' }} /> : <IoSendSharp disabled={fetching} className=' color-grey ' style={{ height: '35px', width: '35px' }} />}
               </dir>
            </div>
         </div>

      </div>
   )
}
