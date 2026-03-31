declare global {
  interface Window {
    mixpanel?: { track: (event: string, props?: Record<string, unknown>) => void };
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
  }
}

export function track(event: string, props?: Record<string, unknown>): void {
  try {
    window.mixpanel?.track(event, props);
  } catch {
    // ignore — mixpanel unavailable or blocked
  }
  try {
    window.plausible?.(event, props ? { props } : undefined);
  } catch {
    // ignore — plausible unavailable or blocked
  }
}
