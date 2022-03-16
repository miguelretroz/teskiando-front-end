// ---References---
// stack overflow -> https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element?page=1&tab=votes#tab-top
// stack overflow -> https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991
// Hex to Filter convert -> https://codepen.io/sosuke/pen/Pjoqqp

export default {
  toDo: `invert(90%) sepia(57%)
    saturate(195%) hue-rotate(335deg) brightness(106%) contrast(103%);`,
  inProgress: `invert(99%) sepia(81%)
    saturate(4827%) hue-rotate(175deg) brightness(104%) contrast(107%);`,
  finished: `invert(98%) sepia(7%)
    saturate(1093%) hue-rotate(52deg) brightness(99%) contrast(104%);`,
};
