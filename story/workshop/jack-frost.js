export const jackFrostNodes = [
  {
    id: 'jack-cold-store-door',
    text: 'A steel door marked COLD STORAGE: RESTRICTED. Frost creeps across the handle and your breath turns to smoke.',
    options: [
      {
        text: 'Use the key you found',
        nextText: 'jack-cold-store-inside',
        requiredState: (currentState) => currentState.frostKey
      },
      {
        text: 'Pick the lock [Roll D20]',
        nextText: 'jack-lock-roll'
      },
      {
        text: 'Turn back',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'jack-lock-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'jack-lock-alarm',
        setState: { alarmRaised: true }
      },
      {
        text: '2-9: Fail',
        nextText: 'jack-lock-alarm',
        setState: { alarmRaised: true }
      },
      {
        text: '10-19: Success',
        nextText: 'jack-lock-open'
      },
      {
        text: '20: Critical success',
        nextText: 'jack-lock-open'
      }
    ]
  },

  {
    id: 'jack-lock-alarm',
    text: 'The lock buzzes. The door swings open and two security elves in matching hi-vis grab your arms. "Mr Frost will see you now."',
    options: [
      {
        text: 'Go quietly',
        nextText: 'jack-confront'
      }
    ]
  },

  {
    id: 'jack-lock-open',
    text: 'The lock clicks. The door breathes out a cloud of cold and the faint smell of cocoa.',
    options: [
      {
        text: 'Step inside',
        nextText: 'jack-cold-store-inside'
      }
    ]
  },

  {
    id: 'jack-cold-store-inside',
    text: 'Frost coats the walls. Behind a glass partition sits Santa, wrapped in blankets beside a heater. Near him, at a desk, a tall elf with ice-blue eyes taps a spreadsheet titled "Q4 STRATEGIC REDUCTION".',
    options: [
      {
        text: 'Step forward',
        nextText: 'jack-confront'
      },
      {
        text: 'Hide behind a crate and listen first',
        nextText: 'jack-overhear'
      }
    ]
  },

  {
    id: 'jack-overhear',
    text: 'Jack speaks into a phone. \n\n\
    "Midnight. Manifest cancelled, route wiped. Shareholders unhappy? Let them cry in Q1." He hangs up and smiles at the heater.',
    options: [
      {
        text: 'Record him on your phone',
        nextText: 'jack-confront',
        requiredState: (currentState) => currentState.phone,
        setState: { hasRecording: true }
      },
      {
        text: 'Step forward',
        nextText: 'jack-confront'
      }
    ]
  },

  {
    id: 'jack-confront',
    text: '"Detective. Do come in. I\'m mid-restructure, but I always have time for stakeholders."',
    options: [
      {
        text: 'Let him talk',
        nextText: 'jack-monologue'
      },
      {
        text: 'Show him the evidence',
        nextText: 'jack-shaken',
        requiredState: (currentState) => currentState.redFabric || currentState.jackLetter || currentState.hasRecording || currentState.frostClue
      },
      {
        text: 'Offer Mrs Claus\'s gingerbread',
        nextText: 'jack-gingerbread',
        requiredState: (currentState) => currentState.hasGingerbread
      },
      {
        text: 'Catch him off guard [Roll D20]',
        nextText: 'jack-fight-roll',
        requiredState: (currentState) => !currentState.alarmRaised
      },
      {
        text: 'Hear his offer',
        nextText: 'jack-offer'
      }
    ]
  },

  {
    id: 'jack-monologue',
    text: '"Two hundred years as Vice Head Elf. Hit every target. Feedback: great experience at that level. Then they gave the job to Evergreen, who stacks boxes. Tonight at midnight, Christmas is cancelled. For restructuring."',
    options: [
      {
        text: 'Show him the evidence',
        nextText: 'jack-shaken',
        requiredState: (currentState) => currentState.redFabric || currentState.jackLetter || currentState.hasRecording || currentState.frostClue
      },
      {
        text: 'Offer Mrs Claus\'s gingerbread',
        nextText: 'jack-gingerbread',
        requiredState: (currentState) => currentState.hasGingerbread
      },
      {
        text: 'Tackle him [Roll D20]',
        nextText: 'jack-fight-roll'
      },
      {
        text: 'Hear his offer',
        nextText: 'jack-offer'
      }
    ]
  },

  {
    id: 'jack-shaken',
    text: 'Jack flinches and the room cools a degree. \n\n\
    "That proves nothing. Anyone could—" But his hand trembles, and his spreadsheet frosts over.',
    options: [
      {
        text: 'Press him',
        nextText: 'jack-surrender'
      }
    ]
  },

  {
    id: 'jack-gingerbread',
    text: 'You hold out the tin. Jack stares. \n\n\
    "Is that... Mrs Claus\'s? Spiced? With the little icing buttons?" His voice cracks. "She stopped baking for me when I left."',
    options: [
      {
        text: 'Hand it over',
        nextText: 'jack-surrender'
      }
    ]
  },

  {
    id: 'jack-fight-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'jack-fight-lose'
      },
      {
        text: '2-9: Fail',
        nextText: 'jack-fight-lose'
      },
      {
        text: '10-19: Success',
        nextText: 'jack-fight-win'
      },
      {
        text: '20: Critical success',
        nextText: 'jack-fight-win'
      }
    ]
  },

  {
    id: 'jack-fight-lose',
    text: 'Jack flicks his fingers. A blast of ice pins your boots to the floor. "Please, detective. I have a mortgage on this ice."',
    options: [
      {
        text: 'Try to reason with him',
        nextText: 'jack-monologue'
      },
      {
        text: 'Hear his offer',
        nextText: 'jack-offer'
      }
    ]
  },

  {
    id: 'jack-fight-win',
    text: 'You tackle him into a stack of boxes labelled SURPLUS CHEER. His icy aura fizzles. "Fine. Fine!"',
    options: [
      {
        text: 'Pin him down',
        nextText: 'jack-surrender'
      }
    ]
  },

  {
    id: 'jack-offer',
    text: 'Jack straightens his tie. \n\n\
    "Here\'s a thought. Noel takes the suit. I finally become Head Elf. Santa stays comfortable in Cold Storage. You get your promotion. Everybody wins." \n\n\
    Behind the glass, Santa lifts his head weakly.',
    options: [
      {
        text: 'Accept the deal',
        nextText: 'ending-hostile-takeover-sleigh'
      },
      {
        text: 'Refuse and go for Santa [Roll D20]',
        nextText: 'jack-fight-roll'
      },
      {
        text: 'Refuse and keep him talking',
        nextText: 'jack-monologue'
      }
    ]
  },

  {
    id: 'jack-surrender',
    text: 'Jack slumps into his chair. The frost on the walls begins to thaw. \n\n\
    "I just wanted to be seen," he mutters.',
    options: [
      {
        text: 'Open the glass partition and free Santa',
        nextText: 'jack-free-santa'
      }
    ]
  },

  {
    id: 'jack-free-santa',
    text: 'Santa stumbles out, wrapped in blankets. \n\n\
    "Detective! I knew someone would come." He looks at Jack, then at the thawing walls.',
    options: [
      {
        text: 'Escort Jack out and tell Santa everything',
        nextText: 'ending-sleigh-launch'
      },
      {
        text: 'Let Santa decide what to do with Jack',
        nextText: 'jack-santa-decides'
      },
      {
        text: 'Ask Santa to forgive Noel',
        nextText: 'jack-noel-forgiven',
        requiredState: (currentState) => currentState.noelAlly
      }
    ]
  },

  {
    id: 'jack-santa-decides',
    text: '"Jack, I overlooked you. That was wrong." Santa pulls out a pen. "Head of Operations. Four-day week." \n\n\
    Jack stares, then laughs for the first time in two centuries.',
    options: [
      {
        text: 'Watch them shake hands',
        nextText: 'ending-sleigh-launch'
      }
    ]
  },

  {
    id: 'jack-noel-forgiven',
    text: 'You tell Santa what Noel confessed. Santa closes his eyes. \n\n\
    "He\'s young. I was hard on him. We\'ll talk." He doesn\'t look angry. Just tired.',
    options: [
      {
        text: 'Head out to the sleigh',
        nextText: 'ending-sleigh-launch'
      }
    ]
  }
]