import { loadKakaoMapScript } from '@/lib/kakao-map/load-kakao-map-script';
import { useSuspenseQuery } from '@tanstack/react-query';

export function useLoadKakaoMap() {
  return useSuspenseQuery({
    queryKey: ['kakao-map-script'],
    queryFn: loadKakaoMapScript,
    staleTime: Infinity,
  });
}
