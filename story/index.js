import { introNodes } from './intro.js'
import { phoneNodes } from './phone.js'
import { investigateNodes } from './investigate.js'
import { workshopNodes } from './workshop.js'
import { elfChatNodes } from './elf/elf-chat.js'
import { elfFightNodes } from './elf/elf-fight.js'

export const textNodes = [
  ...introNodes,
  ...phoneNodes,
  ...investigateNodes,
  ...workshopNodes,
  ...elfChatNodes,
  ...elfFightNodes,
]