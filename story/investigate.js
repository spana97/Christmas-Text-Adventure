export const investigateNodes = [
  {
    id: 'investigate-look-around',
    text: 'You take a moment to look around you.',
    options: [
      {
        text: 'Look around [Roll D20]',
        nextText: 'investigate-look-roll'
      },
    ]
  },

  {
    id: 'investigate-look-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'investigate-crit-fail-look'
      },
      {
        text: '2-9: Fail',
        nextText: 'investigate-fail-look'
      },
      {
        text: '10-19: Success',
        nextText: 'investigate-success-look'
      },
      {
        text: '20: Critical success',
        nextText: 'investigate-crit-success-look'
      },
    ]
  },

  {
    id: 'investigate-crit-fail-look',
    text: 'The wind howls around you, and the blizzard gives you little more than a wall of white. You can barely make out the workshop in the distance. A cold sense of dread settles in — you feel like you\'re missing something important.',
    options: [
      {
        text: 'Try to call the workshop phone',
        nextText: 'phone-call-santa',
        requiredState: (currentState) => !currentState.hasCalledSanta,
        setState: { hasCalledSanta: true }
      },
      {
        text: 'Walk to the workshop',
        nextText: 'workshop-approach',
        requiredState: (currentState) => currentState.hasCalledSanta
      }
    ]
  },

  {
    id: 'investigate-fail-look',
    text: 'The wind howls around you, and the blizzard starts to pick up. You can barely make out the workshop or the elf village in the distance. Something about this place feels wrong, but you can\'t quite put your finger on it.',
    options: [
      {
        text: 'Try to call the workshop phone',
        nextText: 'phone-call-santa',
        requiredState: (currentState) => !currentState.hasCalledSanta,
        setState: { hasCalledSanta: true }
      },
      {
        text: 'Walk to the workshop',
        nextText: 'workshop-approach',
        requiredState: (currentState) => currentState.hasCalledSanta
      },
      {
        text: 'Head towards the elves',
        nextText: 'elf-approach'
      }
    ]
  },

  {
    id: 'investigate-success-look',
    text: 'You spot a set of fresh tracks disappearing into the snow. They are too small to be Santa\'s boots, but they seem to lead towards the stables.',
    options: [
      {
        text: 'Follow the tracks',
        nextText: 'stables-arrive'
      },
      {
        text: 'Head towards the workshop instead',
        nextText: 'workshop-approach'
      }
    ]
  },

  {
    id: 'investigate-crit-success-look',
    text: 'Something catches your eye beneath the snow. You brush it away and find a torn piece of red fabric, caught on a broken wooden fence post. It looks like it came from Santa\'s coat. Beside it are fresh footprints leading towards the stables.',
    options: [
      {
        text: 'Follow the footprints towards the stables',
        nextText: 'stables-arrive'
      },
      {
        text: 'Take the fabric and head towards the workshop',
        nextText: 'workshop-approach'
      }
    ]
  }
]