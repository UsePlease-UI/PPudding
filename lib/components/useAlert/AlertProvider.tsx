import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { v4 as uuid } from 'uuid';

import Alert from '@components/Alert';

import { joinClassNames } from '@utils/format';

import { AlertContext, AlertContextType, AlertOptionsType } from './AlertContext';
import { getAlertPositionStyle } from './styles';

export type AlertMessageType = {
  id: string;
  content: string;
  options?: AlertOptionsType;
};

export type AlertPositionType =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right';

export interface AlertProviderType {
  children: ReactNode;
  icon?: ReactNode;
  position?: AlertPositionType;
}

const AlertProvider = ({ children, icon, position }: AlertProviderType) => {
  const [modalElement, setModalElement] = useState<HTMLElement>();
  const [messages, setMessages] = useState<AlertMessageType[]>([]);

  const handleOpen = useCallback(
    (content: string, options?: AlertOptionsType) => {
      const newMessage = { content, id: uuid(), options };
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
    if (!document.getElementById('portal')) {
      const portal = document.createElement('div');
      portal.setAttribute('id', 'portal');
      const body = document.getElementsByTagName('body')[0];
      body.appendChild(portal);
    }
  }, []);

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
            <div className={joinClassNames(getAlertPositionStyle(position), 'absolute z-1000 flex flex-col gap-2.5')}>
              {messages.map((message) => (
                <Alert
                  key={message.id}
                  message={message.content}
                  icon={icon}
                  onClose={() => handleClose(message.id)}
                  options={message.options}
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
