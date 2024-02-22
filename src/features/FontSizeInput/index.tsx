'use client';

import { Input } from 'src/components/ui/input';

import { useFontSizeInput } from 'src/features/FontSizeInput/useFontSizeInput';

const FontSizeInput = () => {
  const { fontSize, handleFontSizeChange } = useFontSizeInput();

  return (
    <Input
      className="w-[180px] flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      type="number"
      min={12}
      max={24}
      value={fontSize}
      onChange={handleFontSizeChange}
    />
  );
};

export default FontSizeInput;
