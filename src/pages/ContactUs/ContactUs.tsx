import BestSpecList from './BestSpecList/BestSpecList'
import InfoAndContacts from './InfoAndContacts/InfoAndContacts'
import Reviews from './Reviews/Reviews'
type Props = {}
const ContactUs = (props: Props) => {
    return (
        <>
            <BestSpecList />
            <InfoAndContacts />
            <Reviews />
        </>
    )
}
export default ContactUs
