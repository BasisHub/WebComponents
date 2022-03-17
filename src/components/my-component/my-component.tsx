import { Component, Prop, h, getAssetPath, State } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  assetsDirs: ['assets'],
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

  @State() value: string;


  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  handleChange(event) {
    this.value = event.target.value;
    console.log("AHAHA", this.value)
  }

  render() {
    return <div class="search">
      <div class="searchbox">
          <label class="searchIcon">Icon</label>
          <input id="search" type="text" placeholder="Search for Company, menu or Employee" value={this.value} onInput={(event) => this.handleChange(event)} />
      </div>
      <div class="list">
        <div class="list-item">
          <img class="list-item-logo" src={getAssetPath(`./assets/lays.png`)} />
          <div class="list-item-company-name">Barone LLC</div>
          <div class="list-item-company-description">
            Pambroke Pines
          </div>
        </div>
        <div class="list-item">
        <img class="list-item-logo" src={getAssetPath(`./assets/addidas.png`)} />
          <div class="list-item-company-name">Jeeon Bd</div>
          <div class="list-item-company-description">
            Pambroke Pines
          </div>
        </div>
        <div class="list-item">
        <img class="list-item-logo" src={getAssetPath(`./assets/basis.png`)} />
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
