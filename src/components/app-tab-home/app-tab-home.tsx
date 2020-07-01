import { Component, ComponentInterface, h } from "@stencil/core";
import { NavBar } from "../app-navbar/app-navbar";

@Component({
  tag: "app-tab-home",
  styleUrl: "app-tab-home.css",
})
export class AppTabHome implements ComponentInterface {
  render() {
    return [
      <NavBar title="Home" />,

      <ion-content fullscreen class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on{" "}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
      </ion-content>,
    ];
  }
}
