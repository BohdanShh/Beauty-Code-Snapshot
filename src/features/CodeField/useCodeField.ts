import { MouseEvent, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SearchParam } from 'src/constants';

export const useCodeField = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [width, setWidth] = useState<number>(Number(searchParams.get(SearchParam.width)) || 520);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    if (isDragging) {
      const newWidth = width + (event.clientX - startX);
      const params = new URLSearchParams(searchParams);

      if (newWidth < 520 || newWidth > 920) return;

      setWidth(newWidth);
      setStartX(event.clientX);

      params.set(SearchParam.width, newWidth.toString());
      router.push(`${pathname}?${params}`);
    }
  };

  const handleMouseUp = (): void => setIsDragging(false);

  return { width, isDragging, handleMouseDown, handleMouseMove, handleMouseUp };
};
