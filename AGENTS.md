# AGENTS.md

This document provides guidance for agentic coding agents operating in this repository.

## Project Overview

This is a Jekyll static site using the [Just the Docs](https://just-the-docs.github.io/just-the-docs/) theme. It serves as a knowledge base for Physics and Mathematics content.

- **Theme**: just-the-docs v0.10.1
- **Jekyll version**: 4.4.1
- **Ruby version**: 3.3
- **Deployment**: GitHub Pages via GitHub Actions

## Build Commands

```bash
bundle install                  # Install dependencies
bundle exec jekyll build        # Build the site
bundle exec jekyll serve        # Serve locally with live reload
bundle exec jekyll build --verbose  # Build with verbose output
bundle exec jekyll build --trace    # Build with error trace
```

## Testing

There are no automated tests. Verify changes by:
1. Building locally: `bundle exec jekyll serve`
2. Reviewing output at `http://localhost:4000`
3. Checking the CI workflow passes on GitHub

## Project Structure

```
/
├── _config.yml          # Jekyll configuration
├── _includes/           # Reusable includes (head_custom.html for MathJax)
├── _layouts/            # Custom layouts (app.html)
├── docs/                # Main content directory
│   ├── Physics/         # Physics content (A-Level, IGCSE, IFY)
│   ├── Mathematics/     # Mathematics content
│   └── Testing-Apps/    # Interactive web apps
├── index.md             # Homepage
└── Gemfile              # Ruby dependencies
```

## Markdown Content Style

### Frontmatter

All content pages require YAML frontmatter:

```yaml
---
layout: default
title: Page Title
parent: Parent Section Name
nav_order: 1
---
```

Common fields:
- `layout`: Usually `default` (from just-the-docs theme)
- `title`: Page title displayed in navigation
- `parent`: Parent page title for navigation hierarchy
- `nav_order`: Order in sidebar navigation (optional)
- `nav_exclude`: Set to `true` to hide from navigation
- `search_exclude`: Set to `true` to exclude from search

### Table of Contents

```markdown
<details open markdown="block">
  <summary>Table of contents</summary>
  {: .text-delta }
- TOC
{:toc}
</details>
```

### Headings

- Use `# {{page.title}}` to reference the title from frontmatter
- Or use explicit heading: `# **1.1. Section Title**`
- One H1 per page, then H2, H3, etc.

### Learning Objectives Callouts

```markdown
{: .lo }
> 1. First learning objective
> 2. Second learning objective
```

### Math Rendering

MathJax 3 with physics package:
- Inline math: `$E = mc^2$`
- Display math: `$$E = mc^2$$`
- Physics package commands: `\pdv`, `\vu`, `\dv`, `\grad`

```markdown
$$ \grad f(x,y,z) = \pdv{f}{x} \vu{x} + \pdv{f}{y} \vu{y} + \pdv{f}{z} \vu{z} $$
```

### Custom Callouts

Available: `lo`/`objectives` (green), `highlight` (yellow), `important` (blue), `note` (purple), `warning` (red)

```markdown
{: .warning }
> Warning message here
```

## File Naming Conventions

- Use lowercase with hyphens: `section-name.md`
- Index files: `index.md`
- Number prefixes for ordering: `1-introduction.md`
- Avoid spaces in filenames

## Directory Organization

- `docs/Physics/A-Level-Phys/` - A Level content
- `docs/Physics/IGCSE-Phys/` - IGCSE content
- `docs/Physics/IFY-Phys/` - Foundation year content
- `docs/Mathematics/` - Mathematics content
- `docs/Testing-Apps/` - Interactive applications

## Configuration

### _config.yml Key Settings

- `title`: Site title
- `description`: Site description for SEO
- `url`: Production URL
- `permalink: pretty` - Clean URLs
- `aux_links`: External links in header
- `callouts`: Custom callout definitions

### Adding Plugins

1. Add to `Gemfile`: `gem "plugin-name"`
2. Add to `_config.yml`:
   ```yaml
   plugins:
     - plugin-name
   ```

## GitHub Actions Workflows

- `.github/workflows/pages.yml` - Deploys to GitHub Pages on push to main
- `.github/workflows/ci.yml` - Builds site to verify no errors
- `.github/dependabot.yml` - Automated dependency updates

## Common Tasks

### Adding a New Page

1. Create `.md` file in appropriate `docs/` subdirectory
2. Add required frontmatter (layout, title, parent)
3. Test locally with `bundle exec jekyll serve`

### Modifying MathJax Configuration

Edit `_includes/head_custom.html` to add/remove packages or change delimiters.

## Best Practices

1. Always test builds locally before pushing
2. Keep frontmatter minimal but complete
3. Use semantic heading hierarchy
4. Include TOC on longer pages
5. Verify MathJax renders correctly
6. Check navigation hierarchy with `parent` field

## Notes

- `_site/` and `.jekyll-cache/` are gitignored
- Theme is pinned to version 0.10.1 for stability
- MathJax loads: amscd, color, boldsymbol, mathtools, physics, cancel