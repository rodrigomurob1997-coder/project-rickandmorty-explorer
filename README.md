# Rick and Morty Explorer

Proyecto final del programa de Desarrollo Web de TripleTen.

**Aplicación desplegada:** [https://project-rickandmorty-explorer.netlify.app](https://project-rickandmorty-explorer.netlify.app)

## Descripción

Rick and Morty Explorer es una aplicación web para buscar personajes de la serie _Rick and Morty_ por su nombre. Los datos se obtienen en tiempo real de [The Rick and Morty API](https://rickandmortyapi.com/documentation).

### Funcionalidades

- Al abrir la aplicación se muestran los primeros personajes de la API.
- Búsqueda de personajes por nombre.
- Tarjetas con imagen, nombre, estado, especie, origen y última ubicación conocida de cada personaje.
- Los resultados se muestran de 20 en 20 con el botón "Mostrar más".
- Indicador de carga mientras se espera la respuesta de la API.
- Mensaje "No se encontró nada" cuando la búsqueda no tiene resultados.
- Mensaje de error cuando la solicitud falla por problemas de conexión o del servidor.
- La última búsqueda se guarda en `localStorage` y se recupera al volver a abrir la aplicación.
- Página "Sobre el autor".
- Diseño adaptable desde 320 px de ancho.

## Tecnologías

- React 19
- TypeScript
- Vite
- React Router
- CSS con metodología BEM, Flexbox y Grid
- `fetch()` para las solicitudes a la API
- ESLint

## Estructura del proyecto

```
src/
  blocks/      estilos de cada bloque (BEM)
  components/  componentes de React
  images/      imágenes e iconos SVG
  types/       tipos e interfaces de TypeScript
  utils/       solicitudes a la API, constantes y localStorage
  vendor/      normalize.css y fuentes
```

## Cómo ejecutar el proyecto

La API no requiere clave, así que no es necesario configurar variables de entorno.

```bash
npm install
npm run dev
```

Otros comandos:

- `npm run build`: compila la aplicación para producción.
- `npm run lint`: revisa el código con ESLint.
- `npm run preview`: sirve localmente la versión compilada.

## Autor

Rodrigo Muro Barajas
