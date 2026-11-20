import { connection } from "next/server";

export default async function Home() {

  await connection()
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        Test de la variable env via le docker : TEST : {process.env.NEXT_PUBLIC_TEST_ENV}
    </div>
  );
}
