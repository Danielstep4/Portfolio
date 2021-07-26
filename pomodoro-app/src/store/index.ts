import { reactive } from 'vue'
import { theme } from '../Utils/theme'
import { State, Settings, Methods } from './store'
// State init
const state = reactive<State>({
    timeInSeconds: 1500,
    clockState: 'Pomodoro',
    color: theme.pallete.primary,
})
// Settings init
const settings: Settings = {
    clockContext: [
        { name: "Pomodoro", isActive: true, value: '25' },
        { name: "Short Break", isActive: false, value: '5'  },
        { name: "Long Break", isActive: false, value: '15'  }
    ],
    colorContext: [
        { name: 'default', color: theme.pallete.primary, active: true},
        { name: 'blue', color: theme.pallete.secondry,  active: false},
        { name: 'green', color: theme.pallete.success,  active: false},
    ]
}
// Methods
const methods: Methods = {
    decrementTime() {
        state.timeInSeconds--
    },
    updateState() {
        state.clockState = settings.clockContext.filter(clock => clock.isActive)[0].name;
        state.timeInSeconds = +settings.clockContext.filter(clock => clock.isActive)[0].value * 60;
        state.color = settings.colorContext.filter(color => color.active)[0].color;
    },
    updateSettings() {

    }



}
export default {
    state,
    methods,
    settings
}