import { Navigate, useParams } from 'react-router-dom';

import { getComponents } from './utils';

export default function Example() {
  const { component } = useParams();

  return getComponents(component) || <Navigate replace to="/" />;
}
