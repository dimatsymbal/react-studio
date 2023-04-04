import CalendarFunc from 'components/Calendar/Calendar'
import './CheckoutPage.scss'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import axios from 'axios'

type Props = {}

type Order = {
    name: string
    telephone: string
    email: string
    text: string
    time: string
}
const CheckoutPage = (props: Props) => {
    const [orderData, setOrderData] = useState<Order>({
        name: '',
        telephone: '',
        email: '',
        time: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleTelephone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            telephone: e.target.value,
        }))
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            time: e.target.value,
        }))
    }

    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    telephone: orderData.telephone,
                    email: orderData.email,
                    text: orderData.text,
                    time: orderData.time,
                }
            )

            .then((res) => res.data)
            .then(({ name, telephone, email, text, time }) => {
                setOrderData({
                    name,
                    telephone,
                    email,
                    text,
                    time,
                })
                if (
                    orderData.name === '' ||
                    orderData.telephone === '' ||
                    orderData.email === ''
                ) {
                    alert('Fill all fields')
                } else if (orderData.time === '') {
                    alert('Fill the time')
                } else if (orderData.text.length > 150) {
                    alert('Your text must be less then 150 simbols')
                } else {
                    setIsOrderSend(true)
                }
            })
    }

    const renderForm = () => {
        return (
            <div className="inputs">
                <h4>Fill the form</h4>
                <div className="row">
                    <div className="col">
                        <form onSubmit={orderSend}>
                            <TextField
                                className="input"
                                type="text"
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                onChange={handleName}
                            />
                            <TextField
                                className="input"
                                type="tel"
                                id="outlined-basic"
                                label="Telephone"
                                variant="outlined"
                                onChange={handleTelephone}
                            />
                            <TextField
                                className="input"
                                type="email"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                onChange={handleEmail}
                            />

                            <TextField
                                className="input"
                                id="outlined-multiline-static"
                                label="Eny wishes (optional)"
                                multiline
                                rows={3}
                                onChange={handleText}
                            />

                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="col">
                        <CalendarFunc />

                        <TextField
                            className="timeInput"
                            type="time"
                            id="outlined-basic"
                            variant="outlined"
                            onChange={handleTime}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const renderMessage = () => {
        return (
            <div className="messegeDiv">
                <h4>
                    Dear {orderData.name}, thank you for your resirvation, we
                    will hit you up soon
                </h4>
            </div>
        )
    }

    return (
        <div className="CheckoutPage">
            <div className="CheckoutPageContainer">
                {isOrderSend ? renderMessage() : renderForm()}
            </div>
        </div>
    )
}
export default CheckoutPage
