import React, { ReactElement } from 'react';

import { useStyle } from './style';

interface Props {
  children: ReactElement;
}

function ContentLayout({ children }: Props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
}

export default ContentLayout;
