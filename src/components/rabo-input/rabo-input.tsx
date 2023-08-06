import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rabo-input',
  styleUrl: 'rabo-input.css',
  shadow: true,
})
export class RaboInput {

  render() {
    return (
      <Host>
        <slot>Input</slot>
      </Host>
    );
  }

}
