/**
 * NOTE: this file is only needed if you're doing SSR (getServerSideProps)!
 */
import supabaseClient from "../../lib/supabase";

export default function handler(req, res) {
  supabaseClient.auth.api.setAuthCookie(req, res);
}
