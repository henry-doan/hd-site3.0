import { ProjCard, ProjCardTitle, ProjInnerCard, ProjCardSubtitle, ProjectsContainer, HomeProjTitle } from '../styled/projStyles';
import { SharedContainer } from '../styled/sharedStyles';
import projs from './projectData';
import { Flip, Fade } from 'react-reveal';

const Projects = () => (
	<SharedContainer>
		<Flip top>
			<HomeProjTitle>Featured Projects</HomeProjTitle>
		</Flip>
		<Fade bottom>
			<ProjectsContainer>	
				{
					projs.map( (proj) => 
						<ProjCard 
							to={`/projects/${proj.id}`} 
							state={{ ...proj }}
							img={proj.img}
							className='projCard'
							key={proj.id}
						>
							<ProjInnerCard className='projInnerCard'>
								<ProjCardTitle>{proj.name}</ProjCardTitle>
								<ProjCardSubtitle>{proj.shortDesc}</ProjCardSubtitle>
							</ProjInnerCard>
						</ProjCard>
					)
				}
			</ProjectsContainer>
		</Fade>
	</SharedContainer>
)

export default Projects;