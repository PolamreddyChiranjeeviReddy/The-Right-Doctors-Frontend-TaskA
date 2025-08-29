export interface Person {
  _id?: string;
  name: string;
  age?: number;
  gender?: 'Male' | 'Female' | 'Other' | string;
  mobile?: string;
  email?: string;
}