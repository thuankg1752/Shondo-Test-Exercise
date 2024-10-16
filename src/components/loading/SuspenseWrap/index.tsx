import { random } from 'lodash';
import React, { Suspense } from 'react';
import Spin from '../../Spin';

interface SuspenseWrapperProps {
  component: React.ReactNode;
}
export const SuspenseWrapper = (props: SuspenseWrapperProps) => {
  return (
    <Suspense
      key={'suspense-loading-' + random(10)}
      fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}>
          <Spin/>
        </div>
      }
    >
      {props.component}
    </Suspense>
  );
};
