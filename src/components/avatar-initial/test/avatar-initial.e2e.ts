import { newE2EPage } from '@stencil/core/testing';

describe('avatar-initial', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avatar-initial></avatar-initial>');

    const element = await page.find('avatar-initial');
    expect(element).toHaveClass('hydrated');
  });
});
