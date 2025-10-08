import React from 'react';

interface ISettingsNameProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const SettingsName = ({
  label,
  className = '',
  children,
}: ISettingsNameProps) => (
  <div className={`code-settings__item ${className}`}>
    <div className="code-settings__name suptitle">{label}</div>
    {children}
  </div>
);
