'use client';

import { useKakaoMap } from '@/hooks/use-kakao-map';
import { KAKAO_MAP_ID } from '@/lib/constants/kakao-map';

export function KakaoMap() {
  useKakaoMap({ latitude: 37.56682, longitude: 126.97865 });

  return (
    <div
      id={KAKAO_MAP_ID}
      className="w-96 h-96"
    />
  );
}
