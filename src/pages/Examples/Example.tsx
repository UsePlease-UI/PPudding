import { Navigate, useParams } from 'react-router-dom';

import { getComponents as getAComponents } from './akffkdahffkdgo77/utils';
import { getComponents as getKComponents } from './Kimyerim1935/utils';

export default function Example() {
    const { component } = useParams();

    return getAComponents(component) || getKComponents(component) || <Navigate to="/" replace />;
}
