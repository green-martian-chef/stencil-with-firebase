import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "app-tab-dashboard",
  styleUrl: "app-tab-dashboard.css",
  shadow: true,
})
export class AppTabDashboard implements ComponentInterface {
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Dashboard</ion-title>
            <ion-buttons slot="end">
              <ion-menu-button />
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>Dashboard.</p>
        </ion-content>
      </Host>
    );
  }
}
