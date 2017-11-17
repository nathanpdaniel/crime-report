export type BaseState = {
  data?: {};
  fetching?: boolean;
};

export type BaseAction = {
  type: string;
  payload: object;
};