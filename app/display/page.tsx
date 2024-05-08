import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation';
import { authOptions } from "../lib/authOptions";

import SessionDisplay from "../ui/SessionDisplay/session-display";
import { Page } from "@/lib/strings";

export default async function DisplayPage() {
  const session = await getServerSession(authOptions);

  if(session === null){
    redirect(Page.LogIn);
  }

  return (
    <>
      <SessionDisplay session={session}/>
    </>
  );
}
