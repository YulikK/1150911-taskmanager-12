export const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];
export const SortType = {
  DEFAULT: `default`,
  DATE_DOWN: `date-down`,
  DATE_UP: `date-up`
};
export const MAX_DAYS_GAP = 7;
export const BLANK_TASK = {
  color: COLORS[0],
  description: ``,
  dueDate: null,
  repeating: {
    mo: false,
    tu: false,
    we: false,
    th: false,
    fr: false,
    sa: false,
    su: false
  },
  isArchive: false,
  isFavorite: false
};
