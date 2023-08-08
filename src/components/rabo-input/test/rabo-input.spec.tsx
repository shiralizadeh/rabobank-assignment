import { newSpecPage } from '@stencil/core/testing';
import { RaboInput } from '../rabo-input';

describe('rabo-input', () => {
  describe('value', () => {
    it('should emit the correct value', async () => {
      const page = await newSpecPage({
        components: [RaboInput],
        html: `<rabo-input name="price" label="Price"></rabo-input>`,
      });

      const inputs = page.root.querySelectorAll('input');

      inputs.forEach(input => {
        input.value = '99';
        input.dispatchEvent(new Event('change'));
      });

      const value = await page.root.getValue();

      expect(value).toEqual(99.99);
    });
  });
});
