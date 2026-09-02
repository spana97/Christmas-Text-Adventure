import { textNodes } from './story/index.js'

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

const startingItems = {
  cigarettes: true,
  phone: true,
}

let state = {}

function startGame() {

  state = {
    ...startingItems
  }

  showTextNode('intro-prologue')

}

function showTextNode(textNodeId) {

  const textNode = textNodes.find(textNode => textNode.id === textNodeId)

  if (!textNode) {
    console.error(`Text node "${textNodeId}" not found`)
    return
  }

  textElement.innerText = textNode.text

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {

    if (showOption(option)) {

      const button = document.createElement('button')

      button.innerText = option.text
      button.classList.add('btn')

      button.addEventListener('click', () => selectOption(option))

      optionButtonsElement.appendChild(button)
    }

  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {

  const nextTextNodeId = option.nextText

  if (nextTextNodeId === 'restart') {
    return startGame()
  }

  if (option.setState) {
    state = {
      ...state,
      ...option.setState
    }
  }

  showTextNode(nextTextNodeId)
}

startGame()