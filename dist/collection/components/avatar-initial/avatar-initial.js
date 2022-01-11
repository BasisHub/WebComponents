import { Component, Host, h, Prop } from '@stencil/core';
import { Element } from '@stencil/core';
export class AvatarInitial {
  render() {
    return (h(Host, null,
      h("div", { id: "hello", style: this.generateAvatar(), onClick: (event) => this.onAvatarClick(event) }, this.getInitails()),
      h("slot", null)));
  }
  generateAvatar() {
    let colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085",
      "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c",
      "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
    let initials = this.getInitails();
    let charIndex = initials.charCodeAt(0) - 65;
    let colorIndex = charIndex % 19;
    let style = {
      backgroundColor: colors[colorIndex],
      width: this.width + "px",
      height: this.height + "px",
      color: '#FFF',
      textAlign: 'center',
      font: this.width / 2 + "px Arial",
      lineHeight: this.height + 'px',
      borderRadius: '50%'
    };
    return style;
  }
  getInitails() {
    if (this.name.split(' ').length <= 1) {
      return this.name.split(' ')[0].charAt(0).toUpperCase() + this.name.split(' ')[0].charAt(1).toUpperCase();
    }
    return this.name.split(' ')[0].charAt(0).toUpperCase() + this.name.split(" ")[1].charAt(0).toUpperCase();
  }
  onAvatarClick(event) {
    // const target = new EventTarget();
    // target.addEventListener('customEvent', console.log);
    // target.dispatchEvent(new Event('customEvent'));
    console.log("new avatar testing click 9.0");
    // var custom=new CustomEvent('custom_event',{bubbles:true,cancelable:true});
    // type, detail
    // const newDiv = document.createElement("div");
    // const testHTML = document.getElementById("hello");
    console.log(this.myElement);
    console.log("event is", event);
    window.basisDispatchCustomEvent(this.myElement, event);
  }
  static get is() { return "avatar-initial"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["avatar-initial.css"]
  }; }
  static get styleUrls() { return {
    "$": ["avatar-initial.css"]
  }; }
  static get properties() { return {
    "width": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The width of the avatar"
      },
      "attribute": "width",
      "reflect": false
    },
    "height": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The height of the avatar"
      },
      "attribute": "height",
      "reflect": false
    },
    "name": {
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
        "text": "The user name"
      },
      "attribute": "name",
      "reflect": false
    }
  }; }
  static get elementRef() { return "myElement"; }
}
