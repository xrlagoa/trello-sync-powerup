# Trello Sync Power-Up

![Trello Power-Up](https://img.shields.io/badge/Trello-Power--Up-blue?logo=trello)
![Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

Este Power-Up personalizado para Trello permite integrar tableros con Microsoft Power Platform (como Power Automate y Dataverse) mediante un botón de sincronización.

## 🚀 Funcionalidades

- Agrega un botón al tablero de Trello: **"Activar Sincronización"**
- Abre un popup con contenido HTML personalizado
- Preparado para extenderse con lógica de integración con Power Platform

## 📁 Estructura del proyecto

- `manifest.json`: Define las capacidades del Power-Up y la URL del iframe
- `client.js`: Inicializa el botón del tablero y gestiona el popup
- `index.html`: Contenido HTML que se muestra en el popup
- `README.md`: Documentación del proyecto

## 🛠️ Instalación

1. Publica los archivos en GitHub Pages o un servidor HTTPS.
2. Registra el Power-Up en [Trello Developer Portal](https://trello.com/power-ups/admin).
3. Configura el campo `iframeConnectorUrl` con la URL pública de `index.html`.
4. Habilita la funcionalidad `board-buttons` en el `manifest.json`.

## ▶️ Uso

Una vez instalado en un tablero:

- Aparecerá un botón llamado **"Activar Sincronización"** en la parte superior del tablero.
- Al hacer clic, se abrirá un popup con el contenido de `index.html`.

## 📄 Licencia

Este proyecto está licenciado bajo la licencia MIT.

## 👤 Autor

**Xurxo Lagoa**  
EfíGalia  
xrlagoa@efigalia.es
