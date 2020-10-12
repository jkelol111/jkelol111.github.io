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
  }

  focusWindow (windowID) {
    this.focused[windowID] = true
    for (const win in this.focused) {
      if (this.focused[win]) {
        document.getElementById(windowID).style.zIndex = 3
      } else {
        document.getElementById(windowID).style.zIndex = 2
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