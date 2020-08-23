import React, {useState} from 'react'
import {TextField, InputAdornment, IconButton} from '@material-ui/core/';
import {Visibility, VisibilityOff} from '@material-ui/icons/';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
    const [username, setUsername] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefualt()
        history.push("/home/choose-a-security-option")
    }

    return (
        <div class="sign-up">
            <h3>Let's Break Barriers!</h3>
            <h4>Tell us about yourself!</h4>
            <form onSubmit={handleSubmit}>
                <TextField onChange={(e)=>setUsername(e.target.value)} value={username} label="Username (optional)" />
                <TextField helperText="please enter your full legal name" required={true} onChange={(e)=>setFullName(e.target.value)} value={fullName} label="Full Name" />
                <div>
                    <div className="country-code-container">   
                        <img className="country" src={require("./assets/canada.svg")} alt="canada flag"/>
                        <span className="plus-one-span">+1</span>
                    </div> 
                    <TextField required={true} className="phone-nubmer-input" onChange={(e)=>setPhone(e.target.value)} value={phone} label="Phone number" />
                </div>
                <TextField required={true} onChange={(e)=>setEmail(e.target.value)} value={email} label="Email address" />
                <TextField required={true}
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                    className="password-input" 
                />
                <InputAdornment>
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={()=>setShowPassword(prev => !prev)}
                    label="Create password" 
                    >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            <p className="agreement">
                By signing up, I accept FinX <a href="/">Terms and Conditions</a> and <a href="/">Privacy Policy</a>
            </p>
            <button autofocus="true">Sign Up</button>
            </form>
        </div>
    )
}
