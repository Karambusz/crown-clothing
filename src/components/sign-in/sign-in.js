import React, {Component} from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import {auth, signInWithGoogle} from '../../firebase/firebase';

import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles';

export default class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            console.log(error.message);
        }    
    }

    handleChange = event => {
       const {value, name} = event.target;
       this.setState({[name] : value})
    }

    render() {
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="email" 
                        required/>
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="password" 
                        required/>
                    <ButtonsBarContainer>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>

        )
    }
}