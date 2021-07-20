/// <reference types="svelte" />
type Theme = {
    platte: {
        primary: {
            scissors: string;
            paper: string;
            rock: string;
            lizard: string;
            spock: string;
        }
        text: {
            dark: string;
            score: string;
            header: string;
        }
        background: string;
        
    }
}

type PickChoices = "paper" | "rock" | "scissors";