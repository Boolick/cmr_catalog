# CRM Test Task (CMS_test)

A React + TypeScript CRM-platform frontend built as a test application based on job requirements. It showcases modern frontend engineering practices, featuring a strict Feature-Sliced Design (FSD) architecture, a dense Ant Design-inspired MUI v6 design system, client-side data fetching with Zod schema validation, and global state management using MobX.

---

## 🛠 Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Global State Management:** MobX + `mobx-react-lite`
- **Component Styling & Theme:** Material UI (MUI v6) + Emotion
- **Data Fetching:** TanStack React Query (v5)
- **Data Validation:** Zod

---

## 📐 Architecture: Feature-Sliced Design (FSD)

The project strictly follows the **Feature-Sliced Design (FSD)** architectural pattern to ensure modularity, scalability, and loose coupling.

```
src/
├── app/              # App providers, entry point, global styles/store wrappers
│   ├── providers/    # AppProviders (MUI Theme, React Query, MobX Store context)
│   ├── store/        # MobX UIStore class, provider Context, and singleton store
│   ├── App.tsx       # Root React component composing the MainPage
│   └── main.tsx      # Main application mounting script
│
├── pages/            # Page components composed from widgets and features
│   └── MainPage/     # Main dashboard layout
│
├── widgets/          # Multi-functional block compositions of features and entities
│   └── ItemsTable/   # CRM Items DataGrid widget (with modal integrations)
│
├── features/         # User actions with business value
│   └── theme/        # ThemeSwitcher component (light/dark mode toggle)
│
├── entities/         # Business-logic modules (data models, hooks, schemas)
│   └── item/         # Product catalog item entity
│       ├── api/      # fetchItems API call fetching from dummyjson.com
│       ├── hooks/    # useGetItems react-query hook wrapper
│       └── model/    # Zod itemSchema declaration, Item types, mock database
│
└── shared/           # Reusable utilities, themes, hooks, assets
    └── theme/        # Dense theme definitions overriding MUI Button & DataGrid
```

---

## 📦 Key Implementation Decisions

### 1. Global State Management (MobX)
- A global `uiStore` class managed by MobX keeps track of the active `themeMode` (`'light' | 'dark'`), `filterModel`, and `sortModel` for the table.
- Direct **two-way controlled state bindings** exist between the MUI `DataGrid` and the MobX `uiStore`, making the table highly interactive.
- Persistent state is fully maintained via automated `autorun` sync writeups to `localStorage`, so filters and themes survive page reloads.
- Server-Side Rendering (SSR) and test environment guards (`typeof localStorage === 'undefined'`) are implemented in the store module to prevent crashes.

### 2. Runtime Data Validation (Zod + API Integration)
- The application implements **Parse, Don't Validate** logic:
  - Fetches product listings from the live API: `https://dummyjson.com/products?limit=20`.
  - Maps API structures dynamically to comply with the local CRM data contract.
  - Safely parses and validates the array payload at runtime via Zod's `itemSchema.strict()` schema before presenting it to the views.

### 3. Compact Ant Design-inspired MUI Theme
- Customized typography setting a base font-size of `14px` and Outfit font headings.
- Overrides component styling on `MuiButton` (removed drop shadows, disabled uppercase conversions, and set border-radius to `6px`).
- Configures custom styling on `MuiDataGrid` (removed default outer borders, customized column header background, and removed cell focus outlines) for a dense, flat table design.
- Implements `ThemeColorSchemeSync` to automatically bridge updates from the MobX `themeMode` into the MUI CSS variables scheme.

### 4. Interactive UX & Modals
- Clicking on a product's avatar renders the image in full size via `ImageModal` without selecting the table row, thanks to `e.stopPropagation()`.
- Clicking on a table row opens a detailed `RowInfoModal` presenting a beautiful cards-based layout of all specific product properties.

---

## 🚀 Running the Project

### Installation
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```

### Run Unit Tests
```bash
npm run test
```

### Build Production Bundle
```bash
npm run build
```
