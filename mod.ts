import { serve } from "https://deno.land/std@0.142.0/http/server.ts";
import pokemon from "https://esm.sh/pokemon";

serve((_req: Request) => new Response(pokemon.random()));
