import ContactMobile from '../../images/contactMobile.png';
import Shards from '../../images/contactShards.png';
import Header from '../shared/Header';
import { ContactContainer, ContactLeft, ContactRight } from "../styled/contactStyles";
import { SharedContainer } from '../styled/sharedStyles';
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = () => (
	<>
		<Header img={Shards} mobileImg={ContactMobile} />
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