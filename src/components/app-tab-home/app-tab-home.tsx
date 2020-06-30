import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "app-tab-home",
  styleUrl: "app-tab-home.css",
  shadow: true,
})
export class AppTabHome implements ComponentInterface {
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Home</ion-title>
            <ion-buttons slot="end">
              <ion-menu-button />
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content fullscreen class="ion-padding">
          <p>
            Welcome to the PWA Toolkit. You can use this starter to build entire
            apps with web components using Stencil and ionic/core! Check out the
            README for everything that comes in this starter out of the box and
            check out our docs on{" "}
            <a href="https://stenciljs.com">stenciljs.com</a> to get started.
          </p>
        </ion-content>
      </Host>
    );
  }
}
