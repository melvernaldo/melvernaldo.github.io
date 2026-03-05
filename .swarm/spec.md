# Content Organization and UI/UX Enhancement Spec

**Version:** 1.0  
**Date:** 2026-03-04  
**Status:** Draft

---

## 1. Feature Description

This spec addresses content organization improvements and UI/UX enhancements for a Jekyll-based knowledge base covering Physics and Mathematics at IGCSE, A-Level, and Foundation Year levels. The goal is to improve student learning experience through better navigation, visual indicators, and educational features.

**User Value:** Students need clear navigation, content status awareness, and tools for tracking progress to effectively use this educational resource. Current site lacks visual organization, content completeness indicators, and learning support features.

---

## 2. User Scenarios

### Scenario 1: First-Time Student Navigation
**As a** student preparing for A-Level Physics exams,  
**I want to** quickly find relevant topics and understand what's available,  
**So that** I can plan my study schedule without getting lost.

**Acceptance Criteria:**
- Given a student lands on the homepage
- When they navigate to Physics → A-Level
- Then they see a clear topic list with completion status indicators
- And they can identify which sections are complete vs work-in-progress

### Scenario 2: Revision Mode
**As a** student reviewing for an exam,  
**I want to** see related topics and prerequisite concepts at a glance,  
**So that** I can quickly refresh my understanding without searching.

**Acceptance Criteria:**
- Given a student is viewing a topic page
- When they reach the bottom of the content
- Then they see a "Related Topics" section with linked concepts
- And a "Prerequisites" section showing required prior knowledge

### Scenario 3: Content Completeness Awareness
**As a** self-learner,  
**I want to** know which sections are complete and which are still being developed,  
**So that** I can set realistic expectations for my learning path.

**Acceptance Criteria:**
- Given a student views any content page
- When they look at the page metadata or navigation
- Then they see a clear status badge (e.g., "Complete", "In Progress", "Draft")
- And they see when the content was last updated

### Scenario 4: Cross-Subject Learning
**As a** student studying both Physics and Mathematics,  
**I want to** easily navigate between related concepts (e.g., calculus in Physics),  
**So that** I can strengthen understanding across subjects.

**Acceptance Criteria:**
- Given a student is viewing a Physics topic using calculus
- When they encounter a mathematical concept they need to review
- Then they can follow a link to the relevant Mathematics section

### Scenario 5: Quick Concept Lookup
**As a** student doing practice problems,  
**I want to** quickly find a formula or concept without reading full articles,  
**So that** I can verify my understanding during problem-solving.

**Acceptance Criteria:**
- Given a student uses the search feature
- When they search for "diffraction grating formula"
- Then they get relevant results with preview snippets
- And they can jump directly to the relevant section

---

## 3. Functional Requirements

### FR-001: Content Status Indicators (MUST)
All content pages MUST display a status indicator showing completeness level: `draft`, `in-progress`, `complete`, or `review`. Status MUST be visible in both the page header and sidebar navigation.

### FR-002: Visual Navigation Hierarchy (MUST)
The navigation MUST clearly distinguish between Subject (Physics/Mathematics), Level (IGCSE/A-Level/IFY), and Topic levels using consistent visual styling (indentation, icons, color coding).

### FR-003: Last Updated Timestamp (MUST)
All pages MUST display a "Last Updated" timestamp in the footer when `last_modified_date` is set in frontmatter, using the format specified in `_config.yml`.

### FR-004: Related Topics Section (SHOULD)
Content pages SHOULD include an automatic or manually curated "Related Topics" section at the bottom, linking to conceptually connected pages within 2 hops in the content graph.

### FR-005: Prerequisites Indicators (SHOULD)
Complex topics SHOULD display prerequisite knowledge requirements, either as a callout at the top or as linked concepts in a "Before You Start" section.

### FR-006: Progress Tracking Support (SHOULD)
The site SHOULD support progress tracking through metadata that could be consumed by external tools or future features, marking topics as "visited" or "completed" in user profiles.

### FR-007: Enhanced Search Discovery (SHOULD)
The search functionality SHOULD surface content status in results and allow filtering by subject, level, and content completeness.

### FR-008: Mobile-Friendly Math Rendering (MUST)
Mathematical content MUST render correctly on mobile devices, with equations scaling appropriately and not causing horizontal overflow.

### FR-009: Consistent Callout Usage (SHOULD)
Educational callouts (Learning Objectives, Important, Warning, Note) SHOULD follow consistent patterns and be used appropriately to enhance comprehension.

### FR-010: Topic Completion Progress Bars (COULD)
Index pages for each subject/level COULD display visual progress indicators showing what percentage of content is complete.

### FR-011: Breadcrumb Navigation (SHOULD)
Pages SHOULD display breadcrumb navigation showing the path: Home → Subject → Level → Topic, enabling quick upward navigation.

### FR-012: Quick Links Section (SHOULD)
The homepage SHOULD include a "Quick Links" section with direct access to popular or commonly-referenced topics (e.g., "Common Formulas", "Exam Tips").

---

## 4. Success Criteria

| ID | Criterion | Measurement |
|----|-----------|-------------|
| SC-001 | Navigation Clarity | New users can find any A-Level Physics topic within 3 clicks from homepage |
| SC-002 | Status Visibility | 100% of content pages display their completeness status visibly |
| SC-003 | Mobile Math Rendering | Mathematical equations display without horizontal scroll on 375px wide screens |
| SC-004 | Search Effectiveness | Search returns relevant results for 90% of curriculum topic queries |
| SC-005 | Cross-Linking Coverage | At least 50% of topics have related content links |
| SC-006 | Consistent Styling | All pages follow established frontmatter and callout patterns |
| SC-007 | Accessibility | Navigation is fully keyboard accessible and works with screen readers |

---

## 5. Key Entities

### Content Entity
- **Topic:** Individual educational page (e.g., "Kinematics")
- **Level:** Educational level (IGCSE, A-Level, IFY)
- **Subject:** Physics or Mathematics
- **Module:** Grouping within a level (e.g., "Superposition" under A-Level Physics)

### Metadata Entity
- **Status:** Content completeness state
- **LastModified:** Date of last significant update
- **Tags:** Conceptual tags for cross-linking
- **Prerequisites:** Required prior knowledge

### Navigation Entity
- **Hierarchy:** Parent-child relationships
- **Ordering:** nav_order values for sidebar sequencing
- **Grouping:** Subject/Level containers

---

## 6. Edge Cases and Known Failure Modes

### Edge Cases

**EC-001: Incomplete Content Hierarchy**
Some subject areas (e.g., IFY-Phys LO3-LO8) have empty directories with only index files. Navigation must handle gracefully.

**EC-002: Duplicate or Similar Titles**
Similar topics exist across levels (e.g., "Waves" in IGCSE and A-Level). Navigation must disambiguate.

**EC-003: Large Mathematical Expressions**
Complex equations may overflow on mobile. Need responsive MathJax configuration.

**EC-004: External App Integration**
Testing-Apps (circuitjs, random-cat, etc.) are embedded HTML apps that need consistent navigation wrapper.

### Failure Modes

**FM-001: Status Indicator Inconsistency**
If status field is missing from frontmatter, pages should display a default "Unknown" state rather than breaking.

**FM-002: Navigation Depth Overload**
Deeply nested topics (4+ levels) may cause navigation overflow. Must enforce maximum nesting depth.

**FM-003: Broken Cross-Links**
Manual related-topic links may become stale. Need validation or automated generation.

**FM-004: Mobile Navigation Collapse**
Complex navigation may not collapse properly on mobile. Must test on actual devices.

---

## 7. Clarification Needed

[NEEDS CLARIFICATION 1] **Content Status Priority:** Should we prioritize adding status indicators to all existing content first, or focus on enhancing complete sections with related topics and prerequisites?

Options:
1. **Status First:** Add status to all existing pages, then enhance complete pages
2. **Complete Content Enhancement:** Focus on fully developing complete sections first
3. **Hybrid:** Add status to all pages as lightweight change, then enhance progressively

**Recommended:** Option 3 (Hybrid) - status is low-effort and provides immediate value, then enhance by priority

---

[NEEDS CLARIFICATION 2] **Cross-Linking Approach:** Should related topics be:

Options:
1. **Manual:** Authors manually curate related content in frontmatter
2. **Semi-Automated:** Tag-based system with manual review
3. **Fully Automated:** Generated from content analysis (more complex)

**Recommended:** Option 2 (Semi-Automated) - balance of maintainability and relevance

---

[NEEDS CLARIFICATION 3] **Testing Apps Integration:** Should embedded interactive apps (circuitjs, etc.) have enhanced navigation within them, or should they remain standalone with consistent external navigation only?

Options:
1. **Standalone:** Keep apps as-is, ensure consistent navigation wrapper only
2. **Integrated:** Add internal navigation to jump between app features
3. **Hybrid:** Standalone for now, revisit when app count grows

**Recommended:** Option 3 (Hybrid) - current app count is manageable, revisit if expanded

---

## 8. Out of Scope

The following items are explicitly OUT OF SCOPE for this enhancement:

- User authentication or personalized accounts
- Backend database or dynamic content storage
- Real-time collaborative features
- Content authoring tools or WYSIWYG editors
- Automated content generation or AI tutors
- Native mobile app development
- Print/PDF export functionality
- Video content hosting (external embeds only)
- Analytics or tracking beyond basic page views

---

## 9. Dependencies and Constraints

### Technical Constraints
- Must work with Jekyll 4.4.1 and Just the Docs v0.10.1
- Must be compatible with GitHub Pages deployment
- Must maintain MathJax 3 integration
- Must support Ruby 3.3 runtime

### Content Constraints
- Existing content must not break (backward compatibility)
- New frontmatter fields must be optional with sensible defaults
- Changes must not require content rewrites (only additions)

### Deployment Constraints
- Build time must remain under 2 minutes
- No external API dependencies for core features
- All assets must be statically hosted
