import { ReactNode } from 'react';

import CardText from '../CardText';

import type { TextType } from '../types';

type CardActionsType = TextType & {
    actions?: ReactNode;
};

/**
 *  [UI Component] Card Actions
 *  @param primaryText Primary Text
 *  @param secondaryText Secondary Text
 *  @param actions ex. Buttons, Chips, Slider...
 *  @returns JSX.Element
 */
export default function CardActions({ primaryText, secondaryText, actions }: CardActionsType) {
    return (
        <div className={primaryText || secondaryText ? 'space-y-2.5' : ''}>
            {(primaryText || secondaryText) && <CardText primaryText={primaryText} secondaryText={secondaryText} />}
            {actions && <div className="px-12 py-9">{actions}</div>}
        </div>
    );
}
