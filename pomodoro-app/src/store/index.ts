import { reactive } from "vue";
import { ClockContext, ColorContext } from "../global";
import { theme } from "../Utils/theme";
import { State, Settings, Methods, Intervals } from "./store";
// State init
const state = reactive<State>({
  timeInSeconds: 1500,
  clockState: "Pomodoro",
  color: theme.pallete.primary,
  isPlaying: false,
  isStarted: false,
  sessions: 0,
});
// intervals object
const intervals: Intervals = {
  clockInterval: null,
};
// Settings init
const settings: Settings = {
  clockContext: [
    { name: "Pomodoro", value: "25" },
    { name: "Short Break", value: "5" },
    { name: "Long Break", value: "15" },
  ],
  colorContext: [
    { name: "default", color: theme.pallete.primary, active: true },
    { name: "blue", color: theme.pallete.secondry, active: false },
    { name: "green", color: theme.pallete.success, active: false },
  ],
};
// Methods
const methods: Methods = {
  changeSession() {
    if (!state.isStarted) return;
    const { clockState } = state;
    switch (clockState) {
      case "Pomodoro":
        state.sessions++;
        if (state.sessions % 4 == 0) {
          state.clockState = settings.clockContext[2].name;
          state.timeInSeconds = +settings.clockContext[2].value * 60;
        } else {
          state.clockState = settings.clockContext[1].name;
          state.timeInSeconds = +settings.clockContext[1].value * 60;
        }
        break;
      case "Short Break":
        state.clockState = settings.clockContext[0].name;
        state.timeInSeconds = +settings.clockContext[0].value * 60;
        break;
      default:
        state.clockState = settings.clockContext[0].name;
        state.timeInSeconds = +settings.clockContext[0].value * 60;
        break;
    }
  },
  pause() {
    if (intervals.clockInterval) {
      state.isPlaying = false;
      clearInterval(intervals.clockInterval);
    }
  },
  play() {
    if (!state.isPlaying) {
      state.isStarted = true;
      state.isPlaying = true;
      const interval = setInterval(() => {
        this.decrementTime();
        if (state.timeInSeconds == 0) {
          this.changeSession();
          // clearInterval(interval)
        }
      }, 1000);
      intervals.clockInterval = interval;
    } else {
      this.pause();
    }
  },
  decrementTime() {
    state.timeInSeconds--;
  },
  setState(clockContextChanged?: boolean) {
    if (clockContextChanged) {
      // Clearing interval
      this.pause();
      // Changing State
      state.clockState = settings.clockContext.filter(
        (clock) => clock.name == "Pomodoro"
      )[0].name;
      state.timeInSeconds =
        +settings.clockContext.filter((clock) => clock.name == "Pomodoro")[0]
          .value * 60;
      // Clock State has changed so the clock has reseted
      state.isStarted = false;
    }
    // Changing App State Color
    state.color = settings.colorContext.filter(
      (color) => color.active
    )[0].color;
  },
  setSettings(colorContext?: ColorContext[], clockContext?: ClockContext[]) {
    if (clockContext) settings.clockContext = clockContext;
    if (colorContext) settings.colorContext = colorContext;
    this.setState(!!clockContext);
  },
  getSettings() {
    const clockContext = [];
    const colorContext = [];
    for (let clock of settings.clockContext) {
      clockContext.push(Object.assign({}, clock));
    }
    for (let color of settings.colorContext) {
      colorContext.push(Object.assign({}, color));
    }
    return { clockContext, colorContext };
  },
  secondsToString(): string {
    const value: number = state.timeInSeconds;
    if (value <= 0) return "00:00";
    const min = Math.floor(value / 60);
    const seconds = value - min * 60;
    return `${min < 10 ? "0" + min : min}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  },
};
export default {
  state,
  methods,
};
