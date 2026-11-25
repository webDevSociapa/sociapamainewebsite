# Heading Structure & H1 Hierarchy Guidelines for Sociapa

## Core Rule: 1st Heading Must Be `<h1>` & Define Page Theme

Every page in this project (Service pages, Blog pages, Legal pages, Landing pages, Utility pages) **MUST** strictly follow this heading hierarchy:

### 1. Mandatory `<h1>` Requirements:
1. **First Heading on the Page:** The very first heading element encountered in the DOM must be a semantic `<h1>` tag.
2. **Describe Page Theme Clearly:** The text inside `<h1>` must explicitly and clearly describe the page's core theme, primary offering, and targeted focus keyword (e.g., *"Best Web Development Agency in India"*, *"Terms of Use"*, *"Privacy Policy"*, or the exact title of the blog post).
3. **Strictly One `<h1>` Per Page:** Never use more than one `<h1>` per page. Multiple `<h1>` tags damage SEO ranking and violate accessibility standards.
4. **No Heading Skips:**
   - Page Title / Hero Heading: `<h1>`
   - Major Section Titles: `<h2>`
   - Sub-sections / Feature Cards / FAQs: `<h3>`
   - Small nested headings: `<h4>`
   - Never place an `<h2>` or `<h3>` before the main `<h1>` in the document flow.
5. **No Stylistic Replacements:** Do not use `<div>` or `<p>` with bold styling as the primary page title; always use `<h1 className="...">`.

### 2. Implementation Checklist for New Pages:
- [ ] Is there an `<h1>` element?
- [ ] Is the `<h1>` the first heading in the layout?
- [ ] Does the `<h1>` clearly convey what this page is about?
- [ ] Are all subsequent sections using `<h2>`, `<h3>` etc. in sequential order?
