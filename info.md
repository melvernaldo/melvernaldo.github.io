# Project Structure

The following directory structure represents the initial setup for your Jekyll project.

```
cie-alevel-physics-maths-resources/
├── _config.yml          # Jekyll configuration file
├── Gemfile              # Bundler dependency management
├── index.md             # Home page content
├── about.md             # About page content
├── physics/             # Physics section
│   ├── index.md         # Physics landing page
│   ├── _posts/         # Physics content posts (topics)
│   │   ├── 2024-01-15-topic-1-physical-quantities-and-units.md
│   │   └── 2024-01-16-topic-2-kinematics.md
│   └── _includes/      # Reusable components
│       └── physics_nav.html # Navigation for physics
├── mathematics/       # Mathematics section
│   ├── index.md         # Mathematics landing page
│   ├── _posts/         # Mathematics content posts (topics)
│   │   ├── 2024-02-01-paper-1-quadratics.md
│   │   └── 2024-02-02-paper-1-functions.md
│   └── _includes/      # Reusable components
│       └── maths_nav.html   # Navigation for maths
├── _layouts/           # HTML layout templates
│   ├── default.html     # Default page layout
│   └── post.html        # Layout for blog posts/topics
├── _site/              # The generated static site (not committed to Git)
└── assets/             # Assets such as CSS, images, etc.
    ├── css/
    │   └── style.scss   # Main SCSS stylesheet
    └── js/
        └── search.js    # (Placeholder) for search functionality
```

# Files

**1. `_config.yml`**

This file contains the Jekyll configuration.

```yaml
# Site settings
title: CIE A Level Physics & Maths Resources # Change this
email: your-email@example.com # Change this
description: >- # Change this
  A comprehensive resource for Cambridge International AS & A Level
  Physics (9702) and Mathematics (9709) students, designed for the
  2025, 2026, and 2027 examinations.
baseurl: "" # The subpath of your site, e.g., /blog
url: "[https://your-username.github.io](https://your-username.github.io)" # the base hostname & protocol for your site, e.g. [http://example.com](http://example.com)
github_username:  your-username # Change this

# Build settings
markdown: kramdown
theme: null # Remove the default theme.
# Outputting the same file name
permalink: /:title/
paginate: 5 # Optional: For paginating blog posts
paginate_path: "/page:num/" # Optional: For paginated pages

# Plugins
plugins:
  - jekyll-feed # For generating an RSS feed
  - jekyll-sitemap # For generating a sitemap.xml
  - jekyll-seo-tag # For better SEO
#  - jekyll-search # Uncomment to add search, requires additional setup

# Exclude from processing.
# The following items will not be processed, by default.
# Keep this list intact until you know what you're doing
exclude:
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
  - Gemfile
  - Gemfile.lock
  - node_modules/
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/

# Add any other configuration here
sass:
  sass_dir: _sass # The directory where your Sass files are located
```

**2. `Gemfile`**

This file manages Ruby dependencies (Gems).

```ruby
source "[https://rubygems.org](https://rubygems.org)"
# gem "jekyll", "~> 4.0" # You might need to specify a version
gem "jekyll"
gem "jekyll-feed" # RSS feed generation
gem "jekyll-sitemap" # Sitemap generation
gem "jekyll-seo-tag"
# gem "jekyll-search" # Uncomment to add search, requires additional setup
gem "jekyll-paginate" #If you want to use pagination

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  # gem "jekyll-search" # Uncomment to add search
  gem "jekyll-paginate" #If you want to use pagination
end
```

**3. `index.md` (Home Page)**

This is the main page of your website.

```markdown
---
title: Cambridge A Level Physics and Maths
layout: default
---

Welcome to the ultimate resource for Cambridge International AS & A Level Physics (9702) and Mathematics (9709). This site is dedicated to helping students excel in their studies for the examinations in 2025, 2026, and 2027 (Physics) and 2023, 2024, and 2025 (Mathematics).

## About This Site

This website provides comprehensive study materials, including:

* **Detailed notes** covering all syllabus topics.
* **Practice questions** and worked examples.
* **Past paper solutions** and exam strategies.
* **Resources** for practical skills and assessments.

## Physics (9702)

[Link to Physics Section](/physics/)

## Mathematics (9709)

[Link to Mathematics Section](/mathematics/)

## About Cambridge International AS & A Level

(Add content similar to the "Why choose Cambridge International?" section from the example website here.)
```

**4. `about.md` (About Page)**

This page provides information about the site.

```markdown
---
title: About
layout: default
---

## About This Website

This website was created to support students studying Cambridge International AS & A Level Physics (9702) and Mathematics (9709).  It aims to provide a centralized location for high-quality resources.

## Contact

(Add contact information here)
```

**5. `physics/index.md` (Physics Section Landing Page)**

This page is the entry point for the Physics section.

```markdown
---
title: Cambridge International AS & A Level Physics (9702)
layout: default
---

## Physics (9702)

This section covers the Cambridge International AS & A Level Physics syllabus for examinations in 2025, 2026, and 2027.

### Overview

* [Aims](/physics/aims)
* [Content Overview](/physics/content-overview)
* [Assessment Overview](/physics/assessment-overview)

### AS Level Subject Content

* [Topic 1: Physical quantities and units](/physics/topic-1-physical-quantities-and-units)
* [Topic 2: Kinematics](/physics/topic-2-kinematics)
    (Add other topics)

### A Level Subject Content
* [Topic 12: Motion in a circle](/physics/topic-12-motion-in-a-circle)
    (Add other topics)

### Practical Assessment
* [Paper 3: Advanced Practical Skills](/physics/paper-3)
* [Paper 5: Planning, Analysis and Evaluation](/physics/paper-5)

### Key Concepts

* [Models of physical systems](/physics/key-concepts-models)
* [Testing predictions against evidence](/physics/key-concepts-testing-predictions)
* [Mathematics as a language, and problem-solving tool](/physics/key-concepts-mathematics)
* [Matter, energy and waves](/physics/key-concepts-matter-energy-waves)
* [Forces and fields](/physics/key-concepts-forces-fields)

### Additional Information

* [Mathematical requirements](/physics/additional-mathematical-requirements)
* [Key quantities, symbols and units](/physics/additional-quantities-symbols-units)
* [Data and formulae](/physics/additional-data-formulae)
* [Circuit symbols](/physics/additional-circuit-symbols)
* [Command Words](/physics/command-words)
```

**6. `mathematics/index.md` (Mathematics Section Landing Page)**

```markdown
---
title: Cambridge International AS & A Level Mathematics (9709)
layout: default
---

## Mathematics (9709)

This section covers the Cambridge International AS & A Level Mathematics syllabus for examinations in June and November 2023, 2024 and 2025.

### Overview
* [Aims](/mathematics/aims)
* [Content Overview](/mathematics/content-overview)
* [Structure](/mathematics/structure)
* [Assessment Overview](/mathematics/assessment-overview)

### Subject Content

* [Pure Mathematics 1 (Paper 1)](/mathematics/paper-1)
    * [Quadratics](/mathematics/paper-1-quadratics)
    * [Functions](/mathematics/paper-1-functions)
    * [Coordinate geometry](/mathematics/paper-1-coordinate-geometry)
    * [Circular measure](/mathematics/paper-1-circular-measure)
    (Add other topics)

* [Pure Mathematics 2 (Paper 2)](/mathematics/paper-2)
    (Add topics)

* [Pure Mathematics 3 (Paper 3)](/mathematics/paper-3)
    (Add topics)

* [Mechanics (Paper 4)](/mathematics/paper-4)
    (Add topics)

* [Probability & Statistics 1 (Paper 5)](/mathematics/paper-5)
     (Add topics)

* [Probability & Statistics 2 (Paper 6)](/mathematics/paper-6)
    (Add topics)

### Key Concepts
* [Problem solving](/mathematics/key-concepts-problem-solving)
* [Communication](/mathematics/key-concepts-communication)
* [Mathematical modelling](/mathematics/key-concepts-mathematical-modelling)

### Additional Information
* [Mathematical Requirements](/mathematics/additional-mathematical-requirements)
* [List of formulae and statistical tables (MF19)](/mathematics/additional-formulae-tables)
* [Command Words](/mathematics/command-words)
```

**7. `_layouts/default.html` (Default Layout)**

This is the base HTML layout for your pages.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% if page.title %}{{ page.title }} | {{ site.title }}{% else %}{{ site.title }}{% endif %}</title>
    <meta name="description" content="{% if page.description %}{{ page.description }}{% else %}{{ site.description }}{% endif %}">
    <link rel="canonical" href="{{ page.url | absolute_url }}">
    <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
    <link rel="alternate" type="application/rss+xml" title="{{ site.title }} | Feed" href="{{ '/feed.xml' | relative_url }}">
    <script src="{{ '/assets/js/search.js' | relative_url }}"></script> {% include head_custom.html %}
</head>
<body>
    <header>
        <div class="container">
            <a class="site-title" href="{{ '/' | relative_url }}">{{ site.title }}</a>
            <nav>
                <a href="{{ '/about/' | relative_url }}">About</a>
                <a href="{{ '/physics/' | relative_url }}">Physics</a>
                <a href="{{ '/mathematics/' | relative_url }}">Mathematics</a>
                </nav>
             <div id="search-container">
               <input type="text" id="search-input" placeholder="Search...">
               <ul id="search-results"></ul>
             </div>
        </div>
    </header>

    <div class="container">
        <main class="content">
            {{ content }}
        </main>
    </div>

    <footer>
        <div class="container">
            <p>&copy; {{ site.time | date: "%Y" }} {{ site.title }}. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
```

**8. `_layouts/post.html` (Post Layout)**

This layout is for individual content pages (e.g., topic pages).

```html
---
layout: default
---

<article>
  <h2>{{ page.title }}</h2>
  <p class="date">Published: {{ page.date | date: "%B %d, %Y" }}</p>
  {{ content }}
</article>
```

**9. `assets/css/style.scss` (Main Stylesheet)**

This is where you'll define your site's styles.  This example provides a basic structure; you'll need to expand it to match the design of `jojozhuang.github.io`.

```scss
---
---
@import "minima";  /* Import the Minima theme (or a reset) to get started */

.site-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: block;
}

nav {
  margin-bottom: 1rem;
  a {
    margin-right: 1rem;
    color: #0078d7; /* Example link color */
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
}

.content {
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  /* Add more styles as needed, following the structure of the example site */
}
#search-container {
  float: right;
  margin-top: -2.5rem; /* Adjust as necessary */
}

#search-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

#search-results {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
  width: 200px;
  position: absolute;
  background-color: white;
  z-index: 1000;
}

#search-results li {
  padding: 0.5rem;
  cursor: pointer;
}

#search-results li:hover {
  background-color: #f0f0f0;
}
```

**10. `assets/js/search.js` (Placeholder for Search)**

This is a placeholder for your search functionality.  You'll need to implement this using a Jekyll plugin or a client-side library.

```javascript
//  Placeholder for search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase();
            searchResults.innerHTML = ''; // Clear previous results

            if (query.length > 2) { // Only search if query is long enough
                // In a real implementation, you would fetch an index of your content
                // Here, we're using a placeholder array
                const dummyData = [
                    { title: "Physical quantities and units", url: "/physics/topic-1-physical-quantities-and-units" },
                    { title: "Kinematics", url: "/physics/topic-2-kinematics" },
                    { title: "Quadratics", url: "/mathematics/paper-1-quadratics"},
                    { title: "Functions", url: "/mathematics/paper-1-functions"}
                ];

                const results = dummyData.filter(item => item.title.toLowerCase().includes(query));

                results.forEach(item => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = item.url;
                    a.textContent = item.title;
                    li.appendChild(a);
                    searchResults.appendChild(li);
                });
            }
        });
    }
});
```

**11. `physics/_includes/physics_nav.html` (Physics Navigation)**

```html
<div class="sidebar">
  <h3>Physics</h3>
  <ul>
    <li><a href="/physics/">Overview</a></li>
    <li><a href="/physics/topic-1-physical-quantities-and-units">Topic 1: Physical quantities and units</a></li>
    <li><a href="/physics/topic-2-kinematics">Topic 2: Kinematics</a></li>
    </ul>
</div>
```

**12. `mathematics/_includes/maths_nav.html` (Mathematics Navigation)**

```html
<div class="sidebar">
  <h3>Mathematics</h3>
  <ul>
    <li><a href="/mathematics/">Overview</a></li>
    <li><a href="/mathematics/paper-1">Pure Mathematics 1</a></li>
    <li><a href="/mathematics/paper-1-quadratics">Quadratics</a></li>
     <li><a href="/mathematics/paper-1-functions">Functions</a></li>
    </ul>
</div>
```

**13. Example Content Files**

Here are examples of markdown files for topic content:

`physics/_posts/2024-01-15-topic-1-physical-quantities-and-units.md`:

```markdown
---
title: Topic 1: Physical quantities and units
date: 2024-01-15
layout: post
---

## Physical Quantities and Units

### Base Quantities
* Length (m)
* Mass (kg)
* Time (s)
* Current (A)
* Temperature (K)
* Amount of substance (mol)

### Derived Quantities
(Add content)
```mathematics/_posts/2024-02-01-paper-1-quadratics.md`

```markdown
---
title: Quadratics
date: 2024-02-01
layout: post
---
## Quadratics

### Solving Quadratic Equations
* By factorisation
* By completing the square
* Using the quadratic formula
    $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### The Discriminant
(Add Content)
