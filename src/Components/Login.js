import axios from 'axios';
import { useState } from 'react';


function Login(){
    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');
    const [status, setStatus] = useState();

    const [user, setUser] = useState(false);

    async function handle(event)
    {
        //pswd = 12345678
        //email =admin@gcloud.com
        event.preventDefault();
        console.log('email : ', email);
        console.log('pswd : ', pswd);
        const getUser = async () => { 
          const reposnse =  await axios({
                method:'post',
                url:`http://gcloud.mojgenie.in/api/login?password=${pswd}&email=${email}`,
                headers:{ "Accept":"application/json" }
            }).catch(e=>{return {status:404}})
           
            console.log('reposnse', reposnse.status);
            setStatus(reposnse.status);
        }
        await getUser()
        
        
    }
    
    return(
        <div>
            <form >
                <div style={{margin:'50px'}}>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)} /><br/>
                    <input type='text' value={pswd}  onChange={e=> setPswd(e.target.value)}/><br/>
                    <button onClick={handle} > submith</button>
                </div>
            </form>
        </div>
    );
};

export default Login;