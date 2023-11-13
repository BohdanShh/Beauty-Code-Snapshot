import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { SearchParam } from 'src/constants';

import styles from 'src/features/SettingsBar/styles.module.css';

export const useSettingsBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [background, setBackground] = useState<boolean>(true);
  const [padding, setPadding] = useState<number>(
    Number(searchParams.get(SearchParam.padding)) || 64
  );

  const handlePaddingChange = (value: number): void => {
    const params = new URLSearchParams(searchParams);

    params.set(SearchParam.padding, value.toString());
    router.push(`${pathname}?${params}`);

    setPadding(value);
  };

  const isActiveButton = (value: number): boolean => {
    return searchParams.get(SearchParam.padding) === value.toString();
  };

  const paddingButtons = [
    { classNames: styles.paddingBtn, value: 16, onClick: handlePaddingChange, id: '1' },
    { classNames: styles.paddingBtn, value: 32, onClick: handlePaddingChange, id: '2' },
    { classNames: styles.paddingBtn, value: 64, onClick: handlePaddingChange, id: '3' },
    { classNames: styles.paddingBtn, value: 128, onClick: handlePaddingChange, id: '4' },
  ];

  return { paddingButtons, searchParams, handlePaddingChange, isActiveButton };
};
