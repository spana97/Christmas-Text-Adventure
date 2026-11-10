export const stablesLoftNodes = [
  {
    id: 'loft-arrive',
    text: 'At the top of the ladder is a padlocked hayloft door, white with frost. Behind it, a faint knocking. Cold air seeps through the cracks.',
    options: [
      {
        text: 'Use the loft key',
        nextText: 'loft-open',
        requiredState: (currentState) => currentState.loftKey
      },
      {
        text: 'Ask Hollis for the key',
        nextText: 'loft-open',
        requiredState: (currentState) => currentState.handlersConfessed
      },
      {
        text: 'Call out to Santa',
        nextText: 'loft-call-out'
      },
      {
        text: 'Break the lock [Roll D20]',
        nextText: 'loft-break-roll'
      }
    ]
  },

  {
    id: 'loft-call-out',
    text: 'A thin voice: "Is someone there? Tell Hollis I\'m not angry. Tell him... it\'s cold."',
    options: [
      {
        text: 'Get to work on the lock',
        nextText: 'loft-arrive'
      }
    ]
  },

  {
    id: 'loft-break-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'loft-too-late'
      },
      {
        text: '2-9: Fail',
        nextText: 'loft-break-fail'
      },
      {
        text: '10-19: Success',
        nextText: 'loft-open'
      },
      {
        text: '20: Critical success',
        nextText: 'loft-open'
      }
    ]
  },

  {
    id: 'loft-break-fail',
    text: 'The padlock holds. Beyond the door, the knocking is slower now. You pick up a crowbar.',
    options: [
      {
        text: 'Try again [Roll D20]',
        nextText: 'loft-break-roll-2'
      }
    ]
  },

  {
    id: 'loft-break-roll-2',
    text: 'Roll a D20.',
    options: [
      {
        text: '1-8: Fail',
        nextText: 'loft-too-late'
      },
      {
        text: '9-19: Success',
        nextText: 'loft-open-critical'
      },
      {
        text: '20: Critical success',
        nextText: 'loft-open'
      }
    ]
  },

  {
    id: 'loft-arrive-late',
    text: 'You clamber up the ladder, bruised and out of breath. The knocking from the loft has stopped.',
    options: [
      {
        text: 'Use the loft key',
        nextText: 'loft-open-critical',
        requiredState: (currentState) => currentState.loftKey
      },
      {
        text: 'Break the lock [Roll D20]',
        nextText: 'loft-break-roll-2'
      }
    ]
  },

  {
    id: 'loft-open',
    text: 'The door swings open. Santa lies in the straw wrapped in a horse blanket, pale but breathing, whiskers crusted with frost. \n\n\
    "You took your time," he croaks, with a ghost of a smile.',
    options: [
      {
        text: 'Help him up',
        nextText: 'loft-santa-wakes'
      }
    ]
  },

  {
    id: 'loft-open-critical',
    text: 'You force the door. Santa lies still in the straw, lips blue, barely breathing.',
    options: [
      {
        text: 'Wrap him in your coat and start CPR [Roll D20]',
        nextText: 'loft-cpr-roll'
      }
    ]
  },

  {
    id: 'loft-cpr-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1-9: Fail',
        nextText: 'loft-too-late'
      },
      {
        text: '10-19: Success',
        nextText: 'loft-santa-wakes'
      },
      {
        text: '20: Critical success',
        nextText: 'loft-santa-wakes'
      }
    ]
  },

  {
    id: 'loft-santa-wakes',
    text: 'Santa coughs and blinks. \n\n\
    "Don\'t blame the handlers. I was going to replace them with drones. I didn\'t think. They were scared." He stares at the rafters. "Perhaps it\'s time I hung up the suit."',
    options: [
      {
        text: 'Help him down to the yard',
        nextText: 'loft-yard'
      }
    ]
  },

  {
    id: 'loft-yard',
    text: 'In the yard, Hollis and Birch drop to their knees. Mrs Claus and Noel come sprinting across the snow. Santa raises a hand. \n\n\
    "Nobody is in trouble. I\'m retiring." He takes off his red hat and holds it out to Noel.',
    options: [
      {
        text: 'Suggest the handlers keep their jobs',
        nextText: 'loft-mercy'
      },
      {
        text: 'Say they should answer for it',
        nextText: 'loft-justice'
      }
    ]
  },

  {
    id: 'loft-mercy',
    text: 'Santa smiles. \n\n\
    "The Reindeer Transition Programme is scrapped. Hollis, you\'re Head of Flight." \n\n\
    Hollis weeps into his pitchfork.',
    options: [
      {
        text: 'Watch Noel put on the hat',
        nextText: 'ending-handover-sleigh'
      }
    ]
  },

  {
    id: 'loft-justice',
    text: 'Santa considers it. \n\n\
    "They locked me in a loft, yes. But I nearly cost them everything. They stay. We\'ll call it a team-building exercise."',
    options: [
      {
        text: 'Watch Noel put on the hat',
        nextText: 'ending-handover-sleigh'
      }
    ]
  },

  {
    id: 'loft-too-late',
    text: 'The straw is still. Santa Claus is gone. In the yard, Hollis wails and Birch refuses to look.',
    options: [
      {
        text: 'Carry him down',
        nextText: 'loft-carry-down'
      }
    ]
  },

  {
    id: 'loft-carry-down',
    text: 'Noel and Mrs Claus come running across the snow. Mrs Claus kneels. Noel stands frozen in a suit three sizes too big. \n\n\
    "Christmas," he whispers. "It\'s in two hours."',
    options: [
      {
        text: 'Ask Noel to take his father\'s place',
        nextText: 'loft-recruit-noel'
      }
    ]
  },

  {
    id: 'loft-recruit-noel',
    text: '"I can\'t do this," Noel whispers. You hand him the red hat. "You can. He picked you. Not Jack, not the drones. You."',
    options: [
      {
        text: 'Watch him take the reins',
        nextText: 'ending-cold-case-sleigh'
      }
    ]
  }
]