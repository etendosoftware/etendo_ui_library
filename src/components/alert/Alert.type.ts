export type StatusType = 'info' | 'success' | 'error' | 'warning';
export type EmitEventType = 'show' | 'clear';

export type Listener = (data: any) => void;

export interface IMessage {
  message: string;
  type: StatusType;
  duration: number;
}

export interface IListeners {
  [key: string]: Listener[];
}
