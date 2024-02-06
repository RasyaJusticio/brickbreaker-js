function getById(id) {
  return document.getElementById(id);
}

function onEvent(element, type, listener) {
  return element.addEventListener(type, listener);
}
