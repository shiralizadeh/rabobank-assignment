import { Component, EventEmitter, Host, Element, Event, h, State } from '@stencil/core';

@Component({
  tag: 'rabo-form',
  styleUrl: 'rabo-form.css',
})
export class RaboForm {
  @Element()
  host: HTMLDivElement;

  @State()
  validationError: string;

  @Event()
  onSubmit: EventEmitter<any>;

  render() {
    return (
      <Host>
        <div class="rabo-form-container">
          <form
            onSubmit={async e => {
              const values = [];
              try {
                await extractValues(this.host, values);

                alert(JSON.stringify(values, null, 2));

                this.validationError = '';
              } catch (error) {
                this.validationError = error;
              }

              e.preventDefault();
            }}
          >
            <slot></slot>
            <span class="rabo-validation-message">{this.validationError}</span>
          </form>
        </div>
      </Host>
    );
  }
}

async function extractValues(node, arr) {
  if (node && node.children) {
    for (let child of node.children) {
      if (child.getValue) {
        arr.push({
          name: child.name,
          value: await child.getValue(),
        });
      }

      await extractValues(child, arr);
    }
  }
}
