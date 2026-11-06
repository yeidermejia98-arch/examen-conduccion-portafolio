import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Mismo proyecto de Supabase que usa el panel administrativo web
// (adminejemplo-et.netlify.app). La URL y la llave "anon" son públicas
// por diseño — igual que en el panel — porque lo que protege los datos son
// las políticas de RLS configuradas en la base de datos (lectura pública,
// escritura solo para administradores), no mantener esta llave en secreto.
export const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
export const SUPABASE_ANON_KEY =
  "TU_CLAVE_PUBLICA";

export const SIGNS_BUCKET = "senales";

// La app nunca inicia sesión (no hay login de usuarios finales, solo lectura
// pública), así que desactivamos todo el manejo de sesión/tokens de auth
// para evitar trabajo y advertencias innecesarias en segundo plano.
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
});

export function publicImageUrl(imagePath: string): string {
  const { data } = supabase.storage.from(SIGNS_BUCKET).getPublicUrl(imagePath);
  return data.publicUrl;
}
