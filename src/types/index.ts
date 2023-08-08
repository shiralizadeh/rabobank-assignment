export interface RaboEvent {
  target: {
    name: string;
    value: string;
  };
}

export interface RaboFormInput {
  name: string;
  label: string;

  getValue(): Promise<unknown>;
  onChange?(e: RaboEvent): void;
}

export interface RaboField {
  name: string;
  validations?: {
    required?: string;
    regex?: RegExp;
  };
}
