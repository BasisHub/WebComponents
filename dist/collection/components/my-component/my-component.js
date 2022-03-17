import { Component, Prop, h, getAssetPath } from '@stencil/core';
// import { format } from '../../utils/utils';
export class MyComponent {
  constructor() {
    this.image = "lays.png";
  }
  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }
  render() {
    return h("div", { class: "search" },
      h("div", { class: "searchbox" },
        h("i", { class: "fas fa-user" })),
      h("div", { class: "list" },
        h("div", { class: "list-item" },
          h("div", { class: "list-item-logo" }),
          h("img", { src: getAssetPath(`./assets/${this.image}`) }),
          h("div", { class: "list-item-company-name" }, "Barone LLC"),
          h("div", { class: "list-item-company-description" }, "Pambroke Pines")),
        h("div", { class: "list-item" },
          h("div", { class: "list-item-logo" }),
          h("div", { class: "list-item-company-name" }, "Jeeon Bd"),
          h("div", { class: "list-item-company-description" }, "Pambroke Pines")),
        h("div", { class: "list-item" },
          h("div", { class: "list-item-logo" }),
          h("div", { class: "list-item-company-name" }, "Basis Europe"),
          h("div", { class: "list-item-company-description" }, "IT Company")),
        h("div", { class: "list-item" },
          h("div", { class: "list-item-logo" }),
          h("div", { class: "list-item-company-name" }, "Home"),
          h("div", { class: "list-item-company-description" }, "Navigate to home"))));
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "first": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The first name"
      },
      "attribute": "first",
      "reflect": false
    },
    "middle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The middle name"
      },
      "attribute": "middle",
      "reflect": false
    },
    "last": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The last name"
      },
      "attribute": "last",
      "reflect": false
    },
    "image": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "image",
      "reflect": false,
      "defaultValue": "\"lays.png\""
    }
  }; }
}
