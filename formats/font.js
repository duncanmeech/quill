import Parchment from 'parchment';

let config = {
  scope: Parchment.Scope.INLINE,
  whitelist: ['Arial', 'Helvetica', 'TimesNewRoman', 'Courier', 'Palatino', 'Garamond', 'Bookman', 'AvantGarde', 'Verdana', 'Georgia']
};

let FontClass = new Parchment.Attributor.Class('font', 'ql-font', config);
let FontStyle = new Parchment.Attributor.Style('font', 'font-family', config);

export { FontStyle, FontClass };
