import SectionTitle from '@/components/Common/SectionTitle';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/data';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-surface/40">
      <div className="section-wrapper">
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="Production-grade applications built with modern stacks and clean architecture."
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
