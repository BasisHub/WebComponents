export declare class AvatarInitial {
  /**
   * The width of the avatar
   */
  width: number;
  /**
   * The height of the avatar
   */
  height: number;
  /**
   * The user name
   */
  name: string;
  render(): any;
  generateAvatar(): {
    backgroundColor: string;
    width: string;
    height: string;
    color: string;
    textAlign: string;
    font: string;
    lineHeight: string;
    borderRadius: string;
  };
  getInitails(): string;
}
