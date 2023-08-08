import { Component, Prop, h, Method, State } from '@stencil/core';
import { RaboFormInput } from '../../types';

enum ErrorType {
  None = 0,
  FixPart = 1,
  FloatingPart = 2,
}

@Component({
  tag: 'rabo-input',
  styleUrl: 'rabo-input.css',
})
export class RaboInput implements RaboFormInput {
  @Prop()
  name: string;

  @Prop()
  label: string;

  @State()
  error: ErrorType = ErrorType.None;

  fixedValue: number;
  floatingValue: number;

  @Method()
  async getValue() {
    return new Promise<number>((resolve, reject) => {
      if (!this.fixedValue) {
        reject(`Please enter a value for the fixed part (${this.name})`);
        this.error = ErrorType.FixPart;
        return;
      }

      if (!this.floatingValue) {
        reject(`Please enter a value for the floating part (${this.name})`);
        this.error = ErrorType.FloatingPart;
        return;
      }

      if (this.floatingValue > 99) {
        reject(`Max floating part length is 2 (${this.name})`);
        this.error = ErrorType.FloatingPart;
        return;
      }

      resolve(Number(this.fixedValue + '.' + this.floatingValue));
      this.error = ErrorType.None;
    });
  }

  render() {
    return (
      <div class="rabo-input-container">
        <div class="rabo-label">{this.label}</div>
        <div>€</div>
        <div class="rabo-input-fixed">
          <input
            type="number"
            placeholder="00"
            class={{
              error: this.error === ErrorType.FixPart,
            }}
            onChange={(e: any) => (this.fixedValue = e.target.value)}
          />
        </div>
        <div>,</div>
        <div class="rabo-input-floating">
          <input
            type="number"
            placeholder="00"
            class={{
              error: this.error === ErrorType.FloatingPart,
            }}
            onChange={(e: any) => (this.floatingValue = e.target.value)}
          />
        </div>
      </div>
    );
  }
}
