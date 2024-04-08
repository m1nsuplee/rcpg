'use client';

import { ErrorBoundary } from 'react-error-boundary';

export function KakaoMapLoadErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallbackRender={(props) => {
        return (
          <div className="w-screen h-screen flex flex-col justify-center items-center">
            <p>지도를 불러오는 데 실패했어요. 다시 시도해주세요.</p>
            <button onClick={() => props.resetErrorBoundary()}>다시 불러오기</button>
          </div>
        );
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
