# Context
Swarm: default

## Decisions
- Content status approach: Hybrid (add status to all existing pages first, then enhance)
- Cross-linking approach: Semi-automated with tag-based system and manual review
- Testing apps integration: Keep standalone for now, revisit if app count grows significantly
- Navigation enhancement: Custom SCSS for visual hierarchy, not theme replacement
- Progress tracking: Jekyll-generated progress bars based on frontmatter, not user accounts

## SME Cache
### Educational Content Design
- Navigation should be 3-tier max: Subject → Level → Topic
- Use visual badges for content status: 🟡 Draft, 🟠 In Progress, ✅ Complete
- Prerequisite chains help students understand learning path
- Mobile rendering of math is critical for accessibility
- Avoid navigation deeper than 3 levels to prevent user confusion

### UI/UX Patterns
- Breadcrumb navigation improves context awareness
- Related topics should appear at bottom of content
- "Last updated" timestamps build trust in content currency
- Quick links on homepage reduce friction for common tasks
- Consistent callout patterns enhance comprehension

## Patterns
- Frontmatter: Use `status`, `tags`, `prerequisites` fields for content metadata
- Navigation: Custom SCSS overrides in _sass/custom/ directory
- Includes: Reusable components in _includes/ with parameter passing
- Callouts: Leverage existing _config.yml callout definitions, add status-specific ones

## Relevant Files
- _config.yml - Theme configuration, callout definitions, aux_links
- _layouts/ - Custom layouts (app.html exists)
- _includes/ - Reusable components directory
- docs/Physics/ - Physics content organized by level
- docs/Mathematics/ - Mathematics content organized by module
- docs/Testing-Apps/ - Interactive applications
- index.md - Homepage
- _sass/custom/ - Custom styles (to be created)

## Current Content Inventory
Physics:
- A-Level: ~15 content pages across 8 modules (1-Physical-quantities-and-units, 2-kinematics, 3-dynamics, 4-forces-density-pressure, 7-waves, 8-superposition)
- IFY: LO1, LO2 complete; LO3-LO8 empty structure
- IGCSE: Index only

Mathematics:
- A-Level: PM1, PM2, PM3, Mechanics, Stats1 - all have index pages only

Testing-Apps:
- circuitjs/ - Complex circuit simulation (338 files)
- diff-grating-spectrometer/ - Physics simulation
- random-cat/ - Utility app

## Agent Activity

| Tool | Calls | Success | Failed | Avg Duration |
|------|-------|---------|--------|--------------|
| read | 121 | 121 | 0 | 7ms |
| glob | 9 | 9 | 0 | 14ms |
| bash | 4 | 4 | 0 | 43ms |
| task | 3 | 3 | 0 | 198302ms |
| write | 2 | 2 | 0 | 18ms |
| save_plan | 1 | 1 | 0 | 11ms |
