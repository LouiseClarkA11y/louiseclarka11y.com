# My Development Workflow

This documents how I work on louiseclarka11y.com. I follow these practices to build good habits and demonstrate professional development.

## Branch Management

I always work in feature branches, even though I'm the only contributor:

1. **Create descriptive branches**: feature/, fix/, docs/
2. **One branch per purpose** 
3. **Delete after merging** - Keep it clean!

After PR merges:
git checkout main
git pull origin main
git branch -d feature/branch-name
git push origin --delete feature/branch-name

## Why I Delete Branches

- Practices good hygiene for open source
- Keeps my GitHub branch list manageable
- Clear signal that work is complete
- Makes it easier to find active work

## Commit Standards

Using conventional commits:
- feat: New features
- fix: Bug fixes  
- docs: Documentation only
- [AI] prefix when AI substantially helped

## PR Process (Yes, Even Solo!)

1. Create PR with my template
2. Review my own changes
3. Check accessibility impact
4. Verify sustainability metrics
5. Merge and delete branch

## AI Collaboration

Every AI interaction is logged in /ai-collaboration/assistance-log.md. I use AI for:
- Information synthesis
- Documentation formatting
- Learning new concepts
- Never for design decisions or core logic

## Decision Documentation

Significant decisions go in /docs/adrs/ because future me will forget why I did things!

---
This workflow evolves as I learn. Last updated: 2025-08-29