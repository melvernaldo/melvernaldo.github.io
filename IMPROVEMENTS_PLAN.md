# Content Organization & UI/UX Improvements Plan

**Project:** Melvernaldo Knowledge Base  
**Date:** March 4, 2026  
**Status:** Ready for Review

---

## Executive Summary

This plan outlines improvements to the organization and user experience of the Physics and Mathematics knowledge base. The goal is to make content easier to navigate, provide clear status indicators for content completeness, and enhance the learning experience for students.

### Current State
- **Platform:** Jekyll with Just the Docs theme
- **Content:** ~40 pages across Physics (A-Level, IGCSE, IFY) and Mathematics (A-Level)
- **Interactive Apps:** Circuit simulator, diffraction grating, random utilities
- **Math Rendering:** MathJax 3 with physics package
- **Deployment:** GitHub Pages

### Key Pain Points
1. No visibility into which content is complete vs work-in-progress
2. Navigation hierarchy could be clearer visually
3. Missing cross-links between related topics
4. No mobile-specific optimizations for math content
5. Homepage could better guide students to relevant content

---

## Phase 1: Core Infrastructure (Status & Navigation)

### 1.1 Content Status System

**What:** Add visual indicators showing content completeness

**Implementation:**
- Create status badge component (`_includes/status-badge.html`)
- Status levels: `draft`, `in-progress`, `complete`, `review`
- Add to all existing content pages (frontmatter)
- Display in page header and sidebar navigation

**Affected Files:**
- All content pages in `docs/Physics/` and `docs/Mathematics/`
- `_includes/` (new file)
- `_config.yml` (callout definitions)

**Effort:** Medium (requires updating ~40 pages)

---

### 1.2 Enhanced Navigation Styling

**What:** Improve visual hierarchy in sidebar navigation

**Implementation:**
- Create custom SCSS (`_sass/custom/navigation.scss`)
- Better indentation for nested topics
- Icons or color coding for Subject/Level/Topic distinction
- Clearer active state highlighting

**Affected Files:**
- `_sass/custom/navigation.scss` (new)
- `_config.yml` (sass import)

**Effort:** Small

---

### 1.3 Breadcrumb Navigation

**What:** Add breadcrumbs showing path: Home → Subject → Level → Topic

**Implementation:**
- Create breadcrumb include (`_includes/breadcrumbs.html`)
- Use `page.parent` chain from frontmatter
- Add to default layout

**Affected Files:**
- `_includes/breadcrumbs.html` (new)
- `_layouts/default.html` (modification)

**Effort:** Small

---

## Phase 2: Content Enhancement (Cross-Linking & Context)

### 2.1 Related Topics Section

**What:** Show related concepts at the bottom of each page

**Implementation:**
- Create related topics include (`_includes/related-topics.html`)
- Use `tags` frontmatter field to find related pages
- Display up to 5 related topics with links
- Manual curation initially, semi-automated later

**Affected Files:**
- `_includes/related-topics.html` (new)
- Complete content pages (add `tags` to frontmatter)

**Effort:** Medium (requires content audit to tag topics)

---

### 2.2 Prerequisites Callouts

**What:** Display required prior knowledge for complex topics

**Implementation:**
- Create prerequisites include (`_includes/prerequisites.html`)
- Use `prerequisites` frontmatter array
- Render as callout box at top of page
- Link to prerequisite pages

**Affected Files:**
- `_includes/prerequisites.html` (new)
- Complex topics (add `prerequisites` to frontmatter)

**Effort:** Small (applies to ~5-10 complex topics)

---

### 2.3 Progress Indicators

**What:** Show completion percentage on index pages

**Implementation:**
- Create progress include (`_includes/progress-bar.html`)
- Calculate from child pages' status
- Display visual progress bar
- Update index pages (Subject and Level pages)

**Affected Files:**
- `_includes/progress-bar.html` (new)
- `docs/Physics/index.md`
- `docs/Physics/A-Level-Phys/index.md`
- Other index pages

**Effort:** Small

---

## Phase 3: Homepage & Mobile Optimization

### 3.1 Homepage Redesign

**What:** Better entry point with quick access to popular content

**Implementation:**
- Redesign `index.md`
- Add "Quick Links" grid for common entry points
  - Physics A-Level topics
  - Physics formulas
  - Mathematics modules
  - Interactive apps
- Keep existing welcome text and MathJax test

**Affected Files:**
- `index.md` (significant rewrite)

**Effort:** Medium

---

### 3.2 Mobile Math Rendering

**What:** Ensure equations don't overflow on mobile devices

**Implementation:**
- Add responsive CSS for MathJax containers
- Set max-width and overflow rules
- Test on 375px viewport (mobile)
- Scale equations appropriately

**Affected Files:**
- `_sass/custom/mobile-fixes.scss` (new)
- `_includes/head_custom.html` (possible modifications)

**Effort:** Small

---

### 3.3 Mobile Navigation Fixes

**What:** Improve mobile sidebar behavior

**Implementation:**
- Ensure navigation collapses properly
- Touch-friendly tap targets
- Better mobile menu toggle

**Affected Files:**
- `_sass/custom/mobile-fixes.scss`

**Effort:** Small

---

### 3.4 Documentation

**What:** Document content creation patterns for consistency

**Implementation:**
- Create content guidelines document
- Document frontmatter fields: `status`, `tags`, `prerequisites`
- Provide examples and templates
- Update AGENTS.md or create new docs

**Affected Files:**
- `AGENTS.md` (update) or `docs/contributing.md` (new)

**Effort:** Small

---

## Implementation Timeline

| Phase | Tasks | Est. Duration |
|-------|-------|---------------|
| Phase 1 | 7 tasks | 1-2 weeks |
| Phase 2 | 5 tasks | 1-2 weeks |
| Phase 3 | 5 tasks | 1 week |
| **Total** | **17 tasks** | **3-5 weeks** |

*Note: Duration assumes part-time work (a few hours per week). Full-time could complete in 1-2 weeks.*

---

## Success Metrics

After implementation, verify:

| Metric | Target |
|--------|--------|
| Navigation depth | Any topic reachable in ≤3 clicks |
| Status coverage | 100% of pages display status |
| Mobile math | No horizontal scroll on 375px screens |
| Search relevance | 90% of queries return relevant results |
| Cross-linking | 50%+ of topics have related content |
| Consistency | All pages follow frontmatter patterns |

---

## Technical Requirements

### Must Maintain Compatibility With:
- Jekyll 4.4.1
- Just the Docs v0.10.1
- Ruby 3.3
- GitHub Pages deployment
- MathJax 3 integration

### Build Constraints:
- Build time must remain <2 minutes
- No external API dependencies
- All assets statically hosted

---

## Clarifications Needed

Before implementation begins, please confirm:

### 1. Content Status Priority
**Question:** Should we add status to all pages first, or focus on enhancing complete sections?

**Options:**
- **A)** Add status to all pages first (quick win), then enhance
- **B)** Focus on complete sections first, then add status to others
- **C)** Hybrid approach (recommended): Add status everywhere as lightweight change, then enhance progressively

### 2. Cross-Linking Approach
**Question:** How should related topics be determined?

**Options:**
- **A)** Manual curation (authors specify related pages)
- **B)** Tag-based (semi-automated with manual review)
- **C)** Fully automated (content analysis - more complex)

### 3. Testing Apps Integration
**Question:** Should interactive apps have enhanced navigation?

**Options:**
- **A)** Keep standalone with consistent external nav only
- **B)** Add internal navigation to app features
- **C)** Current approach is fine (recommended for now)

---

## Out of Scope

These items are intentionally excluded:
- User authentication/accounts
- Dynamic content or databases
- Real-time collaboration
- WYSIWYG editors
- AI content generation
- Native mobile apps
- PDF export
- Video hosting
- Analytics beyond basic page views

---

## Next Steps

1. **Review this plan** - Check if priorities and scope align with your vision
2. **Answer clarifications** - Provide answers to the 3 questions above
3. **Approve for implementation** - Give go-ahead to proceed
4. **Phase 1 kickoff** - Begin with status system and navigation

---

## Appendix: File Inventory

### Current Content Structure
```
docs/
├── Physics/
│   ├── index.md
│   ├── A-Level-Phys/
│   │   ├── index.md
│   │   ├── 1-Physical-quantities-and-units/
│   │   ├── 2-kinematics.md
│   │   ├── 3-dynamics/
│   │   ├── 4-forces-density-pressure/
│   │   ├── 7-waves.md
│   │   └── 8-superposition/
│   ├── IFY-Phys/
│   │   ├── index.md
│   │   ├── LO1/, LO2/ (content)
│   │   └── LO3-LO8/ (empty)
│   └── IGCSE-Phys/
│       └── index.md
├── Mathematics/
│   ├── index.md
│   └── A-Level-Maths/
│       ├── index.md
│       ├── 1-PM1/, 2-PM2/, 3-PM3/
│       ├── 4-Mechanics/
│       └── 5-Stats1/
└── Testing-Apps/
    ├── index.md
    ├── circuitjs/ (338 files)
    ├── diff-grating-spectrometer/
    └── random-cat/
```

### New Files to Create
- `_includes/status-badge.html`
- `_includes/breadcrumbs.html`
- `_includes/related-topics.html`
- `_includes/prerequisites.html`
- `_includes/progress-bar.html`
- `_sass/custom/navigation.scss`
- `_sass/custom/mobile-fixes.scss`

### Files to Modify
- All content pages (add `status` frontmatter)
- Complete Physics A-Level pages (add `tags` frontmatter)
- Complex topics (add `prerequisites` frontmatter)
- `_config.yml` (callout definitions)
- `index.md` (homepage redesign)
- `_layouts/default.html` (breadcrumb integration)
