type ClockTypeName = "Pomodoro" | "Short Break" | "Long Break"
export type ClockContext = {
    name: ClockTypeName;
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
export type Store = {
    clockContext: ClockContext[];
    colorContext: ColorContext[];
}