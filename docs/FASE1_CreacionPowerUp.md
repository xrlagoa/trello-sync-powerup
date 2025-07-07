# FASE 1 – Creación del Power-Up personalizado para Trello

**Fecha:** 2025-07-04

## 🎯 Objetivo
Desarrollar un Power-Up personalizado para Trello que permita iniciar la sincronización con Microsoft Power Platform, como parte de un proyecto de integración con Dataverse y Power Automate.

---

## 🧱 Estructura del Power-Up

Se crearon los siguientes archivos:

- `index.html`: archivo principal que carga el cliente de Trello Power-Up.
- `client.js`: contiene la lógica del botón personalizado que aparece en el tablero.
- `manifest.json`: manifiesto que define las capacidades del Power-Up, incluyendo el botón y la URL del iframe.

---

## 🌐 Publicación en GitHub Pages

1. Se creó un repositorio público en GitHub llamado `trello-sync-powerup`.
2. Se subieron los archivos del Power-Up a la raíz del repositorio.
3. Se activó GitHub Pages desde la rama `main`, carpeta `/ (root)`.
4. Se creó un archivo `.nojekyll` vacío para evitar conflictos con el motor Jekyll.
5. La URL final del Power-Up quedó disponible en:

