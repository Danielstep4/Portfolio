/// <reference types="svelte" />

type SitePages = "Home" | "Projects" | "About";

interface Theme {
  palette: {
    fonts: {
      red: string;
      white: string;
      secondary: string;
    };
    elements: {
      red: string;
      secondary: string;
      gray: string;
    };
  };
}

interface NavigationStore {
  currentPage: SitePages;
}

interface SocialLinks {
  iconComp: import("@fortawesome/fontawesome-common-types").IconDefinition;
  link: string;
}
