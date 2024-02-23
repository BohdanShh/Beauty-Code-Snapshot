import { SearchParam } from 'src/constants';
import { isWindowPresented } from 'src/lib/isWindowPresented';

export const useUrlManager = () => {
  let url: URL | null = null;

  if (isWindowPresented(globalThis.window)) {
    url = new URL(window.location.toString());
  }

  const addSearchParam = (key: SearchParam, value: string): void => {
    if (isWindowPresented(globalThis.window)) {
      url = new URL(window.location.toString());
    }

    if (!url) return;

    const current = new URLSearchParams(Array.from(url?.searchParams.entries()));

    if (!value) {
      current.delete(key);
    } else {
      current.set(key, value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';

    url.searchParams.set(key, value);
    window.history.pushState({}, '', `${url.pathname}${query}`);
  };

  const getSearchParam = <T>(key: SearchParam, defaultValue: T): T => {
    const value = url?.searchParams.get(key);

    if (!value) return defaultValue;

    if (key === SearchParam.CODE) {
      return atob(value) as T;
    }

    switch (typeof defaultValue) {
      case 'number':
        return Number(value) as T;
      case 'boolean':
        return value.includes('true') as T;
      default:
        return value as T;
    }
  };

  return {
    url,
    addSearchParam,
    getSearchParam,
  };
};
