export const elfFightNodes = [

  {
    id: 'elf-threaten',
    text: '"Look, I\'m asking nicely. Now tell me the last time you saw Santa."',
    options: [
      {
        text: 'Punch them in the face [Roll D20]',
        nextText: 'elf-roll-punch'
      },
    ]
  },

  {
    id: 'elf-roll-punch',
    text: 'Roll a D20.',
    options: [
      {
        text: '1-9: Miss',
        nextText: 'elf-miss-punch'
      },
      {
        text: '10-19: Hit',
        nextText: 'elf-hit-punch'
      },
      {
        text: '20: Critical hit',
        nextText: 'elf-crit-punch'
      },
    ]
  },

  {
    id: 'elf-miss-punch',
    text: 'You swing, but the elf ducks out of the way. Your fist sails harmlessly past their head.',
    options: [
      {
        text: 'Try to play it off',
        nextText: 'elf-intimidate'
      },
    ]
  },

  {
    id: 'elf-hit-punch',
    text: 'You swing your fist and catch the elf square in the face.',
    options: [
      {
        text: 'Try to play it off',
        nextText: 'elf-intimidate'
      },
    ]
  },

  {
    id: 'elf-crit-punch',
    text: 'You swing with surprising precision and absolutely deck the elf. They stumble backwards, clutching their face.',
    options: [
      {
        text: 'Try to play it off',
        nextText: 'elf-intimidate'
      },
    ]
  },

  {
    id: 'elf-intimidate',
    text: 'The elf stares at you, clearly deciding whether you are worth the trouble.',
    options: [
      {
        text: 'Try asking about Santa again',
        nextText: 'elf-ask-about-santa'
      },
    ]
  },

]
