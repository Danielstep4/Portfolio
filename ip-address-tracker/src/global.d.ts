/// <reference types="svelte" />

interface Theme {
  breakpoints: {
    mobile: string;
    desktop: string;
  };
  palette: {
    grey: {
      veryDark: string;
      dark: string;
    };
  };
}

interface IPResponse {
  ip: string;
  isp: string;
  location: {
    country: string;
    region: string;
    geonameId: number;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
}

interface InfoBarProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}

interface MapProps {
  lat: number;
  lng: number;
}
