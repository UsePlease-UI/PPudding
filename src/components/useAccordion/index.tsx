import { MouseEvent, ReactNode, createContext, useCallback, useContext, useId, useMemo, useState } from 'react';

type AccordionContextType = {
    accordionId: string;
    isExpanded: boolean;
    isDisabled: boolean;
    onChange: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
};

type AccordionProviderType = {
    children: ReactNode;
    isExpanded?: boolean;
    isDisabled?: boolean;
    onChange?: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordionContext = () => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error('should use Accordion inside `AccordionContext`!');
    }

    return context;
};

export function AccordionProvider({ children, isExpanded, isDisabled = false, onChange }: AccordionProviderType) {
    const accordionId = useId();
    const [selected, setSelected] = useState<boolean>(isExpanded ?? false);

    const handleChange = useCallback(
        (event: MouseEvent<HTMLButtonElement>, curIsExpanded: boolean) => {
            setSelected((prev) => !prev);
            if (onChange) {
                onChange(event, curIsExpanded);
            }
        },
        [selected, onChange]
    );

    const context: AccordionContextType = useMemo(
        () => ({ accordionId, isExpanded: isDisabled ? true : selected, isDisabled, onChange: handleChange }),
        [accordionId, isExpanded, isDisabled, handleChange]
    );

    return <AccordionContext.Provider value={context}>{children}</AccordionContext.Provider>;
}
