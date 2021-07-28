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
});
const intervals: Intervals = {
  clockInterval: null,
};
// Settings init
const settings: Settings = {
  clockContext: [
    { name: "Pomodoro", isActive: true, value: "25" },
    { name: "Short Break", isActive: false, value: "5" },
    { name: "Long Break", isActive: false, value: "15" },
  ],
  colorContext: [
    { name: "default", color: theme.pallete.primary, active: true },
    { name: "blue", color: theme.pallete.secondry, active: false },
    { name: "green", color: theme.pallete.success, active: false },
  ],
};
// Methods
const methods: Methods = {
  play() {
    if (!state.isPlaying) {
      state.isPlaying = !state.isPlaying;
      const interval = setInterval(() => {
        this.decrementTime();
        if (state.timeInSeconds == 0) clearInterval(interval);
      }, 1000);
      console.log("im here");
      intervals.clockInterval = interval;
    } else {
      if (intervals.clockInterval) {
        state.isPlaying = !state.isPlaying;
        clearInterval(intervals.clockInterval);
      }
    }
  },
  decrementTime() {
    state.timeInSeconds--;
  },
  setState() {
    state.clockState = settings.clockContext.filter(
      (clock) => clock.isActive
    )[0].name;
    state.timeInSeconds =
      +settings.clockContext.filter((clock) => clock.isActive)[0].value * 60;
    state.color = settings.colorContext.filter(
      (color) => color.active
    )[0].color;
  },
  setSettings(clockContext?: ClockContext[], colorContext?: ColorContext[]) {
    if (clockContext) settings.clockContext = clockContext;
    if (colorContext) settings.colorContext = colorContext;
    this.setState();
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
