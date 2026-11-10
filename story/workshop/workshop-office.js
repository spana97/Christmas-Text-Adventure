export const workshopOfficeNodes = [
  {
    id: 'office-stairs',
    text: 'You climb to Santa\'s office. The door hangs ajar and papers carpet the floor, as if someone left in a hurry.',
    options: [
      {
        text: 'Search the desk',
        nextText: 'office-desk',
        setState: { jackLetter: true }
      },
      {
        text: 'Check the computer',
        nextText: 'office-computer'
      },
      {
        text: 'Look out of the window',
        nextText: 'office-window'
      },
      {
        text: 'Go back downstairs',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'office-desk',
    text: 'In the top drawer is a half-written speech: "After 1,700 deliveries, it is time to hang up the suit." \n\n\
    Underneath, a resignation letter in spiky handwriting: "Effective immediately. You will regret passing me over. J. Frost."',
    options: [
      {
        text: 'Try the locked bottom drawer [Roll D20]',
        nextText: 'office-lock-roll'
      },
      {
        text: 'Back to the office',
        nextText: 'office-stairs'
      }
    ]
  },

  {
    id: 'office-lock-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'office-alarm',
        setState: { alarmRaised: true }
      },
      {
        text: '2-9: Fail',
        nextText: 'office-stuck'
      },
      {
        text: '10-19: Success',
        nextText: 'office-keycard'
      },
      {
        text: '20: Critical success',
        nextText: 'office-keycard'
      }
    ]
  },

  {
    id: 'office-keycard',
    text: 'Inside the drawer lies a frost-white keycard stamped COLD STORAGE, beside a snow globe of the workshop that is slowly freezing from the inside.',
    options: [
      {
        text: 'Pocket the keycard',
        nextText: 'office-stairs',
        setState: { frostKey: true, knowsColdStore: true }
      }
    ]
  },

  {
    id: 'office-alarm',
    text: 'A siren whoops. Somewhere below, boots thunder. You bolt for the stairs, smiling politely at everyone you pass.',
    options: [
      {
        text: 'Lose yourself in the toy floor crowd',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'office-stuck',
    text: 'The lock stays stubbornly shut. You nearly snap your pick.',
    options: [
      {
        text: 'Back to the office',
        nextText: 'office-stairs'
      }
    ]
  },

  {
    id: 'office-computer',
    text: 'On Santa\'s screen is the sleigh manifest, stamped "ROUTE CANCELLED. Authorised J. FROST." \n\n\
    Below it, an unsent email from someone called Noel.\n\n\
    "Dad, it\'s time.\n\n\
    Step aside and let me take over. Please."',
    options: [
      {
        text: 'Go and find Noel',
        nextText: 'noel-approach',
        setState: { noelMotive: true, frostClue: true }
      },
      {
        text: 'Back to the office',
        nextText: 'office-stairs',
        setState: { noelMotive: true, frostClue: true }
      }
    ]
  },

  {
    id: 'office-window',
    text: 'From the window you see the courtyard. A line of blue footprints crosses the snow towards a hatch marked COLD STORAGE. The frost around them is not melting.',
    options: [
      {
        text: 'Go to Cold Storage',
        nextText: 'jack-cold-store-door',
        setState: { knowsColdStore: true, frostClue: true }
      },
      {
        text: 'Back to the office',
        nextText: 'office-stairs',
        setState: { knowsColdStore: true, frostClue: true }
      }
    ]
  }
]