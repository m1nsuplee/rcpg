import { KakaoMap } from '@/components/kakao-map';
import { KakaoMapLoadErrorBoundary } from '@/components/kakao-map-load-error-boundary';
import { Splash } from '@/components/splash';
import { SSRSafeSuspense } from '@/components/ssr-safe-suspense';

export default function Page() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center gap-y-4">
      <SSRSafeSuspense fallback={<Splash />}>
        <KakaoMapLoadErrorBoundary>
          <KakaoMap />
        </KakaoMapLoadErrorBoundary>
      </SSRSafeSuspense>
    </div>
  );
}
