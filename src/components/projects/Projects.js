import { ProjCard, ProjCardTitle, ProjInnerCard, ProjCardSubtitle, ProjectsContainer } from '../styled/projStyles';
import { SharedContainer } from '../styled/sharedStyles';

const Projects = () => (
	<SharedContainer>
		<ProjectsContainer>
			<ProjCard>
				<ProjInnerCard>
					<ProjCardTitle>Grad Cap</ProjCardTitle>
					<ProjCardSubtitle>A resume builder</ProjCardSubtitle>
				</ProjInnerCard>
			</ProjCard>
			<ProjCard>
				<ProjInnerCard>
					<ProjCardTitle>Grad Cap</ProjCardTitle>
					<ProjCardSubtitle>A resume builder</ProjCardSubtitle>
				</ProjInnerCard>
			</ProjCard>
		</ProjectsContainer>
		<ProjectsContainer>
			<ProjCard>
				<ProjInnerCard>
					<ProjCardTitle>Grad Cap</ProjCardTitle>
					<ProjCardSubtitle>A resume builder</ProjCardSubtitle>
				</ProjInnerCard>
			</ProjCard>
			<ProjCard>
				<ProjInnerCard>
					<ProjCardTitle>Grad Cap</ProjCardTitle>
					<ProjCardSubtitle>A resume builder</ProjCardSubtitle>
				</ProjInnerCard>
			</ProjCard>
		</ProjectsContainer>
	</SharedContainer>
)

export default Projects;