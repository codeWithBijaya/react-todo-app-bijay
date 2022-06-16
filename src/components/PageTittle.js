import React from 'react';
import style from '../styles/modules/title.module.scss';

function PageTittle({ children, ...rest }) {
  return (
    <div>
      <p1 className={style.title} {...rest}>
        {children}
      </p1>
    </div>
  );
}

export default PageTittle;
