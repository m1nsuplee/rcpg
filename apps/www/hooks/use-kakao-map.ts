import { useEffect, useState } from 'react';
import { KAKAO_MAP_ID } from '@/lib/constants/kakao-map';

export function useKakaoMap(options: kakao.maps.MapOptions) {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    const mapContainer = document.getElementById(KAKAO_MAP_ID);

    if (mapContainer) {
      setMap(
        new kakao.maps.Map(mapContainer, {
          ...options,
        }),
      );
    }
  }, [options]);

  return map;
}
