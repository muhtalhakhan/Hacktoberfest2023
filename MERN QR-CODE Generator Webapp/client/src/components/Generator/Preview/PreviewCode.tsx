import React from 'react';

import { PreviewResult } from './PreviewResult';
import { PreviewActions } from './PreviewActions';

export const PreviewCode = () => {
  return (
    <div className="generator__preview border">
      <PreviewResult />

      <PreviewActions />
    </div>
  );
};
