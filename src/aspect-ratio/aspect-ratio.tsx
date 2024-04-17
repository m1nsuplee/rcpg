import React from 'react';

type AspectRatioProps<E extends React.ElementType = 'span'> = {
  as?: E;
  ratio?: number;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as'>;

export function AspectRatio<E extends React.ElementType = 'div'>(props: AspectRatioProps<E>) {
  const { ratio = 1 / 1, style, ...rest } = props;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${100 / ratio}%`,
      }}
    >
      <div
        {...rest}
        style={{
          ...style,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
    </div>
  );
}
