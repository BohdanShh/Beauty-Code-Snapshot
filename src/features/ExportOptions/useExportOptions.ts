import { RefObject } from 'react';
import { toPng, toBlob } from 'html-to-image';

import { useToast } from 'src/hooks/useToast';
import { useUserPreferences } from 'src/store/useUserPreferences';
import { useUrlManager } from 'src/hooks/useUrlManager';

export const useExportOptions = (ref: RefObject<HTMLDivElement>) => {
  const { toast } = useToast();
  const { url } = useUrlManager();
  const title = useUserPreferences(state => state.title);

  const handleDownloadCodeAsImage = async (): Promise<void> => {
    if (!ref.current) return;

    try {
      const dataUrl = await toPng(ref.current, { cacheBust: true });

      const link = document.createElement('a');

      link.download = `${title || 'Untitled-1'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      toast({ description: 'Something went wrong. Please, try again!', variant: 'destructive' });
    }
  };

  const handleCopyCodeAsImage = async (): Promise<void> => {
    if (!ref.current) return;

    try {
      const dataUrl = await toBlob(ref.current, { cacheBust: true });

      if (!dataUrl) return;

      await navigator.clipboard.write([
        new ClipboardItem({
          [dataUrl.type]: dataUrl,
        }),
      ]);

      toast({ description: 'Image successfully copied!' });
    } catch (error) {
      toast({
        description: 'Something went wrong. Please, try again!',
        variant: 'destructive',
      });
    }
  };

  const handleCopyUrl = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(url?.origin || '' + url?.pathname + url?.search);

      toast({ description: 'URL successfully copied!' });
    } catch (error) {
      toast({
        description: 'Something went wrong. Please, try again!',
        variant: 'destructive',
      });
    }
  };

  return { handleDownloadCodeAsImage, handleCopyCodeAsImage, handleCopyUrl };
};
