import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "app-menu",
  styleUrl: "app-menu.css",
  shadow: true,
})
export class AppMenu implements ComponentInterface {
  render() {
    return (
      <Host>
        <ion-menu side="start" menuId="first" contentId="main">
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>Start Menu</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>
      </Host>
    );
  }
}
