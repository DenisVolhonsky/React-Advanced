import React from 'react'
import menu from '../../menu.json'
import styles from './Menu.module.css'


const CardMenu = () => (
  <div>
    {menu.map(item => (
      <div key={item.id} className={styles.container}>
        <div  className={styles.lhs}>
          <img src={item.image} className={styles.image} alt="img"/>
          <span>{item.name}</span><br />
          <span>Цена - {item.price}грн.</span>
        </div>
        <div className={styles.rhs}>
          <span>{item.description}</span><br />
          {item.ingredients.map(item => <span key={item}>{item}</ span>)}
        </div>
      </div>
    ))}
  </div>
)

export default CardMenu;

