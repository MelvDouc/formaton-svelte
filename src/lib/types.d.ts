declare global {
  type OptionalEventHandler = EventHandler | null;

  interface SelectOption {
    value: string;
    text: string;
    selected?: boolean;
    disabled?: boolean;
  }
}

type EventHandler = (e: Event) => void | Promise<void>;

export { };
