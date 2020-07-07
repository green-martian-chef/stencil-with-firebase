import { Component, h } from "@stencil/core";
import { AuthService } from "../../services/auth";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
})
export class AppRoot {
  async componentDidLoad() {
    console.log("Component has been rendered");
    console.log(AuthService.hello());
  }
  render() {
    return (
      <ion-app>
        <app-menu />
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
          <ion-route url="/home" component="app-tabs">
            <ion-route url="/" component="app-tab-home">
              <ion-route component="app-tab-home" />
            </ion-route>
            <ion-route url="/user" component="app-tab-dashboard">
              <ion-route component="app-tab-dashboard" />
            </ion-route>
          </ion-route>
        </ion-router>
        <ion-nav id="main" />
      </ion-app>
    );
  }
}
