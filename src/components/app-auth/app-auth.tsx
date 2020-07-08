import { Component, Host, h } from "@stencil/core";
import { NavBar } from "../app-navbar/app-navbar";
import { AuthService } from "../../services/auth";

@Component({
  tag: "app-auth",
  styleUrl: "app-auth.css",
})
export class AppAuth {
  render() {
    return [
      <NavBar title="Authentication" />,
      <ion-content>
        <ion-grid>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col class="ion-align-self-center">
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
