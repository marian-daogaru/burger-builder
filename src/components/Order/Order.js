import React from 'react'

import classes from './Order.css'

const order = (props) => (
  <div className={classes.Order}>
    <p>Ingredients: Salad (22)</p>
    <p>Price: <strong>$5.5</strong></p>
  </div>
)

export default order
