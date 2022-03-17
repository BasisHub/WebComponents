'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-01df1aa7.js');

const avatarInitialCss = ":host{display:block}";

let AvatarInitial = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { id: "hello", style: this.generateAvatar(), onClick: (event) => this.onAvatarClick(event) }, this.getInitails()), index.h("slot", null)));
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
    window.basisDispatchCustomEvent(this.myElement, event);
  }
  get myElement() { return index.getElement(this); }
};
AvatarInitial.style = avatarInitialCss;

const myComponentCss = ":host{display:block}.test{background-color:red}.search{position:relative;width:297px;height:433px;background:#FFFFFF;box-shadow:0px 10px 35px rgba(47, 59, 73, 0.15);border-radius:8px}.searchbox{background:red;position:absolute;width:297px;height:50px;left:0px;top:0px}.list{display:flex;flex-direction:column;align-items:flex-start;padding:0px;background:gold;position:absolute;width:297px;height:374px;left:0px;top:54px}.list-item{position:static;width:297px;height:74px;left:0px;background:skyblue;flex:none;order:0;align-self:stretch;flex-grow:0;margin:1px 0px}.list-item-logo{position:absolute;width:48px;height:48px;left:16px;margin-top:12px;background:url(https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png);border:1px solid #F1F1F1;box-sizing:border-box;border-radius:8px}.list-item-company-name{position:absolute;width:105px;height:17px;left:76px;margin-top:10px;font-style:normal;font-weight:normal;font-size:14px;line-height:17px;display:flex;align-items:flex-end;color:rgba(51, 62, 64, 0.8)}.list-item-company-description{position:absolute;width:150px;height:14px;left:76px;margin-top:30px;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;display:flex;align-items:flex-end;color:#A1A5A7}";

let MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.image = "lays.png";
  }
  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }
  render() {
    return index.h("div", { class: "search" }, index.h("div", { class: "searchbox" }, index.h("i", { class: "fas fa-user" })), index.h("div", { class: "list" }, index.h("div", { class: "list-item" }, index.h("div", { class: "list-item-logo" }), index.h("img", { src: index.getAssetPath(`./assets/${this.image}`) }), index.h("div", { class: "list-item-company-name" }, "Barone LLC"), index.h("div", { class: "list-item-company-description" }, "Pambroke Pines")), index.h("div", { class: "list-item" }, index.h("div", { class: "list-item-logo" }), index.h("div", { class: "list-item-company-name" }, "Jeeon Bd"), index.h("div", { class: "list-item-company-description" }, "Pambroke Pines")), index.h("div", { class: "list-item" }, index.h("div", { class: "list-item-logo" }), index.h("div", { class: "list-item-company-name" }, "Basis Europe"), index.h("div", { class: "list-item-company-description" }, "IT Company")), index.h("div", { class: "list-item" }, index.h("div", { class: "list-item-logo" }), index.h("div", { class: "list-item-company-name" }, "Home"), index.h("div", { class: "list-item-company-description" }, "Navigate to home"))));
  }
  static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

exports.avatar_initial = AvatarInitial;
exports.my_component = MyComponent;
