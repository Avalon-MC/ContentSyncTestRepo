
onEvent('item.registry', event => {
	// Register new items here
	event.create('petercashel_cashelcoin').displayName('CashelCoin')
})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create('petercashel_cashelcoinblock').material('wood').hardness(1.0).displayName('CashelCoin block')
})