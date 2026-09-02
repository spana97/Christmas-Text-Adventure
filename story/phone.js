export const phoneNodes = [
  {
    id: 'phone-call-santa',
    text: 'Your phone rings. And rings. Until you hear a jolly voice on the other end. "Ho ho ho! Merry Christmas! Please leave a message after the bell."',
    options: [
      {
        text: 'Sigh dramatically and hang up',
        nextText: 'phone-sigh'
      }
    ]
  },

  {
    id: 'phone-sigh',
    text: 'Frustrated, you try again, and again you hear: "Ho ho ho! Merry Christmas! Please leave a message after the bell."',
    options: [
      {
        text: 'Shake your head and smoke a cigarette',
        nextText: 'phone-smoke-cigarette',
        requiredState: (currentState) => currentState.cigarettes,
        setState: { cigarettes: false }
      },
      {
        text: 'Throw your phone into the snow in anger',
        nextText: 'phone-throw-phone',
        requiredState: (currentState) => currentState.phone,
        setState: { phone: false }
      }
    ]
  },

  {
    id: 'phone-smoke-cigarette',
    text: 'You take a long deep inhale.',
    options: [
      {
        text: 'Head to the nearest elf',
        nextText: 'elf-approach'
      },
      {
        text: 'Look around you',
        nextText: 'investigate-look-around'
      },
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach'
      }
    ]
  },

  {
    id: 'phone-throw-phone',
    text: 'Your shoulders sag as you realize that you are in over your head.',
    options: [
      {
        text: 'Head to the nearest elf',
        nextText: 'elf-approach'
      },
      {
        text: 'Look around you',
        nextText: 'investigate-look-around'
      },
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach'
      }
    ]
  }
]