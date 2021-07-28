import { ClockStateName, ClockContext, ColorContext } from "../global";
export type State = {
  timeInSeconds: number;
  clockState: ClockStateName;
  color: string;
  isPlaying: boolean;
  isStarted: boolean;
};

export type Settings = {
  clockContext: ClockContext[];
  colorContext: ColorContext[];
};
export type Methods = {
  play: () => void;
  pause: () => void;
  decrementTime: () => void;
  setState: (onlyColor?: boolean) => void;
  setSettings: (
    colorContext?: ColorContext[],
    clockContext?: ClockContext[]
  ) => void;
  getSettings: () => void;
};
export type Store = {
  state: State;
  settings: Settings;
  methods: Methods;
};

export type Intervals = {
  clockInterval: NodeJS.Timeout | null;
};
