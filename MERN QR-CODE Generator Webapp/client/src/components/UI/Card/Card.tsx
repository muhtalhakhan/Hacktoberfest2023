import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { CardCount } from './CardCount';
import { CardMenu } from './CardMenu';

import './Card.scss';

interface ICardProps {
  url: string;
  img?: string;
  shortLink?: string;
  name?: string;
  patternColor: string;
  bgColor: string;
  count?: number;
  isCountVisible: boolean;
}

export const Card = ({
  url,
  img = '',
  shortLink = '',
  name,
  patternColor = '#000',
  bgColor = '#fff',
  count,
  isCountVisible,
}: ICardProps) => {
  return (
    <div className="card border">
      <div className="card__code code">
        <div className={`code__qr qr${shortLink} border`}>
          <QRCodeSVG
            value={`${process.env.REACT_APP_BASE_URL}/sl/${shortLink}`}
            bgColor={bgColor}
            fgColor={patternColor}
            level={img !== '' ? 'M' : 'L'}
            includeMargin={true}
            imageSettings={
              img !== ''
                ? {
                    src: img,
                    height: 22,
                    width: 22,
                    excavate: true,
                  }
                : undefined
            }
          />
        </div>
      </div>
      <div className="card__content">
        <h2 className="card__title subtitle">{name}</h2>
        <a
          className="card__link text"
          target="_blank"
          rel="noopener noreferrer"
          href={`${process.env.REACT_APP_BASE_URL}/sl/${shortLink}`}
        >
          {url}
        </a>
      </div>
      <div className="card__container">
        <CardCount isCountVisible={isCountVisible} count={count} />
        <CardMenu shortLink={shortLink} />
      </div>
    </div>
  );
};
