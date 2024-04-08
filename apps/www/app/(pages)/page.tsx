import { KakaoMap } from '@/components/kakao-map';
import { SSRSafeSuspense } from '@/components/ssr-safe-suspense';
import { ErrorBoundary } from 'react-error-boundary';

export default function Page() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center gap-y-4">
      <SSRSafeSuspense fallback={<p>🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀</p>}>
        <ErrorBoundary fallback={<p>❌❌❌❌❌❌❌❌❌❌❌</p>}>
          <KakaoMap />
        </ErrorBoundary>
      </SSRSafeSuspense>
    </div>
  );
}
