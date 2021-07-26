import { reactive } from 'vue'
import { theme } from '../Utils/theme'
import { State, Settings, Methods } from './store'
// const clockContext: ClockContext[] = [
//       { name: "Pomodoro", isActive: true, value: '0.25' },
//       { name: "Short Break", isActive: false, value: '5'  },
//       { name: "Long Break", isActive: false, value: '15'  }
//     ]
// const colorContext: ColorContext[] = [
//     { name: 'default', color: theme.pallete.primary, active: true},
//     { name: 'blue', color: theme.pallete.secondry,  active: false},
//     { name: 'green', color: theme.pallete.success,  active: false},
// ]
const state = reactive<State>({
    timeInSeconds: 10,
    clockState: 'Pomodoro',
    color: theme.pallete.primary
})

const methods: Methods = {
    decrementTime() {
        state.timeInSeconds--
    }
}
export default {
    state,
    methods
}