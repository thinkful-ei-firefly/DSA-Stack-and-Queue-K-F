const Stack = require('./stack')
const Queue = require('./queue')

let starTrek = new Stack();

function display(list){
  let node
  if(list.top)
    node = list.top
  if(list.first)
    node = list.first
  while (node !== null){
    console.log(node.value)
    node = node.next
  }
}

function stackPeek(list){
  let node = list.top
  if(node === null)
    return null
  else
    return node.value
}
function isEmpty(list){
  let node = list.top
  if(node === null)
    return true
  else
    return false
}


function drill1(){
  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')
}


drill1()
//console.log(stackPeek(starTrek))
starTrek.pop()
starTrek.pop()
//display(starTrek)



function isPalindrome(str){
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  let stack = new Stack()
  let reverseStack = new Stack()
  for (let i = 0; i < str.length; i++){
    stack.push(str[i])
    reverseStack.push(str[str.length - (i + 1)])
  }
  for (let i = 0; i < str.length; i++){
    if (stack.pop() !== reverseStack.pop())
      return false
  }
  return true
}

//console.log(isPalindrome('dad'))
//console.log(isPalindrome('A man, a plan, a canal: Panama'))
//console.log(isPalindrome('1001'))
//console.log(isPalindrome('Tauhida'))



function matchingExpression(expression){
  const open = '([{"\''
  const close = ')]}"\''
  let stackOpen = new Stack()
  let stackClose = new Stack()
  for (let i = 0; i < expression.length; i++){
    let c = expression[i]
    if(open.includes(c))
      stackOpen.push(c)
  }
  for (let i = 0; i < expression.length; i++){
    let c = expression[expression.length - (i + 1)]
    if(close.includes(c)){
      if ((c==="'" || c==='"')){
        if(expression.indexOf(c) !== expression.lastIndexOf(c))
          stackClose.push(c)
      }
      else
        stackClose.push(c)
    }
  }
  while(stackPeek(stackOpen) !== false){
    let expOpen = stackOpen.pop();
    let indexOpen = open.indexOf(expOpen)
    if (!isEmpty(stackClose)){
      let expClose = stackClose.pop();
      if (expClose !== close[indexOpen])
        return `stating that you were expecting a ${close[indexOpen]} but found a ${expClose}`
    }else{
      return `you are missing  ${close[indexOpen]}`
    }
  }
  while(stackPeek(stackClose) !== false){
    let expClose = stackClose.pop();
    let indexClose = close.indexOf(expClose)
    if (isEmpty(stackOpen)){
      return `you are missing  ${open[indexClose]}`
    }
  }
  return 'valid expression'
}

/*console.log(matchingExpression('{345+(434]+34}+34'));
console.log(matchingExpression('345+{434)+34'));
console.log(matchingExpression('345+(434}+34'));
console.log(matchingExpression('345+("434")+34'));
console.log(matchingExpression('345+(434")+34'));*/


function sort(list){
  let temp = new Stack()
  let num = list.pop()
  let flagReady = false;
  while(!flagReady){
    if (isEmpty(temp)){
      temp.push(num)
      num = list.pop()
    }else{
      if(num<stackPeek(temp)){
        temp.push(num)
        if (!isEmpty(list)) num = list.pop()
        else num = null
      }else{
        let aux = temp.pop()
        list.push(aux)
      }
    }
    if(num === null) flagReady=true
  }
  return temp;
}
let numStack = new Stack()
numStack.push(2)
numStack.push(6)
numStack.push(3)
numStack.push(1)
//display(sort(numStack))

let starTrekQ = new Queue()
function queuePeek(list){
  let node = list.first
  if(node === null)
    return 'Queue is empty'
  else
    return node.value
}
function isEmptyQ(list){
  let node = list.first
  if(node === null)
    return true
  else
    return false
}
function length(list){
  let node = list.first
  if(node === null)
    return 0
  else{
    let count = 1
    while(node.next!==null){
      node = node.next;
      count++
    }
    return count;
  }
}

function drill6(){
  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhura')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')
}
drill6()
//display(starTrekQ)

//stack queue
function getFirstInStack(list){
  let temp = new Stack()
  let item = list.pop()
  while(!isEmpty(list)){
    temp.push(item)
    item = list.pop()
  }
  let returnItem = item
  item = temp.pop()
  while(!isEmpty(temp)){
    list.push(item)
    item = temp.pop()
  }
  list.push(item)
  return returnItem
}

let newStack = new Stack()
newStack.push('a')
newStack.push('b')
newStack.push('c')
newStack.push('d')
newStack.push('e')
//display(newStack)
//console.log("First item is " + getFirstInStack(newStack))
//display(newStack)


let tempMen = new Queue()
let tempWomen = new Queue()

function dancePairing(genre, name){
  let temp;
  if (genre==='F'){
    if(!isEmptyQ(tempMen)){
      temp = tempMen.dequeue();
      console.log(`Female dancer is ${name}, and the male dancer is ${temp}`);
    }else{
      tempWomen.enqueue(name);
    }
  }else{
    if(!isEmptyQ(tempWomen)){
      temp = tempWomen.dequeue();
      console.log(`Female dancer is ${temp}, and the male dancer is ${name}`);
    }else{
      tempMen.enqueue(name);
    }
  }

}

dancePairing('F', 'Jane');
dancePairing('M', 'Frank');
dancePairing('M', 'John');
dancePairing('M', 'Sherlock');
dancePairing('F', 'Madonna');
dancePairing('M', 'David');
dancePairing('M', 'Christopher');
dancePairing('F', 'Beyonce');
if(!isEmptyQ(tempMen))
  console.log(`There are ${length(tempMen)} male dancers waiting to dance`);
if(!isEmptyQ(tempWomen))
  console.log(`There are ${length(tempWomen)} female dancers waiting to dance`);
