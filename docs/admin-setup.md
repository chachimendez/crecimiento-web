# Panel /admin del blog — setup (una sola vez)

El panel visual (Decap CMS) vive en `TU-DOMINIO/admin`. El CM escribe ahí y al publicar, la nota se commitea al repo y Vercel redeploya sola. Para que funcione hacen falta 4 pasos que son de Chachi (requieren sus cuentas):

## 1. Subir el repo a GitHub

```
cd ~/crecimiento-web
git add -A && git commit -m "Web institucional + blog + admin"
gh repo create crecimiento-web --private --source=. --push
```

(o crear el repo vacío en github.com y hacer `git push`).

## 2. Conectar Vercel al repo

En vercel.com → el proyecto → Settings → Git → Connect Git Repository → elegir `crecimiento-web`. Desde ahí, cada push a `main` deploya solo.

## 3. Crear la GitHub OAuth App

En github.com → Settings → Developer settings → OAuth Apps → New OAuth App:

- **Application name**: Crecimiento Admin
- **Homepage URL**: `https://TU-DOMINIO.vercel.app`
- **Authorization callback URL**: `https://TU-DOMINIO.vercel.app/api/callback`

Guardar el **Client ID** y generar un **Client Secret**.

## 4. Cargar las claves en Vercel

En vercel.com → el proyecto → Settings → Environment Variables:

- `GITHUB_CLIENT_ID` = el Client ID
- `GITHUB_CLIENT_SECRET` = el Client Secret

Y redeployar.

## 5. Último toque (me lo pedís a mí o lo editás)

En `public/admin/config.yml`, reemplazar los `CAMBIAR` por el repo real (`usuario/crecimiento-web`) y el dominio real del sitio.

## Cómo lo usa el CM

1. Entra a `TU-DOMINIO/admin` y se loguea con su cuenta de GitHub (tiene que tener acceso al repo: invitarlo como colaborador).
2. "Notas del blog" → "New": completa título, fecha, resumen, tag, sube la portada arrastrando.
3. En el cuerpo escribe como en cualquier editor. Con el botón **+** inserta: imágenes, **Botón (link a form)**, **Video (YouTube)**.
4. Deja "Borrador" activado mientras trabaja. Para publicar, lo desactiva y aprieta **Publish**: en ~1 minuto la nota está viva.

## Probar en local sin GitHub

Descomentar `local_backend: true` en `public/admin/config.yml`, correr `npx decap-server` en una terminal y `npm run dev` en otra, y entrar a `localhost:3000/admin`.
