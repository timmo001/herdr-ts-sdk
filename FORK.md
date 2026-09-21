# Maintained fork

- `fork/main` is the default branch used by consumers. Keep dependencies pinned to a full commit from this branch.
- `effect-rc-117` contains the Effect migration and package exports for an upstream contribution. It excludes this fork's Renovate and sync configuration.
- Upstream is [dmmulroy/herdr-ts-sdk](https://github.com/dmmulroy/herdr-ts-sdk), branch `main`.

The daily **Sync upstream** workflow merges upstream into `fork/main`, runs the full verification suite, then pushes. Conflicts or failed checks stop the update. It can also be run manually. Published history is never force-pushed.

Renovate updates only the root package's Effect runtime packages on `fork/main`, grouped together, and automatically merges non-major updates after checks pass. Other dependency updates come from upstream.

Once upstream includes the migration and source exports, verify a current upstream commit in the consumers, replace the fork pins, and retire the fork automation. The repo-scoped maintenance note records the consumer list and verification state.
