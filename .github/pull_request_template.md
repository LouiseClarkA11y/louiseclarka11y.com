## Summary
<!-- What does this PR do? -->

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Accessibility improvement
- [ ] Performance/sustainability improvement

## Changes Made
<!-- List key changes -->
- 
- 

## Testing

### Automated Accessibility Tests
<!-- Take an automation-first approach -->
- [ ] `npm run test:a11y` passes (or equivalent command)
- [ ] No axe-core violations in CI
- [ ] Linting includes a11y rules (eslint-plugin-jsx-a11y)

### Manual Accessibility Verification
- [ ] Keyboard navigation works
- [ ] Tested with screen reader (NVDA/VoiceOver)
- [ ] Color contrast checked (WCAG AA)
- [ ] Focus indicators visible

### Web Sustainability Guidelines (WSG)
<!-- Following W3C WSG: https://w3c.github.io/sustainableweb-wsg/ -->
- [ ] **UX Design**: Avoided unnecessary features/animations
- [ ] **Content**: Kept content concise and purposeful
- [ ] **Development**: 
  - [ ] Build size checked (`npm run build && du -sh dist/`)
  - [ ] No unnecessary dependencies added
  - [ ] Code is reusable/maintainable
- [ ] **Hosting**: Using green hosting (note: Netlify carbon neutral)
- [ ] **Performance**: Tested on throttled connection

### General
- [ ] Site builds without errors
- [ ] Tested in at least 2 browsers
- [ ] Mobile responsive

## Automation Gaps
<!-- Document what required manual verification? -->
- [ ] Noted any tests that can't be automated

## Notes
<!-- Any context, trade-offs, or decisions to document -->

## AI Collaboration
- [ ] Any AI assistance is documented in commit messages

---
<!-- 
Template aligning with:
- W3C Web Sustainability Guidelines (WSG)
- WCAG 2.2 for accessibility
Inspired by: 
- Melanie Sumner https://melanie.codes/projects
- Marcy Sutton https://marcysutton.com
- Eric Bailey https://ericwbailey.design
- Rachele DiTullio https://racheleditullio.com
-->