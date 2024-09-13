import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { v4 as uuid } from 'uuid';

import Alert from '@components/Alert';

import { joinClassNames } from '@utils/format';

import { getPositionStyle } from './styles';

export type OptionsType = {
    canDismiss?: boolean;
    delay?: number;
    variant?: 'info' | 'error' | 'warning' | 'success' | 'default';
};

type AlertContextType = {
    onAlert: (content: string, options?: OptionsType) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
    const context = useContext(AlertContext);

    if (!context) {
        throw new Error('should use Alert within Alert Provider');
    }

    return context;
};

type MessageType = {
    content: string;
    id: string;
    options?: OptionsType;
};

type AlertProviderType = {
    children: ReactNode;
    icon?: ReactNode;
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
};

export function AlertProvider({ children, icon, position }: AlertProviderType) {
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
                      <div
                          className={joinClassNames(
                              getPositionStyle(position),
                              'absolute z-1000 flex flex-col gap-2.5',
                          )}
                      >
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
}
