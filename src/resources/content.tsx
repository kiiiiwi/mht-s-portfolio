import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import { HeadlineEmoji } from "@/components/HeadlineEmoji";

const person: Person = {
  firstName: "Huitao",
  lastName: "Ma",
  name: `马慧韬`,
  role: "产品经理/UX体验设计",
  avatar: "/images/mht.jpg",
  email: "mhtyuan0912@163.com",
  location: "中国/上海", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["中文", "English"], // optional: Leave the array empty if you don't want to display languag
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Phone: +86 18865675275",
    icon: "phone",
    link: "tel:+8618865675275",
  },
  {
    name: "Email: mhtyuan0912@163.com",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      <HeadlineEmoji size={216} className="headline-emoji" />
      你好！我是马慧韬
    </>
  ),
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>欢迎来到我的个人网站，我将在这里展示我的个人作品，探索兴趣爱好，记录生活瞬间。</>
  ),
  tags: [
    { label: "# GIS" },
    { label: "# 设计" },
    { label: "# UI/UX" },
    { label: "# Vibe Coding" },
  ],
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About - 关于我",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "基本信息",
    description: (
      <>
        自我评价：拥有多学科融合的专业技能，具有良好的界面设计能力、逻辑思维能力、数据分析能力；具备良好的沟通和学习能力，为人诚恳，能较好的处理人际关系；
        目标感、执行力强，情绪稳定（MBTI：ISTJ）；具有互联网思维，开放包容，富有创造力。
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "实习经验",
    experiences: [
      {
        company: "上海市地听信息科技有限公司",
        timeframe: "2025.7 - 2025.8",
        role: "解决方案工程师",
        achievements: [
          <>
            原型设计：主要工作为协助参与上海市“一张图”服务项目，包括遥感解译与地理信息处理、协助平板端AI功能显示界面原型设计制作等；
            同时辅助生态服务环境治理项目报表制作，形成记录300余条。
          </>,
        ],
      },
      {
        company: "澎湃新闻 澎湃美数课",
        timeframe: "2024.10 - 2025.1",
        role: "数据分析实习生",
        achievements: [
          <>
            新闻数据可视化：主要负责新闻推送中数据处理分析与可视化，参与公众号推文五篇，涵盖海关普查、气候变化等内容；小红书发帖十余条，累积获得点赞评论数超2000条。
          </>,
        ],
      },
      {
        company: "上海市测绘院",
        timeframe: "2024.8",
        role: "测绘专业岗",
        achievements: [
          <>
            主要工作包括基于天地图更新杨浦区、青浦区领导工作规划用图，图集《影像地图中示范区这五年》中交通网络和跨省公交专题的地图制作，以及上海中心城区创新园区示意图制作。
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
