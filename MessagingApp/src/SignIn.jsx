import {SignInPage} from '@toolpad/core/SignInPage'

const providers = [
    { id: 'github', name: 'GitHub' },
    { id: 'google', name: 'Google' }
  ];

export default function SignIn(){
    return(
        <div>
            <SignInPage providers={providers}></SignInPage> 
        </div>
    )
}