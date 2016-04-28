import EventEmitter from 'eventemitter3';
import logger from './logger';

let debug = logger('quill:events');


class Emitter extends EventEmitter {
  constructor() {
    super();
    this.on('error', debug.error);
  }

  emit() {
    debug.log.apply(debug, arguments);
    super.emit.apply(this, arguments);
  }
}

Emitter.events = {
  READY             : 'ready',
  SCROLL_OPTIMIZE   : 'scroll-optimize',
  SCROLL_UPDATE     : 'scroll-update',
  SELECTION_CHANGE  : 'selection-change',
  TEXT_CHANGE       : 'text-change'
};
Emitter.sources = {
  API    : 'api',
  SILENT : 'silent',
  USER   : 'user'
};


export default Emitter;
