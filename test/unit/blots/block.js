import Parchment from 'parchment';
import Scroll from '../../../blots/scroll';


describe('Block', function() {
  it('childless', function() {
    let block = Parchment.create('block');
    block.optimize();
    expect(block.domNode).toEqualHTML('<br>');
  });

  it('insert into empty', function() {
    let block = Parchment.create('block');
    block.insertAt(0, 'Test');
    expect(block.domNode).toEqualHTML('Test');
  });

  it('insert newlines', function() {
    let scroll = this.initialize(Scroll, '<p><br></p>');
    scroll.insertAt(0, '\n\n\n');
    expect(scroll.domNode).toEqualHTML('<p><br></p><p><br></p><p><br></p><p><br></p>');
  });

  it('insert multiline', function() {
    let scroll = this.initialize(Scroll, '<p>Hello World!</p>');
    scroll.insertAt(6, 'pardon\nthis\n\ninterruption\n');
    expect(scroll.domNode).toEqualHTML(`
      <p>Hello pardon</p>
      <p>this</p>
      <p><br></p>
      <p>interruption</p>
      <p>World!</p>
    `);
  });

  it('insert into formatted', function() {
    let scroll = this.initialize(Scroll, '<h1>Welcome</h1>');
    scroll.insertAt(3, 'l\n');
    expect(scroll.domNode.firstChild.outerHTML).toEqualHTML('<h1 id="well">Well</h1>');
    expect(scroll.domNode.childNodes[1].outerHTML).toEqualHTML('<h1 id="come">come</h1>');
  });

  it('delete line contents', function() {
    let scroll = this.initialize(Scroll, '<p>Hello</p><p>World!</p>');
    scroll.deleteAt(0, 5);
    expect(scroll.domNode).toEqualHTML('<p><br></p><p>World!</p>');
  });

  it('join lines', function() {
    let scroll = this.initialize(Scroll, '<h1>Hello</h1><h2>World!</h2>');
    scroll.deleteAt(5, 1);
    expect(scroll.domNode).toEqualHTML('<h1 id="helloworld">HelloWorld!</h1>');
  });

  it('join empty lines', function() {
    let scroll = this.initialize(Scroll, '<h1><br></h1><p><br></p>');
    scroll.deleteAt(1, 1);
    expect(scroll.domNode).toEqualHTML('<h1><br></h1>');
  });

  it('format empty', function() {
    let scroll = this.initialize(Scroll, '<p><br></p>');
    scroll.formatAt(0, 1, 'header', 1);
    expect(scroll.domNode).toEqualHTML('<h1><br></h1>');
  });

  it('format newline', function() {
    let scroll = this.initialize(Scroll, '<h1>Hello</h1>');
    scroll.formatAt(5, 1, 'header', 2);
    expect(scroll.domNode).toEqualHTML('<h2 id="hello">Hello</h2>');
  });
});
