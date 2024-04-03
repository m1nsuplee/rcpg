import { createServerSideClient } from '@/lib/supabase/supabase.server';
import { cookies } from 'next/headers';

export default async function Page() {
  const supabase = createServerSideClient(cookies());

  const { data: trashcans, error: fetchTrashcansError } = await supabase
    .from('trashcans')
    .select('*')
    .range(0, 20);

  if (fetchTrashcansError) {
    throw fetchTrashcansError;
  }

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center gap-y-4">
      {trashcans.map((trashcan) => (
        <div
          key={trashcan.id}
          className="w-full flex flex-col gap-y-2"
        >
          <div className="text-lg font-bold">{trashcan.address}</div>
          <div className="text-sm">{trashcan.type}</div>
        </div>
      ))}
    </div>
  );
}
