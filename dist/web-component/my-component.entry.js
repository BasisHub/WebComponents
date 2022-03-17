import { r as registerInstance, h, f as getAssetPath } from './index-f51a6923.js';

const myComponentCss = ":host{display:block}.test{background-color:red}.search{position:relative;width:297px;height:433px;background:#FFFFFF;box-shadow:0px 10px 35px rgba(47, 59, 73, 0.15);border-radius:8px}.searchbox{background:var(--color-primary);position:absolute;width:297px;height:50px;left:0px;top:0px;display:flex;justify-content:space-around}.searchIcon{width:24px;height:24px}.input#search{margin-top:20px;margin-left:5px;border:none;font-weight:bold;width:297px}.searchPlaceHolder{width:106px;height:17px;font-style:normal;font-weight:bold;font-size:14px;line-height:17px;display:flex;align-items:flex-end;color:#333E40}.list{display:flex;flex-direction:column;align-items:flex-start;padding:0px;position:absolute;width:297px;height:374px;left:0px;top:54px}.list-item{position:static;width:297px;height:74px;left:0px;font-family:'Courier New', Courier, monospace;flex:none;order:0;align-self:stretch;flex-grow:0;margin:1px 0px}.list-item-logo{position:absolute;width:48px;height:48px;left:16px;margin-top:12px;background:url(https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png);border:1px solid #F1F1F1;box-sizing:border-box;border-radius:8px}.list-item-company-name{position:absolute;width:105px;height:17px;left:76px;margin-top:10px;font-style:normal;font-weight:Bold;font-size:14px;line-height:17px;display:flex;align-items:flex-end;color:rgba(51, 62, 64, 0.8)}.list-item-company-description{position:absolute;width:150px;height:14px;left:76px;margin-top:30px;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;display:flex;align-items:flex-end;color:#A1A5A7}";

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }
  handleChange(event) {
    this.value = event.target.value;
    console.log("AHAHA", this.value);
  }
  render() {
    return h("div", { class: "search" }, h("div", { class: "searchbox" }, h("label", { class: "searchIcon" }, "Icon"), h("input", { id: "search", type: "text", placeholder: "Search for Company, menu or Employee", value: this.value, onInput: (event) => this.handleChange(event) })), h("div", { class: "list" }, h("div", { class: "list-item" }, h("img", { class: "list-item-logo", src: getAssetPath(`./assets/lays.png`) }), h("div", { class: "list-item-company-name" }, "Barone LLC"), h("div", { class: "list-item-company-description" }, "Pambroke Pines")), h("div", { class: "list-item" }, h("img", { class: "list-item-logo", src: getAssetPath(`./assets/addidas.png`) }), h("div", { class: "list-item-company-name" }, "Jeeon Bd"), h("div", { class: "list-item-company-description" }, "Pambroke Pines")), h("div", { class: "list-item" }, h("img", { class: "list-item-logo", src: getAssetPath(`./assets/basis.png`) }), h("div", { class: "list-item-company-name" }, "Basis Europe"), h("div", { class: "list-item-company-description" }, "IT Company")), h("div", { class: "list-item" }, h("div", { class: "list-item-logo" }), h("div", { class: "list-item-company-name" }, "Home"), h("div", { class: "list-item-company-description" }, "Navigate to home"))));
  }
  static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
