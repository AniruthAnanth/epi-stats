# Coding Tutorial Site

Next.js-based tutorial site for teaching R and Python through statistical thinking.

## Architecture

- **Content**: MDX files in `/content/[module-slug]/index.mdx`
- **Components**: Custom tutorial components in `/components/`
  - `CodeTabs` — Toggle between R/Python code
  - `Callout` — Tip/warning/intuition boxes
  - `Table1` — Formatted data tables
  - `ChapterNav` — Prev/next navigation
  - `Sidebar` — Persistent module navigation
- **Typography**: Redaction font for headers (loaded from `/public/Redaction_2_001/`)
- **Syntax Highlighting**: Built-in MDX code blocks

## Development

```bash
npm run dev    # Start dev server (usually http://localhost:3000)
npm run build  # Production build
npm start      # Run production server
```

## Adding New Chapters

1. Create directory: `content/[XX-slug]/`
2. Add `index.mdx` with frontmatter:
   ```yaml
   ---
   title: Chapter Title
   description: Short description
   module: 0
   order: 0
   ---
   ```
3. Site will auto-generate routes and navigation

## Custom Components in MDX

```mdx
<CodeTabs>
<pre data-lang="r">
\```r
# R code here
\```
</pre>
<pre data-lang="python">
\```python
# Python code here
\```
</pre>
</CodeTabs>

<Callout type="tip|warning|connects|intuition">
Content here
</Callout>
```
