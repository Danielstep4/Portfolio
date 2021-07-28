import { reactive } from "vue";
import { ClockContext, ColorContext } from "../global";
import { theme } from "../Utils/theme";
import { State, Settings, Methods, Intervals } from "./store";
// State init
const state = reactive<State>({
  timeInSeconds: 10,
  clockState: "Pomodoro",
  color: theme.pallete.primary,
  isPlaying: false,
  isStarted: false,
});
const intervals: Intervals = {
  clockInterval: null,
};
// Settings init
const settings: Settings = {
  clockContext: [
    { name: "Pomodoro", value: "0.25" },
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
    const { clockState } = state;
  },
  pause() {
    if (intervals.clockInterval) {
      state.isPlaying = !state.isPlaying;
      clearInterval(intervals.clockInterval);
    }
  },
  play() {
    if (!state.isPlaying) {
      state.isStarted = !state.isStarted;
      state.isPlaying = !state.isPlaying;
      const interval = setInterval(() => {
        this.decrementTime();
        if (state.timeInSeconds == 0) clearInterval(interval);
      }, 1000);
      console.log("im here");
      intervals.clockInterval = interval;
    } else {
      this.pause();
    }
  },
  decrementTime() {
    state.timeInSeconds--;
  },
  setState(onlyColor?: boolean) {
    if (!onlyColor) {
      // Clearing interval
      this.pause();
      // Changing State
      state.clockState = settings.clockContext.filter(
        (clock) => clock.name == state.clockState
      )[0].name;
      state.timeInSeconds =
        +settings.clockContext.filter(
          (clock) => clock.name == state.clockState
        )[0].value * 60;
      // Clock State has changed so the clock has reseted
      state.isStarted = !state.isStarted;
    }
    // Changing App State Color
    state.color = settings.colorContext.filter(
      (color) => color.active
    )[0].color;
  },
  setSettings(colorContext?: ColorContext[], clockContext?: ClockContext[]) {
    if (clockContext) settings.clockContext = clockContext;
    if (colorContext) settings.colorContext = colorContext;
    this.setState(!clockContext);
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
};
export default {
  state,
  methods,
};
