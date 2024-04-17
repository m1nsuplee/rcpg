import React from 'react';

type AspectRatioProps<E extends React.ElementType = 'span'> = {
  as?: E;
  width?: number;
  ratio?: number;
} & React.ComponentProps<E>;

export function AspectRatio<E extends React.ElementType = 'div'>(props: AspectRatioProps<E>) {
  const { as = 'div', width = 0, ratio = 1 / 1, style, ...rest } = props;
  const Element = as || 'span';

  return (
    <div
      style={{
        width: `${width}px`,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: `${100 / ratio}%`,
        }}
      >
        <Element
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
    </div>
  );
}
