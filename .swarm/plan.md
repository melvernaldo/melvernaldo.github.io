<!-- PLAN_HASH: 2hdmotopjx761 -->
# Content Organization and UI/UX Enhancement
Swarm: default
Phase: 1 [PENDING] | Updated: 2026-03-04T04:28:51.468Z

---
## Phase 1: Core Infrastructure - Status and Navigation [PENDING]
- [ ] 1.1: Add content status configuration to _config.yml with status badges for draft, in-progress, complete, and review states [SMALL]
- [ ] 1.2: Create reusable status badge include at _includes/status-badge.html that renders based on page.status frontmatter [SMALL]
- [ ] 1.3: Add status badges to all existing content pages in Physics/A-Level-Phys section by updating frontmatter [MEDIUM]
- [ ] 1.4: Add status badges to all existing content pages in Physics/IFY-Phys and Physics/IGCSE-Phys sections [SMALL]
- [ ] 1.5: Add status badges to all existing content pages in Mathematics/A-Level-Maths section [SMALL]
- [ ] 1.6: Create custom navigation styling in _sass/custom/navigation.scss to improve visual hierarchy with indentation and icons [MEDIUM]
- [ ] 1.7: Add breadcrumb navigation include at _includes/breadcrumbs.html and add to default layout [SMALL]

---
## Phase 2: Content Enhancement - Cross-Linking and Context [PENDING]
- [ ] 2.1: Create related topics include at _includes/related-topics.html that displays linked pages based on tags [MEDIUM]
- [ ] 2.2: Add related topics section to complete Physics A-Level content pages by updating frontmatter with tags [MEDIUM]
- [ ] 2.3: Create prerequisites callout include at _includes/prerequisites.html for displaying required prior knowledge [SMALL]
- [ ] 2.4: Add prerequisites callout to complex Physics topics that depend on prior knowledge [SMALL]
- [ ] 2.5: Create progress indicator include for index pages showing completion percentage based on child page statuses [MEDIUM]

---
## Phase 3: Homepage and Mobile Optimization [PENDING]
- [ ] 3.1: Redesign homepage with Quick Links section featuring direct access to popular topics and formulas [MEDIUM]
- [ ] 3.2: Add responsive CSS rules for MathJax equations to prevent overflow on mobile devices [SMALL]
- [ ] 3.3: Create custom CSS file _sass/custom/mobile-fixes.scss for mobile-specific navigation and layout improvements [SMALL]
- [ ] 3.4: Document content patterns in AGENTS.md or new docs/ folder for consistent frontmatter usage [SMALL]
- [ ] 3.5: Run Jekyll build verification to ensure all changes compile without errors [SMALL]
