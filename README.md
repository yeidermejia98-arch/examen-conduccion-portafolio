# Examen de conducción

App móvil para preparar el examen teórico de conducción en Colombia, con un panel de administración para el contenido.

## Qué incluye

- **App (Expo / React Native):** preguntas del examen con explicación, señales de tránsito, código de tránsito consultable y horarios de clases.
- **Contenido remoto:** las preguntas, señales y horarios se sincronizan con Supabase y quedan en caché local para usarse sin conexión.
- **Panel de administración** (`supabase/admin-panel/`): página web para editar preguntas, señales, horarios y el código de tránsito.

## Stack

- React Native + Expo (TypeScript)
- Supabase (PostgreSQL, almacenamiento y autenticación del panel)
- Panel de administración en HTML, CSS y JavaScript

## Configuración

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un proyecto en Supabase y ejecuta `supabase/schema.sql` en el editor SQL.

3. Reemplaza en `src/lib/supabase.ts` y en `supabase/admin-panel/js/supabaseClient.js`:
   - `https://TU-PROYECTO.supabase.co` por la URL de tu proyecto.
   - `TU_CLAVE_PUBLICA` por la clave pública (anon) de tu proyecto.

   La clave pública puede ir en la app; la seguridad la dan las políticas RLS definidas en `schema.sql`. Nunca pongas en el repositorio la clave `service_role`.

4. Arranca la app:

   ```bash
   npx expo start
   ```

## Panel de administración

Abre `supabase/admin-panel/index.html` en un servidor estático (por ejemplo, `npx serve supabase/admin-panel`) e inicia sesión con un usuario administrador de tu proyecto de Supabase.

## Nota

Los textos del código de tránsito y las preguntas son material público de referencia. Revisa su vigencia antes de usarlos con alumnos reales.
