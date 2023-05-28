/** @jsxImportSource @emotion/react */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import { css } from '@emotion/react';

export default function AutoComplete() {
    return (
        <div>
            <label htmlFor="autocomplete" css={css({ display: 'none' })} />
            <input type="text" id="autocomplete" aria-expanded="true" role="combobox" aria-controls="hello" />
            <button type="button">g</button>
        </div>
    );
}
