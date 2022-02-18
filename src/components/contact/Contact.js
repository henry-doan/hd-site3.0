import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import { SharedContainer } from '../styled/sharedStyles';
import Header from '../shared/Header';
import { ContactContainer, ContactLeft, ContactRight } from "../styled/contactStyles";
import Shards from '../../images/Shards.png';

const Contact = () => (
	<>
		<Header img={Shards} text="Contact" />
		<SharedContainer>
			<ContactContainer>
				<ContactLeft>
					<ContactCard />
				</ContactLeft>
				<ContactRight>
					<ContactForm />
				</ContactRight>
			</ContactContainer>
		</SharedContainer>
	</>
)

export default Contact;