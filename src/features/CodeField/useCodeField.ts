import { useState } from 'react';
import { ResizeCallback } from 're-resizable';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useGetUserPreferences } from 'src/hooks/useGetUserPreferences';

export const useCodeField = () => {
  const { addSearchParam } = useUrlManager();
  const userPreferences = useGetUserPreferences();

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleResizeStart = (): void => {
    setIsDragging(true);
  };

  const handleResize: ResizeCallback = (event, direction, ref, delta): void => {
    addSearchParam(SearchParam.width, ref.clientWidth.toString());

    userPreferences.setWidth(ref.clientWidth);
  };

  const handleResizeStop = (): void => setIsDragging(false);

  return {
    isDragging,
    userPreferences,
    handleResizeStart,
    handleResize,
    handleResizeStop,
  };
};
