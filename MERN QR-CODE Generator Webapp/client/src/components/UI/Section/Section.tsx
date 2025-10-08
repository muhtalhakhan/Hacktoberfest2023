import React from 'react';

import './Section.scss';

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className = '' }: ISectionProps) => (
  <section className={`section ${className}`}>
    <div className="container">
      <div className="section__inner">{children}</div>
    </div>
  </section>
);
