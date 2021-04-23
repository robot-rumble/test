import { Selector } from 'testcafe'

fixture `Robot Rumble`
	.page `https://robotrumble.org/demo`

const pythonButtonSelector = Selector('#select-Python')
const javascriptButtonSelector = Selector('#select-Javascript')
const runButtonSelector = Selector('#run-5-turns')
const turnSelector = Selector('._turn-indicator')

const compileTimeout = 60000
const initTimeout = 60000

test('Python', async t => {
	await runButtonSelector.with({ timeout: compileTimeout })
	await t.click(runButtonSelector)
	await t.expect(turnSelector.textContent).contains('Turn 1', { timeout: initTimeout })
})

test('Javascript', async t => {
	await t.click(javascriptButtonSelector)
	await runButtonSelector.with({ timeout: compileTimeout })
	await t.click(runButtonSelector)
	await t.expect(turnSelector.textContent).contains('Turn 1', { timeout: initTimeout })
})
