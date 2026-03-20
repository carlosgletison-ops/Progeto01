# Design System Specification: The Executive Performance Framework

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built to position a paid traffic agency not as a utility, but as a high-stakes strategic partner. Our Creative North Star is **"The Digital Curator."** 

Unlike standard "SaaS-style" agencies that rely on loud colors and rigid grids, this system uses an editorial, high-end approach. We break the template look through **intentional asymmetry**, where large `display-lg` serif headlines are offset against generous whitespace (`spacing-24`), creating a sense of calculated confidence. The UI is not a flat canvas; it is a series of layered, translucent surfaces that suggest depth, transparency, and architectural precision.

---

## 2. Colors & Surface Logic
The palette is rooted in `surface` (#131313), creating a prestigious "obsidian" environment. Contrast is our primary tool for authority.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or container definition. 
*   **Boundaries** must be created solely through background shifts. For example, a `surface-container-low` (#1C1B1B) section sitting on a `surface` (#131313) background.
*   **The Signature Glow:** Use a subtle `surface-tint` (#E9C349) at 5-10% opacity as a background glow behind key value propositions to guide the eye without using a box.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of "Black Glass." 
*   **Level 0 (Base):** `surface` (#131313) for the main page background.
*   **Level 1 (Sections):** `surface-container-low` (#1C1B1B) for large content blocks.
*   **Level 2 (Cards):** `surface-container` (#201F1F) for interactive elements.
*   **Level 3 (Pop-overs):** `surface-container-highest` (#353534) for tooltips or floating menus.

---

## 3. Typography: Editorial Authority
We utilize a high-contrast pairing of **Noto Serif** and **Inter** to balance "High-Value Tradition" with "Modern Precision."

*   **Display & Headlines (Noto Serif):** Used for high-impact statements. The serif represents the "Strategic" persona. Use `display-lg` (3.5rem) with `on-surface` (#E5E2E1) for hero sections. Always use tight letter-spacing (-0.02em) for headlines.
*   **Body & Titles (Inter):** Used for functional data and descriptions. Inter provides the "Clean lines" requested. `body-lg` (1rem) should be set with a line height of 1.6 to ensure the "generous whitespace" feel extends into the text blocks.
*   **Labels (Inter Bold):** Use `label-md` in uppercase with a tracking of +0.1em for small "Strategic Tags" (e.g., "CAMPAIGN AUDIT").

---

## 4. Elevation & Depth
Depth is a tool for focus, not just decoration.

*   **Tonal Layering:** Avoid shadows on standard cards. Instead, place a `surface-container-lowest` (#0E0E0E) card inside a `surface-container-low` (#1C1B1B) section. This "recessed" look feels more premium and architectural.
*   **Ambient Shadows:** For floating elements only, use an extra-diffused shadow: `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5)`. The shadow must never be pure black; it should feel like an ambient occlusion of the background.
*   **The Ghost Border Fallback:** If a border is required for accessibility (e.g., Input fields), use `outline-variant` (#4D4635) at **20% opacity**. This creates a "whisper" of a line rather than a hard boundary.

---

## 5. Components

### Buttons (The "Investment" Action)
*   **Primary:** Gradient (#F2CA50 to #D4AF37), `on-primary` (#3C2F00) text, `rounded-md` (0.375rem). No border.
*   **Secondary:** Ghost style. No background. `outline` (#99907C) ghost border at 20% opacity. `on-surface` text.
*   **Interaction:** On hover, the primary button should "glow" using a `primary-fixed-dim` shadow with 40% opacity.

### Cards & Lists (The "Anti-Grid" Approach)
*   **Rule:** Forbid the use of divider lines.
*   **Implementation:** Separate list items using `spacing-4` (1.4rem) of vertical whitespace. 
*   **Cards:** Use `rounded-lg` (0.5rem). Cards should not have borders; they should be defined by a subtle shift from `surface` to `surface-container-low`.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Dark Space:** If a section feels "empty," do not fill it. The "High-Value" persona is comfortable with silence.
*   **Tone-on-Tone:** Use `on-surface-variant` (#D0C5AF) for secondary text to keep the hierarchy sophisticated.

### Don’t:
*   **Don't use 100% White:** Never use #FFFFFF. Use `on-surface` (#E5E2E1) to reduce eye strain on the dark background and maintain a "creamy" premium feel.
*   **Don't use "Bouncy" Animations:** Use `cubic-bezier(0.2, 0, 0, 1)` for all transitions. It is a "Power Curve"—fast to start, smooth to finish.
*   **No Heavy Borders:** If you see a solid grey line, delete it. Use a background color shift or `spacing-12` (4rem) of gap instead.
