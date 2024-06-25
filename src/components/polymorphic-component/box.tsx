import { forwardRef } from 'react';
import {
  PolymorphicComponentProps,
  PolymorphicComponentType,
  PolymorphicRef,
} from 'types';

export const Box: PolymorphicComponentType = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, children, className, style, asProps }: PolymorphicComponentProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as ?? 'div';

    return (
      <Component
        ref={ref}
        className={className}
        style={style}
        {...asProps}
      >
        {children}
      </Component>
    );
  },
);
