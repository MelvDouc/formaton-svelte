type EventHandler = (e: Event) => void | Promise<void>;
export type OptionalEventHandler = EventHandler | null;

export interface SelectOption {
  value: string;
  text: string;
  selected?: boolean;
  disabled?: boolean;
}