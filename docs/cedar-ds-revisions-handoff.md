# Cedar DS — Revisions Handoff (Figma → Docs alignment)

Source of truth: **Cedar DS Foundations** (file key `QNwCaVwuBNF3CpeWUMnWyb`) — published library.
Consumed by: **Cedar DS Components** (file key `P3kSoahjcm11wVMwpzaAdQ`).
All values below were read directly from the Foundations variables after the latest publish.

**Companion files (same folder — hand these over together):**
- `cedar-tokens.css` — CSS custom properties. Primitives as raw values, semantic tokens as `var()` references (architecture preserved), responsive type + grid in `@media` blocks. Drop-in theme layer.
- `cedar-tokens.json` — resolved token values (aliases followed) nested by path; ideal for rendering palette swatches programmatically.

Both were generated from the live Foundations variables and already include every change in this doc, radius correction included. Regenerate only if Foundations changes again.

**Naming notes (reconciled with the doc-site codebase):**
- **Border weights use `--border-width-base` / `-bold` / `-x-bold`** (CSS) and a `border-width` group (JSON), kept distinct from the **`--border-base` color** (= `neutral/900` #252525). Root cause: Figma has *two* variables named `border/base` — a color in Color/Semantic and a weight in Border/Weights — which would collide under a naive `border/base → --border-base` mapping. The export now disambiguates them, matching the codebase's existing `--border-width-*` convention. (Optional future cleanup: rename the Figma border-weight variables, e.g. `border/width/base`, to remove the collision at the source — needs a Foundations publish, so out of v1 scope.)
- **Breakpoints** in the CSS are `max-width: 767px` (mobile) and `768–1279px` (tablet), matching the doc-site's existing media queries. These are a doc-site choice (Figma only defines named Desktop/Tablet/Mobile modes, no pixel breakpoints).

---

## ⚠️ BREAKING — token group renames

Two brand primitive ramps were **renamed** (variable IDs preserved, so Figma aliases still resolve, but **token names changed** — any CSS custom properties, JSON exports, Tailwind config, or docs referencing the old names must be updated):

| Old name | New name | New role |
|----------|----------|----------|
| `brand/amber/*` | `brand/secondary/*` | Secondary brand color |
| `brand/sienna/*` | `brand/accent/*` | Accent brand color |

`brand/amber` and `brand/sienna` **no longer exist**. Search the doc-site codebase for `amber` / `sienna` and migrate.

---

## Brand ramps — new values (full scale)

### `brand/primary` — TEAL (was lime/olive)
| 100 | 150 | 200 | 300 | 400 | **500** | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| #ddf5f8 | #c2eef4 | #9ae5ef | #45d9ed | #04bfdc | **#0097a7** | #008394 | #006a7a | #005261 | #003742 | #002129 |

### `brand/secondary` — BLUE (was amber; briefly cyan during iteration)
| 100 | 150 | 200 | 300 | 400 | **500** | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| #ddeef8 | #c3e2f4 | #9ad0ef | #51b3ec | #149ceb | **#0f7dbd** | #0a69a3 | #075183 | #043e67 | #022845 | #01192d |

### `brand/accent` — GREEN (was sienna red-orange)
| 100 | 150 | 200 | 300 | 400 | **500** | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| #eef7e3 | #dff0cc | #c9e5a9 | #aad47d | #96c95e | **#8bc34a** | #71ae37 | #578e29 | #3e6d1d | #274912 | #172d0b |

### `success` — MUTED GREEN (was neon lime #4cd52a)
| 100 | 150 | 200 | 300 | 400 | **500** | 600 | **700** | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| #e1f4e6 | #cbebd4 | #abdeb9 | #7ccb93 | #4fba73 | **#3a9c5e** | #2d864f | **#1f6b3f** | #145230 | #0d3b23 | #072717 |

`brand/orange` and `error` ramps were **not** recolored (still used as-is).

---

## Semantic token re-mappings

Several semantic tokens were re-pointed. Current lineage + resolved value:

| Semantic token | → resolves via | Hex |
|----------------|----------------|-----|
| `action/primary` | brand/primary/500 | #0097a7 |
| `action/primary-hover` | brand/primary/600 | #008394 |
| `action/secondary` | brand/secondary/500 | #0f7dbd |
| `action/secondary-hover` | brand/secondary/600 | #0a69a3 |
| `action/secondary-pressed` | brand/secondary/700 | #075183 |
| `action/accent` | brand/accent/500 | #8bc34a |
| `action/accent-hover` | brand/accent/600 | #71ae37 |
| `action/accent-pressed` | brand/accent/700 | #578e29 |
| `action/destructive` | **error/600** (repointed off sienna) | #b24949 |
| `action/destructive-hover` | error/700 | #863737 |
| `action/destructive-pressed` | error/800 | #592424 |
| `status/warning` | **brand/orange/600** (repointed off amber) | #b65d0b |
| `status/warning-bg` | brand/orange/100 | #fef4ec |
| `status/success` | **success/700** (repointed off success/500) | #1f6b3f |
| `status/success-bg` | success/100 | #e1f4e6 |
| `status/error` | error/500 (unchanged) | #df5b5b |

**Why the repoints:**
- `amber`→secondary and `sienna`→accent recolors would have broken **warning** (was sourced from amber) and **destructive** (was sourced from sienna). Warning was moved to `brand/orange`; destructive to the `error` ramp. Both keep their semantics (warm/red).
- `status/success` was pointing at the bright `success/500`, giving **1.68:1** contrast on the light success background (fails WCAG). It now points at `success/700` → **5.66:1** (passes AA). Backgrounds still use `success/100`.

---

## New foundation tokens

- **`bg/faint` = `neutral/50` = #f7f7f7** — new near-white surface token; added `neutral/50` primitive. Used for zebra striping / subtle fills (lighter than `bg/muted` #dcdcdc).
- **`Grid / Layout` variable collection** — 3 modes (Desktop / Tablet / Mobile):
  - `grid/columns/count` = 12 / 8 / 4
  - `grid/gutter` = 32 / 24 / 16
  - `grid/margin` = 80 / 32 / 16
  - `grid/max-width` = 1280 / 768 / 375
- **Grid styles** (layout-grid presets): `Grid/Desktop` (12col), `Grid/Tablet` (8col), `Grid/Mobile` (4col), `Grid/Baseline 8`.
- **`title/lg` changed 24 → 32px** (type scale).
- **Radius scale corrected** — the aliases were mapped to the wrong scale steps. Now: `radius/none` 0 / `radius/sm` **4px** (was 1) / `radius/md` **8px** (was 2) / `radius/lg` **12px** (was 8) / `radius/xl` 16px / `radius/full` 999px. **Published and verified in Components** — Button now 12px (`radius/lg`), Input/Card/DataGrid 8px (`radius/md`). Corners are larger than before; the doc-site's radius swatches and any hardcoded radii should be updated to match.

---

## New components (in Cedar DS Components)

Added this session (all token-bound, organized under section pages):
- **Feedback:** Toast (4 variants + `Show Action` bool), Modal (S/M/L, footer uses real Button instances), Tooltip (Top/Bottom/Left/Right). Alert restructured: `Title`/`Description` TEXT props on the set + `Show Icon` boolean.
- **Data display:** Card (Default/Elevated/Flat), Avatar (XS–XL), Divider (H/V), Badge (moved to its own page).
- **Navigation:** Tab Item + Tab Bar, Breadcrumb (+ item), Pagination (+ item).
- **Status:** Progress Bar (S/M/L), Spinner (S/M/L).
- **Overlays:** Menu + Menu Item.
- **DataGrid (two architectures):**
  - Row-oriented `DataGrid` — horizontally responsive (columns FILL).
  - `DataGrid (Columns)` — column-oriented for easy reorder + fixed/flex columns (fixed select + actions columns, flex data columns).
  - Atoms: `Grid Cell`, `Column Header`, `Grid Row`, `Grid Toolbar`, `Grid Footer`.
- **`Grid Cell` has an instance-swap `Content` slot** (Text / Chip / Avatar / Badge / Checkbox Control / Icon Button). Default content component: `Cell Content / Text`; helper wrappers `Cell Content / Checkbox` (+ Checked).

---

## Doc-site action items

1. **Use the provided token exports** (`cedar-tokens.css` / `cedar-tokens.json`) — already generated from the live library with current names + values (incl. renames, new brand colors, muted success, `bg/faint`, grid, `title/lg`=32, radius fix). Regenerate only if Foundations changes again.
2. **Rename** any `amber`/`sienna` references → `secondary`/`accent`.
3. **Update color palette pages** with the new primary/secondary/accent/success ramps (swatches + hex).
4. **Update semantic-token docs** to reflect the new lineage (esp. warning→orange, destructive→error, success accent→700).
5. **Document new tokens**: `bg/faint`, the `Grid / Layout` responsive collection, `title/lg`=32.
6. **Note the contrast fix** in success docs (accent uses 700 on 100 bg → AA).
7. **Add new component docs** for the components listed above.

Pull live values directly from Foundations (`QNwCaVwuBNF3CpeWUMnWyb`) to confirm before publishing docs.

---

# V1 build specs — Tabs & Progress Bar

Pulled directly from the Figma components (Cedar DS Components, `P3kSoahjcm11wVMwpzaAdQ`).

## ✅ Accent color — RESOLVED to `action/primary` (teal)

These were originally bound to `status/information` (blue #478aff) by mistake. **Now repointed in Figma to `action/primary` (teal #0097a7):** Tabs active (label + indicator), Progress Bar fill (all sizes), Spinner arc (all sizes), and Pagination active page. Build the React components against **`action/primary`**.

Note: the already-built React **Spinner** is currently blue — update it to `action/primary` to match the corrected Figma.

## Tabs

Two components: **`Tab Item`** (variant set) + **`Tab Bar`** (composition example).

**`Tab Item` properties**
- `Label` — TEXT
- `State` — VARIANT: `Active` | `Inactive`

**Structure:** vertical stack → `label row` (horizontal, padding **T/B 10, L/R 16**) containing `label` text → `indicator` (2px-tall bar, fills item width).

| State | Label font | Label color | Indicator |
|-------|-----------|-------------|-----------|
| Active | Inter **Semi Bold** 14 | **`action/primary`** #0097a7 | visible, 2px, same accent token |
| Inactive | Inter Regular 14 | `text/subtle` (neutral/600) #939393 | hidden (transparent) |

**`Tab Bar`:** horizontal row of `Tab Item` instances; bottom rule **1px** bound to **`border/subtle`** (#cccccc).

**React a11y requirements (the part Figma can't encode):**
- `role="tablist"` on the bar; `role="tab"` + `aria-selected` on each tab; `role="tabpanel"` (with `aria-labelledby`) for panels.
- Roving tabindex: active tab `tabindex="0"`, others `tabindex="-1"`.
- Keyboard: **←/→** move between tabs, **Home/End** jump to first/last, **Enter/Space** activate (or activate-on-focus, your choice).
- Active indicator = 2px bottom border in the accent token; animate position if desired.

## Progress Bar

One component: **`Progress Bar`**, property `Size` — VARIANT: `Small` | `Medium` | `Large`. Default demo fill = **60%**.

| Size | Track height | Corner radius | Track color | Fill color |
|------|-------------|---------------|-------------|------------|
| Small | 4px | 2 (fully rounded) | `bg/muted` (neutral/150) #dcdcdc | **`action/primary`** #0097a7 |
| Medium | 8px | 4 | same | same |
| Large | 12px | 6 | same | same |

- Width is flexible — the track should **fill its container** (Figma demo is fixed at 240px). Fill width = `value%` of track.
- Corner radius = half the height (pill ends) at every size.

**React a11y:** `role="progressbar"`, `aria-valuenow` / `aria-valuemin="0"` / `aria-valuemax="100"`. Only a **determinate** bar exists in Figma; an indeterminate/loading variant would be a new addition (v2+), not in scope for v1.

> Spinner: `Size` = Small 16 / Medium 24 / Large 40px. Arc now uses **`action/primary`** (teal), repointed in Figma. The already-built React Spinner is blue — update it to `action/primary` to match.

