import { useEffect, useState } from 'react';
import { useLoadKakaoMap } from './use-load-kakao-map';
import { KAKAO_MAP_ID } from '@/lib/constants/kakao-map';

export function useKakaoMap({ latitude, longitude }: { latitude: number; longitude: number }) {
  useLoadKakaoMap();

  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    setMap(
      new kakao.maps.Map(document.getElementById(KAKAO_MAP_ID) as HTMLElement, {
        center: new kakao.maps.LatLng(latitude, longitude),
      }),
    );
  }, [latitude, longitude]);

  return map;
}