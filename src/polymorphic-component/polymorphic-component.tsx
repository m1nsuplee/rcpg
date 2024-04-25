import React from 'react';

type PolymorphicComponentProps<E extends React.ElementType> = {
  as?: E;
} & React.ComponentPropsWithoutRef<E>;

export const PolymorphicComponent = <E extends React.ElementType = 'span'>(
  props: PolymorphicComponentProps<E>,
) => {
  const { as: Element = 'span', ...rest } = props;

  return <Element {...rest} />;
};
