import React from 'react';

interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}

const SectionComponent = ({ children, className }: Props) => {
  return (
    <section className={`min-h-screen flex flex-col justify-around ${className}`}>
      {children}
    </section>
  )
}

export default SectionComponent
