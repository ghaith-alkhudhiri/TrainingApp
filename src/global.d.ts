interface Window {
    confirmationResult: import('firebase/auth').ConfirmationResult;
    recaptchaVerifier: import('firebase/auth').RecaptchaVerifier | null;
}

declare var __DEV__: boolean;

declare namespace NodeJS {
  interface Global {
    __DEV__: boolean;
  }
}
