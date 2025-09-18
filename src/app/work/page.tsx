import { Column, Heading, Meta, Schema, Button, Row, Icon, RevealFx } from "@once-ui-system/core";
import { baseURL, about, person, work, gallery } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects />
      <RevealFx translateY="16" delay={0.8} horizontal="center" paddingTop="40" paddingBottom="40">
        <Button
          id="gallery"
          data-border="rounded"
          href={gallery.path}
          variant="secondary"
          size="m"
          weight="default"
          arrowIcon
        >
          <Row gap="8" vertical="center" paddingRight="4">
            <Icon
              name="gallery"
              size="m"
              style={{ marginLeft: "-0.75rem", marginRight: "0.5rem" }}
            />
            see gallery - 查看相册
          </Row>
        </Button>
      </RevealFx>
    </Column>
  );
}
