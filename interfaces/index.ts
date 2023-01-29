import { MouseEventHandler, HTMLInputTypeAttribute, ChangeEventHandler } from "react";

export type User = {
  id: number;
  name: string;
};
export type TForm = {
  first_name: string;
  last_name: string;
  mobile_number: string;
  email: string;
  gender: string;
  relationship: string;
  has_gov_profile: boolean;
  is_visa_holder: boolean;
  my_gov: boolean;
  my_gov_username: string;
  my_gov_password: string;
  security_question: string;
  security_answer: string;
  ato: boolean;
  position: string;
  qualification: string;
  prev_work: string;
  skills: string;
  id_card: string;
};

export type ButtonType = {
  type: "button" | "submit";
  size: string;
  value: string;
  click: MouseEventHandler<HTMLButtonElement> | undefined;
  location: string;
  disabled: boolean;
}

export type SelectType = {
  label: string;
  value: string | number | readonly string[] | undefined;
  change: ChangeEventHandler<HTMLSelectElement> | undefined;
  required: boolean;
  id: string;
  description: string;
  disabled: boolean;
  options: any[]
}
export type InputType = {
  label: string;
  type: HTMLInputTypeAttribute | undefined;
  value: string | number | readonly string[] | undefined;
  change: ChangeEventHandler<HTMLInputElement> | undefined;
  required: boolean;
  id: string;
  placeholder: string;
  description: string;
  disabled: boolean;
}
export type RadioType = {
  label: string;
  value: string | number | readonly string[] | undefined;
  change: ChangeEventHandler<HTMLInputElement> | undefined;
  required: boolean;
  id: string;
  disabled: boolean;
  checked: boolean;
  Icon: any;
  name: string
}

export type TextAreaType = {
  label: string;
  value: string | number | readonly string[] | undefined;
  change: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  required: boolean;
  id: string;
  description: string;
  disabled: boolean;
  placeholder: string;
}

export interface AuthFormType {
  inputs: AuthFormInputType[];
  prev: any;
  next: any;
}
export interface AuthFormInputType {
  inp_type: "input" | "select";
  label: string;
  type: string | undefined;
  value: string | number | readonly string[] | undefined;
  change: any;
  // change: React.ChangeEventHandler<HTMLInputElement> | undefined;
  required: boolean;
  id: string;
  placeholder: string;
  description: string;
  disabled: boolean;
  options: any[];
}