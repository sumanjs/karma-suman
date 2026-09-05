// ores-lint house config for karma-suman.
//
// MIGRATION NOTE: the legacy `.eslintrc` was a single line: `extends: standard`.
// ESLint 9+ ignores .eslintrc, so it was doing nothing.
//
// This one is NOT a clean port, and the conflict is worth stating plainly:
// eslint-config-standard mandates NO semicolons. The house style mandates
// semicolons. These are directly contradictory and cannot both be honoured.
//
// The house style wins - it is the explicit org-wide preference, and it is what
// the other 900+ repos in the fleet enforce. The practical consequence is that
// `semi` will warn across this package's existing source until it is converted.
// Nothing breaks: the baseline is warn-only.
//
// If this package should instead keep the standard style, add to
// .ores-lint/local.sh:  ORES_LINT_SKIP_JS=1
// ...and say why, rather than silently diverging.
import oresConfig from './.ores-lint/eslint/base.mjs';

export default await oresConfig({
  rules: {
    // Retained from `standard` where it does not conflict with house style.
    'no-var': 'warn',
    'prefer-const': ['warn', { destructuring: 'all' }],
  },
});
