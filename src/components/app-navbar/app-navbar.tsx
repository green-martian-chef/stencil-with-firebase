import { FunctionalComponent, h } from "@stencil/core";

interface NavBarProps {
  title: string;
}

export const NavBar: FunctionalComponent<NavBarProps> = ({ title }) => (
  <ion-header no-border>
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
        <ion-back-button />
      </ion-buttons>
      <ion-title>{title}</ion-title>
      <ion-buttons slot="end">
        <ion-menu-button />
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
);
