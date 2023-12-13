import {
  EmitEventType,
  IListeners,
  IMessage,
  Listener,
  StatusType,
} from './Alert.type';

const listeners: IListeners = {};
const messageQueue: IMessage[] = [];
let isProcessing = false;
let defaultDuration: number = 4000;
let currentTimer: NodeJS.Timeout | null = null;

export const on = (event: string, listener: Listener): void => {
  if (!listeners[event]) {
    listeners[event] = [];
  }
  listeners[event].push(listener);
};

export const emit = (event: string, data: any = undefined): void => {
  if (listeners[event]) {
    listeners[event].forEach(listener => listener(data));
  }
};

export const removeListener = (
  event: EmitEventType,
  listener: Listener,
): void => {
  if (listeners[event]) {
    listeners[event] = listeners[event].filter(l => l !== listener);
  }
};

export const show = (message: string, type: StatusType = 'info'): void => {
  messageQueue.push({ message, type, duration: defaultDuration });
  if (!isProcessing) {
    processQueue();
  }
};

export const nextMessage = (): void => {
  if (currentTimer) {
    clearTimeout(currentTimer);
    currentTimer = null;
  }

  const next = messageQueue.shift();

  if (next) {
    emit('show', next);
    currentTimer = setTimeout(() => {
      nextMessage();
    }, next.duration);
  } else {
    isProcessing = false;
    emit('clear');
  }
};

const processQueue = () => {
  if (messageQueue.length === 0) {
    isProcessing = false;
    return;
  }

  if (!isProcessing) {
    isProcessing = true;
    const { message, type, duration } = messageQueue.shift()!;
    emit('show', { message, type, duration });
    currentTimer = setTimeout(() => {
      nextMessage();
    }, duration);
  }
};

export const setDefaultDuration = (duration: number): void => {
  defaultDuration = duration;
};
