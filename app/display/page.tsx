import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation';
import { authOptions } from "../lib/authOptions";

import SessionDisplay from "../ui/SessionDisplay/session-display";

export default async function DisplayPage() {
  const session = await getServerSession(authOptions);

  if(session === null){
    redirect("/");
  }

  return (
    <>
      <SessionDisplay session={session}/>
    </>
  );
}
