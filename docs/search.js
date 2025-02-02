window.onload = function () {
  const input = document.getElementsByTagName('input')[0]
  input.oninput = (event) => {
    const needle = event.target.value.trim()

    Array.from(document.getElementsByTagName('tr')).forEach((element) => {
      const found =
        needle.length === 0 ||
        element.getElementsByClassName('name')?.[0]?.textContent.includes(needle) ||
        element.getElementsByClassName('uri')?.[0]?.textContent.includes(needle) ||
        element.getElementsByClassName('description')?.[0]?.textContent.includes(needle)
      element.className = found ? '' : 'hidden'
    })
  }
  input.className = ''
}
