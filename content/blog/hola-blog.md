---
title: "This is how a note looks on the Crecimiento blog"
date: "2026-07-08"
excerpt: "A sample post to test the blog system. Delete this file when the real notes arrive."
tag: "Sample"
cover: "/images/front-cowork-1.jpg"
draft: true
---

This is a sample note so you can see the whole system working. It is marked as **draft**, so it only shows up while developing (`npm run dev`) and never in production.

## How to add a note

Create a `.md` file inside `content/blog/`. The file name becomes the URL: `mi-nota.md` → `/blog/mi-nota`. At the top of the file, between the `---` marks, goes the metadata:

- `title`: the headline of the note.
- `date`: in `YYYY-MM-DD` format. The blog sorts by this.
- `excerpt`: one or two lines shown on the card of the index.
- `tag`: optional, a short label (e.g. "Programs", "Regulation").
- `cover`: optional, path to an image in `public/images/`.
- `draft: true`: keeps the note out of production until you remove it.

Everything below the second `---` is the body, written in Markdown.

## What Markdown supports

Headings, **bold**, *italics*, [links](https://crecimiento.build), lists and quotes:

> The conditions took decades to build. The convergence is happening now.

## Images

Drop the image in `public/images/blog/` and reference it like this:

![The Crecimiento community at the Aleph Hub](/images/front-cowork-1.jpg)

## Buttons

A button that links to a form (or anywhere) is one line:

[button:Apply to the program](https://crecimiento.build)

## Videos

Paste a YouTube link inside the video directive and it embeds itself:

[video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

That is all it takes. Write the file, save it, publish with Vercel, and the note is live.
