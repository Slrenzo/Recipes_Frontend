  export interface Step {
  id: string;
  descr: string;
  step_order: string;
}

export interface StepRequest {
  descr: string;
  step_order: number;
}
