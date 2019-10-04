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
    return 'List is empty'
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

/*console.log(isPalindrome('dad'))
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('1001'))
console.log(isPalindrome('Tauhida'))*/

function matchingExpression(expression){
  let stack = new Stack();
  for (let i = 0; i < expression.length; i++){
    if (expression[i]==='(' || expression[i]===')')
      stack.push(expression[i])
  }
  //display(stack)
  let lastParenthesis = stackPeek(stack);
  //console.log(lastParenthesis);
  for (let i = 0; i < expression.length-1; i++){
    if (expression[i]==='('){
      stack.pop()
    }
      //stack.pop()
  }
  display(stack)
  if (lastParenthesis === ')' && stackPeek(stack) === '(') return 'The expression is matching'
  else if (lastParenthesis !== ')' && stackPeek(stack) !== '(') return 'The expression is missing a "(" and ")"'
  else if (lastParenthesis !== ')') return 'The expression is missing a "("'
  else return 'The expression is missing a ")"'

}

console.log(matchingExpression('345+(434)+34'));
console.log(matchingExpression('345+{434)+34'));
/*console.log(matchingExpression('345+(434}+34'));
console.log(matchingExpression('345+{434}+34'));*/


/*
)
{
*/
