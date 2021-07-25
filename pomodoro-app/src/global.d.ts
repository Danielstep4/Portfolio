type IndicatorTextType = "Pomodoro" | "Short Break" | "Long Break"
export type Indicators = {
    text: IndicatorTextType;
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