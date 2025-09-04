# GEMINI.md

## Project Context

This is a GraphQL-based Book Review application built with Node.js, pnpm, and modern development practices.

## Coding Standards

- Use **ESLint + Prettier** for code formatting and linting.
- Follow **Airbnb style guide** where applicable.
- Use **async/await** for all asynchronous operations, avoid callbacks.
- Prefer **TypeScript-like patterns** even though this is JS (clear types, JSDoc).
- Write small, modular functions instead of large ones.

## Pull Request Review Guidelines

When reviewing pull requests:

1. Ensure linting and formatting rules are followed.
2. Suggest improvements in readability and maintainability.
3. Check for missing tests or unhandled error cases.
4. Point out unnecessary complexity and suggest simplifications.
5. Ensure proper GraphQL schema design (descriptive type names, no redundant fields).

## Issue Triage Guidelines

When triaging issues:

- Label frontend issues with `ui`, backend issues with `server`, and documentation issues with `docs`.
- If it’s a bug, check if steps to reproduce are clear; otherwise, request clarification.
- For feature requests, check alignment with project goals.

## Testing

- Unit tests are required for all core modules.
- Use `jest` as the testing framework.
- Aim for 80%+ code coverage.
