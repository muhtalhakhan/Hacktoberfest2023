import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

export const PreviewResult = () => {
  const { code } = useTypedSelector((state) => state.code);

  return (
    <div className="code generator__code">
      <div className="code__qr border">
        <QRCodeSVG
          className={code.link !== '' ? '' : 'code__qr_disabled'}
          value={
            code.shortLink
              ? `${process.env.REACT_APP_BASE_URL}/sl/${code.shortLink}`
              : code.link
          }
          bgColor={code.style.bgColor}
          fgColor={code.style.patternColor}
          level={!!code.logo.src ? 'M' : 'L'}
          size={370}
          includeMargin={true}
          imageSettings={
            !!code.logo.src
              ? {
                  src: code.logo.src,
                  height: 64,
                  width: 64,
                  excavate: true,
                }
              : undefined
          }
        />
      </div>
    </div>
  );
};
