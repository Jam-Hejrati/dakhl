import { createClient } from "@/src/utils/supabase/server";
import { cookies } from "next/headers";
import Dummy from "../components/Dummy";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <>
      <Dummy />
    </>
  );
}
