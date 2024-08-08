export interface FunctionItems {
  title: string;
  formula: string[];
  inputValie: string;
  changeInputValue: (val: string) => void;
  onClick?: () => void;
}
