import { ForwardedRef, useEffect, useRef } from 'react';

const useForwardRef = <T>(ref: ForwardedRef<T>) => {
  const nodeRef = useRef<T>(null);

  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(nodeRef.current);
      } else {
        ref.current = nodeRef.current;
      }
    }
  }, [ref]);

  return nodeRef;
};

export default useForwardRef;
