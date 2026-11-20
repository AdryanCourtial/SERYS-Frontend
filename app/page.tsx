import { Suspense } from "react";
import { connection } from "next/server";

async function RuntimeContent() {
  await connection();

  const testEnv = process.env.NEXT_PUBLIC_TEST_ENV ?? "Non définie";

  return <p>Variable : {testEnv}</p>;
}

export default function Page() {
  return (
    <main>
      <h1>SERYS</h1>

      <Suspense fallback={<p>Chargement...</p>}>
        <RuntimeContent />
      </Suspense>
    </main>
  );
}