# Todo: Fix CodeQL alert #13 — remove unused `Check` function

- [x] Clone / open `augmentedmike/helloam-www` repo locally
- [x] Delete the `Check` function block (lines 6–12) from `components/device.tsx`
- [x] Search the repo for any other references to `Check` from this file (should be zero)
- [x] Visually verify the Device component still renders (build + spot-check)
- [x] Commit: `fix: remove unused Check svg function from device.tsx`
- [x] Push to a branch and open a PR against `main`
- [ ] Confirm CodeQL re-scan closes alert #13 (pending PR merge)
