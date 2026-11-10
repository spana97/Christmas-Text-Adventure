export const workshopEntranceNodes = [
  {
    id: 'workshop-approach',
    text: 'You walk closer to the workshop. Warm light spills from the windows, and somewhere inside a hundred tiny hammers are tapping.',
    options: [
      {
        text: 'Walk up to the door and knock',
        nextText: 'workshop-knock'
      },
      {
        text: 'Walk in through the open door',
        nextText: 'workshop-enter'
      },
      {
        text: 'Show your workshop pass',
        nextText: 'workshop-pass-entry',
        requiredState: (currentState) => currentState.hasPass
      },
      {
        text: 'Slip round the back to the loading dock',
        nextText: 'workshop-back-door'
      }
    ]
  },

  {
    id: 'workshop-pass-entry',
    text: 'A bored security elf glances at your lanyard and waves you through.',
    options: [
      {
        text: 'Step inside',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'workshop-knock',
    text: 'An elf comes to the door, holding a clipboard and a cup of cocoa.',
    options: [
      {
        text: 'Introduce yourself',
        nextText: 'workshop-introduce'
      },
      {
        text: 'Ask about Santa',
        nextText: 'workshop-ask-santa'
      }
    ]
  },

  {
    id: 'workshop-introduce',
    text: 'You flash your badge. The elf squints. "Interpol? We\'re a closed facility. Do you have an appointment?"',
    options: [
      {
        text: 'Insist it is a missing person case [Roll D20]',
        nextText: 'workshop-persuade-roll'
      },
      {
        text: 'Ask about Santa',
        nextText: 'workshop-ask-santa'
      }
    ]
  },

  {
    id: 'workshop-ask-santa',
    text: '"Santa? He\'s on a flexible working arrangement. Management has asked us not to comment further."',
    options: [
      {
        text: 'Show the torn red fabric',
        nextText: 'workshop-show-fabric',
        requiredState: (currentState) => currentState.redFabric
      },
      {
        text: 'Insist it is a missing person case [Roll D20]',
        nextText: 'workshop-persuade-roll'
      },
      {
        text: 'Go round the back',
        nextText: 'workshop-back-door'
      }
    ]
  },

  {
    id: 'workshop-show-fabric',
    text: 'The elf goes pale and glances over his shoulder. "...Wait here." He returns with a visitor lanyard and a very worried face.',
    options: [
      {
        text: 'Take the lanyard and go in',
        nextText: 'floor-arrive',
        setState: { hasPass: true }
      }
    ]
  },

  {
    id: 'workshop-persuade-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'workshop-turned-away',
        setState: { alarmRaised: true }
      },
      {
        text: '2-9: Fail',
        nextText: 'workshop-turned-away'
      },
      {
        text: '10-19: Success',
        nextText: 'workshop-let-in'
      },
      {
        text: '20: Critical success',
        nextText: 'workshop-let-in-vip'
      }
    ]
  },

  {
    id: 'workshop-turned-away',
    text: '"No appointment, no entry." The door shuts in your face. Somewhere inside, a telephone starts ringing.',
    options: [
      {
        text: 'Go round the back',
        nextText: 'workshop-back-door'
      },
      {
        text: 'Head to the elf village',
        nextText: 'elf-approach'
      },
      {
        text: 'Look around you',
        nextText: 'investigate-look-around'
      }
    ]
  },

  {
    id: 'workshop-let-in',
    text: 'The elf sighs and steps aside. "Fine. Wear this and don\'t touch anything."',
    options: [
      {
        text: 'Take the lanyard and step inside',
        nextText: 'floor-arrive',
        setState: { hasPass: true }
      }
    ]
  },

  {
    id: 'workshop-let-in-vip',
    text: 'The elf stands straighter. \n\n\
    "Detective! We\'ve been hoping someone would come." He drops his voice. "Cold Storage, the Frost Wing. They keep taking trays of food down there."',
    options: [
      {
        text: 'Take the lanyard and step inside',
        nextText: 'floor-arrive',
        setState: { hasPass: true, knowsColdStore: true }
      }
    ]
  },

  {
    id: 'workshop-enter',
    text: 'You push through the open door. Warm air smells of gingerbread and machine oil. A security elf looks up. "Oi! Where\'s your lanyard?"',
    options: [
      {
        text: 'Show your workshop pass',
        nextText: 'floor-arrive',
        requiredState: (currentState) => currentState.hasPass
      },
      {
        text: 'Run past him [Roll D20]',
        nextText: 'workshop-sneak-roll'
      },
      {
        text: 'Apologise and step back outside',
        nextText: 'workshop-approach'
      }
    ]
  },

  {
    id: 'workshop-back-door',
    text: 'Round the back is a loading dock. One elf sits on a crate among wrapping paper offcuts, looking like he needs a break.',
    options: [
      {
        text: 'Offer him a cigarette',
        nextText: 'workshop-dock-friend',
        requiredState: (currentState) => currentState.cigarettes,
        setState: { cigarettes: false }
      },
      {
        text: 'Slip past while he sorts boxes [Roll D20]',
        nextText: 'workshop-sneak-roll'
      },
      {
        text: 'Go back round the front',
        nextText: 'workshop-approach'
      }
    ]
  },

  {
    id: 'workshop-dock-friend',
    text: '"Bless you." He waves you through the staff door. "Sorting hall\'s straight on. Avoid the Frost Wing, though. Acting Head Elf is... particular."',
    options: [
      {
        text: 'Head inside',
        nextText: 'floor-arrive',
        setState: { knowsColdStore: true }
      }
    ]
  },

  {
    id: 'workshop-sneak-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'workshop-caught',
        setState: { alarmRaised: true }
      },
      {
        text: '2-9: Fail',
        nextText: 'workshop-caught'
      },
      {
        text: '10-19: Success',
        nextText: 'floor-arrive'
      },
      {
        text: '20: Critical success',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'workshop-caught',
    text: 'The security elf tackles you in a tinsel-themed rugby move. You are escorted outside by your collar.',
    options: [
      {
        text: 'Dust yourself off',
        nextText: 'workshop-approach'
      }
    ]
  }
]