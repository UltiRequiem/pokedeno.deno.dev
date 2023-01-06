import { serve } from "https://deno.land/std@0.142.0/http/server.ts";
import pokemon from "https://esm.sh/pokemon@2.3.3";

serve((_req: Request) => new Response(pokemon.random()));
