type ClockStateName = "Pomodoro" | "Short Break" | "Long Break"
export type ClockState = {
    text: ClockStateName;
    isActive: boolean;
    value: number
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