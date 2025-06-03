import { HTMLAttributes, ReactNode, useCallback, useRef } from 'react';

import { AnimationDefinition, domAnimation, LazyMotion } from 'motion/react';
import * as motion from 'motion/react-client';

import { useAccordion } from '@components/useAccordion';

import { joinClassNames } from '@utils/format';

export interface AccordionPanelType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function AccordionPanel(props: AccordionPanelType) {
  const { children, className, ...rest } = props;
  const { accordionId, isExpanded } = useAccordion();

  const ref = useRef<HTMLDivElement>(null);

  const handleAnimationComplete = useCallback((definition: AnimationDefinition) => {
    if (definition === 'exit') {
      if (ref.current) {
        ref.current.hidden = true;
      }
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        animate={isExpanded ? 'enter' : 'exit'}
        className="w-full overflow-hidden"
        exit="exit"
        initial="exit"
        onAnimationComplete={handleAnimationComplete}
        variants={{
          // 150ms cubic-bezier(0.4, 0, 0.2, 1)
          enter: { height: 'auto', transition: { duration: 0.15, times: [0.4, 0, 0.2, 1] } },
          exit: { height: 0, transition: { duration: 0.15, times: [0.4, 0, 0.2, 1] } },
        }}
      >
        <div
          {...rest}
          ref={ref}
          aria-labelledby={`accordion-header-${accordionId}`}
          id={`accordion-content-${accordionId}`}
          role="region"
          className={joinClassNames(
            '-mt-px h-max w-full rounded-b border border-gray-100 bg-white p-5 text-16 *:text-16 *:leading-normal',
            className && className,
          )}
        >
          {children}
        </div>
      </motion.div>
    </LazyMotion>
  );
}
