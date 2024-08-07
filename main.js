function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num)
}

const collectiveMessages = {
  messageInfo: ['who', 'what', 'where', 'when'],
  messageOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
  advice: ['go out and have fun', 'just read this', 'play more work less', 'trust no one']
}

// Store the 'message' in an array
let personalMessage = []

// Iterate over the object
for(let prop in collectiveMessages) {
  let optionIdx = generateRandomNumber(collectiveMessages[prop].length)

  // use the object's properties to customize the message being added to personalMessage  
  switch(prop) {
    case 'signInfo':
      personalMessage.push(`Your sign right now is a "${collectiveMessages[prop][optionIdx]}".`)
      break
    case 'fortuneOutput':
      personalMessage.push(`You are having: "${collectiveMessages[prop][optionIdx]}".`)
      break
    case 'advice':
      personalMessage.push(`You should: "${collectiveMessages[prop][optionIdx]}".`)
      break
    default:
      personalMessage.push('There is not enough info.')
  }
}

function formatMessage(message) {
  // Add some ASCII here?
  // Add in more symbols to the array? like emojies or what not?
  const formatted = personalMessage.join('\n')
  console.log(formatted)
}

formatMessage(personalMessage);