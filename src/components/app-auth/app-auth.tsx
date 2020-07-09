import { Component, h, State } from "@stencil/core";
import { NavBar } from "../app-navbar/app-navbar";
import { AuthService } from "../../services/auth";

@Component({
  tag: "app-auth",
  styleUrl: "app-auth.css",
})
export class AppAuth {
  @State() email: string;

  private inputHandler(e) {
    this.email = e.target.value;
  }

  async sendSignInLinkToEmail() {
    try {
      this.email && AuthService.sendSignInLinkToEmail(this.email);
    } catch (err) {
      console.log(err.code, err.message);
    }
  }

  render() {
    return [
      <NavBar title="Authentication" />,
      <ion-content>
        <ion-grid>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col class="ion-align-self-center">
              <ion-item>
                <ion-label position="floating">Login with Email</ion-label>
                <ion-input
                  required
                  placeholder="Enter your email"
                  type="email"
                  onInput={(e) => {
                    this.inputHandler(e);
                  }}
                />
              </ion-item>
              <ion-button onClick={() => console.log("send link")}>
                Send link
              </ion-button>
              <ion-button onClick={() => AuthService.signInWithGoogle()}>
                Login with Google
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
