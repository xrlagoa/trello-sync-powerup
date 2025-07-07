
# FASE 2: Creación del Sitio en Power Pages dentro de la Solución

Este documento describe el progreso del proyecto de integración entre Trello y Microsoft Power Platform, incluyendo la creación del Power-Up, su publicación, registro en Trello, y la preparación para recibir webhooks mediante Power Pages.

---

## ✅ Fase 1: Creación del Power-Up personalizado

- Se creó un Power-Up básico con los archivos:
  - `index.html`
  - `client.js`
  - `manifest.json`
- El Power-Up incluye un botón en el tablero de Trello para activar la sincronización.

---

## 🌐 Publicación en GitHub Pages

- Se creó un repositorio público en GitHub: `trello-sync-powerup`
- Los archivos fueron subidos a la raíz del repositorio.
- Se activó GitHub Pages desde la rama `main` y carpeta raíz.
- Se creó el archivo `.nojekyll` para evitar conflictos con Jekyll.
- El Power-Up quedó disponible en:  
  `https://xrlagoa.github.io/trello-sync-powerup/index.html`

---

## 🔗 Registro del Power-Up en Trello

- Se completó el formulario de registro en Trello Developer Portal.
- Se asignó el Power-Up al espacio de trabajo correspondiente.
- Se configuró el icono personalizado y el iframeConnectorUrl.
- El botón del Power-Up aparece correctamente en el tablero.

---

## 🧩 Preparación para recibir Webhooks

- Se decidió usar **Power Pages** como receptor de los webhooks de Trello.
- Se verificó el acceso técnico a Power Pages Studio.
- Se confirmó que el sitio se creará dentro de la **solución existente** en Power Platform.
- Se documentará todo el desarrollo en el repositorio de GitHub.

---

## 📁 Próximos pasos

1. Crear el sitio web en Power Pages dentro de la solución.
2. Crear una tabla en Dataverse para recibir los datos.
3. Configurar una página o endpoint para recibir el webhook.
4. Diseñar el flujo en Power Automate que se dispare al recibir datos.

