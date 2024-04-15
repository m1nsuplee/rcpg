import React from 'react';

type PolymorphicComponentProps<T extends React.ElementType = 'span'> = {
  /**
   * The HTML element or React component to render.
   */
  as?: T;

  /**
   * The content of the text.
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply.
   */
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>;

export function PolymorphicComponent<T extends React.ElementType = 'span'>({
  as,
  children,
  className,
  ...props
}: PolymorphicComponentProps<T>): JSX.Element {
  const Element = as || 'span';

  return (
    <Element
      className={className}
      {...props}
    >
      {children}
    </Element>
  );
}
