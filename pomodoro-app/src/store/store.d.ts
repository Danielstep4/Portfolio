import { ClockStateName, ClockContext, ColorContext } from "../global";
export type State = {
  timeInSeconds: number;
  clockState: ClockStateName;
  color: string;
  isPlaying: boolean;
};

export type Settings = {
  clockContext: ClockContext[];
  colorContext: ColorContext[];
};
export type Methods = {
  play: () => void;
  decrementTime: () => void;
  setState: () => void;
  setSettings: () => void;
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
