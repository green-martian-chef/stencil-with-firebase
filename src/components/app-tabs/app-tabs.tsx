import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "app-tabs",
  styleUrl: "app-tabs.css",
})
export class AppTabs implements ComponentInterface {
  render() {
    return (
      <Host>
        <ion-tabs>
          <ion-tab tab="app-tab-home" component="app-tab-home">
            <ion-nav></ion-nav>
          </ion-tab>
          <ion-tab tab="app-tab-dashboard" component="app-tab-dashboard">
            <ion-nav />
          </ion-tab>
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="app-tab-home">
              <ion-label>Home</ion-label>
              <ion-icon name="home"></ion-icon>
            </ion-tab-button>
            <ion-tab-button tab="app-tab-dashboard">
              <ion-label>Dashboard</ion-label>
              <ion-icon name="person"></ion-icon>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </Host>
    );
  }
}
