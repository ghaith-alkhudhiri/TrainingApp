import { auth, provider, microsoftProvider, appleProvider} from '../firebase';
import { signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, OAuthProvider, signInWithPhoneNumber, RecaptchaVerifier, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';

class AuthenticationManager {
    signInWithGooglePopup = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;

            const user = result.user;
            console.log("User: ", user);
            console.log("Token: ", token);
            return { user, token };
        }catch(error: any){
            if(error.code === 'auth/popup-closed-by-user'){
                console.warn('The user closed the popup before completing the sign-in.');
            }else {
                console.error('Error during sign-in with popup:', error);
            }
            throw error;
        }
    }

    signInWithGoogleRedirect = () => {
        signInWithRedirect(auth, provider);
    }

    handleRedirectResult = async () => {
        try {
            const result = await getRedirectResult(auth);
            if(result){
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
                console.log('User: ', user);
                console.log("Token: ", token);
                return {user, token};
            }
        }catch(error: any){
            console.error('Error during sign-in with redirect: ', error);
            throw error;
        }
        return null;
    }

    // Microsoft Sign-In methods
    signInWithMicrosoftPopup = async () => {
        try {
            const result = await signInWithPopup(auth, microsoftProvider);
            const credential = OAuthProvider.credentialFromResult(result);
            const accessToken = credential?.accessToken;
            const idToken= credential?.idToken;
            const user = result.user;
            console.log("User: ", user);
            console.log("AccessToken: ", accessToken);
            console.log("ID Token: ", idToken);
            return {user, accessToken, idToken};
        } catch (error: any) {
            if (error.code === 'auth/popup-closed-by-user') {
                console.warn('The user closed the popup before completing the sign-in.');
            } else {
                console.error('Error during sign-in with popup:', error);
            }
            throw error;
        }
    }

    signInWithMicrosoftRedirect = () => {
        signInWithRedirect(auth, microsoftProvider);
    }

    handleMicrosoftRedirectResult = async () => {
        try {
            const result = await getRedirectResult(auth);
            if(result){
                const credential = OAuthProvider.credentialFromResult(result);
                const accessToken = credential?.accessToken;
                const idToken = credential?.idToken;
                const user = result.user;
                console.log('User: ', user);
                console.log("AccessToken: ", accessToken);
                console.log("ID Token: ", idToken);
                return { user, accessToken, idToken };
            }
        } catch (error) {
            console.error('Error during sign-in with redirect: ', error);
            throw error;
        }
        return null;
    }

    signInWithApplePopup = async () => {
        try {
            const result = await signInWithPopup(auth, appleProvider);
            const credential = OAuthProvider.credentialFromResult(result);
            const accessToken = credential?.accessToken;
            const idToken= credential?.idToken;
            const user = result.user;
            console.log("User: ", user);
            console.log("AccessToken: ", accessToken);
            console.log("ID Token: ", idToken);
            return {user, accessToken, idToken};
        } catch (error:any) {
            if(error.code === 'auth/popup-closed-by-user'){
                console.warn('The user closed the popup before completing the sign-in.');
            }else {
                console.error('Error during sign-in with Apple popup:', error);
            }
            throw error;
        }
    }

    signInWithAppleRedirect = () => {
        signInWithRedirect(auth, appleProvider);
    }

    handleAppleRedirectResult = async () => {
        try {
            const result = await getRedirectResult(auth);
            if(result){
                const credential = OAuthProvider.credentialFromResult(result);
                const accessToken = credential?.accessToken;
                const idToken = credential?.idToken;
                const user = result.user;
                console.log('User: ', user);
                console.log("AccessToken: ", accessToken);
                console.log("ID Token: ", idToken);
                return { user, accessToken, idToken };
            }
        } catch (error) {
            console.error('Error during sign-in with Apple redirect: ', error);
            throw error;
        }
        return null;
    }

    
    signInWithPhoneNumber = async (phoneNumber: string) => {
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
                'size': 'invisible',
                'callback': (response: any) =>{
                    this.onSignInSubmit(phoneNumber);
                },
                'expired-callback': () => {
                    console.warn('Recaptcha expired. Please complete the reCAPTCHA again.');
                    window.recaptchaVerifier?.clear();
                    window.recaptchaVerifier = null;
                }
            });
        }

        try {
            const appVerifier = window.recaptchaVerifier;
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            window.confirmationResult = confirmationResult;
            console.log("Confirmation Result", confirmationResult);
            console.log("Confirmation Result phone number", phoneNumber);
        } catch (error: any) {
            console.error('Error during sign-in with phone number:', error);
            throw error;
        }
    }

    onSignInSubmit = async (phoneNumber: string) => {
        console.log(`Phone number ${phoneNumber} submitted`);
    } 

    verifyCode = async (code: string) => {
        try {
          const confirmationResult = window.confirmationResult;
          const result = await confirmationResult.confirm(code);
          const user = result.user;
          console.log('User signed in successfully:', user);
          return user;
        } catch (error: any) {
          console.error('Error verifying code:', error);
          throw error;
        }
    }

    signInWithEmail = async (email: string, actionCodeSettings: any) => {
        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            localStorage.setItem('email', email);
            return { success: true, message: 'We have sent you an email with a link to sign in' };
        } catch (error: any) {
            console.error('Error sending sign-in link:', error);
            throw error;
        }
    }

    completeSignInWithEmailLink = async (url: string) => {
        try {
            if (isSignInWithEmailLink(auth, url)) {
                let email = localStorage.getItem('email');
                if (!email) {
                    email = window.prompt('Please write your email');
                }
                if (email && email.trim() !== '') {
                    const result = await signInWithEmailLink(auth, email, url);
                    localStorage.removeItem('email');
                    return { user: result.user, success: true };
                } else {
                    throw new Error('Email not provided');
                }
            }
        } catch (error: any) {
            console.error('Error signing in with email link:', error);
            throw error;
        }
    }
    
}

export default new AuthenticationManager();