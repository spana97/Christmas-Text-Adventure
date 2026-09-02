export const elfChatNodes = [

  {
    id: 'elf-approach',
    text: 'You walk towards the nearest elf.',
    options: [
      {
        text: 'Warm your hands',
        nextText: 'elf-warm-hands'
      },
      {
        text: 'Ask about Santa',
        nextText: 'elf-ask-last-seen'
      },
      {
        text: 'Threaten them',
        nextText: 'elf-threaten'
      },
    ]
  },

  {
    id: 'elf-warm-hands',
    text: 'You walk over and start warming your hands by the fire.',
    options: [
      {
        text: 'Wait',
        nextText: 'elf-wait-by-fire'
      },
    ]
  },

  {
    id: 'elf-wait-by-fire',
    text: 'In a gruff voice, they say, *"I could do with a cigarette."',
    options: [
      {
        text: 'Offer a cigarette',
        requiredState: (currentState) => currentState.cigarettes,
        setState: { cigarettes: false },
        nextText: 'elf-offer-cigarette'
      },
      {
        text: "Apologise — you don't have one",
        nextText: 'elf-apologise'
      },
    ]
  },

  {
    id: 'elf-offer-cigarette',
    text: 'The elf takes a long drag and coughs. "Thanks, I needed that."',
    options: [
      {
        text: 'Ask about Santa',
        nextText: 'elf-ask-about-santa'
      },
    ]
  },

  {
    id: 'elf-apologise',
    text: 'The elf shrugs, unimpressed, and goes quiet again.',
    options: [
      {
        text: 'Ask about Santa anyway',
        nextText: 'elf-ask-about-santa-cold'
      },
    ]
  },

  {
    id: 'elf-ask-about-santa',
    text: 'You ask the elf what they know about Santa.',
    options: [
      {
        text: 'Listen',
        nextText: 'elf-listen'
      },
    ]
  },

  {
    id: 'elf-listen',
    text: 'The elf sighs. "It\'s been a long festive period..."',
    options: [
      {
        text: 'Ask about Santa\'s family',
        nextText: 'elf-ask-about-family'
      },
      {
        text: 'Ask about the reindeer',
        nextText: 'elf-ask-about-reindeer'
      },
    ]
  },

  {
    id: 'elf-ask-about-family',
    text: 'He\'s been having some trouble at home.',
    options: [
      {
        text: 'Ask about the reindeer',
        nextText: 'elf-ask-about-reindeer'
      },
    ]
  },

  {
    id: 'elf-ask-about-reindeer',
    text: '"If you\'re looking for answers, you might want to speak to the reindeer handlers."',
    options: [
      {
        text: 'Head to the stables',
        nextText: 'stables-arrive'
      },
    ]
  },

  {
    id: 'elf-ask-last-seen',
    text: 'You ask when was the last time they saw Santa.',
    options: [
      {
        text: 'Back off and wait by the fire',
        nextText: 'elf-wait-by-fire'
      },
      {
        text: 'Push them for an answer',
        nextText: 'elf-ask-about-santa-cold'
      },
    ]
  },

  {
    id: 'elf-ask-about-santa-cold',
    text: 'The elf stares into the fire. "Look, I\'m just a line elf. I make toys. I don\'t see nothin\'. People like me don\'t exactly get invited to the important meetings."',
    options: [
      {
        text: 'Threaten them',
        nextText: 'elf-threaten'
      },
    ]
  },

]
