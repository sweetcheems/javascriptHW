// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let number = 2
    for (i = 1; i <= 10; i++) {
    number = 2
    number = number ** i
    console.log(number)
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
let exponent = function(degree) {
    for (i = 1; i <= degree; i++) {
    number = 2
    number = number ** i
    console.log(number)
}
}

exponent(5)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
let smile = ":)"
let times = 0

repeatedString = ""
while (times < 5) {
    repeatedString += smile
    console.log(repeatedString)
    times++
}


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
let repeatStrings = function(string, times) {
    let repeatedString = ""
    while (times > 0) {
    repeatedString += string
    console.log(repeatedString)
    times--
}
}

repeatStrings(":)", 3)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
function getWordStructure(word){
let vowels = word.match(/[aeiou]/gi)
let consonants = word.match(/[bcdfghjklmnprstqvwxyz]/gi)
let vowelsCount = vowels ? vowels.length : 0
let consonantsCount = consonants ? consonants.length : 0
let wordStructure = console.log("Word " + word + " consists of " + vowelsCount + " vowels and " + consonantsCount + " consonants")
return wordStructure
}

getWordStructure("case")
getWordStructure("Case")
getWordStructure("Check-list")

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
function isPalindrome(word) {
word = word.toLowerCase().replace(/\s/g, "")
let len = word.length / 2
for (i = 0; i < len; i++) {
    if (word[i] !== word[word.length - i - 1]) {
        return false
    }
return true
}
}

console.log(isPalindrome("abba"))
console.log(isPalindrome("Abba"))