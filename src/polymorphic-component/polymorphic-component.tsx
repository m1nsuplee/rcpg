import React from 'react';

// TODO: ref를 전달할 수 있게 변경
type PolymorphicComponentProps<E extends React.ElementType> = {
  as?: E;
} & React.ComponentPropsWithoutRef<E>;

export const PolymorphicComponent = <E extends React.ElementType = 'span'>(
  props: PolymorphicComponentProps<E>,
) => {
  const { as: Element = 'span', ...rest } = props;

  return <Element {...rest} />;
};
