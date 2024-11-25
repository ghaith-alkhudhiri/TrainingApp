import { Component } from "react";

interface Props {

}

interface LoginPageState {
    phoneNumber: any;
    verificationCode: any;
    email: string;
    loginLoading: boolean;
    loginError: string;
    infoMsg: string;
    initialLoading: boolean;
    initialError: string;
}

class LoginPage extends Component<Props, LoginPageState>{
    constructor(props: any){
        super(props);
        this.state = {
            phoneNumber: '',
            verificationCode: '',
            email: '',
            loginLoading: false,
            loginError: '',
            infoMsg: '',
            initialLoading: false,
            initialError: '',
        }
    }
}