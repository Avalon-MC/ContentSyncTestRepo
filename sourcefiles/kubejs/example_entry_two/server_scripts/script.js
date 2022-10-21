onEvent('recipes', event => {
	// Change recipes here
	event.shapeless("9x kubejs:petercashel_cashelcoin", ["kubejs:petercashel_cashelcoinblock"])
	event.shaped('kubejs:petercashel_cashelcoinblock', [
     'SSS',
     'SSS',
     'SSS'
    ], {
     S: 'kubejs:petercashel_cashelcoin'
  })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})