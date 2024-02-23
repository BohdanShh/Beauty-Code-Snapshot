'use client';

import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from 'src/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from 'src/components/ui/popover';

import { cn } from 'src/lib/utils';
import { useLanguageSelect } from 'src/features/LanguageSelect/useLanguageSelect';
import { LANGUAGES } from 'src/features/LanguageSelect/constants';

import styles from 'src/features/LanguageSelect/styles.module.css';

const LanguageSelect = () => {
  const { language, open, setOpen, handleSelect } = useLanguageSelect();

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <button className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
          {LANGUAGES.find(lang => lang.value === language)?.text}
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No language found</CommandEmpty>
          <CommandGroup className={cn(styles.noScrollbar, 'max-h-80 overflow-y-auto')}>
            {LANGUAGES.map(lang => (
              <CommandItem
                key={lang.id}
                value={lang.value}
                onSelect={handleSelect}
              >
                <CheckIcon
                  className={cn(
                    'mr-2 h-4 w-4',
                    language === lang.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {lang.text}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelect;
