export const workshopEndingNodes = [
  {
    id: 'ending-sleigh-launch',
    text: 'At midnight the sleigh launches. Santa waves from the seat, Noel beside him in a suit that finally fits, Mrs Claus clutching an empty tin of gingerbread. Snow swirls, bells ring, and the sky fills with light.',
    options: [
      {
        text: 'Watch it disappear',
        nextText: 'ending-the-vice-head-elf'
      }
    ]
  },

  {
    id: 'ending-the-vice-head-elf',
    text: 'THE VICE HEAD ELF. Santa is safe, Christmas is saved, and Jack gets a corner office. Back at the station, they finally give you that promotion. Nobody believes the story, but you got the plaque.',
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },

  {
    id: 'ending-hostile-takeover-sleigh',
    text: 'You shake Jack\'s icy hand. At midnight Noel takes the reins in the red suit, jaw clenched, never once looking back at the glass door. The sleigh launches. Somewhere, children wake to presents.',
    options: [
      {
        text: 'Walk away',
        nextText: 'ending-hostile-takeover'
      }
    ]
  },

  {
    id: 'ending-hostile-takeover',
    text: 'HOSTILE TAKEOVER. Christmas is saved. Your promotion arrives on the 26th. Every year you hear sleigh bells in your sleep, and think of a man under blankets behind glass.',
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  }
]