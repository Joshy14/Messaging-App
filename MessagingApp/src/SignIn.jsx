import {SignInPage} from '@toolpad/core/SignInPage'
import { Link } from 'react-router-dom'; 
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const providers = [
    { id: 'github', name: 'GitHub' },
    { id: 'google', name: 'Google' }
  ];


    
export default function SignIn(){
    const navigate = useNavigate()
    const signIn = async() =>{
        const nav = true
        if(nav == true){
            return navigate("app/")
        }
        return null
        }
    return(
        <div>
            <SignInPage signIn={signIn} providers={providers}></SignInPage> 
            <Link to={'app/'}>App</Link>
        </div>
    )
}