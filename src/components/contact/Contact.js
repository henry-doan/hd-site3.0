import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import { LogoRound, SharedContainer } from '../styled/sharedStyles';
import { ContactContainer, ContactLeft, ContactRight } from "../styled/contactStyles";

const Contact = () => (
	<SharedContainer>
		<LogoRound src="https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png" alt='logo' />
		<ContactContainer>
			<ContactLeft>
				<ContactCard />
			</ContactLeft>
			<ContactRight>
				<ContactForm />
			</ContactRight>
		</ContactContainer>
	</SharedContainer>
)

export default Contact;