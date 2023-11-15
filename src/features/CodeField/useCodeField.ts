import { CSSProperties, useState } from 'react';
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

  const resizeButtonStyles: CSSProperties = {
    zIndex: 10,
    top: '50%',
    width: '1.5rem',
    height: '1.5rem',
  };

  return {
    isDragging,
    userPreferences,
    minWidth: 520,
    maxWidth: 920,
    minHeight: 380,
    resizeButtonStyles,
    handleResizeStart,
    handleResize,
    handleResizeStop,
  };
};
