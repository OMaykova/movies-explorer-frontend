import React, {useState} from "react";
import Navigation from "../Navigation/Navigation";
import './BurgerMenu.css'

function BurgerMenu() {
  
  const[menuOpened, setMenuOpened] = useState(false);
  const toggleClass = () => {
    setMenuOpened(!menuOpened);
  };
  const menuBurgerClassName = `menu-burger ${menuOpened ? 'menu-burger_active' : ''}`
  const menuBurgerButtonClassName = `menu-burger__btn ${menuOpened ? 'menu-burger__btn_active' : ''}`
  const overlayClassName = `menu-burger__overlay ${menuOpened ? 'menu-burger__overlay_active' : ''}`

  return (
    <div className='menu-burger__container'>
      <button className={menuBurgerButtonClassName} title='Меню' onClick={toggleClass}>
        <span className='menu-burger__line'></span>
      </button>
      <div className={menuBurgerClassName}>
        <h3 className='menu-burger__title'>Главная</h3>
        <Navigation 
          toggleClass={toggleClass}
        />
      </div>
      <div className={overlayClassName} onClick={toggleClass}></div>
    </div>
  )
}
export default BurgerMenu;