---
layout: article.liquid
title: About GPT Bugs
description: Who runs GPT Bugs, what gets listed, and how reports are rated.
lede: A public record of prompt injections in shipping AI products, kept so the people building them can learn from each other's failures.
permalink: /about/
next:
  label: Report an injection
  url: /contact/
---

## Why this exists

Prompt injection is the defining security problem of LLM apps, and most teams meet it for the first time in production. Public, specific examples change that. A developer who has seen a real email assistant leak a mailbox through an image tag designs the next one differently.

GPT Bugs collects those examples in one place, next to plain explanations of [how injection works](/prompt-injection/) and [how to defend against it](/protect/).

GPT Bugs is independent. It is not affiliated with OpenAI or with any vendor whose product appears on the list.

## What gets listed

A report goes on the [injection list](/injections/) when it is:

- **In a real, shipping product.** Not a lab demo or a deliberately vulnerable test app.
- **Reproducible**, with steps that show the effect.
- **Safe to publish.** Either patched, or the impact is low enough that publishing doesn't put users at risk. Anything else is held privately until there's a fix.

Reports describe the technique and the impact. They don't include working payloads against unpatched systems, and they never include real user data.

## How reports are rated

| Severity | Meaning |
|---|---|
| Critical | Leaks other users' data or takes actions on their behalf, and needs nothing from the victim beyond normal use. |
| High | Leaks data or misuses tools when the victim does something ordinary, like summarising a page or opening an email. |
| Medium | Steers what the model says: attacker-chosen links, false information, or exposure of the system prompt. No user data leaves. |
| Low | Affects only the attacker's own session, or has no meaningful impact beyond off-policy output. |

**Patched** means the vendor has fixed or mitigated the issue and a retest no longer reproduces it. Ratings and status are updated when new information comes in.

## Who runs it

GPT Bugs is maintained by {{ site.maintainer.name }}, {{ site.maintainer.role }}, and published by [{{ site.owner.name }} {{ site.owner.suffix }}]({{ site.owner.url }}).

Corrections are welcome. If a report about your product is wrong or out of date, email [{{ site.email.report }}](mailto:{{ site.email.report }}).
