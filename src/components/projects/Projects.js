import { ProjCard, ProjCardTitle, ProjInnerCard, ProjCardSubtitle, ProjectsContainer } from '../styled/projStyles';
import { SharedContainer } from '../styled/sharedStyles';
import projs from './projectData';

const Projects = () => (
	<SharedContainer>
		{/* <ProjectsContainer>
			<ProjCard to='/'>
				<ProjInnerCard>
					<ProjCardTitle>Grad Cap</ProjCardTitle>
					<ProjCardSubtitle>A resume builder</ProjCardSubtitle>
				</ProjInnerCard>
			</ProjCard>
			<ProjCard to='/'>
				<ProjInnerCard>
					<ProjCardTitle>Grad Cap</ProjCardTitle>
					<ProjCardSubtitle>A resume builder</ProjCardSubtitle>
				</ProjInnerCard>
			</ProjCard>
		</ProjectsContainer>
		<ProjectsContainer>
			<ProjCard to='/'>
				<ProjInnerCard>
					<ProjCardTitle>Grad Cap</ProjCardTitle>
					<ProjCardSubtitle>A resume builder</ProjCardSubtitle>
				</ProjInnerCard>
			</ProjCard>
			<ProjCard to='/'>
				<ProjInnerCard>
					<ProjCardTitle>Grad Cap</ProjCardTitle>
					<ProjCardSubtitle>A resume builder</ProjCardSubtitle>
				</ProjInnerCard>
			</ProjCard>
		</ProjectsContainer> */}
		<ProjectsContainer>	
			{
				projs.map( (proj) => 
					<ProjCard 
						to={`/projects/${proj.id}`} 
						state={{ ...proj }}
					>
						<ProjInnerCard>
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