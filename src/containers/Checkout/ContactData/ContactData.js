import React, {Component} from 'react'

import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode : '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault()

    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'M',
        address: {
          street: 'test street',
          zipCode: '123123',
          country: 'asdasdasdsa',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    }
    axios.post('/orders.json', order)
      .then(response => {
        console.log(response)
        this.setState({
          loading: false,
        })
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
        this.setState({
          loading: false,
        })
      })
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type='text' name='name' placeholder='Your name' />
        <input className={classes.Input} type='email' name='email' placeholder='Your email' />
        <input className={classes.Input} type='text' name='street' placeholder='Your street' />
        <input className={classes.Input} type='text' name='postalCode' placeholder='Your PC' />
        <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
