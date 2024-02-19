import { FC } from 'react';

import { ReactChildren } from 'src/types';

type SettingItemProps = {
  label?: string;
} & ReactChildren;

const SettingItem: FC<SettingItemProps> = ({ label, children }) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && <div className='text-base text-[#8b8b8b]'>{label}</div>}
      {children}
    </div>
  );
};

export default SettingItem;
