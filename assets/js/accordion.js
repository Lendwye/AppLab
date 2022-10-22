export default function accordion(switches, devMODE) {
	if (devMODE) console.log(switches)
	function returnBlockObject(blockId) {
		let blockObjectId = blockId.replace("switcher", "block")
		let blockObject = document.getElementById(blockObjectId)
		console.log(blockObjectId)
		return blockObject
	}
	switches.forEach(switcher => {
		switcher.addEventListener("click", (elem) => {
			let block = returnBlockObject(switcher.id)
			console.log(block)
			block.classList.toggle("isShowing")
			if(switcher.innerHTML == "+") {
				switcher.innerHTML = "-"
			}
			else {
				switcher.innerHTML = "+"
			}
		})
	});
}