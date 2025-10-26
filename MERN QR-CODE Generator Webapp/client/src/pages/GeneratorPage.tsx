import React from 'react';

import { Generator } from '../components/Generator/Generator';
import { Section } from '../components/UI/Section/Section';
import { SectionHeader } from '../components/UI/Section/SectionHeader';

export const GeneratorPage = () => (
  <Section>
    <SectionHeader title="Генератор QR-кода" />

    <Generator />
  </Section>
);
