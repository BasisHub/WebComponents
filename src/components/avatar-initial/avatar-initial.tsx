import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'avatar-initial',
  styleUrl: 'avatar-initial.css',
  shadow: true,
})
export class AvatarInitial {
  /**
   * The width of the avatar
   */
   @Prop() width: number;

   /**
    * The height of the avatar
    */
   @Prop() height: number;
 
   /**
    * The user name
    */
   @Prop() name: string;

  render() {
    return (
      <Host>
        <div style={this.generateAvatar()}>
          {this.getInitails()}
        </div>
        <slot></slot>
      </Host>
    );
  }

  generateAvatar() {
    let colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085",
     "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", 
     "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];

    let initials = this.getInitails()
    let charIndex = initials.charCodeAt(0) - 65;
    let colorIndex = charIndex % 19;


    let style = {
      backgroundColor: colors[colorIndex],
      padding: "20px",
      width: this.width+"px",
      height: this.height+"px",
      color: '#FFF',
      textAlign: 'center',
      font : this.width / 2 + "px Arial",
      lineHeight: this.height + 'px',
      borderRadius: '50%'
    }

    return style;
  }

  getInitails(): string {

    if(this.name.split(' ').length <= 1) {
      return this.name.split(' ')[0].charAt(0).toUpperCase() + this.name.split(' ')[0].charAt(1).toUpperCase()
    }
    return this.name.split(' ')[0].charAt(0).toUpperCase() + this.name.split(" ")[1].charAt(0).toUpperCase();
  }

}