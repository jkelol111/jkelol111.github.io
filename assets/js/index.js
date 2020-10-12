'use strict'

var wm = new ClassicWM()

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  wm.createWindow({
    id: 'notsupported-window',
    title: 'Unsupported Device',
    inner: `
      <div class="icon">
        <img src="assets/images/bomb.png">
      </div>
      <ul>
        <li>Mobile devices are not supported by this website. because I couldn't get it to work.</li>
        <br>
        <li>Consider using a desktop device. don't torture yourself :')</li>
      </ul>
      <button id="close-button" class="command_button">Close</button>`
  })

  $('#close-button').click(function () {
    window.close()
  })
} else {
  const windowLayouts = {
    terminal: {
      id: 'terminal-window',
      title: 'Terminal',
      inner: '<div id="terminal"></div>'
    },
    about: {
      id: 'about-window',
      title: 'About',
      inner: `
        <div class="icon">
          <img src="assets/images/jkelol111-pfp-32.jpg">
        </div>
        <div class="about">
          Nam Thanh Nguyen (jkelol111)
          <br>
          a.k.a
          <br>
          Some mood swinging teenager?
          <br><br>
          Take a trip down nostalgia lane with this terrible virtual Mac that is also
          somehow my 'homepage'. 
          <br><br>
          (windows can be dragged around ;))
        </div>
        <hr>
        <button id="github-button" class="command_button">GitHub</button>
        <button id="twitter-button" class="command_button">Tweets</button>
        <button id="instagram-button" class="command_button">Photos</button>
        <hr>
        <button id="paypal-button" class="command_button">PayPal</button>
        <button id="buymeacoffee-button" class="command_button">Coffee</button>
        <button id="credits-button" class="command_button">Credits</button>`
    }
  }

  wm.createWindow(windowLayouts.about)
  $('#github-button').click(function () {
    window.open('https://github.com/jkelol111', '_blank')
  })
  $('#twitter-button').click(function () {
    window.open('https://twitter.com/jkelol111', '_blank')
  })
  $('#instagram-button').click(function () {
    window.open('https://instagram.com/jkelol1cubed', '_blank')
  })
  $('#paypal-button').click(function () {
    window.open('https://paypal.me/jkelol111', '_blank')
  })
  $('#buymeacoffee-button').click(function () {
    window.open('https://buymeacoffee.com/jkelol111', '_blank')
  })
  $('#credits-button').click(function () {
    window.open('https://github.com/jkelol111/jkelol111.github.io', '_blank')
  })

  wm.createWindow(windowLayouts.terminal)
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
    greetings: `type 'help' to get a list of commands you could run.`,
    name: 'ask_jkelol111',
    height: 260,
    prompt: '~> '
  })
}

