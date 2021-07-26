import { ClockStateName } from "../global"
export type State = {
    timeInSeconds: number;
    clockState: ClockStateName;
    color: string;
}

export type Settings = {

}
export type Methods = {
    decrementTime: () => void
}
export type Store = {
    state: State;
    settings: Settings;
    methods: Methods;
}