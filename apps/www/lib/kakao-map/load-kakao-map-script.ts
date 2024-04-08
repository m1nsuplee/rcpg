const noop = () => {};

export function loadKakaoMapScript() {
  return new Promise<{ loaded: boolean }>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = true;
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&autoload=false`;
    document.body.appendChild(script);
    script.onload = () => {
      kakao.maps.load(noop);

      resolve({ loaded: true });
    };
    script.onerror = () => {
      reject({ loaded: false });
    };
  });
}
