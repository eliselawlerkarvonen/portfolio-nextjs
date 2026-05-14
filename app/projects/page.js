import Link from "next/link";
import projects from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>

      {projects.map((project) => (
        <article key={project.slug}>
          <h2>{project.title}</h2>

          <p>{project.description}</p>

          <Link href={`/projects/${project.slug}`}>
            View Project
          </Link>
        </article>
      ))}
    </main>
  );
}