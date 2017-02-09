import React from 'react';

const Head = (props) => {
  const { children } = props;

  return (
    <thead>
      <tr>
        {children}
      </tr>
    </thead>
  )
}

export { Head }
