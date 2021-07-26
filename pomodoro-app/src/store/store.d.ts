import { ClockStateName, ClockContext, ColorContext } from "../global"
export type State = {
    timeInSeconds: number;
    clockState: ClockStateName;
    color: string;
}

export type Settings = {
    clockContext: ClockContext[];
    colorContext: ColorContext[];
}
export type Methods = {
    decrementTime: () => void
    updateState: () => void;
    updateSettings: () => void;
}
export type Store = {
    state: State;
    settings: Settings;
    methods: Methods;
}