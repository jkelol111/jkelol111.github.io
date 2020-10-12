'use strict'

const windowLayouts = {
  terminal: {
    id: 'terminal-window',
    title: 'Terminal',
    inner: '<div id="terminal"></div>'
  },
  about: {
    id: 'about-window',
    title: 'About',
    inner: `<ul><li>Hi, welcome to jkelol111's website!</li></ul>`
  }
}

var wm = new ClassicWM()

wm.createWindow(windowLayouts.terminal)
wm.createWindow(windowLayouts.about)

$('#terminal').terminal(function(command) {
  if (command !== '') {
      try {
          var result = window.eval(command);
          if (result !== undefined) {
              this.echo(new String(result));
          }
      } catch(e) {
          this.error(new String(e));
      }
  } else {
     this.echo('');
  }
}, {
  greetings: 'Ask jkelol111 anything! (as long as it is programmed to answer)',
  name: 'ask_jkelol111',
  height: 300,
  prompt: 'ask_jkelol111> '
});

