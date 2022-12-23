// Дана строка, содержащая скобки трёх видов (круглые, квадратные и фигурные)
// и любые другие символы.
// Посчитайте сколько скобок расставлено корректно а сколько нет.
// Например, в строке ([]{})[] скобки расставлены корректно,
// а в строке ([]] — нет. В первом случае правильно расставлено 8 скобок.
// Во втором случае указаны 2 скобки правильно, и 2 не правильно.

function foo(string) {
    // Очищаем в строке все лишние символы и преобразуем в массив
    let arr = string.replace(/[^()[\]{}]/gi, '').split('')
    // Создаем stack и brackets для определения корректных скобок
    const stack = []
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    // Создаем countCorrectBrackets для подсчета количества корректных скобок
    let countCorrectBrackets = 0

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]

        if ([')', ']', '}'].includes(current)) {
            // Если текущий элемент уже есть массиве,
            // сравниваем его с последним элементом stack на корректность
            if (brackets[current] === stack.pop()) countCorrectBrackets += 2
        } else {
            // Если текущего элемента нет в массиве, то добавляем его в stack
            stack.push(current)
        }
    }
    // количество некорректных  скобок равно разнице длинны массива и корректных скобок
    return `корректно: ${countCorrectBrackets} некорректно: ${arr.length - countCorrectBrackets}`
}

console.log(foo('AAAAddf[]s{ } ADFSDF   )ddds[s]'))
console.log(foo('([]]'))
console.log(foo('([]{})[}}}}]'))
console.log(foo('([]{})[]'))