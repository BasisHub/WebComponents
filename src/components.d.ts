/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AvatarInitial {
        /**
          * The height of the avatar
         */
        "height": number;
        /**
          * The user name
         */
        "name": string;
        /**
          * The width of the avatar
         */
        "width": number;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLAvatarInitialElement extends Components.AvatarInitial, HTMLStencilElement {
    }
    var HTMLAvatarInitialElement: {
        prototype: HTMLAvatarInitialElement;
        new (): HTMLAvatarInitialElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "avatar-initial": HTMLAvatarInitialElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AvatarInitial {
        /**
          * The height of the avatar
         */
        "height"?: number;
        /**
          * The user name
         */
        "name"?: string;
        /**
          * The width of the avatar
         */
        "width"?: number;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "avatar-initial": AvatarInitial;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "avatar-initial": LocalJSX.AvatarInitial & JSXBase.HTMLAttributes<HTMLAvatarInitialElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
