'use client';

import { CSSProperties, FC, useState } from 'react';
import Image from 'next/image';

import arrowDown from 'src/assets/images/svg/arrow-down.svg';
import { ReactChildren } from 'src/types';

type SelectProps = {
  value?: string;
  style?: CSSProperties;
} & ReactChildren;

const Select: FC<SelectProps> = ({ value, style, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className="relative p-1 border-[1px] border-[#464646] rounded-lg text-sm cursor-pointer"
      style={style}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="text-white">{value}</div>
        <div>
          <Image
            className={`${isOpen ? 'scale-y-[-1]' : ''}`}
            src={arrowDown}
            alt="arrow"
            width={13}
            height={13}
          />
        </div>
      </div>
      {isOpen && (
        <ul className="absolute left-0 bottom-[120%] max-h-80 p-1 overflow-y-auto overflow-x-hidden border-[1px] border-[#464646] rounded-lg text-sm bg-[#191919] text-[#8b8b8b] scrollbar-track-transparent">
          {children}
        </ul>
      )}
    </div>
  );
};

export default Select;
