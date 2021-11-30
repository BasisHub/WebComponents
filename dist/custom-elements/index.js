import { h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const avatarInitialCss = ":host{display:block}";

let AvatarInitial$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("div", { style: this.generateAvatar() }, this.getInitails()), h("slot", null)));
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
      padding: "20px",
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
  static get style() { return avatarInitialCss; }
};

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

let MyComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const AvatarInitial = /*@__PURE__*/proxyCustomElement(AvatarInitial$1, [1,"avatar-initial",{"width":[2],"height":[2],"name":[1]}]);
const MyComponent = /*@__PURE__*/proxyCustomElement(MyComponent$1, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      AvatarInitial,
  MyComponent
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { AvatarInitial, MyComponent, defineCustomElements };
