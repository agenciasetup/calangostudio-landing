# Foundation Report — Fase 0 + MockSessaoFotos + mockData

**Date:** 2026-06-20  
**Branch:** `feat/mockups-plataforma-identicos`  
**Tasks completed:** 1, 2, 3, 4, 5, 6, 13  

---

## Files Created / Modified

### Modified
- `tailwind.config.ts` — Added platform tokens: `primary` {DEFAULT:#ffaa00, hover:#ffc040}, `background:#030303`, `surface:#0a0a0c`, `fontFamily.display` (Poppins), `backgroundImage["brand-gradient"]`
- `src/app/globals.css` — Appended: `.glass-input`, `.btn-generate`, `.wiz-select/input/textarea`, `.no-scrollbar`, `@keyframes blink`/`.animate-cursor`

### Created
- `src/app/mock-lab/page.tsx` — Dev harness; renders any registered mock at `/mock-lab?fn=<key>` inside the platform shell (sidebar + content slot)
- `src/components/platform/Sidebar.tsx` — `PlatformSidebar` rail (collapsed w-20), active item highlighted with `text-primary` + left glow bar
- `src/components/platform/StudioTopBar.tsx` — `StudioTopBar` + `StudioSelect` components (static, no portal/state)
- `src/components/platform/PlatformChrome.tsx` — Outer chrome (sidebar + topbar slot + content slot), `height` prop (default 560)
- `src/components/platform/registry.ts` — `FUNCTIONS` registry (only `sessao-fotos` active; Tasks 7-12 commented out)
- `src/components/platform/mockData.ts` — Static data maps for all 6 functions (sessaoFotosData, criarImagemStyles, criarCopyPosts, clienteExemplo, clientesList, prospectosList)
- `src/components/platform/mocks/MockSessaoFotos.tsx` — Pixel-faithful port of `public/estudio-identico.html`

---

## Commit Hashes

| Task | Commit | Message |
|------|--------|---------|
| Task 1 | `5c8d5d9` | feat(landing): portar design system da plataforma (tokens + glass/wiz CSS) + harness mock-lab |
| Task 2 | `42b682b` | feat(platform): sidebar rail colapsada idêntica |
| Task 3 | `c946b41` | feat(platform): StudioTopBar + StudioSelect idênticos |
| Task 4 | `00cc0db` | feat(platform): PlatformChrome (sidebar+topbar+slot) |
| Task 13 | `f6bbf40` | feat(platform): dados reais dos mocks (mockData.ts) |
| Task 5 + 6 | `e943744` | feat(platform): registry das 6 funções + harness mock-lab |

---

## npm run build Result

**PASS** — Build completes successfully with 0 errors. All warnings are pre-existing in untouched files (`apresentacao/page.tsx`, `layout.tsx`, `Founder.tsx`, etc.). No new warnings introduced.

---

## Lucide Icon Substitutions

| Tabler icon | lucide-react | Notes |
|-------------|-------------|-------|
| `ti-typography` | `Type` | Exact semantic match |
| `ti-photo-plus` | `ImagePlus` | Exact match |
| `ti-user` | `User` | Exact match |
| `ti-users` | `Users` | Exact match |
| `ti-camera` | `Camera` | Exact match |
| `ti-photo` | `Image` (aliased as `ImageIcon`) | Aliased to avoid conflict with `next/image` — ESLint `jsx-a11y/alt-text` fires on any component named `Image` |
| `ti-chevron-down` | `ChevronDown` | Used internally by `StudioSelect`; removed from `MockSessaoFotos` since it's rendered via `StudioSelect` |
| `ti-pencil` | `Pencil` | Exact match |
| `ti-plus` | `Plus` | Exact match |
| `ti-trophy` | `Trophy` | Exact match |
| `ti-key` | `Key` | Exact match |
| `ti-coins` | `Coins` | Exact match |
| `ti-user-star` | `UserStar` | Exact match (confirmed in node_modules) |
| `ti-package` | `Package` | Exact match |
| `ti-settings` | `Settings` | Exact match |
| `ti-logout` | `LogOut` | Note: lucide uses `LogOut` (camelCase with capital O), not `Logout` |
| `ti-layout-grid` | `LayoutGrid` | Exact match |
| `ti-layout-dashboard` | `LayoutDashboard` | Exact match |
| `ti-target` | `Target` | Exact match |
| `ti-palette` | `Palette` | Exact match |
| `ti-sparkles` | `Sparkles` | Exact match |

---

## Decisions & Notes

1. **Token collision avoided:** `primary`=`#ffaa00` added to Tailwind (platform). Landing's `accent` = `#ffaa00` is separate and untouched. Platform's coral `#ff7b47` uses literal `[#ff7b47]` wherever needed (none needed in MockSessaoFotos — it's cyan-accented).

2. **Mock-lab architecture:** `MockSessaoFotos` renders its own full layout (topbar + grid) and is placed inside a raw sidebar+content shell rather than `PlatformChrome`. This avoids a double-topbar issue since `PlatformChrome` has a mandatory `topbar` slot.

3. **Registry:** Only `sessao-fotos` is active. Tasks 7–12 entries are commented out with a note. This keeps the build clean with no missing-file imports.

4. **`IdCard` vs `IdBadge2`:** `IdCard` confirmed to exist in lucide-react (`id-card.js` found in node_modules). The plan's comment about this was just a note — `IdCard` is correct.

5. **`Image` aliasing:** `Image as ImageIcon` used in both `Sidebar.tsx` and `MockSessaoFotos.tsx` to prevent ESLint `jsx-a11y/alt-text` false positive that fires on any JSX component named `Image`.

---

## Status

**DONE**
