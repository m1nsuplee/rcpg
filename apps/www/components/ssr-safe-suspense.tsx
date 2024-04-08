'use client';

import { ComponentProps, Suspense, useEffect, useState } from 'react';

/**
 * SSR 환경에서 안전하게 Suspense를 사용할 수 있도록 하는 컴포넌트
 */
export function SSRSafeSuspense(props: ComponentProps<typeof Suspense>) {
  const { fallback } = props;

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return <Suspense {...props} />;
  }

  return fallback;
}
