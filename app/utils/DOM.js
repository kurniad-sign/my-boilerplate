export default class DOM {
  constructor(element) {
    this.elements = {
      ...element,
    }

    this.createSelector()
  }

  createSelector() {
    this.selectors = {}

    Object.entries(this.elements).forEach(([key, entries]) => {
      if (
        entries instanceof window.HTMLElement ||
        entries instanceof window.NodeList ||
        Array.isArray(entries)
      ) {
        this.selectors[key] = entries
      } else {
        this.selectors[key] = document.querySelectorAll(entries)

        if (this.selectors[key].length === 0) {
          this.selectors[key] = null
        } else if (this.selectors[key].length === 1) {
          this.selectors[key] = document.querySelector(entries)
        }
      }
    })
  }

  static createElement = (tag) => (className) => {
    const element = document.createElement(tag)
    if (className) {
      element.classList.add(className)
    }

    return element
  }

  static addClass = (target) => (className) => target.classList.add(className)

  static removeClass = (target) => (className) =>
    target.classList.remove(className)

  static toggleClass = (target) => (className) =>
    target.classList.toggle(className)

  static createListener(target, event, callback, capture = false) {
    if (target instanceof window.NodeList || Array.isArray(target)) {
      target.forEach((el) => el.addEventListener(event, callback, !!capture))
    } else {
      target.addEventListener(event, callback, !!capture)
    }
  }

  static removeListener(target, event, callback, capture = false) {
    if (target instanceof window.NodeList || Array.isArray(target)) {
      target.forEach((el) => el.addEventListener(event, callback, !!capture))
    } else {
      target.addEventListener(event, callback, !!capture)
    }
  }

  static setTransform = (target) => (transform) => {
    const targetElement = target
    targetElement.style.transform = transform
  }
}
