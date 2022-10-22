//---------------all imported modules---------
import buttonSwitcher from "./buttonSwitcher.js"
import accordion from "./accordion.js"
import menuBurger from "./menuBurger.js"
//this constant is controll will you get messages
//in your browsers or not, after developing turn it off
const devMODE = true
if (devMODE) console.log("Js script has been started")
//variables which we need for our modules
//(thoughts)personally what I hate in my script is you can't run 
//program well with different classnames 
let buttonSwitchers = document.querySelectorAll(".subscription__button")
let	itemsSwitching = document.querySelectorAll(".subscription__switching")
let accordionSwitchers = document.querySelectorAll(".item-FAQ__switcher")
let accordionBlocks = document.querySelectorAll(".item-FAQ__description")
let menuBurgerButton = document.querySelector(".header__menu-button")
let headerMenu = document.querySelector(".header__menu")
//starting functions
buttonSwitcher(buttonSwitchers, itemsSwitching)
accordion(accordionSwitchers, devMODE)
menuBurger(menuBurgerButton, headerMenu)