import ContactForm from "./ContactForm";
import { LogoRound, SharedContainer } from '../styled/sharedStyles';

const Contact = () => (
	<SharedContainer>
		<LogoRound src="https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png" alt='logo' />
		Contact Page
		<ContactForm />
	</SharedContainer>
)

export default Contact;