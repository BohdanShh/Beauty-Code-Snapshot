export const useUrlManager = () => {
  const url = new URL(window.location.toString());

  const addSearchParam = (key: string, value: string): void => {
    if (!value.trim().length) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }

    window.history.pushState({}, '', url);
  };

  return {
    url,
    addSearchParam,
  };
};
