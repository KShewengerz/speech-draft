/**
 * An interface for SubFields' properties
 */
export interface SubFields {
  placeholder: string;
  control: string;
}

/**
 * Sub Fields
 */
export const fields: SubFields[] = [
  { placeholder: 'Author', control: 'author' },
  { placeholder: 'Keywords', control: 'keywords' },
  { placeholder: 'Date', control: 'date' },
];
