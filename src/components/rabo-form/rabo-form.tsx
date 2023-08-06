import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rabo-form',
  styleUrl: 'rabo-form.css',
  shadow: true,
})
export class RaboForm {

  render() {
    return (
      <Host>
        <slot>Form</slot>
      </Host>
    );
  }

}
