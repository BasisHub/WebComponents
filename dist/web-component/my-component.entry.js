import { r as registerInstance, h } from './index-18f4d202.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}.test{background-color:red}.search{position:relative;width:297px;height:433px;background:#FFFFFF;box-shadow:0px 10px 35px rgba(47, 59, 73, 0.15);border-radius:8px}.searchbox{background:red;position:absolute;width:297px;height:50px;left:0px;top:0px}.list{display:flex;flex-direction:column;align-items:flex-start;padding:0px;background:gold;position:absolute;width:297px;height:374px;left:0px;top:54px}.list-item{position:static;width:297px;height:74px;left:0px;background:skyblue;flex:none;order:0;align-self:stretch;flex-grow:0;margin:1px 0px}.list-item-logo{position:absolute;width:48px;height:48px;left:16px;margin-top:12px;background:url(https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png);border:1px solid #F1F1F1;box-sizing:border-box;border-radius:8px}.list-item-company-name{position:absolute;width:105px;height:17px;left:76px;margin-top:10px;font-style:normal;font-weight:normal;font-size:14px;line-height:17px;display:flex;align-items:flex-end;color:rgba(51, 62, 64, 0.8)}.list-item-company-description{position:absolute;width:150px;height:14px;left:76px;margin-top:30px;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;display:flex;align-items:flex-end;color:#A1A5A7}";

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", { class: "search" }, h("div", { class: "searchbox" }, h("i", { class: "fas fa-user" })), h("div", { class: "list" }, h("div", { class: "list-item" }, h("div", { class: "list-item-logo" }), h("div", { class: "list-item-company-name" }, "Barone LLC"), h("div", { class: "list-item-company-description" }, "Pambroke Pines")), h("div", { class: "list-item" }, h("div", { class: "list-item-logo" }), h("div", { class: "list-item-company-name" }, "Jeeon Bd"), h("div", { class: "list-item-company-description" }, "Pambroke Pines")), h("div", { class: "list-item" }, h("div", { class: "list-item-logo" }), h("div", { class: "list-item-company-name" }, "Basis Europe"), h("div", { class: "list-item-company-description" }, "IT Company")), h("div", { class: "list-item" }, h("div", { class: "list-item-logo" }), h("div", { class: "list-item-company-name" }, "Home"), h("div", { class: "list-item-company-description" }, "Navigate to home"))));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
