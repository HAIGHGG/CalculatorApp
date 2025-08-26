const buttonsTheme = document.querySelectorAll('.button-theme')
const arr = [...buttonsTheme]
const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')
const operations = ['+', '-', '/', '*', '.']

buttons.forEach(el => {
	el.addEventListener('click', () => {
		if (display.textContent === 'ERROR') reset()
		else if (el.value === 'DEL') deleteLastNumber()
		else if (el.value === 'RESET') reset()
		else if (el.value === '=') showResult()
		else if (
			(operations.includes(display.textContent.slice(-1)) && operations.includes(el.value)) ||
			(display.textContent == '' && (el.value === '*' || el.value === '/'))
		) {
			console.log('powtorka')
		} else display.textContent = display.textContent + el.value
	})
})

const reset = () => {
	display.textContent = ''
}

const deleteLastNumber = () => {
	display.textContent = display.textContent.slice(0, -1)
}

const showResult = () => {
        if (display.textContent === '') return
        try {
                const result = eval(display.textContent)
                if (result !== undefined) {
                        display.textContent = result
                }
        } catch (err) {
                display.textContent = 'ERROR'
        }
}

// THEME SELECTOR

arr.forEach((element, index) => {
	element.addEventListener('click', () => {
		element.style.opacity = '1'

		if (index == 0) {
			document.querySelector('html').removeAttribute('theme')
		} else if (index == 1) {
			document.querySelector('html').setAttribute('theme', 'second')
		} else {
			document.querySelector('html').setAttribute('theme', 'third')
		}

		arr
			.filter(function (item) {
				return item != element
			})
			.forEach(item => {
				item.style.opacity = '0'
			})
	})
})
