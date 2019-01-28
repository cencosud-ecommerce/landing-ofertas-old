# landing-ofertas-old

Repositorio del desarrollo en los landings de ofertas en /ofertas.


| Comando s       | Descripción           |
| -------------- |:-------------:|
| `grunt stylus` | Ejecuta una version optimizada de .css |
| `grunt uglify` | Ejecuta una version optimizada de .js     |
| `grunt watch`  | Ejecuta .js y .css y mantiene escuchando cambios   |

## Tecnoologías usadas

- jQuery
- Mansory.js
- Isotope.js
- Grunt

## Info importante

Los archivos más importantes son `main.js` y `main.styl` donde se podrán establecer las principales caracteristicas de interacción y visualización. 

Al exportar los archivos para producción se debe tener en cuenta.

- El archivo `main-ofd.js` creado desde `main.js` se guarda en Vtex en **arquivos** como `main-ofd-black.js`. Lo ideal es actualizar ese archivo, teniendo un backup.
- El archivo `main-ofd.css` creado desde `main.styl` se guarda en Vtex en **arquivos** como `main-ofd-new.js`. Lo ideal es actualizar ese archivo, teniendo un backup.



