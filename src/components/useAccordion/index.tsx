import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type AccordionContextType = {
    isExpanded: boolean;
    onChange: (event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
};

type AccordionProviderType = {
    children: React.ReactNode;
    isExpanded?: boolean;
    onChange?: (event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordionContext = () => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error('should use Accordion inside `AccordionContext`!');
    }

    return context;
};

export function AccordionProvider({ children, isExpanded, onChange }: AccordionProviderType) {
    const [selected, setSelected] = useState<boolean>(isExpanded ?? false);

    const handleChange = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>, curIsExpanded: boolean) => {
            setSelected((prev) => !prev);
            if (onChange) {
                onChange(event, curIsExpanded);
            }
        },
        [selected, onChange]
    );

    const context: AccordionContextType = useMemo(
        () => ({ isExpanded: selected, onChange: handleChange }),
        [isExpanded, handleChange]
    );

    return <AccordionContext.Provider value={context}>{children}</AccordionContext.Provider>;
}
