import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import { ResumeDownloadButton } from "@/components";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.campusExperience.title,
      display: about.campusExperience.display,
      items: about.campusExperience.experiences.map((experience) => experience.organization),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.name),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon style={{ color: '#3964fe' }} name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Button
                    key={index}
                    variant="secondary"
                    size="s"
                    weight="default"
                  >
                    {language}
                  </Button>
                ))}
              </Row>
            )}
            <ResumeDownloadButton />
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) => (
                    <React.Fragment key={item.name}>
                      <Row s={{ hide: true }}>
                        <Button
                          key={item.name}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                      </Row>
                      <Row hide s={{ hide: false }}>
                        <IconButton
                          size="l"
                          key={`${item.name}-icon`}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </Row>
                    </React.Fragment>
                  ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.timeframe}
                      </Text>
                    </Row>
                    <Text variant="heading-default-xs" onBackground="neutral-weak" marginBottom="xs">
                      {institution.description}
                    </Text>
                    <Column as="ul" gap="16">
                      {institution.achievements.map(
                        (achievement: React.ReactNode, achievementIndex: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${institution.name}-${achievementIndex}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="heading-default-xs" onBackground="neutral-weak" marginBottom="xs">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.campusExperience.display && (
            <>
              <Heading as="h2" id={about.campusExperience.title} variant="display-strong-s" marginBottom="m">
                {about.campusExperience.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.campusExperience.experiences.map((experience, index) => (
                  <Column key={`${experience.organization}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.organization} variant="heading-strong-l">
                        {experience.organization}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="heading-default-xs" onBackground="neutral-weak" marginBottom="xs">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, achievementIndex: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.organization}-${achievementIndex}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.technical.title}
              </Heading>
              <Text
                variant="heading-strong-l"
                marginBottom="m"
                style={{ color: '#000000' }}
              >
                专业技能
              </Text>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'repeat(4, 1fr)',
                gap: '20px',
                marginBottom: '40px'
              }}>
                {about.technical.skills.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="skill-card"
                    data-proficiency={skill.proficiency}
                    style={{
                      aspectRatio: '1',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      backgroundColor: 'white',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      maxWidth: '120px',
                      maxHeight: '120px',
                      position: 'relative',
                      overflow: 'hidden',
                      '--proficiency': skill.proficiency
                    } as React.CSSProperties}
                  >
                    <img
                      src={`/icons/${skill.icon}.svg`}
                      alt={skill.name}
                      style={{
                        width: '28px',
                        height: '28px',
                        marginBottom: '6px',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                    />
                    <span style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#374151',
                      textAlign: 'center'
                    }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {about.technical.certificates.display && (
                <>
                  <Text
                    variant="heading-strong-l"
                    marginBottom="xs"
                    style={{ color: '#000000' }}
                  >
                    {about.technical.certificates.title}
                  </Text>
                  <Column as="ul" gap="16" marginBottom="40">
                    {about.technical.certificates.items.map((certificate, index) => (
                      <Text
                        as="li"
                        variant="body-default-m"
                        key={`certificate-${index}`}
                      >
                        {certificate.name}
                      </Text>
                    ))}
                  </Column>
                </>
              )}
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}