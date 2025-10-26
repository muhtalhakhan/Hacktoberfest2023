import React from 'react';
import { useLocation } from 'react-router-dom';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useCheckAuthQuery } from '../store/auth/authApi';

import { Code } from '../components/Code/Code';
import { Loader } from '../components/UI/Loader/Loader';
import { Section } from '../components/UI/Section/Section';
import { SectionHeader } from '../components/UI/Section/SectionHeader';

export const CodePage = () => {
  const location = useLocation();
  const isEmailRedirect = location.search.split('=')[1] === 'email';

  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { isLoading } = useCheckAuthQuery('', {
    skip: !(isEmailRedirect && isAuth && !user.isActivated),
  });

  return !isLoading ? (
    <Section>
      <SectionHeader title="Мои QR-коды" />

      <Code />
    </Section>
  ) : (
    <div className="main-loader">
      <Loader />
    </div>
  );
};
