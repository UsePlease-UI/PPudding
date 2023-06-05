/** @jsxImportSource @emotion/react */
/* eslint-disable jsx-a11y/label-has-associated-control */

import ComboBox from 'components/molecules/ComboBox';
import { AUTOCOMPLETE } from 'constants/autocomplete';

import { css } from '@emotion/react';
import { ChevronDownIcon } from 'assets/icons';

type autoCompleteType = {
    label: string;
};

export default function AutoComplete({ label }: autoCompleteType) {
    return (
        <div>
            <label htmlFor={label} css={css({ display: 'none' })} />
            <ComboBox id={label} icon={<ChevronDownIcon />} list={AUTOCOMPLETE} />
        </div>
    );
}
