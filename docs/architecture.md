# Architecture Overview

This document defines the target folder architecture for scaling Mangata & Gallo from a small front-end project into a medium/large maintainable codebase.

## Goals

- Separate **feature/domain logic** from **shared infrastructure/UI**.
- Reduce cross-module coupling as the app grows.
- Make it easier for multiple contributors to work in parallel.

## Top-Level App Structure

```text
src/
  app/            # app shell, providers, router wiring, global bootstrap
  features/       # business/domain modules (catalog, cart, auth, checkout...)
  shared/         # reusable UI + cross-cutting utilities
  pages/          # route entry pages (gradually slimmed as features mature)
  components/     # legacy shared UI (migrate over time into shared/ui)
  data/           # legacy API/data modules (migrate over time into features/*/api)
```

## `src/features/` (Domain Modules)

Each feature owns its behavior and files.

```text
src/features/
  catalog/
    api/          # catalog API calls and mappers
    model/        # domain types, constants, selectors
    ui/           # feature-specific UI components
    hooks/        # feature-specific hooks
  cart/
    state/        # cart context/reducer/store
    ui/           # cart-related presentation
  auth/
    api/
    state/
    ui/
```

### Rules

- Feature folders can import from `src/shared/*`.
- Feature folders should avoid importing from other feature internals directly.
- Shared contracts should be extracted if multiple features need the same behavior.

## `src/shared/` (Reusable Building Blocks)

`shared` contains reusable pieces that are not tied to one business domain.

```text
src/shared/
  ui/             # generic buttons, inputs, loaders, layout primitives
  api/            # HTTP client, error wrappers, request helpers
  lib/            # pure utilities (formatters, validators, helpers)
  config/         # env parsing, global config constants
  types/          # cross-feature types/interfaces
  assets/         # shared static assets
```

### Rules

- `shared` must remain domain-agnostic.
- No business rules in shared utilities.
- Prefer small, composable modules.

## Migration Plan (Incremental)

1. Keep app working while migrating one feature at a time.
2. Start with `catalog` (move product API and category logic into `features/catalog`).
3. Move bag/cart state from legacy location into `features/cart/state`.
4. Gradually move truly generic UI elements into `shared/ui`.
5. Delete legacy paths only after references are fully migrated.

## Why this helps

- Clear ownership boundaries
- Easier onboarding for new contributors
- Better long-term scalability for testing, refactoring, and parallel development
