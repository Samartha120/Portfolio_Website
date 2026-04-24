# Design Thinking Submission Notes (Portfolio Website)

This document maps the current repository to the provided **Design Thinking guidelines** and **evaluation rubric**.

## 1) What this project currently is (prototype summary)

**Type:** React + Vite single-page app with client-side routing (multi-page experience).

**Key pages/routes implemented:**
- `/` (Home) with sections: Hero, About, Expertise, Projects, Insights, Contact.
- `/about`, `/expertise`, `/projects`, `/projects/:id`, `/research`, `/workshops`, `/mentorship`, `/consultancy`, `/media`, `/blog`, `/blog/:id`, `/contact`.

**Notable interactive features (UI-level):**
- Project filtering (category filter).
- Blog details routing.
- Animations/transitions (Framer Motion).
- Contact forms (two implementations: one “real-ish”, one simulated).

## 2) How the project takes user input (current implementation)

### A) Primary user input (Contact page)

**Where:** Contact page uses a controlled React form.

**Code path:**
- UI form + validation state: `src/components/contact/ContactForm.jsx`
- Email sending: `src/services/emailService.js`
- Page that renders the form: `src/pages/Contact.jsx`

**How it works:**
1. User types into fields (Name, Email, Subject, Message).
2. Component stores values in React state (`useState`).
3. On submit, it validates inputs (`canSubmit`) and calls `sendEmail(...)`.
4. `sendEmail(...)` checks for EmailJS env variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. If keys exist and are not demo keys, it sends through EmailJS.
6. Otherwise it **simulates sending** (setTimeout + console.log) and returns success.

**Important note for grading:** this is a legitimate *user input* flow, but without real keys it only simulates backend delivery.

### B) Secondary user input (Home Contact section)

**Where:** Home page includes a “ContactSection” with an HTML form.

**Code path:** `src/pages/sections/ContactSection.jsx`

**How it works today:**
- On submit it runs a **local simulation only** (`setTimeout`, then `e.target.reset()`).
- It does not currently call `emailService.js`.

**Optional improvement:** wire this section to the same `sendEmail(...)` function so both contact entry points behave consistently.

## 3) Rubric mapping (what’s present vs what’s missing)

Below is a strict mapping based on *what exists inside this repo right now*.

### 1. Empathy (User Research & Insights) — /7
**Current evidence in repo:**
- No interview notes, survey results, personas, pain points, or insights documents found.

**Status:** Missing.

**What to add (for Excellent):**
- Target users definition (students / recruiters / clients / mentors).
- 5–7 user interactions (short interviews) with:
  - user type, goals, pain points
  - direct quotes
  - insights summary (themes)
- A small “Top pain points” list that clearly leads into your problem statement.

### 2. Define (Problem Statement Clarity) — /3
**Current evidence in repo:**
- No explicit problem statement document found.

**Status:** Missing.

**What to add (for Excellent):**
- A single focused statement, e.g.:
  - “Students and early-career professionals need a fast, credible portfolio to showcase projects and contact details because recruiters/clients decide within seconds and scattered links reduce trust.”

### 3. Ideation (Creativity & Techniques Used) — /7
**Current evidence in repo:**
- No ideation artifacts (brainstorm list, mind map, sketches, alternative concepts) found.

**Status:** Missing.

**What to add (for Excellent):**
- At least 2 techniques documented, for example:
  - Brainstorming (20+ feature/section ideas)
  - Mind map (navigation + content hierarchy)
  - Crazy-8s / sketch variations (hero layouts, projects grid)
- A short “why we chose this final direction” paragraph.

### 4. Prototype (Functionality, UI/UX & Implementation) — /10
**Current evidence in repo:**
- Multiple pages, structured components, consistent UI styling, animations.
- A working contact form flow with EmailJS support + simulation fallback.

**Status:** Strong.

**What to add to reach 9–10/10:**
- Ensure all key flows are consistent (Home contact section → real send too).
- Add deployment link + basic performance/accessibility notes.
- Avoid demo/simulation where possible (use real EmailJS keys for live demo).

### 5. Testing (User Feedback & Iteration) — /3
**Current evidence in repo:**
- No documented user feedback, test sessions, or iteration notes found.

**Status:** Missing.

**What to add (for Excellent):**
- Feedback from 5 users (even short sessions) including:
  - what worked
  - what needs improvement
  - what you changed based on feedback (before/after)

### 6. Documentation with Proofs — /3
**Current evidence in repo:**
- Root README is still the default Vite template (not project-specific).
- No “proof artifacts” included (screenshots, interview notes, test results).

**Status:** Missing.

**What to add (for Excellent):**
- Update README to describe the project, features, setup, env vars, and deployment.
- Add a `docs/` folder (or keep everything in this file) containing:
  - screenshots of key pages
  - interview summary + raw notes
  - testing feedback summary
  - link to live demo

### 7. Original Work (Authenticity) — /2
**Current evidence in repo:**
- Code is present and non-trivial, but authenticity is not something a grader can infer from code alone.

**Status:** Partially provable.

**What to add (for full marks):**
- Include credits for any third-party assets (icons, images, illustrations).
- Ensure commit history reflects your work (if grading checks Git history).

### 8. Reality & Commercial Value — /5
**Current evidence in repo:**
- This is a practical portfolio site concept with contact workflow and clear sections.

**Status:** Moderate.

**What to add (for Excellent):**
- Live deployment (Vercel/Netlify/GitHub Pages) + real email delivery.
- Clear “services / CTA” and trust elements (case studies, testimonials).
- Confirm content accuracy and remove placeholder text.

## 4) Estimated marks (based on what’s inside the repo right now)

> This is an estimate; actual marks depend on what you submit as **evidence** (PDF/doc/screenshots) in addition to code.

| Criterion | Max | Likely now | Why |
|---|---:|---:|---|
| Empathy | 7 | 0 | No research/insights documented |
| Define | 3 | 0 | No problem statement document |
| Ideation | 7 | 0 | No ideation artifacts documented |
| Prototype | 10 | 7–8 | Strong UI + routing; some simulated flows |
| Testing | 3 | 0 | No feedback/iteration documented |
| Documentation w/ proofs | 3 | 0 | README is template; no proof artifacts |
| Original work | 2 | 1 | Code present; authenticity not demonstrated |
| Reality/commercial value | 5 | 3 | Practical, but needs live deployment + real integrations |
| **Total** | **40** | **11–12 / 40** | Mostly missing docs/research/testing proofs |

## 5) What to do next (fast checklist to raise your score)

If you want to push this into the 30+ range, the biggest ROI is documentation + evidence (not new features).

**Empathy (do this first):**
- Interview 5–7 people (mix of students / recruiters / clients).
- Ask: “What do you look for first in a portfolio?”, “What makes you leave?”, “What info is missing often?”
- Summarize into 5–8 insights + 3 pain points.

**Define:**
- Write 1 clear problem statement + success metrics (e.g., “can contact me in < 30s”).

**Ideate:**
- Include brainstorming list + a mind map (screenshots are acceptable).
- Show at least 2 alternative layouts/flows you considered.

**Prototype:**
- Wire Home contact section to use `sendEmail(...)` too (optional but improves polish).
- Add live link and real EmailJS keys for the demo (don’t commit secrets).

**Testing:**
- Get 5 users to try the deployed site.
- Collect feedback, then implement 2–3 improvements and record them.

**Documentation with proofs:**
- Replace the default README with project-specific README.
- Add screenshots + feedback proof (Google Form summary screenshot is fine).
