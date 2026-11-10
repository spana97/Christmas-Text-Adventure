export const reindeerHandlerNodes = [
  {
    id: 'handler-approach',
    text: 'A stocky elf with a badge reading HOLLIS, HEAD HANDLER mucks out a stall with his back to you.\n\n\
    "Stables are closed for inventory." A younger elf by the water trough looks anywhere but at you.',
    options: [
      {
        text: 'Ask about Santa',
        nextText: 'handler-ask-santa'
      },
      {
        text: 'Offer the young elf a carrot',
        nextText: 'handler-birch-cracks',
        requiredState: (currentState) => currentState.hasCarrots
      },
      {
        text: 'Show them the Transition Programme memo',
        nextText: 'handler-confront-memo',
        requiredState: (currentState) => currentState.knowsMemo
      },
      {
        text: 'Threaten Hollis',
        nextText: 'handler-hostile'
      },
      {
        text: 'Back away',
        nextText: 'stables-arrive'
      }
    ]
  },

  {
    id: 'handler-ask-santa',
    text: '"Santa? Haven\'t seen him in weeks."\n\n\
    Hollis\'s knuckles whiten on the pitchfork. "Nothing odd here. Nothing at all."',
    options: [
      {
        text: 'Mention the sleigh bells on the voicemail',
        nextText: 'handler-bells',
        requiredState: (currentState) => currentState.heardBells
      },
      {
        text: 'Show them the Transition Programme memo',
        nextText: 'handler-confront-memo',
        requiredState: (currentState) => currentState.knowsMemo
      },
      {
        text: 'Back off',
        nextText: 'handler-approach'
      }
    ]
  },

  {
    id: 'handler-bells',
    text: 'Hollis freezes. "Bells?" Behind him, the young elf drops a bucket. \n\n\
    "The radio... the loft... oh no." Hollis glares at him.',
    options: [
      {
        text: 'Press them',
        nextText: 'handler-confess'
      }
    ]
  },

  {
    id: 'handler-confront-memo',
    text: 'Hollis stares at the memo. "Santa wanted to replace the whole team with drones. Thirty centuries of service, and we get a firmware update." \n\n\
    His voice cracks. "We just wanted to talk to him."',
    options: [
      {
        text: 'Hear them out',
        nextText: 'handler-confess'
      },
      {
        text: 'Tell them you\'ll have them arrested',
        nextText: 'handler-hostile'
      }
    ]
  },

  {
    id: 'handler-confess',
    text: '"We asked him to look at a sick reindeer. Then we locked the loft behind him. We only meant to hold him until he changed his mind." Hollis swallows. "Then the heater died in the blizzard and the padlock froze. We can\'t get it open."',
    options: [
      {
        text: 'Run to the loft',
        nextText: 'loft-arrive',
        setState: { handlersConfessed: true, knowsLoft: true }
      }
    ]
  },

  {
    id: 'handler-birch-cracks',
    text: 'The young elf, Birch, takes the carrot and whispers. "Santa\'s in the hayloft. Hollis said it\'d only be a night, but the storm... please don\'t tell him I told you."',
    options: [
      {
        text: 'Climb up to the loft',
        nextText: 'loft-arrive',
        requiredState: (currentState) => !currentState.delayed,
        setState: { knowsLoft: true }
      },
      {
        text: 'Climb up to the loft',
        nextText: 'loft-arrive-late',
        requiredState: (currentState) => currentState.delayed,
        setState: { knowsLoft: true }
      }
    ]
  },

  {
    id: 'handler-hostile',
    text: 'Hollis raises the pitchfork.\n\n\
    "Out." Other handlers appear from the stalls, silent and unfriendly. By the time you have talked your way past them, a whole hour has slipped by.',
    options: [
      {
        text: 'Slip away to the hayloft',
        nextText: 'loft-arrive-late',
        setState: { delayed: true, knowsLoft: true }
      },
      {
        text: 'Back off to the yard',
        nextText: 'stables-arrive',
        setState: { delayed: true }
      }
    ]
  }
]