import { ClockStateName, ClockContext, ColorContext } from "../global";
export type State = {
  timeInSeconds: number;
  clockState: ClockStateName;
  color: string;
  isPlaying: boolean;
  isStarted: boolean;
  sessions: number;
};

export type Settings = {
  clockContext: ClockContext[];
  colorContext: ColorContext[];
};
export type Methods = {
  /** Switching between the clockStates and incrementing sessions every time pomodoro has finished */
  changeSession: () => void;
  /** Pausing clock interval */
  pause: () => void;
  /** Starting interval if does not exist already */
  play: () => void;
  /** Decrement state time */
  decrementTime: () => void;
  /** Setting the state.
   * if the clock is already running and the clockContext in settings has been changed the clock will reset.
   * else the it will change only the color state
   */
  setState: (clockContextChanged?: boolean) => void;
  /** Setting  the Store settings */
  setSettings: (
    colorContext?: ColorContext[],
    clockContext?: ClockContext[]
  ) => void;
  /** Returning a copy of the settings object */
  getSettings: () => void;
  /**Returning time string from state timeInSeconds property */
  secondsToString: () => string;
};
export type Store = {
  state: State;
  settings: Settings;
  methods: Methods;
};

export type Intervals = {
  clockInterval: NodeJS.Timeout | null;
};
