import { CSSProperties, useState } from 'react';
import { ResizeCallback } from 're-resizable';
import { useShallow } from 'zustand/react/shallow';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';

export const useCodeField = () => {
  const { addSearchParam } = useUrlManager();
  const { setWidth, ...userPreferences } = useUserPreferences(
    useShallow(state => ({
      setWidth: state.setWidth,
      background: state.background,
      theme: state.theme,
      padding: state.padding,
      width: state.width,
    }))
  );

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleResizeStart = (): void => {
    setIsDragging(true);
  };

  const handleResize: ResizeCallback = (event, direction, ref, delta): void => {
    setWidth(ref.clientWidth);

    addSearchParam(SearchParam.WIDTH, ref.clientWidth.toString());
  };

  const handleResizeStop = (): void => setIsDragging(false);

  const resizeButtonStyles: CSSProperties = {
    zIndex: 99,
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
