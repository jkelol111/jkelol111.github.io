class ClassicWM {
  constructor (taskbar) {
    this.windows = {}
    this.focused = {}
    this.minimized = {}
    this.taskbar = taskbar
  }

  createWindow (windowOptions) {
    this.windows[windowOptions.id] = windowOptions

    $('body').append($(`
      <div class="content" id="${windowOptions.id}">
        <h1 class="title">${windowOptions.title}</h1>
        <div class="inner">${windowOptions.inner}</div>
      </div>`))

    $(`#${windowOptions.id}`).draggable({
      cursor: "grabbing",
      handle: 'h1.title',
      zIndex: 3
    })

    var that = this
    this.focused[windowOptions.id] = false
    this.minimized[windowOptions.id] = false

    $(`#${windowOptions.id} .title`).click(function () {
      that.focusWindow(windowOptions.id)
    })

    $(`#${windowOptions.id} .inner`).click(function () {
      that.focusWindow(windowOptions.id)
    })

    this.focusWindow(windowOptions.id)


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