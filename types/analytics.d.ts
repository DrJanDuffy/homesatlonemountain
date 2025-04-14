declare global {
  interface Window {
    va: {
      track: (event: string, properties?: unknown) => void;
      event: (event: string, properties?: unknown) => void;
      pageview: (url: string) => void;
    }
  }
}

export {} 