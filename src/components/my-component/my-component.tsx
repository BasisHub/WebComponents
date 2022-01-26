import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="search">
      <div class="searchbox">
        <i class="fas fa-user"></i>
      </div>
      <div class="list">
        <div class="list-item">
          <div class="list-item-logo"></div>
          <div class="list-item-company-name">Barone LLC</div>
          <div class="list-item-company-description">
            Pambroke Pines
          </div>
        </div>
        <div class="list-item">
          <div class="list-item-logo"></div>
          <div class="list-item-company-name">Jeeon Bd</div>
          <div class="list-item-company-description">
            Pambroke Pines
          </div>
        </div>
        <div class="list-item">
        <div class="list-item-logo"></div>
          <div class="list-item-company-name">Basis Europe</div>
          <div class="list-item-company-description">
            IT Company
          </div>
        </div>
        <div class="list-item">
        <div class="list-item-logo"></div>
          <div class="list-item-company-name">Home</div>
          <div class="list-item-company-description">
            Navigate to home
          </div>
        </div>
      </div>
    </div>;
  }
}
