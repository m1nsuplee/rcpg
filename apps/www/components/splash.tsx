import { siteConfig } from '@/configs/site.config';

export function Splash() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <p>{siteConfig.title}</p>
    </div>
  );
}
