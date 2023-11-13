'use client';

import { FC, useState } from 'react';
import Image from 'next/image';

import arrowDown from 'src/assets/arrow-down.svg';

type SelectProps = {
  listItems: any[];
};

const Select: FC<SelectProps> = ({ listItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className="relative p-1 border-[1px] border-[#464646] rounded-lg text-sm cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-5">
        <div className="text-white">Value</div>
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
        <ul
          className={`absolute left-0 top-[120%] p-1 border-[1px] border-[#464646] rounded-lg text-sm bg-[#191919] text-[#8b8b8b]`}
        >
          {listItems.map((item) => (
            <li
              className="p-1 rounded-lg transition-all duration-200 hover:bg-[#363636]"
              key={Date.now()}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
