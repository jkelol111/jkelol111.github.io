class ClassicWM {
  constructor (taskbar) {
    this.windows = {}
    this.focused = {}
    this.minimized = {}
    this.taskbar = taskbar

    $.fn.center = function() {
      this.css({
        'position': 'fixed',
        'left': '50%',
        'top': '50%'
      });
      this.css({
        'margin-left': -this.outerWidth() / 2 + 'px',
        'margin-top': -this.outerHeight() / 2 + 'px'
      });

      return this;
    }
  }

  createWindow (windowOptions) {
    if (!(windowOptions.id in this.windows)) {
      this.windows[windowOptions.id] = windowOptions

      $('body').append($(`
        <div class="content" id="${windowOptions.id}">
          <h1 class="title">${windowOptions.title}</h1>
          <div class="inner">${windowOptions.inner}</div>
        </div>`))

      var windowObject = $(`#${windowOptions.id}`)

      if (windowOptions.width) {
        windowObject.css('width', `${windowOptions.width}px`)
      }

      if (windowOptions.height) {
        windowObject.css('height', `${windowOptions.height}px`)
      }

      if (windowOptions.controls) {
        if (windowOptions.controls.close) {
          windowObject.append($(`
            <div class="control-box close-box"><a class="control-box-inner"></a></div>
          `))
        }
      }

      if (windowOptions.center) {
        windowObject.center()
      }

      if (windowOptions.spawn) {
        for (const spawnAnchors in windowOptions.spawn) {
          windowObject.css(spawnAnchors, `${windowOptions.spawn[spawnAnchors]}px`)
        }
      }

      var that = this
      this.focused[windowOptions.id] = false
      this.minimized[windowOptions.id] = false

      $(`#${windowOptions.id} .title`).click(function () {
        that.focusWindow(windowOptions.id)
      })

      $(`#${windowOptions.id} .inner`).click(function () {
        that.focusWindow(windowOptions.id)
      })

      windowObject.draggable({
        cursor: "grabbing",
        handle: 'h1.title',
        zIndex: 3
      })

      this.focusWindow(windowOptions.id)
    } else {
      throw new Error('Window already exists or something!')
    }
  }

  focusWindow (windowID) {
    for (const win in this.focused) {
      if (win === windowID) {
        $(`#${win}`).css('z-index', 3)
        this.focused[win] = true
      } else {
        $(`#${win}`).css('z-index', 2)
        this.focused[win] = false 
      }
    }
  }

  minimizeWindow (windowID) {
    for (const win in this.minimized) {
      if (win === windowID) {
        this.minimized[win] = true
        $(`#${win}`).addClass('visuallyhidden')
      } else {
        this.minimized[win] = false
        $(`#${win}`).removeClass('visuallyhidden')
      }
    }
  }

  restoreWindow (windowID) {
    for (const win in this.minimized) {
      if (win === windowID) {
        this.minimized[win] = false
        $(`#${win}`).removeClass('visuallyhidden')
      } else {
        this.minimized[win] = true
        $(`#${win}`).addClass('visuallyhidden')
      }
    }
  }

  destroyWindow (windowID) {

  }
}