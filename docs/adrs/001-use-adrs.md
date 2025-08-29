# ADR-001: Use Architecture Decision Records

## Status
Accepted

## Date
2024-01-10

## Context
I'm building this portfolio in public to demonstrate professional development practices. I need a way to document significant decisions about architecture, tools, and processes so that:
- Future me understands why decisions were made
- Others can learn from my decision-making process  
- I can demonstrate thoughtful, professional development practices
- I can be transparent about when and how AI tools assisted in decisions

## Decision
I will use Architecture Decision Records (ADRs) to document significant project decisions. ADRs will live in `/docs/adrs/` at the root level, and they will have all project decisions.

Each ADR will include an "AI Collaboration" section when applicable to maintain transparency about tool usage in decision-making.

## Consequences
**Positive:**
- Clear record of all architectural decisions
- Transparency about AI tool involvement
- Learning resource for others
- Professional documentation practice

**Negative:**
- Adds overhead to decision-making
- Need to determine significance threshold

## AI Collaboration
This decision was made independently based on previous project work, and referencing good examples from IRS Direct File. AI helped with:
- Formatting the ADR template
- Suggesting the directory structure
- Providing examples of consequences to consider