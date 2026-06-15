# CRM Test Task (CMS_test)

## What This Is

A React + TypeScript CRM-platform frontend built as a test application based on job requirements. It showcases modern frontend engineering practices: Feature-Sliced Design (FSD) architecture, a dense Ant Design-inspired MUI v6 design system, client-side data fetching with Zod schema validation, and global state management using MobX.

## Core Value

Demonstrate high-quality, production-ready frontend engineering skills by building a highly responsive, clean, and architecturally sound CRM interface.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Initialize React 18 + TS project using Vite and npm
- [ ] Configure strict Feature-Sliced Design (FSD) folder structure
- [ ] Create MUI v6 custom theme with compact typography (14px base) and Ant Design visual aesthetics
- [ ] Implement data fetching layer in `src/entities/item` with Mock API, delay, and Zod schema validation
- [ ] Set up MobX store for global application state (theme switching, table filters, sorting)
- [ ] Build interactive DataGrid table displaying item details (avatar, title, score, date)
- [ ] Implement persistent table state (filters/sorting) in localStorage
- [ ] Create ImageModal for full-size avatar preview on click
- [ ] Create RowInfoModal to display item details card on row click
- [ ] Assemble MainPage with header, theme switcher, and items table
- [ ] Add thorough README.md describing architecture, stack decisions, MobX state flow, and contract validation

### Out of Scope

- Backend Database / API implementation — mock data in features/entities is sufficient
- Real-time WS synchronization — local MobX store state persistence is sufficient
- Multi-user authentication flow — single session mockup is sufficient

## Context

- Job requirements from [vacancy.md](file:///G:/projects/CMS_test/vacancy.md) (React, TS, MobX, Vite, Git, ESLint/Prettier)
- Phase directives from [phaseslist.md](file:///G:/projects/CMS_test/.planning/phaseslist.md) (MUI v6 with cssVariables, react-query, Zod, FSD)
- Global state is handled via MobX to showcase state-management capabilities as requested in the vacancy stack, while React Query handles server-state caching

## Constraints

- **Tech Stack**: React 18, TypeScript, Vite, npm, MobX, MUI v6, Zod, TanStack Query
- **Architecture**: Strict Feature-Sliced Design (FSD)
- **Styling**: Dense, flat UI reminiscent of Ant Design (14px font size, 6px button radius, flat colors, no default focus outlines)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Implement MobX | Satisfy state management requirement from vacancy, using it for global state (theme, filters) | — Pending |
| Adopt FSD Architecture | Prove ability to organize scalable frontend applications with clear boundary limits | — Pending |
| MUI v6 with AntD Theme | Align with phaseslist.md custom theme request while satisfying AntD aesthetic expectations | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-15 after initialization*
