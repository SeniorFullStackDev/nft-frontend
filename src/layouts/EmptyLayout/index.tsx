import React, { ReactElement } from 'react';

import { useStyle } from './style';

interface Props {
  children: ReactElement;
}

function EmptyLayout({ children }: Props) {
  const classes = useStyle();
  return (
    <div className={classes.empty}>
      {children}
    </div>
  );
}

export default EmptyLayout;
