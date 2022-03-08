import { ProjCard, ProjCardTitle, ProjInnerCard, ProjCardSubtitle, ProjectsContainer, HomeProjTitle } from '../styled/projStyles';
import { SharedContainer } from '../styled/sharedStyles';
import projs from './projectData';

const Projects = () => (
	<SharedContainer>
		<HomeProjTitle>Featured Projects</HomeProjTitle>
		<ProjectsContainer>	
			{
				projs.map( (proj) => 
					<ProjCard 
						to={`/projects/${proj.id}`} 
						state={{ ...proj }}
						img={proj.img}
						className='projCard'
					>
						<ProjInnerCard className='projInnerCard'>
							<ProjCardTitle>{proj.name}</ProjCardTitle>
							<ProjCardSubtitle>{proj.shortDesc}</ProjCardSubtitle>
						</ProjInnerCard>
					</ProjCard>
				)
			}
		</ProjectsContainer>
	</SharedContainer>
)

export default Projects;