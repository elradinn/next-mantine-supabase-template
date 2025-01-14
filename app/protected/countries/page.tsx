import { createClient } from '@/utils/supabase/server';

export default async function Countries() {
  const supabase = await createClient();
  const { data: countries } = await supabase.from("countries").select();

  return (
    <div className="flex flex-col gap-4">
      {countries?.map((country) => (
        <div key={country.id} className="text-dark border border-gray-300 p-4 rounded-md shadow-md">{country.name}</div>
      ))}
    </div>
  )

}
