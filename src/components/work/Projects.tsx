import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  /** If set, only these slugs are shown (in this order), after exclude. */
  includeSlugs?: string[];
}

export function Projects({ range, exclude, includeSlugs }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  if (includeSlugs?.length) {
    const bySlug = new Map(allProjects.map((p) => [p.slug, p]));
    allProjects = includeSlugs.map((s) => bySlug.get(s)).filter((p): p is NonNullable<typeof p> => p != null);
  } else {
    allProjects.sort((a, b) => {
      return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });
  }

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const displayedProjects = range
    ? allProjects.slice(range[0] - 1, range[1] ?? allProjects.length)
    : allProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
