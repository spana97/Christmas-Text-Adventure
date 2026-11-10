export const noelNodes = [
  {
    id: 'noel-approach',
    text: 'In the wardrobe room a young man stands before a mirror in a red suit three sizes too big. The sleeves flap when he moves. He is rehearsing a speech.',
    options: [
      {
        text: 'Talk to him gently',
        nextText: 'noel-talk'
      },
      {
        text: 'Accuse him',
        nextText: 'noel-accuse'
      },
      {
        text: 'Leave him be',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'noel-talk',
    text: '"Everyone expects me to take over," he says. "But how can I, when Dad\'s not even here?"',
    options: [
      {
        text: 'Ask about the night Santa vanished',
        nextText: 'noel-ask-santa'
      },
      {
        text: 'Ask about Jack Frost',
        nextText: 'noel-ask-jack'
      },
      {
        text: 'Repeat what you know about him and Jack',
        nextText: 'noel-ask-jack',
        requiredState: (currentState) => currentState.noelMotive || currentState.overheardNoel
      },
      {
        text: 'Accuse him',
        nextText: 'noel-accuse'
      }
    ]
  },

  {
    id: 'noel-ask-santa',
    text: '"We argued. He said he wanted to retire, but kept moving the date. I said things I regret." He tugs at the sleeves. "That was the last time I saw him."',
    options: [
      {
        text: 'Ask about Jack Frost',
        nextText: 'noel-ask-jack'
      },
      {
        text: 'Leave him be',
        nextText: 'floor-arrive'
      }
    ]
  },

  {
    id: 'noel-ask-jack',
    text: 'Noel goes very still. "Jack\'s been... advising me. He said Dad would step aside gracefully if I just left them alone to talk." \n\n\
    A pause.\n\n\
    "I told him when Dad would be alone."',
    options: [
      {
        text: 'Ask what he did',
        nextText: 'noel-confess'
      },
      {
        text: 'Back off',
        nextText: 'noel-talk'
      }
    ]
  },

  {
    id: 'noel-confess',
    text: '"I thought he only wanted to persuade him! I didn\'t know... Cold Storage. I gave him my keycard. Take it. Please. Bring Dad home."',
    options: [
      {
        text: 'Take the keycard and promise to help him',
        nextText: 'floor-arrive',
        setState: { frostKey: true, noelAlly: true, knowsColdStore: true }
      },
      {
        text: 'Take the keycard and say he will face the consequences',
        nextText: 'floor-arrive',
        setState: { frostKey: true, knowsColdStore: true }
      }
    ]
  },

  {
    id: 'noel-accuse',
    text: '"What? No! I—" He bolts out of the back door, shouting for Jack. The wardrobe door swings in the cold.',
    options: [
      {
        text: 'Chase after him',
        nextText: 'jack-cold-store-door',
        setState: { alarmRaised: true, knowsColdStore: true }
      },
      {
        text: 'Go back to the toy floor',
        nextText: 'floor-arrive',
        setState: { alarmRaised: true }
      }
    ]
  }
]