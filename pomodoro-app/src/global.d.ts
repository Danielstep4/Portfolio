type ClockStateName = "Pomodoro" | "Short Break" | "Long Break"
export type ClockContext = {
    name: ClockStateName;
    isActive: boolean;
    value: string;
}
export type Theme = {
    pallete: {
        primary: string
        secondry: string;
        success: string;
    }
}
export type ColorContext = {
    name: string;
    color: string;
    active: boolean;
}