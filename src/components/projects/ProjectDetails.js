import Header from '../shared/Header';
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
  const location = useLocation();

  const { name, img, desc, github, liveSite, stack } = location.state
  return(
    <>
      <Header img={img} text={name} />
      <p>{desc}</p>
      <a href={github} target="_blank" el="noopener noreferrer">Github</a>
      <a href={liveSite} target="_blank" el="noopener noreferrer">Live Site</a>
      <ul>
        { stack.map( tool => <li>{tool}</li>)}
      </ul>
    </>
  )
}

export default ProjectDetails;