export default function buttonSwitcher(buttons, itemsSwitching) {
	function returnSwitchingObj(switcherId) {
		let switchingId =  switcherId.replace("switcher", "switching")
		let switchingObj = document.getElementById(switchingId)
		return switchingObj
	}
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			buttons.forEach((button) => {
				button.classList.add("button_usual-unactive")
			})
			button.classList.remove("button_usual-unactive")
			itemsSwitching.forEach((item) => {
				item.classList.remove("subscription__switching-active")
			})
			let switchingObject = returnSwitchingObj(button.id)
			switchingObject.classList.add("subscription__switching-active")
		})
	})
}