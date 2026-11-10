export const workshopFloorNodes = [
  {
    id: 'floor-arrive',
    text: 'The toy floor hums: conveyor belts, hammers, a thousand elves assembling teddy bears. A banner reads "ONE NIGHT TO MAKE THE YEAR". Everyone looks exhausted.',
    options: [
      {
        text: 'Check the production board',
        nextText: 'floor-board',
        setState: { frostClue: true }
      },
      {
        text: 'Talk to an elf on the line',
        nextText: 'floor-talk-elf'
      },
      {
        text: 'Listen at the conference room door',
        nextText: 'floor-eavesdrop'
      },
      {
        text: "Go upstairs to Santa's office",
        nextText: 'office-stairs'
      },
      {
        text: 'Look for Mrs Claus in the kitchen',
        nextText: 'mrs-claus-approach'
      },
      {
        text: "Look for Santa's son",
        nextText: 'noel-approach'
      },
      {
        text: 'Take the stairs down to Cold Storage',
        nextText: 'jack-cold-store-door',
        requiredState: (currentState) => currentState.knowsColdStore
      },
      {
        text: 'Head back outside',
        nextText: 'intro-crossroads'
      }
    ]
  },

  {
    id: 'floor-board',
    text: 'The production board is covered in red cancellation stamps. At the bottom is a memo: "Efficiency Programme. All gifting projects under review. Signed, J. Frost, Acting Head Elf."',
    options: [
      {
        text: 'Back to the toy floor',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'floor-talk-elf',
    text: 'A line elf named Tinsel keeps stapling without looking up. \n\n\
    "Production slowed the day Santa vanished. Jack Frost\'s acting head elf now. Keeps calling meetings about \'shareholder value\'. Who are the shareholders? The children?"',
    options: [
      {
        text: 'Ask where Jack goes',
        nextText: 'floor-tinsel-jack',
        setState: { knowsColdStore: true }
      },
      {
        text: 'Back to the toy floor',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'floor-tinsel-jack',
    text: '"Jack? He takes trays of cocoa down to Cold Storage three times a day. For a man who hates Christmas, he orders a lot of marshmallows."',
    options: [
      {
        text: 'Go down to Cold Storage',
        nextText: 'jack-cold-store-door'
      },
      {
        text: 'Back to the toy floor',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'floor-eavesdrop',
    text: 'You press your ear to the conference room door. \n\n\
    Two voices. "You promised nothing would happen to him." "Nothing has. He\'s perfectly comfortable. Now, do you want the suit or not?"',
    options: [
      {
        text: 'Stay and listen',
        nextText: 'floor-eavesdrop-more',
        setState: { overheardNoel: true }
      },
      {
        text: 'Back to the toy floor',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'floor-eavesdrop-more',
    text: 'You duck behind a stack of gift wrap as two figures leave: a young man in an oversized red suit, and a tall elf with ice-blue eyes who has never smiled at a deadline.',
    options: [
      {
        text: 'Follow the young man',
        nextText: 'noel-approach'
      },
      {
        text: 'Follow the tall elf',
        nextText: 'jack-cold-store-door',
        setState: { knowsColdStore: true }
      },
      {
        text: 'Back to the toy floor',
        nextText: 'floor-arrive'
      }
    ]
  }
]