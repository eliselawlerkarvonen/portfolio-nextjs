import Image from "next/image";
import projects from "@/app/data/projects";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <main>
      <h1>{project.title}</h1>

      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={900}
      />

      <p>{project.description}</p>

      <p>Year: {project.year}</p>

      <ul>
        {project.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </main>
  );
}