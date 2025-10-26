import React from 'react';

interface ISectionHeader {
  title: string;
}

export const SectionHeader = ({ title }: ISectionHeader) => (
  <div className="section__header">
    <h2 className="section__title title">{title}</h2>
  </div>
);
