import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { DismissFilled } from '@fluentui/react-icons';

import Backdrop from '@components/Base/Backdrop';
import IconButton from '@components/Button/IconButton';

import useMobile from '@hooks/useMobile';
import { joinClassNames } from '@utils/format';

import { COMPONENT_LIST, DEMO_LIST } from './constants';

type LnbType = {
  isVisible: boolean;
  onClose: () => void;
};

export default function Lnb({ isVisible, onClose }: LnbType) {
  const { isTablet } = useMobile();
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (searchParams) {
      setSelected(searchParams.get('component') || '');
    }
  }, [searchParams]);

  return (
    <Backdrop isDimmed backgroundColor="bg-black/80" isOpen={isVisible} onClose={onClose}>
      <div
        className={joinClassNames(
          'pointer-events-none flex w-0 flex-col items-start overflow-y-auto bg-[unset] transition-all duration-500 ease-in-out',
          isVisible && 'pointer-events-auto h-full w-full',
        )}
      >
        <nav className="absolute inset-x-5 top-5 mx-auto flex h-[calc(100vh-40px)] max-w-[calc(500px-40px)] flex-col items-start gap-5 overflow-y-auto rounded bg-white p-5 pt-9.5">
          <div className="absolute right-0.75 top-0.75 z-1 flex justify-end bg-white">
            <IconButton
              aria-label="close"
              size={isTablet ? 'small' : 'medium'}
              variant="text"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <DismissFilled />
            </IconButton>
          </div>
          {[{ name: 'Components', list: COMPONENT_LIST }].map((val) => (
            <div key={val.name} className="relative w-full rounded border border-primary-600">
              <div className="absolute -top-4.5 left-2.5 w-max under-tablet:-top-3.25">
                <h2 className="bg-white text-center text-24 font-black under-tablet:text-left under-tablet:text-16">
                  {val.name}
                </h2>
              </div>
              <ul className="row-auto grid w-full grid-cols-1 gap-1 p-5">
                {val.list.map((component) => (
                  <li key={component} className="group size-full rounded bg-primary-50 font-medium hover:font-semibold">
                    <Link
                      to={`/example/${component.toLowerCase()}`}
                      className={joinClassNames(
                        'block h-full w-full px-1 py-2 text-center group-hover:text-primary-900 group-hover:outline-none group-focus:text-primary-800 group-focus:outline-none',
                        component === selected && 'font-semibold text-primary-800',
                      )}
                    >
                      {component}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="relative w-full rounded border border-primary-600">
            <div className="absolute -top-4.5 left-2.5 w-max under-tablet:-top-3.25">
              <h2 className="bg-white text-center text-24 font-black under-tablet:text-left under-tablet:text-16">
                데모
              </h2>
            </div>
            <ul className="row-auto grid w-full grid-cols-1 gap-1 p-5">
              {DEMO_LIST.map((demo) => (
                <li key={demo} className="group size-full rounded bg-primary-50 font-medium hover:font-semibold">
                  <Link
                    className="block size-full px-1 py-2 text-center capitalize group-hover:text-primary-900 group-hover:outline-none group-focus:text-primary-800 group-focus:outline-none"
                    to={`/demo/${demo.toLowerCase()}`}
                  >
                    {demo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </Backdrop>
  );
}
