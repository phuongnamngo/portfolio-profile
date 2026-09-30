---
name: Obsidian Engineering
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#1bbd85'
  on-tertiary-container: '#00452e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
  display-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system positions full-stack engineering not merely as code execution, but as high-precision software architecture and refined product craftsmanship. It targets senior technical recruiters, engineering leaders, VC founders, and prospective collaborators who respect rigorous systems thinking and high aesthetic discipline.

The visual style blends **SaaS-grade dark UI minimalism** with **tactile technical glassmorphism**. The interface delivers the focused quietude of developer terminals fused with the high polish of elite engineering platforms (Linear, Vercel, Raycast). Dark obsidian surfaces prevent visual fatigue while crisp, electric cyan and blue telemetry accents spotlight core accomplishments, live service states, and architectural diagrams.

Key principles:
- **Terminal Clarity:** Zero ornamental fluff. Visual rhythm is derived from systematic grid structure, precise monospaced indicators, and razor-sharp contrast.
- **Glass Realism:** Controlled depth using multi-layered dark slate glass panels, hairline translucent strokes, and soft ambient glows.
- **Technical Confidence:** Typographic balance between ultra-clean sans-serif and utilitarian code fonts, creating instant authority.

## Colors
The color architecture relies on a specialized dark palette engineered to create clean layer hierarchy and optical separation without visual noise.

- **Background Foundations:**
  - Base canvas: `#0B0F17` (Deep space obsidian).
  - Raised surfaces & modal overlays: `#111827` (Charcoal slate tint).
  - Surface elevations: `#1E293B` (Low elevated containers), `#334155` (Border outlines, divider channels).
- **Accents & Telemetry:**
  - **Primary (`#06B6D4` - Cyber Cyan):** Primary CTA actions, active terminal tabs, active links, glow reflections.
  - **Secondary (`#3B82F6` - Electric Blue):** Secondary button fills, interactive badges, syntax tokens, progress indicators.
  - **Tertiary (`#10B981` - Emerald Signal):** Live deployment indicators, "Available for hire" status beacons, success payloads.
- **Text & Content Contrast:**
  - High emphasis: `#F8FAFC` (Purest slate-white, headlines & active code).
  - Medium emphasis: `#94A3B8` (Body text, descriptive metadata).
  - Low emphasis / Subtle: `#64748B` (Inactive states, timestamps, decorative line numbers).

## Typography
Typography creates an intentional dual-language experience: human narrative paired with machine precision.

- **Inter** orchestrates structured hierarchy across display headers and body copy. Negative letter tracking (`-0.02em` on headings, `-0.01em` on body) ensures high typographic density characteristic of modern developer tools.
- **JetBrains Mono** powers all metadata, tags, code snippets, git hashes, terminal inputs, metrics, and technical labels. It commands instant analytical credibility.
- For high-impact hero headings, maintain tight vertical metrics with `display` styles. Use mobile downscaled variants across viewports under 768px to preserve layout proportion without awkward word breaks.

## Layout & Spacing
The layout follows a 12-column responsive fluid grid pinned inside a maximum content wrapper of `1280px` to maintain strict legibility across ultrawide monitors.

- **Grid Architecture:**
  - **Desktop (>=1024px):** 12 columns, `gutter: 1.5rem` (24px), page margins `margin: 2rem` to `4rem`. Asymmetric column arrangements (e.g., 4-col sticky metadata sidebar + 8-col project deep dives) reflect technical dashboard layouts.
  - **Tablet (768px - 1023px):** 8 columns, `gutter: 1.25rem` (20px), `margin: 1.5rem`.
  - **Mobile (<768px):** 4 columns, `gutter: 1rem` (16px), `margin: 1rem` (16px). Single-column stack flow with horizontal scrolling code blocks and metric chips.
- **Rhythm Rules:**
  - Group related metadata using `space-xs` and `space-sm`.
  - Content blocks within cards leverage `space-md` and `space-lg`.
  - Section-to-section layout spacing scales to `space-xl` multiplied by 2 (`5rem`) for deliberate breathing space between architectural showcases.

## Elevation & Depth
Elevation is realized through translucent layering and edge luminance rather than muddy dropshadows, ensuring dark-mode surfaces remain crisp and luminous.

- **Surface Tiers:**
  - **Level 0 (Canvas):** Pure `#0B0F17` base. Contains subtle noise texture (1.5% opacity) and radial backdrop gradients centered behind key focal points (Cyan `#06B6D4` at 6% opacity, 300px blur radius).
  - **Level 1 (Subsurface Cards):** `rgba(17, 24, 39, 0.7)` backdrop with a `12px` Gaussian blur (`backdrop-filter: blur(12px)`). Hairline border: `1px solid rgba(51, 65, 85, 0.4)`.
  - **Level 2 (Hover / Elevated Modals):** `rgba(30, 41, 59, 0.85)` backdrop with `20px` Gaussian blur. Border: `1px solid rgba(6, 182, 212, 0.4)`.
- **Glow & Shadow Effects:**
  - Low elevation: `0 4px 20px rgba(0, 0, 0, 0.4)`.
  - Accent focus: `0 0 25px rgba(6, 182, 212, 0.15), 0 8px 30px rgba(0, 0, 0, 0.6)`.
  - Active interactive glow: `0 0 15px rgba(59, 130, 246, 0.3)`.

## Shapes
The design system employs a calibrated roundedness level (`roundedness: 2`). This translates to:
- Standard elements (buttons, input fields, badges): `0.5rem` (8px).
- Containers & Cards (`rounded-lg`): `1rem` (16px).
- Large Panels & Modal Windows (`rounded-xl`): `1.5rem` (24px).

This geometry avoids both harsh, brutalist corners and overly childish bubble shapes, achieving a crisp, machine-tooled software feel. Status pills and icon badges use full pill shapes (`9999px`) to create clear semantic differentiation from structural blocks.

## Components

### Buttons & Interactive Controls
- **Primary Action:** Solid background gradient `linear-gradient(135deg, #06B6D4, #3B82F6)` with dark text `#0B0F17` in medium/bold weight. Subtle cyan perimeter glow on hover with a `translateY(-1px)` micro-interaction.
- **Secondary / Ghost:** Glass surface `rgba(30, 41, 59, 0.6)` with hairline border `rgba(51, 65, 85, 0.8)` and text `#F8FAFC`. On hover, border shifts to `#06B6D4` with `rgba(6, 182, 212, 0.08)` surface wash.
- **Command / Keybinding Button:** JetBrains Mono font, `0.25rem` padding with `kbd`-styled outline in `#334155`.

### Tech Stack Chips & Status Badges
- **Tech Stack Badges:** `JetBrains Mono` label-sm text. Surface `rgba(17, 24, 39, 0.9)`, border `1px solid rgba(51, 65, 85, 0.6)`. Hover triggers slight accent illumination matching the technology's ecosystem brand color.
- **Live Status Indicator:** Pill badge housing a pulsing emerald dot (`#10B981`) paired with text reading `AVAILABLE FOR CONTRACTS` or `SYSTEM ONLINE`.

### Project Showcase Cards
- Translucent dark slate shell with top highlight stroke (`linear-gradient(90deg, rgba(6, 182, 212, 0.3), transparent)`).
- Card contains: project architectural role, system metrics (e.g., latency, throughput, scale), GitHub/live links, and embedded monospaced code or tech stack tags.
- On hover: border transitions smoothly to `#06B6D4`, background drops slightly darker to increase internal contrast, and the preview asset zooms slightly (`scale(1.02)`).

### Terminal / Code Snippet Block
- Native OS top bar with three slate window controls (`#334155`).
- JetBrains Mono body with standard syntax highlighting (Cyan for identifiers, Blue for keywords, Emerald for strings, Slate for comments).
- Embedded one-click copy button with instant checkmark feedback.

### Form Inputs & Terminal Command Bar
- Surface: `#0B0F17` with inner inset border `rgba(51, 65, 85, 0.8)`.
- Focus state: Hairline ring `0 0 0 1px #06B6D4` and soft cyan ambient glow. Placeholder rendered in muted slate `#64748B`.
- Integrated `cmd + k` command palette support for keyboard-first navigation across the portfolio.