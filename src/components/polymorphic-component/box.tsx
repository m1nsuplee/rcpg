import { forwardRef } from 'react';
import {
  PolymorphicComponentProps,
  PolymorphicComponentType,
  PolymorphicRef,
} from 'types';

export const Box: PolymorphicComponentType = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      as,
      children,
      className,
      style,
      ...restProps
    }: PolymorphicComponentProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as ?? 'div';

    return (
      <Component
        ref={ref}
        className={className}
        style={style}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);
