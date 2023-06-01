/** @jsxImportSource @emotion/react */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useState } from 'react';

import ComboBox from 'components/molecules/ComboBox';

import { css } from '@emotion/react';
import { ChevronDownIcon } from 'assets/icons';

export default function AutoComplete() {
    return (
        <div>
            <label htmlFor="autocomplete" css={css({ display: 'none' })} />
            <ComboBox icon={<ChevronDownIcon />} />
        </div>
    );
}
