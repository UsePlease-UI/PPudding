import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { v4 as uuid } from 'uuid';

import Alert from '@components/Alert';

import { joinClassNames } from '@utils/format';

import { AlertContext, AlertContextType, OptionsType } from './AlertContext';
import { getPositionStyle } from './styles';

type MessageType = {
  content: string;
  id: string;
  options?: OptionsType;
};

type AlertProviderType = {
  children: ReactNode;
  icon?: ReactNode;
  position?: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
};

const AlertProvider = ({ children, icon, position }: AlertProviderType) => {
  const [modalElement, setModalElement] = useState<HTMLElement>();
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleOpen = useCallback(
    (content: string, options?: OptionsType) => {
      const newMessage = { id: uuid(), content, options };
      if (position?.includes('top')) {
        setMessages((prev) => [...prev, newMessage]);
      } else {
        setMessages((prev) => [newMessage, ...prev]);
      }
    },
    [position],
  );

  const handleClose = useCallback(
    (id: string) => setMessages((prev) => prev.filter((message) => message.id !== id)),
    [],
  );

  const context: AlertContextType = useMemo(() => ({ onAlert: handleOpen }), [handleOpen]);

  useEffect(() => {
    if (messages.length > 0) {
      setModalElement(document.getElementById('portal') as HTMLElement);
    } else {
      setModalElement(undefined);
    }
  }, [messages]);

  return (
    <AlertContext.Provider value={context}>
      {children}
      {modalElement
        ? createPortal(
            <div className={joinClassNames(getPositionStyle(position), 'absolute z-1000 flex flex-col gap-2.5')}>
              {messages.map((message) => (
                <Alert
                  key={message.id}
                  icon={icon}
                  message={message.content}
                  options={message.options}
                  onClose={() => handleClose(message.id)}
                />
              ))}
            </div>,
            modalElement as HTMLElement,
          )
        : null}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
