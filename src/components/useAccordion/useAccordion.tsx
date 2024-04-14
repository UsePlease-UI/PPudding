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

export const useAccordion = () => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error('should use Accordion inside `AccordionContext`!');
    }

    return context;
};

/**
 *  [UI Component] Accordion Provider
 *  @param children 컴포넌트
 *  @param isExpanded Panel 선택 여부 [optional]
 *  @param isDisabled Panel 비활성화 여부 [optional]
 *  @param onChange Change Event Handler [optional]
 *  @returns JSX.Element
 */
export function AccordionProvider({ children, isExpanded, isDisabled, onChange }: AccordionProviderType) {
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
        () => ({
            accordionId,
            isExpanded: isDisabled ? true : selected,
            isDisabled: isDisabled || false,
            onChange: handleChange
        }),
        [accordionId, isExpanded, isDisabled, handleChange]
    );

    return <AccordionContext.Provider value={context}>{children}</AccordionContext.Provider>;
}
