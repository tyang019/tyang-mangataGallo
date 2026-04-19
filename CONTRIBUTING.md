# Contributing Guide

Thanks for contributing to Mangata & Gallo.

This guide helps keep code quality and collaboration consistent as the project grows.

## Development Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start local dev server:

   ```bash
   npm run dev
   ```

3. Run quality checks before opening a PR:

   ```bash
   npm run lint
   npm run test
   npm run build
   ```

## Branching Strategy

- Create a branch from `main` for each task.
- Use descriptive branch names, for example:
  - `feat/catalog-filtering`
  - `fix/cart-quantity-bug`
  - `docs/readme-architecture-update`

## Commit Conventions

Use clear, scoped commit messages.

Suggested style:

- `feat: add category filter chips`
- `fix: prevent negative bag quantity`
- `docs: add deployment section to readme`
- `test: add bag context reducer tests`

## Pull Request Expectations

Before requesting review, ensure:

- [ ] Changes are focused and minimal for the task
- [ ] Lint, tests, and build pass locally
- [ ] README/docs updated if behavior changed
- [ ] PR description explains the "what" and "why"

## Code Quality Guidelines

- Prefer reusable components over duplicated UI logic.
- Keep modules small and single-purpose.
- Add/maintain TypeScript typing where applicable.
- Avoid introducing dead code or commented-out legacy blocks.

## Testing Guidelines

- Add tests for new logic where practical.
- Update tests affected by behavior changes.
- Cover edge cases for validation, loading, and error states.

## Documentation Guidelines

If your change affects setup, architecture, or behavior:

- Update `README.md`
- Add implementation notes in PR description
- Include screenshots for major UI changes when possible

## Review and Collaboration

- Be respectful and specific in code reviews.
- Prefer actionable comments with alternatives.
- Resolve review comments with follow-up commits (avoid force-push when collaboration is active).

Thanks for helping improve this project.