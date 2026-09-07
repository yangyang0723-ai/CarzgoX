export const nav = [
  { label: "首页", href: "/" },
  {
    label: "企业背景",
    href: "/about",
    children: [
      { label: "长久集团介绍", href: "/about#group-profile" },
      { label: "长久股份介绍", href: "/about#changjiu-shares" },
    ],
  },
  { label: "平台业务", href: "/overseas" },
  { label: "销售车型", href: "/vehicles" },
  { label: "联系我们", href: "/contact" },
]

export const languages = ["中文", "Русский", "English"]

export const hero = {
  tagline: "来久车GO，买中国车",
  sub: "整车出口 · 跨境物流 · 清关配套 一站式全链路服务",
}

// ---------- 海外业务 ----------

export const overseasOverview = {
  title: "业务概况",
  brief:
    "成熟的本地化运营团队，经验丰富、合作稳定的海外合作伙伴，为客户提供整车出口、跨境物流、清关配套等一站式全链路服务。",
  overviewTitle: "海外业务概况",
  summary:
    "依托集团深厚积淀，整合供应链、国际业务及汽车经销商运营体系，搭建多元化海外销售资源网络，打造专业渠道服务能力。 我们配备成熟的本地化运营团队，拥有经验丰富、合作稳定的海外合作伙伴，可为客户提供整车出口、跨境物流、清关配套等一站式全链路服务。",
  advantagesTitle: "业务优势",
  cards: [
    {
      title: "强大的物流能力",
      items: [
        "年均发运量近300万台",
        "自有轿运车超2000辆",
        "可控船只10艘",
        "国内、国际公铁水多式联运方案",
      ],
    },
    {
      title: "国际事业增值",
      items: [
        "汽车商贸及物流一体化服务",
        "境外代理 以及器具租赁等服务",
        "贸易金融服务",
      ],
    },
    {
      title: "70家汽车4S店",
      items: [
        "经营捷豹路虎、一汽奥迪",
        "一汽大众、一汽丰田、奔驰、沃尔沃等14个主流汽车品牌，汽车资源丰富多样",
      ],
    },
  ],
}

export const brandsSection = {
  title: "合作模式",
  brief:
    "拥有多元化整车出海业务模式，覆盖多家主流汽车品牌，服务辐射东欧、中亚、中东、非洲等海外市场。",
  summary:
    "我们打造三大整车出海业务：厂商新车直出、新车改装出口、0公里二手车出口。覆盖多家主流汽车品牌，可提供授权整车出口、车辆改装、许可办理、跨境物流、口岸交付等全链条服务。依托国内仓储及海外资源，服务俄罗斯、中亚、中东、非洲市场，一站式解决海外客户多元化整车采购与本地化建厂配套需求。",
  models: [
    {
      no: "01",
      title: "厂商资源新车直出",
      tags: ["效率最大化", "成本最优化", "操作标准化"],
      label: "交易模式",
      items: ["具备出口授权(合作品牌：现代）", "根据订单申请出口许可（合作品牌：奔腾、岚图、吉利）"],
    },
    {
      no: "02",
      title: "新车改装出口",
      tags: ["资产价值提升", "强大资源整合"],
      label: "交易模式",
      items: ["01 订单与改装", "02 许可申请", "03 物流与报关", "04 口岸交付"],
    },
    {
      no: "03",
      title: "0公里二手车出口",
      tags: ["已转让待出口", "无需等待180天", "新车标准"],
      label: "交易模式",
      items: [
        "均已经完成转移待出口",
        "完成合同签订后2-3日可提供出口许可",
        "合作车型：卡罗拉1.2T",
        "资源地点：天津/霍尔果斯/俄罗斯",
      ],
    },
  ],
}

export const achievements = {
  title: "出口成果",
  brief:
    "多年深耕整车出海，沉淀完善渠道与直客服务能力，擅长应对复杂海外市场，具备可靠的项目执行与交付能力。",
  summary:
    "多年深耕整车外贸出口，搭建成熟的渠道网络与直客服务体系。2026年取得现代汽车出口授权，稳定合作客户超100家，直接对接主机厂逾10家，业务辐射中亚、俄罗斯、中东、非洲，充分彰显公司在复杂海外市场的项目执行与交付实力。",
  cards: [
    {
      title: "精准的市场洞察力",
      desc: "深度研判目标市场法规、路况与消费偏好，保障产品适配当地市场，实现高效适销对路。",
    },
    {
      title: "灵活的模式运用",
      desc: "采用新车直出、适应性改装等多元业务策略，灵活响应海外客户差异化采购需求。",
    },
    {
      title: "强大的物流保障",
      desc: "依托成熟的国际物流资源，兼顾跨境运输安全与交付时效，保障整车稳定履约交付。",
    },
    {
      title: "可靠的海外伙伴",
      desc: "携手当地优质经销商建立稳固合作，实现海外本地化高效运营。",
    },
  ],
  stats: [
    { value: "300", unit: "万台", label: "年均发运量" },
    { value: "2000", unit: "辆+", label: "自有轿运车" },
    { value: "10", unit: "艘", label: "可控船只" },
    { value: "70", unit: "家", label: "汽车4S店" },
    { value: "14", unit: "个", label: "主流汽车品牌" },
    { value: "100", unit: "家+", label: "稳定合作客户" },
    { value: "10", unit: "家+", label: "直接对接主机厂" },
    { value: "2026", unit: "年", label: "取得现代汽车出口授权" },
    { value: "4", unit: "大区域", label: "中亚·俄罗斯·中东·非洲" },
  ],
}

// ---------- 车型目录 ----------

export const vehicleCatalog = [
  {
    module: "新车直出",
    brands: [
      {
        brand: "北京现代",
        models: [
          { name: "ELANTRA", image: "/images/vehicles/elantra.jpg" },
          { name: "SANTA", image: "/images/vehicles/santa.jpg" },
          { name: "TUCSON", image: "/images/vehicles/tucson.jpg" },
          { name: "SONATA", image: "/images/vehicles/sonata.jpg" },
        ],
      },
      {
        brand: "一汽大众捷达",
        models: [
          { name: "VA3", image: "/images/vehicles/elantra.jpg" },
          { name: "VS5", image: "/images/vehicles/tucson.jpg" },
          { name: "VS7", image: "/images/vehicles/santa.jpg" },
          { name: "VS8", image: "/images/vehicles/sonata.jpg" },
        ],
      },
    ],
  },
  {
    module: " 外贸",
    brands: [
      {
        brand: "一汽奔腾",
        models: [
          { name: "JOYEE S04", image: "/images/vehicles/joyee-s04.png" },
          { name: "JOYEE S08", image: "/images/vehicles/joyee-s08.png" },
          { name: "T90", image: "/images/vehicles/t90.png" },
          { name: "T77", image: "/images/vehicles/t77.png" },
          { name: "B70", image: "/images/vehicles/t77.png" },
          { name: "Xiaoma", image: "/images/vehicles/xiaoma.png" },
        ],
      },
    ],
  },
  {
    module: "其他",
    brands: [
      {
        brand: "一汽丰田",
        models: [{ name: "卡罗拉 1.2T", image: "/images/vehicles/corolla.png" }],
      },
      {
        brand: "吉利",
        models: [{ name: "银河 E8", image: "/images/vehicles/galaxy-e8.png" }],
      },
      {
        brand: "东风岚图",
        models: [
          { name: "梦想家", image: "/images/vehicles/dreamer.png" },
          { name: "FREE", image: "/images/vehicles/free.png" },
          { name: "泰山", image: "/images/vehicles/taishan.png" },
        ],
      },
    ],
  },
]

export const portStores = {
  current: "霍尔果斯优卡国际汽车市场（霍尔果斯口岸）",
  plan: "聚焦中亚五国、俄罗斯市场，布局南沙、绥芬河口岸店；规划中东、俄罗斯前置仓，搭建口岸店与海外仓协同的跨境服务网络，提升交付效率与本地化服务能力。",
}

// ---------- 关于我们 / 联系我们 ----------

export const about = {
  title: "集团介绍",
  paragraphs: [
    "长久集团是成立于1992年，深耕汽车行业30余年，是中国领先的综合型汽车产业服务商，业务遍及全球，涵盖汽车物流、汽车销售、数字科技、汽车改装等多个板块。",
    "集团以数字化技术推动全业务链协同创新，打造行业领先的新优势，赋能汽车产业链共享共建。同时积极布局新能源业务发展战略，助力汽车绿色发展。",
  ],
  businessTitle: "集团业务版图",
  businesses: [
    {
      name: "长久物流",
      english: "LOGISTICS",
      image: "/images/business/logistics.png",
      position: "中国首家A股上市的第三方汽车物流企业",
      description:
        "领先的汽车产业服务商，为汽车价值链各环节提供专业服务。年均发运量近300万台，自有轿运车2,400余台，可用仓储面积近230万㎡；可控船只9艘，覆盖全球主要航线，提供国内及国际公铁水多式联运服务方案。",
    },
    {
      name: "长久股份",
      english: "MATHEMATICS",
      image: "/images/business/technology.png",
      position: "中国汽车流通领域最大的质押车辆监控服务提供商",
      description:
        "提供质押车辆监控、新汽车流通及经销商运营管理服务。向超160家金融机构及18,000余家汽车经销商提供服务，覆盖中国31个省份500多个城市，累计监测超过800万台质押车辆。",
    },
    {
      name: "长久汽车销售",
      english: "CAR SALES",
      image: "/images/business/car-sales.png",
      position: "中国汽车经销商百强集团常年排名前14位",
      description:
        "拥有近70家4S店，覆盖高中低档及新能源车企，经销品牌包括：捷豹路虎、奥迪、大众、奔驰、丰田、沃尔沃、现代、马自达、别克、东本、捷尼赛思、智己、小鹏、深蓝、起亚、解放等。",
    },
    {
      name: "长久汽车制造",
      english: "AUTOMOBILE MAKING",
      image: "/images/business/manufacturing.png",
      position: "中国领先的轿运车生产基地",
      description:
        "专业从事轿运车改造生产，配备先进的改装设备及生产线，拥有滁州、吉林两大生产改装基地。总占地面积35万㎡，年设计产能6,000台，已获授权发明及实用新型专利30项。",
    },
    {
      name: "千品猫",
      english: "E-COMMERCE",
      image: "/images/business/ecommerce.png",
      position: "以B/C端双生态驱动全链路一体化数字赋能体系",
      description:
        "专注为用户提供汽车零配件、轻改装饰、清洁及养护类产品的全链路一体化服务。",
    },
  ],
  changjiuShares: {
    eyebrow: "CHANGJIU SHARES",
    title: "长久股份（HK.6959）",
    overviewTitle: "企业概况",
    overview:
      "长久股份（HK.6959）是港股上市公司，也是中国领先的汽车流通领域综合服务商。公司专注于推动汽车流通行业数字化升级，以数智化能力为核心，整合供应链、渠道、运营、金融及智能科技资源，并依托长久集团三十余年的行业积淀，构建覆盖交易、运营、金融与科技赋能的汽车流通全链条一体化服务体系。",
    businessTitle: "三大核心业务板块",
    businesses: [
      ["质押车辆监控服务", "通过数字化手段为金融机构与经销商提供安全、高效的资产监管与风险管理服务。"],
      ["新汽车流通服务", "通过构建汽车新零售平台“久车GO”，以数字化和交易服务打造汽车全生命周期生态。"],
      ["经销商运营管理服务", "以数智化运营与管理支持，提升运营效率，助力终端门店实现降本增效，提升门店竞争力。"],
    ],
    valuesTitle: "企业价值观",
    values: [
      ["客户为先", "我们始终将客户需求作为业务发展的核心方向，持续深化与金融机构、汽车经销商及合作伙伴的长期合作关系。通过不断优化服务流程及提升数字化运营能力，为客户提供更高效、更安全、更智能的解决方案。深入理解不同客户的业务需求，提供定制化服务，持续提升客户满意度与忠诚度，致力于成为客户最值得信赖的合作伙伴。"],
      ["诚信至上", "我们坚持诚信经营，恪守商业道德、配合规章，并与各类合作伙伴建立长期的尊重互信关系。在业务推进过程中，始终完善风险管理及内部管控流程，强化合规安全与业务协同能力，以稳健经营维护合作伙伴与客户利益。以诚信建立长期互信，在市场中坚守可持续竞争力，并推动企业与合作伙伴共同实现长远发展。"],
      ["开放创新", "我们以前瞻力驱动业务发展，积极推动数字化转型与技术创新，持续推进业务场景的产品优化与服务拓展。聚焦“AI+数据+系统化”多维技术协同，不断探索业务与技术深度融合，以更开放的平台能力促进生态连接。携手产学研，拓展跨界生态合作伙伴，共同构建高效、智能、可持续的汽车产业新生态。"],
      ["奋斗为本", "我们倡导务实进取、勇于突破的奋斗精神，鼓励员工以创业者心态面对挑战，持续提升专业能力与创新意识。在市场环境复杂多变的背景下，始终保持集中奋进的韧性与敏捷性，依靠团队高效协作与内外部联动，不断锻造业务增长与战略落地能力，驱动组织持续进化，形成以奋斗为底色的专业团队，共同推动企业迈向更高层级发展。"],
    ],
  },
  logisticsTitle: "国际物流布局",
  logisticsSummary:
    "积极响应国家“一带一路”倡议，于 2014 年开展国际化战略布局，力争成为面向全球汽车品牌的汽车供应链服务先行者，业务范围覆盖美洲、欧洲、中亚、东南亚、东亚、中东、非洲等。",
  logisticsCapabilities: [
    {
      name: "国际铁路",
      english: "CR Express · Oversea Resources",
      description: "中欧班列资源 · 境外段优质资源",
      icon: "rail",
    },
    {
      name: "国际海运",
      english: "Self-operated · Cooperated Ro-Ro",
      description: "自营国际滚装船 · 大型船公司",
      icon: "ship",
    },
    {
      name: "国际空运",
      english: "Rich experience and resources",
      description: "丰富货代经验及资源",
      icon: "air",
    },
    {
      name: "国际公路",
      english: "TIR · Cross-border model",
      description: "TIR 一站直达 · 跨境公路运输",
      icon: "road",
    },
    {
      name: "海外服务体系",
      english: "Overseas bases · Distribution",
      description: "海外基地 · 境外落地分拨",
      icon: "network",
    },
    {
      name: "KD 运包 · 商贸物流",
      english: "Export Packaging and Trade Business",
      description: "国际出口包装贸易业务",
      icon: "package",
    },
  ],
}

export const contact = {
  phone: "+86 010-65732999-3736",
  email: "ir@99digtech.com",
  address: "北京市朝阳区石各庄99号长久大厦",
}
