export const introNodes = [
  {
    id: 'intro-prologue',
    text: 'You are a young detective, standing in the bitter cold North Pole.',
    options: [
      {
        text: 'Continue',
        nextText: 'intro-crossroads',
      },
    ],
  },
  {
    id: 'intro-crossroads',
    text: 'You see smoke billowing from a workshop and wooden buildings in the distance. You can hear the faint sound of bells ringing and the smell of gingerbread in the air.',
    options: [
      {
        text: 'Try calling Santa on the phone',
        nextText: 'phone-call-santa',
        setState: { hasCalledSanta: true }
      },
      {
        text: 'Look around you',
        nextText: 'investigate-look-around',
      },
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach',
      },
      {
        text: 'Head to the elf village',
        nextText: 'elf-approach',
      },
    ],
  },
]
