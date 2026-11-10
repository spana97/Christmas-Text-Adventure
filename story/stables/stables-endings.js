export const stablesEndingNodes = [
  {
    id: 'ending-handover-sleigh',
    text: 'At midnight Noel climbs into the sleigh, the red suit finally fitting. Eight reindeer paw the snow.\n\n\
    Santa and Mrs Claus watch from the yard, wrapped in blankets, as the sleigh lifts into the dark.',
    options: [
      {
        text: 'Watch it go',
        nextText: 'ending-early-retirement'
      }
    ]
  },

  {
    id: 'ending-early-retirement',
    text: 'EARLY RETIREMENT. Santa swaps the sleigh for a rocking chair, the reindeer keep their jobs, and Noel does his first run.\n\n\
    At the station, your promotion arrives. This time, you believe in Santa.',
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },

  {
    id: 'ending-cold-case-sleigh',
    text: 'At midnight Noel takes the reins, his coat soaked in snow and grief. The sleigh rises. Below, the elves stand silent in the dark, caps in their hands.',
    options: [
      {
        text: 'Look away',
        nextText: 'ending-cold-case'
      }
    ]
  },

  {
    id: 'ending-cold-case',
    text: 'COLD CASE. Christmas is saved. Nobody asks what happened to Santa, and the file goes in a drawer. You get the promotion. You never quite get warm again.',
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  }
]