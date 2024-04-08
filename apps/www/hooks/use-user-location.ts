import { getUserLocation } from '@/lib/kakao-map/get-user-geolocation';
import { useSuspenseQuery } from '@tanstack/react-query';

export function useUserLocation() {
  return useSuspenseQuery({
    queryKey: ['user-location'],
    queryFn: getUserLocation,
  });
}
