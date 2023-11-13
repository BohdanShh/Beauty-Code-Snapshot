import { MouseEvent, useState } from 'react';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useGetUserPreferences } from 'src/hooks/useGetUserPreferences';

export const useCodeField = () => {
  const { addSearchParam } = useUrlManager();
  const userPreferences = useGetUserPreferences();

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    if (isDragging) {
      const newWidth = userPreferences.width + (event.clientX - startX);

      if (newWidth < 520 || newWidth > 920) return;

      setStartX(event.clientX);

      addSearchParam(SearchParam.width, newWidth.toString());

      userPreferences.setWidth(newWidth);
    }
  };

  const handleMouseUp = (): void => setIsDragging(false);

  return {
    isDragging,
    userPreferences,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};
