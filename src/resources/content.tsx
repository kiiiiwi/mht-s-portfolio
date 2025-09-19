import { About, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
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
    href: "/work/moon",
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
    title: "教育经历",
    institutions: [
      {
        name: "华东师范大学   研究生在读",
        timeframe: "2023.9 - 至今",
        description: <>测绘工程（专题地图设计与编制）</>,
        achievements: [
          <>获“华为杯”第二十届中国研究生数学建模竞赛二等奖</>,
          <>连续两年获研究生学业奖学金</>,
          <>获2023-2024学年华东师范大学地理科学学院优秀学生干部</>,
        ],
      },
      {
        name: "华东师范大学   本科",
        timeframe: "2018.9 - 2022.6",
        description: <>地理信息科学</>,
        achievements: [
          <>曾获2019~2020、2021~2022学年华东师范大学优秀学生三等奖学金（前30%）</>,
          <>毕业论文《地形视觉表达方法有效性评价》，通过眼动实验分析比较各类地形表示法
            （如晕渲法、等高线、Joyplots等）的表达有效性、准确性与美观性等相关指标，并总结其使用场景与设计指南，熟练掌握眼动设备使用流程。</>,
        ],
      },
    ],
  },
  campusExperience: {
    display: true, // set to false to hide this section
    title: "校园经历",
    experiences: [
      {
        organization: "华东师范大学地理科学学院研究生会",
        timeframe: "2024.6 - 2025.6",
        role: "宣传部部长",
        achievements: [
          <>海报设计：利用Illustrator、Photoshop等工具设计学院元旦晚会、毕业典礼等大型活动的海报及易拉宝。</>,
        ],
      },
      {
        organization: "华东师范大学学生会",
        timeframe: "2020.7 - 2022.7",
        role: "新媒体中心负责人",
        achievements: [
          <>摄影宣传：参与并负责过校毕业晚会、校庆晚会、十大歌手等活动的后台拍摄宣传和统筹工作，并形成相关宣传推文和视频物料。</>,
        ],
      },
      {
        organization: "华东师范大学地理科学学院学生会",
        timeframe: "2020.6 - 2021.6",
        role: "媒体宣传中心部长",
        achievements: [
          <>公众号运营：任职期间为“华师地理”公众号主负责人之一，经手推送百余篇。</>,
        ],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "技能证书",
    skills: [
      { name: "AI", icon: "illustrator", proficiency: 100 },
      { name: "PS", icon: "photoshop", proficiency: 80 },
      { name: "Figma", icon: "figma", proficiency: 80 },
      { name: "Blender", icon: "blender", proficiency: 60 },
      { name: "Python", icon: "python", proficiency: 80 },
      { name: "H5", icon: "html5", proficiency: 65 },
      { name: "C3", icon: "css3", proficiency: 65 },
      { name: "Matlab", icon: "matlab", proficiency: 75 },
      { name: "Arcgis", icon: "arcgis", proficiency: 100 },
      { name: "Qgis", icon: "qgis", proficiency: 100 },
      { name: "Axure", icon: "axure", proficiency: 80 },
      { name: "SQL", icon: "mysql", proficiency: 70 },
      { name: "Coreldraw", icon: "coreldraw", proficiency: 85 },
      { name: "JavaScript", icon: "javascript", proficiency: 60 },
    ],
    certificates: {
      display: true,
      title: "资格证书",
      items: [
        {
          name: "IELTS 7.5",
        },
        {
          name: "全国计算机等级考试二级 Python语言程序设计",
        },
        {
          name: "教师资格证书 高中数学",
        },
      ],
    },
  },
};


const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
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
      alt: "横向图片 1",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "横向图片 2",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "纵向图片 1",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "纵向图片 2",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "纵向图片 3",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "纵向图片 4",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
