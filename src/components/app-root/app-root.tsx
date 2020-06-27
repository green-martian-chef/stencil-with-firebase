import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <app-menu />
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>
        <ion-nav id="main" />
      </ion-app>
    );
  }
}
