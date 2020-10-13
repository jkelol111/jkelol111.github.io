class ClassicWM {
  constructor () {
    this.focused = {}
    this.minimized = {}
  }

  createWindow (windowOptions) {
    $('body').append($(`
      <div class="content" id="${windowOptions.id}">
        <h1 class="title">${windowOptions.title}</h1>
        <div class="inner">${windowOptions.inner}</div>
      </div>`))

    $(`#${windowOptions.id}`).draggable({
      handle: 'h1.title'
    })

    var that = this
    this.focused[windowOptions.id] = false

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

  }

  restoreWindow (windowID) {

  }

  destroyWindow (windowID) {

  }
}