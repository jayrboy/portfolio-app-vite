import ProjectsCard from './ProjectsCard';
import {
  projects,
  projectsCore,
  projectsNg,
  projectsNext,
  projectsNode,
} from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      {/* React Projects */}
      <SectionTitle text="เว็บไซต์ที่พัฒนาด้วย React 18" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
      {/* Angular Projects */}
      <SectionTitle text="เว็บไซต์ที่พัฒนาด้วย Angular 17" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsNg.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
      {/* Next.js Projects */}
      <SectionTitle text="เว็บไซต์ที่พัฒนาด้วย Next.js 15" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsNext.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
      {/* Node.js Projects */}
      <SectionTitle text="Node.js 20 " />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsNode.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
      {/* ASP.NET Core Projects */}
      <SectionTitle text="C# ASP.NET Core 8" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsCore.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
