import { newSpecPage } from '@stencil/core/testing';
import { AvatarInitial } from '../avatar-initial';

describe('avatar-initial', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvatarInitial],
      html: `<avatar-initial></avatar-initial>`,
    });
    expect(page.root).toEqualHtml(`
      <avatar-initial>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </avatar-initial>
    `);
  });
});
