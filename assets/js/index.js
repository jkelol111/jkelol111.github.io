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
      <div class="about">
        Mobile devices are not supported by this website. because I couldn't get it to work.
        <br><br>
        Consider using a desktop device. don't torture yourself :')
        <br><br>
        If you insist, tap the button to get to my GitHub.
      </div>
      <hr>
      <button id="github-mobile-button" class="command_button">Go to GitHub</button>
      <button id="close-button" class="command_button">Close window</button>`
  })

  $('#github-mobile-button').click(function () {
    window.open('https://github.com/jkelol111')
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
        <button id="instagram-button" class="command_button">Instagram</button>
        <button id="twitter-button" class="command_button">Twitter</button>
        <hr>
        <button id="paypal-button" class="command_button">PayPal me!</button>
        <button id="buymeacoffee-button" class="command_button">Or Buy Me a Coffee</button>`
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

  wm.createWindow(windowLayouts.terminal)
  const commandMetas = {
    help: {
      description: "Displays help for commands, just like this.",
      usage: "help [command]"
    },
    hello: {
      description: "A hello from me, to you :)",
      usage: "hello [name]"
    },
    whoami: {
      description: "Who tf is jkelol111?",
      usage: "whoami"
    }
  }

  $('#terminal').terminal({
    help: function (command) {
      if (command) {
        if (command in commandMetas) {
          this.echo(`Help for command '${command}':`)
          this.echo(`Usage: ${commandMetas[command].usage}`)
          this.echo(`Description: ${commandMetas[command].description}`)
        } else {
          this.echo(`There is no help for command '${command}'. Are you sure it's the right command?`)
        }
      } else {
        this.echo("Available commands with help:")
        for (const commandMeta in commandMetas) {
          this.echo(`- ${commandMeta}`)
        }
      }
    },
    hello: function (name) {
      if (name) {
        this.echo(`Hello, ${name}! Nice to meet ya! :)`)
      } else {
        this.echo(`Hmm, I don't really know you, but hello nonetheless! :)`)
      }
    },
    whoami: function () {
      this.echo('Hello there, thanks for asking, I am jkelol111, otherwise known by my real name Nam.')
      this.echo('')
      this.echo('To read more about me: https://github.com/jkelol111')
    }
  }, {
    greetings: `Type 'help' to get a list of commands you could run.`,
    name: 'ask_jkelol111',
    height: 290,
    prompt: '> ',
    checkArity: false
  })
}

