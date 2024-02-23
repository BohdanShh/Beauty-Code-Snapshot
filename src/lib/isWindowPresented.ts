export function isWindowPresented(window: Window): window is Window {
  return typeof window !== 'undefined';
}
