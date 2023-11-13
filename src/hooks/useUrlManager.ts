import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useUrlManager = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addSearchParam = (key: string, value: string): void => {
    const params = new URLSearchParams(searchParams);

    params.set(key, value);
    router.push(`${pathname}?${params}`);
  };

  return {
    router,
    pathname,
    searchParams,
    addSearchParam,
  };
};
