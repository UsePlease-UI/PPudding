import { createContext, createRef, ReactNode, RefObject, useContext, useEffect, useMemo } from 'react';

export type TabContextType = {
  linkRefs: RefObject<HTMLButtonElement>[];
};

export type TabProviderType = {
  children: ReactNode;
  value: number;
  onChange: (newValue: number) => void;
};

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTab = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('should use Tab inside `TabContext`!');
  }

  return context;
};

// WAI-ARIA : https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
export function TabProvider({ children, onChange, value }: TabProviderType) {
  const linkRefs = Array.from({ length: 3 }).map(() => createRef<HTMLButtonElement>());

  /**
   *  Keyboard Interaction
   *  1. Left Arrow
   *  2. Right Arrow
   */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const nextIndex = value === linkRefs.length ? 1 : value + 1;
        const prevIndex = value === 1 ? 3 : value - 1;
        onChange(event.key === 'ArrowRight' ? nextIndex : prevIndex);

        linkRefs.forEach((ref, index) => {
          if (ref.current) {
            ref.current.blur();
            if (event.key === 'ArrowRight' && index + 1 === nextIndex) {
              ref.current.focus();
            } else if (event.key === 'ArrowLeft' && index + 1 === prevIndex) {
              ref.current.focus();
            }
          }
        });
      }
    };

    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [linkRefs, value, onChange]);

  const context: TabContextType = useMemo(() => ({ linkRefs, value }), [linkRefs, value]);

  return <TabContext.Provider value={context}>{children}</TabContext.Provider>;
}
