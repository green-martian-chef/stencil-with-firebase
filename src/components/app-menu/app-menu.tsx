import { Component, ComponentInterface, Host, h } from "@stencil/core";
import { Routes } from "../../routes";

@Component({
  tag: "app-menu",
  styleUrl: "app-menu.css",
  shadow: true,
})
export class AppMenu implements ComponentInterface {
  routes = Routes;

  render() {
    return (
      <Host>
        <ion-menu side="start" menuId="first" contentId="main">
          <ion-content>
            <ion-list>
              <ion-menu-toggle>
                {this.routes.map((route) => (
                  <ion-item href={route.url}>
                    <ion-icon name={route.icon} slot="start" />
                    <ion-label>{route.title}</ion-label>
                  </ion-item>
                ))}
              </ion-menu-toggle>
            </ion-list>
          </ion-content>
        </ion-menu>
      </Host>
    );
  }
}
