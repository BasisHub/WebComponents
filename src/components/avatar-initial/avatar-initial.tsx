import { Component, Host, h, Prop } from '@stencil/core';
import { Element } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'avatar-initial',
  styleUrl: 'avatar-initial.css',
  shadow: true,
})


export class AvatarInitial {
  /**
   * The size of the avatar
   */
   @Prop() size: number; 

   @Prop() text: string = "white";

   @Prop() background: string; 

   @Prop() name: string;

 

   @Element() myElement: HTMLElement;

   @Event({
    eventName: 'onAvatarClick',
  }) avatarClickEvent: EventEmitter<Event>;

  render() {
    return (
      <Host>
        <div class="avatar" style={this.generateAvatar()} onClick={(event) => this.onAvatarClick(event)}>
          {this.getInitails()}
        </div>
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
      backgroundColor: this.background ? this.background : colors[colorIndex],
      width: this.size+"px",
      height: this.size+"px",
      color: this.text,
      font : this.size / 2 + "px Arial",
      lineHeight: this.size + 'px',
    }
    
    return style;
  }

  getInitails(): string {
    if(this.name.split(' ').length <= 1) {
      return this.name.split(' ')[0].charAt(0).toUpperCase() + this.name.split(' ')[0].charAt(1).toUpperCase()
    }
    return this.name.split(' ')[0].charAt(0).toUpperCase() + this.name.split(" ")[1].charAt(0).toUpperCase();
  }

  onAvatarClick(event: Event): void {
    // (window as any).basisDispatchCustomEvent(this.myElement, event);
    this.avatarClickEvent.emit(event);
  }
}
