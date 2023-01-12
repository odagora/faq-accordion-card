const container = document.querySelectorAll('.list__item')
const items = document.querySelectorAll('.item__heading')

items.forEach(item => {
  item.addEventListener('click', toggleItem, false)
})

function toggleItem() {
  const itemClass = this.parentNode.className;
  container.forEach((item) => {
    item.className = 'list__item close'

  })
  if (itemClass == 'list__item close') {
    this.parentNode.className = 'list__item open'
  }
}