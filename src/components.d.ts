/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AvatarInitial {
        "background": string;
        "name": string;
        /**
          * The size of the avatar
         */
        "size": number;
        "text": string;
    }
}
declare global {
    interface HTMLAvatarInitialElement extends Components.AvatarInitial, HTMLStencilElement {
    }
    var HTMLAvatarInitialElement: {
        prototype: HTMLAvatarInitialElement;
        new (): HTMLAvatarInitialElement;
    };
    interface HTMLElementTagNameMap {
        "avatar-initial": HTMLAvatarInitialElement;
    }
}
declare namespace LocalJSX {
    interface AvatarInitial {
        "background"?: string;
        "name"?: string;
        /**
          * The size of the avatar
         */
        "size"?: number;
        "text"?: string;
    }
    interface IntrinsicElements {
        "avatar-initial": AvatarInitial;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "avatar-initial": LocalJSX.AvatarInitial & JSXBase.HTMLAttributes<HTMLAvatarInitialElement>;
        }
    }
}
