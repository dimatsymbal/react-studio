import './PopUp.scss'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
type Props = {
    active: any
    setActive: any
}

type WorkForm = {
    name: string
    surname: string
    country: string
    age: string
    email: string
    tel: string
    text: string
}
const PopUp = ({ active, setActive }: Props) => {
    const [newWorkForm, setnewWorkForm] = useState<WorkForm>({
        name: '',
        surname: '',
        country: '',
        age: '',
        email: '',
        tel: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setnewWorkForm((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setnewWorkForm((prevState) => ({
            ...prevState,
            surname: e.target.value,
        }))
    }
    const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setnewWorkForm((prevState) => ({
            ...prevState,
            country: e.target.value,
        }))
    }
    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setnewWorkForm((prevState) => ({
            ...prevState,
            age: e.target.value,
        }))
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setnewWorkForm((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }
    const handleTel = (e: React.ChangeEvent<HTMLInputElement>) => {
        setnewWorkForm((prevState) => ({
            ...prevState,
            tel: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setnewWorkForm((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (
            newWorkForm.name === '' ||
            newWorkForm.surname === '' ||
            newWorkForm.age === '' ||
            newWorkForm.email === '' ||
            newWorkForm.country === ''
        ) {
            alert('Please fill all fields to leave your cv')
        } else if (newWorkForm.text.length > 300) {
            alert('Your text mast be less then 300 simbols')
        } else {
            setnewWorkForm({
                name: '',
                surname: '',
                country: '',
                age: '',
                email: '',
                tel: '',
                text: '',
            })
            setActive(false)
            alert('Thank you, we will hit you up soon')
        }
    }
    return (
        <div
            className={active ? 'popUpBack active' : 'popUpBack'}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? 'workFormPopUp active' : 'workFormPopUp'}
                onClick={(e) => e.stopPropagation()}
            >
                <form action="" onSubmit={onSend} className="form">
                    <div className="headerOfModal">
                        <h3>Add theacher</h3>
                        <button
                            onClick={() => setActive(false)}
                            className="closePopUpBtn"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    <div className="place">
                        <input
                            type="text"
                            placeholder="Name"
                            value={newWorkForm.name}
                            onChange={handleName}
                        />
                        <input
                            type="text"
                            placeholder="Surname"
                            value={newWorkForm.surname}
                            onChange={handleSurname}
                        />
                        <input
                            type="text"
                            placeholder="Country or City"
                            value={newWorkForm.country}
                            onChange={handleCountry}
                        />
                        <input
                            type="number"
                            placeholder="Age"
                            value={newWorkForm.age}
                            onChange={handleAge}
                        />
                        <select placeholder="In what sphere are you a specialist?">
                            <option value="Barber">Barber</option>
                            <option value="MakeUpArtist">MakeUp Artist</option>
                            <option value="Manicure">Manicure Master</option>
                        </select>
                        <input
                            type="email"
                            placeholder="Email"
                            value={newWorkForm.email}
                            onChange={handleEmail}
                        />
                        <input
                            type="tel"
                            placeholder="Phone number (optional)"
                            value={newWorkForm.tel}
                            onChange={handleTel}
                        />
                        <textarea
                            value={newWorkForm.text}
                            placeholder="There you can left your cv or social media links or write samething about yourself (optional)"
                            onChange={handleText}
                        ></textarea>
                    </div>

                    <button type="submit" className="addForm">
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}
export default PopUp
