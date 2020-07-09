import { Firebase } from "./firebase";

class AuthController {
  public sendSignInLinkToEmail(email: string) {
    const actionCodeSettings = {
      url: "http://localhost:3333",
      handleCodeInApp: true,
    };

    localStorage.setItem("firebase.email", email);

    return Firebase.auth.sendSignInLinkToEmail(email, actionCodeSettings);
  }

  public verifyEmailLink() {}

  public signInWithGoogle() {
    const provider = Firebase.googleAuthProvider;
    return this.providerHandler(provider);
  }

  private providerHandler(provider: any) {
    return Firebase.auth.signInWithPopup(provider);
  }
}

export const AuthService = new AuthController();
