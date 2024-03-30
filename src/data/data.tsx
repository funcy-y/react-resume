import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  UserIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yang\'s Resume ',
  description: "I hope you can get to know me through this resume.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `杨帆`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        目前就职于常州，是一家公司的<strong className="text-stone-100">后端开发主管</strong>，主要工作是<strong className="text-stone-100">核心代码编写，架构搭建，业务梳理，主导项目进度</strong>。
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        在我的空余时间，我通常会 <strong className="text-stone-100">学习感兴趣的计算机语言</strong>,
        也会<strong className="text-stone-100">看看书，打打游戏</strong>, 或者走出户外去
        <strong className="text-stone-100">公园</strong>走走，欢迎大家一起沟通、一起玩耍。
      </p >
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">话不多说，往下看👇</p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `个人性格开朗，为人谦虚低调🤷‍♂️，热爱事业，有伟大梦想，多年来荣获数十位同事与领导好评👍。`,
  aboutItems: [
    {label: 'Location', text: '江苏常州', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'China', Icon: FlagIcon},
    {label: 'Interests', text: '足球、篮球、音乐、游戏、技术', Icon: SparklesIcon},
    {label: 'Study', text: '上海大学（非全，学历不够，努力来凑🤦‍♂️）', Icon: AcademicCapIcon},
    {label: 'Employment', text: '江苏帮帮虎网络有限公司', Icon: BuildingOffice2Icon},
    {label: 'Sixteen personality types', text: 'INFJ-A', Icon: UserIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2021-2024',
    location: '计算机科学与技术',
    title: '上海大学',
    content: <p>本科 非全日制</p>,
  },
  {
    date: '2013-2015',
    location: '机械制造与自动化',
    title: '常州工学院',
    content: <p>大专</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022.08-至今',
    location: '江苏帮帮虎网络有限公司',
    title: '核心部 主管',
    content: (
      <p>
        1、业务及需求梳理<br/>
        2、协调前后端开发<br/>
        3、开发帮帮虎 app、erp app、后台管理系统、支付中台<br/>
        4、编写技术文档，业务流程图，思维导图等<br/>
        5、技术选型、疑难杂症解决、架构优化
      </p>
    ),
  },
  {
    date: '2020.10-2022.08',
    location: '上海盟广信息科技有限公司',
    title: '易系列研发部 开发组长',
    content: (
      <p>
        1、项目需求评审、讨论，代码 review，需求分配<br/>
        2、改进和完善易系列 saas 项目基础架构及业务服务<br/>
        3、维护和修复日常线上服务端，数据库问题<br/>
        4、监控服务与中间件性能<br/>
      </p>
    ),
  },
  {
    date: '2019.03-2020.10',
    location: '上海淘略数据处理有限公司',
    title: '报销事业部 JAVA核心开发',
    content: (
      <p>
        1、参与产品需求及评审<br/>
        2、资金服务维护及需求开发<br/>
        3、修复线上及本地 bug<br/>
        4、开发文档及流程图维护<br/>
      </p>
    ),
  },
  {
    date: '2017.01-2019.03',
    location: '上海部道信息科技有限公司',
    title: 'IT 部 JAVA 开发',
    content: (
      <p>
        1、分析需求并完善需求，编写开发文档<br/>
        2、编写 java 代码及完善数据库，并测试<br/>
        4、为 app 及 wap 提供接口<br/>
        5、参与新知识的学习和培训<br/>
        6、完成上级交办的其他事宜<br/>
        7、编写技术设计文档<br/>
      </p>
    ),
  },
];

export const projects: TimelineItem[] = [
  {
    date: '2022.08—至今',
    location: '江苏帮帮虎网络有限公司',
    title: '帮帮虎app erp 后台 支付中台',
    content: (
      <p>
        <b>项目介绍：</b>帮帮虎 APP 是一款帮助二奢商家进行买卖交易的 B2B 平台。<br/>
        <b>功能架构：</b>springCloud alibaba 、 mybatis plus 、 xxljob 、 mysql 、 redis 、 vue 、elementUI<br/>
        <b>监控及 CI/CD 工具：</b>Jenkins 、阿里云<br/>
        <b>负责模块：</b><br/>
        所有服务重构，CI/CD 搭建<br/>
        <b>帮帮虎 app：</b><br/>
        1、导播端导入 erp 商品，直播间上架拍卖，一口价，小黄车商品。<br/>
        2、直播端出价落锤，小黄车要了，入收银台。<br/>
        3、对接融云直播流。<br/>
        4、结算对接支付，银盛支付，江南银行支付<br/>
        5、Spu 功能，ai 识图查价获取 spu，sku 信息<br/>
        6、商户认证对接法大大。<br/>
        7、保证金：买手保证金，卖家保证金及买卖家违规扣除，保证金补缴<br/>
        8、商家地图功能，redis geo。<br/>
        9、订单买卖家全流程，退款等。<br/>
        <b>后台管理系统：</b><br/>
        数据中心：数据统计类报表，例：直播详情统计、优惠券统计、运营统计、买方统计、集市店铺<br/>
        数据统计、集市分析数据、spu 已匹配商品、退款&取消统计、礼物优惠券统计、ai 查价等等。<br/>
        运营中心：<br/>
        帮帮虎 app：直播商品、集市商品、线下比价、商户管理、黑名单、诚信保证金管理、表情管理、分贝管理、直播管理、费率管理、线上包展等等。<br/>
        帮帮虎管家：erp 开单、库存、用户、店铺等管理页面<br/>
        通用功能：品类管理、品牌管理、系列管理、spu 管理、管家商品匹配管理、直播商品匹配管理。<br/>
        包展小程序：门票、优惠券、咨询广告等管理页面<br/>
        财务中心：提现、小荷包、退款、账单等等管理<br/>
        开发中心：开发工具，菜单、权限等<br/>
        <b>支付中台：</b><br/>
        对接支付宝、微信、江南银行、银盛，支付中台后台
      </p>
    ),
  },
  {
    date: '2020.10—2022.08',
    location: '上海盟广信息科技有限公司',
    title: '易客房 易早餐 MGB 易发票 易工单',
    content: (
      <p>
        <b>项目介绍：</b>酒店客房全面管理 saas、私有化。<br/>
        <b>项目架构：</b>springCloud、nacos、mysql、redis、sharding jdbc、xxljob、kafka、rabbitmq、opensaml2、vue3、elementUI<br/>
        <b>监控及 CI/CD 工具：</b>k8s、Prometheus、skywalking、efk、风火轮<br/>
        <b>负责模块：</b><br/>
        1、 易客房查询房间对接 pms（xpms、 pms2020、 opera）查寻房态接口，转换 bean 返回前端。<br/>
        2、 易客房对接 pms 更改房态接口，房态分为 VC（空干净）、 VD（空脏）、 OC（在住干净）、 OD（在住脏）、 OOO（维保房）、 OK（已查）<br/>
        3、 客房从 MGB 登录，登陆后获取对应的角色，角色分超管、租户管理员、店长、主管、服务员、维修工、前台，超管可以操作所有酒店下的信息 ， 租户管理员可以操作所在租户下的酒店信心，店长可以查看所在酒店的后台所有数据报表，主管可以操作对应的酒店下的日常安排，服务员可以进行对应的打扫，完成打扫等，维修工对应维修等功能<br/>
        4、 主管在后台或者 H5 进行排房，服务员在自己的页面查看自己打扫的房间（VD/OD）进行打扫，打扫后记录对应的布草损耗，客用品损耗，一次性用品损耗、结束后生成主管查房记录，主管查询可查房房间进行检查，检查后可退回可通过(VC/OC)，通过房态变更为 OK 房，期间生成打扫记录，查房记录、计件数据、一次性消耗报表数据、客用品消耗报表数据、布草消耗表。<br/>
        5、 同时提供 dnd 房间（可设置当前房间为不要打扰房间），记录 dnd 时间， dnd 前房态及dnd 后房态<br/>
        6、 消息提醒包括退房提醒、 dnd 提醒、赶房提醒、离店提醒、换房提醒、大清查房未通过、主管普通查房、系统通知。<br/>
        7、 对接 pms 预订单信息，在住单信息展示， kafka 订阅对方退房、换房等信息生成提醒<br/>
        8、 工单系统实现 rabbitMQ 延时队列用来处理创建工单、提醒工单，完成工单等<br/>
        <b>技术实现：</b><br/>
        1、 因 6 张表数据上亿，数据库查询包括链表查询时间过长超过 5 秒，接入 sharding jdbc 分表，采用规则根据 hotelId%定义的表数进行分表，主键根据雪花算法生成， workId 使用 redis取模 1024 的方式，最大时钟回摆偏移量设置为 50 毫秒。
        2、 DHSSO 对接，使用 saml2 方式，引入 saml2sdk，当用户调用网站，前端调用后端接口重定向至 idp 地址输入登录信息成功后，回调 sp 后端登陆成功接口，登陆成功接口再通过调用 idp获取信息接口获取用户信息，通过用户信息调用 MGB 登录获取我方登录 token，然后重定向至我方前端域名。需提前配置 idp 和 meadata.xml 配置。<br/>
        3、 对接盟广环境的公共 nacos， rabbitMQ，华住环境的公共 kafka， xxljob 等<br/>
        <b>项目链接：</b> https://mgyxl-jecmw.huazhu.com
      </p>
    ),
  },
  {
    date: '2019.03-2020.10',
    location: '上海淘略数据处理有限公司',
    title: '智惠嘉',
    content: (
      <p>
        <b>项目介绍：</b>以消费券报销方式合理规划工资、提成、奖金、返佣，降低成本费用。<br/>
        <b>项目架构：</b>springCloud、mybatisPlus、rabbitMQ、redis、mysql、vue3、elementUI<br/>
        <b>监控及 CI/CD 工具：</b>k8s、zipkin、rancher<br/>
        <b>负责模块：</b><br/>
        资金服务<br/>
        1.消费券消费<br/>
        企业申请购买消费券，冻结企业现金账户券购买费与购买服务费<br/>
        审核通过券购买申请，解冻并扣除现金账户，企业券资金账户入账<br/>
        2.消费券充值与购买<br/>
        invoice 发票服务处理订单后调用资金 api 记录券资金记录及出账入账流水<br/>
        3. 消费券转赠<br/>
        商户购买消费券，根据比例生成可转让与不可转消费券，如果是外部商户，不可转让消费券<br/>
        通过转增企业获得可转让平台通用券，内部商户的不可转让消费券直接转成可转让平台通用券。<br/>
        4. 邀请好友返现<br/>
        邀请独立 C 或员工购买消费券并消费，独立 C 消费当天 24 小时内获得 1%返利，邀请人获得 0.5%返利，以此类推三级<br/>
        5. 开票报销<br/>
        企业通过智惠嘉购买消费券并将消费券分配给企业下的员工，员工使用消费券进行购买或易得多代买获得现金，用发票在企业进行报销。<br/>
        员工申请报销，员工，企业运营平台审核，第一次审核若通过生成企业保证金账户出账，员工现金账户进账。
      </p>
    ),
  },
  {
    date: '2019.03-2020.10',
    location: '上海部道信息科技有限公司',
    title: '手取网 品在家  bdhome 后台管理系统',
    content: (
      <p>
        <b>手取网</b><br/>
        <b>项目介绍：</b>本网站是一个传统的 b2b 电商平台，为创建大家居领域的供应链管理平台。<br/>
        <b>负责模块：</b>普通会员注册入口、供应商入驻入口、会员登录/退出、产品系列、发布商品、管理上线商品、上传模型、管理模型、个人中心、帮助中心、关于我们等等。<br/>
        <br/>
        <b>品在家</b><br/>
        <b>项目介绍：</b>本网站是一个传统的 b2c 电商平台，售卖家具、配饰、生活小家居以及建材等以家为概念的商品。<br/>
        <b>负责模块：</b>微信公众号、账号合并、关于品在家、线下家居店等等<br/>
        <br/>
        <b>bdhome 后台管理系统</b><br/>
        <b>项目介绍：</b>该系统分为品在家及手取两大模块，分别管理品在家及手取内会员、供应商、供应链、商品、库存、订单等业务。<br/>
        <b>负责模块：</b><br/>
        手取会员：分为普通会员、付费会员、七天试用会员、集团会员、供应商会员。<br/>
        手取网普通会员注册入口注册后，会员模块列出会员所有详细信息，然后根据线下协商后台审核收费成为集团会员、付费会员或试用会员。<br/>
        集团会员列表内每个集团会员拥有该集团下子账户管理入口，子账户拥有审价员、付款人、设计师三个角色，子账户需要收款及审核。  <br/>
        付费会员即普通会员收费成为季度会员或年费会员。<br/>
        试用会员为线下协商后为用户提供的体验服务。<br/>
        手取网供应商入驻入口注册后，后台生成供应商会员，供应商会员列表可查看该供应商旗下所有商品及门店并管理。<br/>
        付款申请单：<br/>
        手取网会员下单后后台同时生成订单及供应商订单，供应商订单进入下单管理页面，经过下单部审核通过后给供应商下单，根据付款进度将订单拆成多分付款申请单，通过财务审核模块审核付款账户是供应商账户还是第三方账户，审核通过后进入付款申请单模块，合并打印付款申请单，生成打印单号，打印完成后审核应付款金额等详细信息，最后合并付款。<br/>
        退货管理、在线用户、 BDHOME 模型等。
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'yang.funcy@gmail.com',
      href: 'mailto:yang.funcy@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'ChangZhou, china',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/funcy-y'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
