export const mrsClausNodes = [
  {
    id: 'mrs-claus-approach',
    text: 'Mrs Claus kneads dough in the workshop kitchen, flour up to her elbows. Her hands are shaking.',
    options: [
      {
        text: 'Sit with her and let her talk',
        nextText: 'mrs-claus-comfort'
      },
      {
        text: 'Ask about the argument',
        nextText: 'mrs-claus-argument'
      },
      {
        text: 'Ask about Jack Frost',
        nextText: 'mrs-claus-jack'
      },
      {
        text: 'Leave her to it',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'mrs-claus-comfort',
    text: '"Thirty days," she whispers. "He has never missed a single night in thirty days." She presses a tin of gingerbread into your hands. "Please. It helps me to give."',
    options: [
      {
        text: 'Thank her and take the tin',
        nextText: 'mrs-claus-talk',
        setState: { hasGingerbread: true, mrsClausTrust: true }
      }
    ]
  },

  {
    id: 'mrs-claus-talk',
    text: 'She dabs her eyes with her apron. "Ask me anything, dear."',
    options: [
      {
        text: 'Ask about the argument',
        nextText: 'mrs-claus-argument'
      },
      {
        text: 'Ask about Jack Frost',
        nextText: 'mrs-claus-jack'
      },
      {
        text: 'Ask about the old Cold Storage',
        nextText: 'mrs-claus-key',
        requiredState: (currentState) => currentState.mrsClausTrust
      },
      {
        text: 'Leave her to it',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'mrs-claus-argument',
    text: '"Nicholas has promised Noel the suit for a century. A month ago he finally said yes. Then they argued about the date. The next morning he was gone."',
    options: [
      {
        text: 'Ask about Jack Frost',
        nextText: 'mrs-claus-jack'
      },
      {
        text: 'Leave her to it',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'mrs-claus-jack',
    text: '"Jack? Vice Head Elf. When Nicholas chose Evergreen for Head Elf, Jack went very quiet. He still sends us a very cold card every Christmas."',
    options: [
      {
        text: 'Ask about the argument',
        nextText: 'mrs-claus-argument'
      },
      {
        text: 'Ask about the old Cold Storage',
        nextText: 'mrs-claus-key',
        requiredState: (currentState) => currentState.mrsClausTrust
      },
      {
        text: 'Leave her to it',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'mrs-claus-key',
    text: '"The old larder in Cold Storage? Nicholas hated that room. Jack was always so fond of it." She presses a small iron key into your palm. "If you find my husband, tell him the oven is on."',
    options: [
      {
        text: 'Take the key and leave',
        nextText: 'floor-arrive',
        setState: { frostKey: true, knowsColdStore: true }
      }
    ]
  }
]