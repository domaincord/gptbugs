---
layout: article.liquid
title: Contact
description: Report a prompt injection, send a correction, or get in touch with GPT Bugs.
lede: Found an injection? Use the report form. Everything else has its own address.
permalink: /contact/
toc: false
---

{% include "contact-channels.liquid" %}

## What to include in a report

The [report form]({{ site.reportForm }}) asks for these, so have them ready:

1. **Product and surface.** The app, the exact feature (chat widget, email assistant, browser agent) and the URL if public.
2. **Where the payload enters.** Direct (typed by the user) or indirect (web page, email, document, tool result).
3. **What it achieves.** Data leaked, action taken, output changed. Show the effect, not just that the model said something odd.
4. **Reproduction steps** and the date you last confirmed it works.
5. **Disclosure status.** Whether you've told the vendor, when, and any reply.
6. **Credit.** The name or handle to list you under, or *Anonymous*.

Redact any real user data. Use your own accounts and test content.

## Before you publish

Reports sent through the form stay private until they're listed. If an injection is unpatched and can expose user data or take actions, **don't post it publicly yourself** until the vendor has fixed it. Tell the vendor too. Once it's fixed, it can go on the public list.
