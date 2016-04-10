import Parchment from 'parchment';

let SizeClass = new Parchment.Attributor.Class('size', 'ql-size', {
  scope: Parchment.Scope.INLINE,
  whitelist: [
    'small', 'large', 'huge',
    'viiiPX',     // 8px the popvex font sizes using roman names since quill does like numbers in names
    'ixPX',       // 9px
    'xPX',        // 10px
    'xiPX',       // 11px
    'xiiPX',      // 12px
    'xivPX',      // 14px
    'xviPX',      // 16px
    'xxPX',       // 20px
    'xxivPX',     // 24px
    'xxviiiPX',   // 28px
    'xxxiiPX',    // 32px
    'xviiilPX',   // 48px
    'lxxiiPX',    // 72px
    'xvicPX',     // 96px
  ]
});
let SizeStyle = new Parchment.Attributor.Style('size', 'font-size', {
  scope: Parchment.Scope.INLINE,
  whitelist: ['10px', '18px', '32px', '10px', '20px', '40px']
});

export { SizeClass, SizeStyle };
