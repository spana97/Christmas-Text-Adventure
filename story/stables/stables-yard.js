export const stablesYardNodes = [
  {
    id: 'stables-arrive',
    text: 'You arrive at the stables. Steam rises off the reindeer\'s backs into the cold night air.',
    options: [
      {
        text: 'Look at the reindeer',
        nextText: 'stables-reindeer'
      },
      {
        text: 'Search the tack room',
        nextText: 'stables-tack-room',
        setState: { knowsMemo: true }
      },
      {
        text: 'Talk to the handler',
        nextText: 'handler-approach'
      },
      {
        text: 'Climb the ladder to the hayloft',
        nextText: 'loft-arrive',
        requiredState: (currentState) => currentState.knowsLoft && !currentState.delayed
      },
      {
        text: 'Climb the ladder to the hayloft',
        nextText: 'loft-arrive-late',
        requiredState: (currentState) => currentState.knowsLoft && currentState.delayed
      },
      {
        text: 'Head back to the elf village',
        nextText: 'elf-approach'
      }
    ]
  },

  {
    id: 'stables-reindeer',
    text: 'Eight reindeer shuffle in their stalls. One, an old buck with a chipped antler, stares at you and snorts. A bucket of carrots hangs by the gate.',
    options: [
      {
        text: 'Offer the old buck a carrot',
        nextText: 'stables-comet',
        setState: { hasCarrots: true, knowsLoft: true }
      },
      {
        text: 'Back to the yard',
        nextText: 'stables-arrive'
      }
    ]
  },

  {
    id: 'stables-comet',
    text: 'The buck crunches the carrot, then trots to the far end of the barn and paws at a rickety ladder leading to a sealed hayloft. A faint knocking comes from above.',
    options: [
      {
        text: 'Climb the ladder',
        nextText: 'loft-arrive',
        requiredState: (currentState) => !currentState.delayed
      },
      {
        text: 'Climb the ladder',
        nextText: 'loft-arrive-late',
        requiredState: (currentState) => currentState.delayed
      },
      {
        text: 'Back to the yard',
        nextText: 'stables-arrive'
      }
    ]
  },

  {
    id: 'stables-tack-room',
    text: 'The tack room smells of leather and old peppermint. A noticeboard holds a crumpled memo: \n\n\
    "REINDEER TRANSITION PROGRAMME. \n\n\
    \t\ - Phase 1: Retire the team. \n\
    \t\ - Phase 2: Autonomous sleigh drones. \n\n\
    Authorised: N. Claus."',
    options: [
      {
        text: 'Search the rest of the room [Roll D20]',
        nextText: 'stables-tack-roll'
      },
      {
        text: 'Back to the yard',
        nextText: 'stables-arrive'
      }
    ]
  },

  {
    id: 'stables-tack-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'stables-tack-noise'
      },
      {
        text: '2-9: Fail',
        nextText: 'stables-arrive'
      },
      {
        text: '10-19: Success',
        nextText: 'stables-tack-keys',
        setState: { loftKey: true }
      },
      {
        text: '20: Critical success',
        nextText: 'stables-tack-keys',
        setState: { loftKey: true, knowsLoft: true }
      }
    ]
  },

  {
    id: 'stables-tack-noise',
    text: 'You knock over a rack of bridles. A gruff voice shouts from the yard: \n\n\
    "Who\'s in there?"',
    options: [
      {
        text: 'Step out and face him',
        nextText: 'handler-approach'
      }
    ]
  },

  {
    id: 'stables-tack-keys',
    text: 'Behind a stack of saddle blankets hangs a brass key tagged LOFT, and below it a single red glove with a snowflake monogram. Santa\'s.',
    options: [
      {
        text: 'Pocket the key and head back to the yard',
        nextText: 'stables-arrive'
      }
    ]
  }
]