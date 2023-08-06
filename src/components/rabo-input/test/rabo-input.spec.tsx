import { newSpecPage } from '@stencil/core/testing';
import { RaboInput } from '../rabo-input';

describe('rabo-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaboInput],
      html: `<rabo-input></rabo-input>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rabo-input>
    `);
  });
});
