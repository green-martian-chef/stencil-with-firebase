import { Firebase } from "./firebase";

class AuthController {
  public signInWithGoogle() {
    const provider = Firebase.googleAuthProvider;
    return this.providerHandler(provider);
  }

  private providerHandler(provider: any) {
    return Firebase.auth.signInWithPopup(provider);
  }
}

export const AuthService = new AuthController();
