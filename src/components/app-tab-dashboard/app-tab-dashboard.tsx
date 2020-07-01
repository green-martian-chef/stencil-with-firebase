import { Component, ComponentInterface, Host, h } from "@stencil/core";
import { NavBar } from "../app-navbar/app-navbar";

@Component({
  tag: "app-tab-dashboard",
  styleUrl: "app-tab-dashboard.css",
})
export class AppTabDashboard implements ComponentInterface {
  render() {
    return (
      <Host>
        <NavBar title="Dashboard" />
        <ion-content class="ion-padding">
          <p>Dashboard.</p>
        </ion-content>
      </Host>
    );
  }
}
