import { createContext, useContext, useMemo } from 'react';

type AccordionContextType = {
    value: string | number;
    onChange: (newValue: string | number) => void;
};

type AccordionProviderType = {
    children: React.ReactNode;
    value: string | number;
    onChange: (newValue: string | number) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordionContext = () => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error('should use Accordion inside `AccordionContext`!');
    }

    return context;
};

export default function AccordionProvider({ children, value, onChange }: AccordionProviderType) {
    const context: AccordionContextType = useMemo(() => ({ value, onChange }), [value, onChange]);

    return <AccordionContext.Provider value={context}>{children}</AccordionContext.Provider>;
}
