import { introNodes } from './intro.js'
import { phoneNodes } from './phone.js'
import { elfChatNodes } from './elf/elf-chat.js'
import { elfFightNodes } from './elf/elf-fight.js'
import { investigateNodes } from './investigate.js'
import { workshopNodes } from './workshop.js'
import { stableNodes } from './stables.js'

export const textNodes = [
  ...introNodes,
  ...phoneNodes,
  ...investigateNodes,
  ...workshopNodes,
  ...elfChatNodes,
  ...elfFightNodes,
  ...stableNodes
]