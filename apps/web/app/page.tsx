import { dateTime } from '@repo/utils/date-time';

export default function Page() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <p>
        {`${dateTime.getTimeString(new Date().toISOString())} -
        ${dateTime.getDateString(new Date().toISOString())}`}
      </p>
    </div>
  );
}
