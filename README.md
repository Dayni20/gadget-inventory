# GadgetInventory

App móvil para gestionar inventario de gadgets. Desarrollada con React Native, TypeScript y SQLite como parte del examen práctico de Desarrollo de Aplicaciones Móviles.

## Tecnologías

- React Native con Expo (~54)
- TypeScript
- expo-sqlite (~16) para la base de datos local
- React Navigation Stack (v7)

## ¿Qué hace la app?

- Registrar nuevos gadgets con nombre, marca, categoría, precio y año de compra
- Ver la lista completa de gadgets registrados
- Buscar gadgets por nombre o marca en tiempo real
- Ver el detalle de un gadget específico
- Editar la información de un gadget existente
- Eliminar gadgets con confirmación previa

## Algo importante sobre los íconos

La app detecta automáticamente el ícono según la categoría, pero solo funciona con estas tres, referente a iconos:

- **Laptop** → 💻
- **Phone** → 📱
- **Tablet** → 📟

Si se escribe otra categoría como "Smartwatch" o "Cámara", aparecerá el ícono 🔌 por defecto. No importa si se escribe en mayúsculas o minúsculas.

## Estructura

```
src/
  types/        → interfaces de Gadget
  database/     → conexión a SQLite
  services/     → operaciones CRUD
  navigation/   → navegación entre pantallas
  screens/      → ListScreen, DetailScreen, FormScreen
  styles/       → todos los estilos centralizados
```

## Cómo correrla

```bash
npm install
npx expo start --clear --web
npm run start
```

