import { newE2EPage } from '@stencil/core/testing';

describe('rabo-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-input></rabo-input>');

    const element = await page.find('rabo-input');
    expect(element).toHaveClass('hydrated');
  });
});
