import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useUrlManager = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addSearchParam = (key: string, value: string): void => {
    const url = new URL(window.location.toString());

    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
  };

  return {
    router,
    pathname,
    searchParams,
    addSearchParam,
  };
};
