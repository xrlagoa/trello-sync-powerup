# Trello Sync Power-Up

Este Power-Up personalizado para Trello permite integrar tableros con Microsoft Power Platform (como Power Automate y Dataverse) mediante un botón de sincronización.

## Archivos incluidos

- `manifest.json`: Define las capacidades del Power-Up, incluyendo el botón del tablero y la URL del iframe.
- `client.js`: Inicializa el botón "Activar Sincronización" y abre un popup con `index.html`.
- `index.html`: Página HTML básica que se carga en el popup del Power-Up.
- `README.md`: Este archivo con la descripción técnica.

## Funcionalidad principal

El Power-Up agrega un botón al tablero de Trello que abre un popup para iniciar la sincronización con Power Platform.

## URL del iframe

Asegúrate de que el campo `iframeConnectorUrl` en `manifest.json` apunte a tu GitHub Pages:

