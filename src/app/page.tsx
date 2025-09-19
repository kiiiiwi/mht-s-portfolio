import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, work } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="24" horizontal="center" style={{ minHeight: "100vh" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="xl" style={{ flex: 1, justifyContent: "center" }}>
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="24">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="40">
            <Text wrap="nowrap" onBackground="neutral-weak" variant="body-default-l" style={{ whiteSpace: "nowrap" }}>
              {home.subline}
            </Text>
          </RevealFx>
          {home.tags && home.tags.length > 0 && (
            <RevealFx translateY="8" delay={0.25} fillWidth horizontal="center" paddingBottom="32">
              <Row gap="16" paddingTop="4">
                {home.tags.map((tag, idx) => (
                  tag.href ? (
                    <a key={idx} href={tag.href} className="home-tag">
                      {tag.label}
                    </a>
                  ) : (
                    <span key={idx} className="home-tag">
                      {tag.label}
                    </span>
                  )
                ))}
              </Row>
            </RevealFx>
          )}
          <RevealFx paddingTop="24" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <Projects range={[2]} />
      <RevealFx translateY="16" delay={0.8} horizontal="center" paddingBottom="40">
        <Button
          id="work"
          data-border="rounded"
          href={work.path}
          variant="secondary"
          size="m"
          weight="default"
          arrowIcon
        >
          <Row gap="8" vertical="center" paddingRight="4">
            <Icon
              name="books"
              size="m"
              style={{ marginLeft: "-0.75rem", marginRight: "0.5rem" }}
            />
            see more - 更多作品
          </Row>
        </Button>
      </RevealFx>
      <Mailchimp />
    </Column>
  );
}
