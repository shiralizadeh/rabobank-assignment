import { newSpecPage } from '@stencil/core/testing';
import { RaboForm } from '../rabo-form';

describe('rabo-form', () => {
  describe('submit', () => {
    it('should emit the form data', async () => {
      const page = await newSpecPage({
        components: [RaboForm],
        html: `<rabo-form>
          <rabo-input name="price" label="Price"></rabo-input>
        </rabo-form>`,
      });

      const form = page.root.querySelector('form');
      const inputs = page.root.querySelectorAll('input');

      inputs.forEach(input => {
        input.value = '99';
      });

      const spy = jest.fn();

      form.addEventListener('submit', spy);

      form.dispatchEvent(new Event('submit'));

      expect(spy).toHaveBeenCalled();
    });
  });
});
