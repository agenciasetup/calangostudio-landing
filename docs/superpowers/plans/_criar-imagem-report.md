# Criar Imagem + useForge — Implementation Report

**Date:** 2026-06-20
**Branch:** `feat/mockups-plataforma-identicos`
**Status:** DONE

---

## Summary

Implemented Task 14 (useForge hook), Task 7 (MockCriarImagem), and Task 15's animation wiring for Criar Imagem. The build passes cleanly. All three pieces follow the exact plan spec and the patterns established by MockSessaoFotos.

---

## Files Created

| File | Purpose |
|------|---------|
| `src/components/platform/useForge.ts` | Animation state machine hook (Task 14) |
| `src/components/platform/mocks/MockCriarImagem.tsx` | Pixel-faithful replica of Criar Imagem (Task 7 + Task 15) |

## Files Modified

| File | Change |
|------|--------|
| `src/components/platform/registry.ts` | Added `criar-imagem` entry with `Palette` icon, accent `"pink"` |
| `src/app/globals.css` | Added `.wiz-section`, `.wiz-title`, `.wiz-subtitle` CSS classes (needed by style card grid) |

---

## Commit Hashes

| Commit | Message |
|--------|---------|
| `2708e83` | feat(platform): adicionar wiz-section/wiz-title/wiz-subtitle ao CSS global |
| `afdc467` | feat(platform): useForge hook — animação in-view + reduced-motion (Task 14) |
| `156ee3c` | feat(mock): Criar Imagem idêntica + animação forja (Tasks 7 + 15) |

---

## npm run build Result

**PASS — zero errors.** Only pre-existing warnings (unrelated `<img>` and font warnings in other files). Build output: 94 static pages generated, `/mock-lab` route at 3.45 kB / 90.9 kB first load JS.

---

## Tool Accent Color

**`pink-400` / `pink-500`** — confirmed from the real component (`tools/imagem_criativa/Wizard.tsx`):

```tsx
// Dashboard header:
<div className="p-3 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20 shadow-glow ...">
  <Palette size={28} />
</div>

// Config mode topbar:
<div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-400 ...">
  <Palette size={17} />
</div>
```

No collision with landing `accent` (`#ffaa00` orange) — Tailwind `pink` is independent. Coral `#ff7b47` used only in the progress bar gradient via literal `[#ff7b47]`.

---

## Forge Sequence Implemented

**4 steps, loop, 1600ms interval:**

| Step | Screen | Visual state |
|------|--------|--------------|
| 0 | Dashboard | Grid of 6 style cards — idle, no selection |
| 1 | Dashboard | "Hero Style" card highlighted with pink ring + "Selecionado" badge |
| 2 | Config+Preview | "Gerando" state: shimmer bars + `Loader2` pink spinner + "Gerando obra de arte…" label + progress bar at 65% |
| 3 | Config+Preview | Result filled: `hero_criativo.jpg` displayed via `next/image` (fill, object-cover) |

**Reduced-motion:** `useForge` pins to step 3 immediately (result state) — no animation.
**In-view:** IntersectionObserver with threshold 0.35. Timer only starts when ≥35% visible AND `active !== false`.

---

## Lucide Icons Used

From the real `Wizard.tsx` (exact match):
- `Palette` — tool icon (dashboard header + topbar badge)
- `Cat` — Animal Art card
- `Car` — Car Design card
- `Zap` — Hero Style card
- `User` — Business Style card + upload dropzone placeholder
- `Blocks` — Craft Style card
- `Landmark` — Classic Style card
- `ArrowLeft` — "Trocar" button in config mode topbar
- `Loader2` — generating spinner (config mode + generate button)
- `Wand2` — generate button idle state
- `Edit2` — project name rename affordance
- `ChevronRight` — "Abrir Estúdio" CTA on style cards
- `Image` (as `ImageIcon`) — empty preview state icon

---

## Pixel-Fidelity Notes

- **Dashboard grid**: `grid-cols-2 md:grid-cols-3` matching the real `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (capped at 2 cols for the mock's constrained 560px height).
- **Card structure**: Matches `ModeItem` from `tools/imagem_criativa/ui.tsx` exactly — `wiz-section`, `aspect-[16/10]` image, gradient overlay, icon badge in bottom-left, title/desc/CTA in body.
- **Config screen layout**: `flex-col md:grid md:grid-cols-[minmax(280px,340px)_1fr]` mirrors the real `md:grid-cols-[minmax(300px,360px)_1fr]`, inspector left + PreviewStage right.
- **Inspector panel**: Glass panel with `glass-panel p-6 rounded-[32px]` on md+, fields using `glass-input`, select-like using `bg-black/50 border border-white/10 rounded-xl`.
- **Generate button**: `.btn-generate` — with `Wand2` icon idle, `Loader2 animate-spin` when generating.
- **Preview stage generating**: Shimmer bars using Tailwind `shimmer` animation + Loader2 + progress bar with `bg-gradient-to-r from-pink-500 to-[#ff7b47]`.
- **PreviewStage result**: `next/image` with `fill` + `object-cover` — same as production PreviewStage component.

---

## Concerns / Deltas from Real Component

None blocking. Minor intentional adaptations for the mock context:
1. **No actual image uploads** — replaced with static placeholder dropzone.
2. **Inspector panel has fewer fields** than real (omitted craft/classic/custom specific sections) — prioritized Hero Style config screen as the animated target.
3. **Grid is 2-col on mobile** (vs real 1-col) — better visual at mock-lab's fixed 560px height.
4. **History strip** hidden (md: `hidden md:block` placeholder text only) — no generation history in static mock.

These match the plan's fallback instruction: "If replicating both screens + the transition is too large, prioritize the config+preview screen forging to a real result."
