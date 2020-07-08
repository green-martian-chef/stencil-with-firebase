import { Component, Host, h } from "@stencil/core";
import { NavBar } from "../app-navbar/app-navbar";
import { AuthService } from "../../services/auth";

@Component({
  tag: "app-auth",
  styleUrl: "app-auth.css",
})
export class AppAuth {
  render() {
    return (
      <Host>
        <NavBar title="Authentication" />,
        <ion-content>
          <ion-button onClick={() => AuthService.signInWithGoogle}>
            Login with Google
          </ion-button>
        </ion-content>
      </Host>
    );
  }
}
