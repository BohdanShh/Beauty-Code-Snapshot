'use client';

import { FC, ForwardedRef, RefObject, forwardRef } from 'react';
import { Link2Icon, ClipboardIcon, ChevronDownIcon } from '@radix-ui/react-icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';
import SettingItem from 'src/features/SettingItem';

import { cn } from 'src/lib/utils';
import { useExportOptions } from 'src/features/ExportOptions/useExportOptions';

import styles from 'src/features/ExportOptions/styles.module.css';

type ExportOptionsProps = {
  ref?: ForwardedRef<HTMLDivElement>;
};

const ExportOptions: FC<ExportOptionsProps> = forwardRef(function ExportOptions(_, ref) {
  const { handleCopyCodeAsImage, handleCopyUrl, handleDownloadCodeAsImage } = useExportOptions(
    ref as RefObject<HTMLDivElement>
  );

  return (
    <SettingItem>
      <div className="flex gap-3">
        <button
          className={cn('flex-grow', styles.btn)}
          onClick={handleDownloadCodeAsImage}
        >
          Export
        </button>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className={cn('w-8 flex items-center justify-center', styles.btn)}>
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="gap-2"
                onClick={handleCopyCodeAsImage}
              >
                <ClipboardIcon />
                <div>Copy Image</div>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="gap-2"
                onClick={handleCopyUrl}
              >
                <Link2Icon />
                <div>Copy URL</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </SettingItem>
  );
});

export default ExportOptions;
