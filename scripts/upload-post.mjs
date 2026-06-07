// Usage:
//   CONTENTFUL_SPACE_ID=xxx \
//   CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-xxx \
//   CONTENTFUL_ENVIRONMENT=master \
//   CONTENTFUL_CONTENT_TYPE=post \
//   CONTENTFUL_LOCALE=en-US \
//   node scripts/upload-post.mjs <path-to-markdown>
//
// Optional flag: --publish (publish after upsert). Without it, entry stays as draft.

import { readFileSync } from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown"
import pkg from "contentful-management"
const { createClient } = pkg

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN
const ENV_ID = process.env.CONTENTFUL_ENVIRONMENT ?? "master"
const CONTENT_TYPE_ID = process.env.CONTENTFUL_CONTENT_TYPE ?? "post"
const LOCALE = process.env.CONTENTFUL_LOCALE ?? "en-US"

if (!SPACE_ID || !MANAGEMENT_TOKEN) {
  console.error(
    "Missing env: set CONTENTFUL_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN",
  )
  process.exit(1)
}

const mdPath = process.argv[2]
const shouldPublish = process.argv.includes("--publish")

if (!mdPath) {
  console.error("Usage: node scripts/upload-post.mjs <path-to-markdown> [--publish]")
  process.exit(1)
}

const absPath = path.resolve(mdPath)
const raw = readFileSync(absPath, "utf8")
const { data: fm, content: body } = matter(raw)

for (const key of ["title", "slug", "date", "description"]) {
  if (!fm[key]) {
    console.error(`Missing required frontmatter field: ${key}`)
    process.exit(1)
  }
}

console.log(`Converting markdown → Rich Text…`)
const richText = await richTextFromMarkdown(body)

const fields = {
  title: { [LOCALE]: String(fm.title) },
  slug: { [LOCALE]: String(fm.slug) },
  date: { [LOCALE]: new Date(fm.date).toISOString() },
  description: { [LOCALE]: String(fm.description) },
  content: { [LOCALE]: richText },
}

if (Array.isArray(fm.category) && fm.category.length > 0) {
  fields.category = { [LOCALE]: fm.category.map(String) }
}

console.log(`Connecting to Contentful (space=${SPACE_ID}, env=${ENV_ID})…`)
const client = createClient({ accessToken: MANAGEMENT_TOKEN })
const space = await client.getSpace(SPACE_ID)
const env = await space.getEnvironment(ENV_ID)

console.log(`Looking up existing entry with slug="${fm.slug}"…`)
const existing = await env.getEntries({
  content_type: CONTENT_TYPE_ID,
  "fields.slug": fm.slug,
  limit: 1,
})

let entry
if (existing.items.length > 0) {
  entry = existing.items[0]
  console.log(`Found existing entry ${entry.sys.id} — updating fields`)
  entry.fields = { ...entry.fields, ...fields }
  entry = await entry.update()
} else {
  console.log("Creating new entry")
  entry = await env.createEntry(CONTENT_TYPE_ID, { fields })
}

console.log(`Saved entry ${entry.sys.id} as draft.`)

if (shouldPublish) {
  console.log("Publishing…")
  await entry.publish()
  console.log("Published.")
} else {
  console.log("Skip publish (no --publish flag). Open in Contentful UI to review.")
}
