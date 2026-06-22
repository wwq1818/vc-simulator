const START_YEAR = 2005;
const END_YEAR = 2024;

const sectors = {
  internet: "互联网",
  consumer: "消费",
  hardtech: "硬科技",
  healthcare: "医疗",
  energy: "新能源",
  ai: "AI",
};

const eras = [
  {
    from: 2005,
    to: 2009,
    name: "门户余温",
    theme: "美元基金仍在讲中国互联网的增长故事，移动互联网还只是会议上的词。",
    hot: ["internet", "consumer"],
    available: ["internet", "consumer", "healthcare"],
    risk: 42,
  },
  {
    from: 2010,
    to: 2014,
    name: "移动狂飙",
    theme: "智能手机铺开，流量、团购、O2O 和平台梦让每个 BP 都像一张船票。",
    hot: ["internet", "consumer", "healthcare"],
    available: ["internet", "consumer", "healthcare", "hardtech"],
    risk: 55,
  },
  {
    from: 2015,
    to: 2019,
    name: "独角兽泡沫",
    theme: "估值上天，速度压倒一切。你开始怀疑自己是在投资，还是在抢座。",
    hot: ["consumer", "healthcare", "energy"],
    available: ["internet", "consumer", "healthcare", "hardtech", "energy"],
    risk: 68,
  },
  {
    from: 2020,
    to: 2024,
    name: "硬科技转向",
    theme: "资本更耐心，也更挑剔。国产替代、能源变革和 AI 成了新的叙事中心。",
    hot: ["hardtech", "energy", "ai"],
    available: ["internet", "consumer", "healthcare", "hardtech", "energy", "ai"],
    risk: 62,
  },
];

const companyCatalogSeed = {
  internet: [
    { name: "大众点评", from: 2005, to: 2010 },
    { name: "赶集网", from: 2005, to: 2011 },
    { name: "58同城", from: 2005, to: 2012 },
    { name: "土豆网", from: 2005, to: 2010 },
    { name: "去哪儿", from: 2006, to: 2012 },
    { name: "汽车之家", from: 2007, to: 2013 },
    { name: "美团", from: 2010, to: 2015 },
    { name: "字节跳动", from: 2012, to: 2018 },
    { name: "滴滴出行", from: 2013, to: 2018 },
    { name: "快手", from: 2013, to: 2019 },
    { name: "拼多多", from: 2015, to: 2019 },
    { name: "小红书", from: 2014, to: 2021 },
  ],
  consumer: [
    { name: "三只松鼠", from: 2012, to: 2017 },
    { name: "良品铺子", from: 2010, to: 2016 },
    { name: "江小白", from: 2012, to: 2018 },
    { name: "喜茶", from: 2016, to: 2021 },
    { name: "元气森林", from: 2016, to: 2022 },
    { name: "泡泡玛特", from: 2016, to: 2020 },
    { name: "瑞幸咖啡", from: 2017, to: 2020 },
    { name: "完美日记", from: 2017, to: 2021 },
  ],
  hardtech: [
    { name: "大疆创新", from: 2010, to: 2016 },
    { name: "商汤科技", from: 2014, to: 2019 },
    { name: "寒武纪", from: 2016, to: 2020 },
    { name: "地平线", from: 2016, to: 2022 },
    { name: "优必选", from: 2015, to: 2021 },
    { name: "禾赛科技", from: 2015, to: 2022 },
    { name: "云从科技", from: 2015, to: 2020 },
  ],
  healthcare: [
    { name: "微医", from: 2010, to: 2017 },
    { name: "丁香园", from: 2008, to: 2016 },
    { name: "春雨医生", from: 2011, to: 2016 },
    { name: "药明康德", from: 2005, to: 2010 },
    { name: "百济神州", from: 2013, to: 2018 },
    { name: "信达生物", from: 2014, to: 2019 },
    { name: "联影医疗", from: 2013, to: 2019 },
    { name: "平安好医生", from: 2015, to: 2018 },
  ],
  energy: [
    { name: "宁德时代", from: 2015, to: 2018 },
    { name: "蔚来汽车", from: 2015, to: 2020 },
    { name: "小鹏汽车", from: 2016, to: 2020 },
    { name: "理想汽车", from: 2016, to: 2020 },
    { name: "蜂巢能源", from: 2018, to: 2024 },
    { name: "远景动力", from: 2018, to: 2024 },
  ],
  ai: [
    { name: "智谱AI", from: 2020, to: 2024 },
    { name: "月之暗面", from: 2023, to: 2024 },
    { name: "MiniMax", from: 2022, to: 2024 },
    { name: "百川智能", from: 2023, to: 2024 },
    { name: "阶跃星辰", from: 2023, to: 2024 },
    { name: "零一万物", from: 2023, to: 2024 },
  ],
};

const companyNameParts = {
  internet: {
    prefixes: ["易车", "快看", "同城", "乐享", "美邻", "淘房", "云店", "微票", "优选", "闪送", "趣玩", "即刻", "多点", "小站", "优客", "掌上"],
    suffixes: ["网", "科技", "信息", "互动", "在线", "数据", "互联", "生活"],
  },
  consumer: {
    prefixes: ["每日", "好邻", "熊猫", "鲜橙", "小鹿", "茶里", "食尚", "有家", "轻食", "潮玩", "花点", "盒子", "好麦", "乐饮", "邻几", "青柠"],
    suffixes: ["优选", "食品", "生活", "零售", "茶饮", "便利", "家居", "品牌"],
  },
  hardtech: {
    prefixes: ["中科", "华芯", "深鉴", "云迹", "速腾", "镭神", "极智", "星河", "睿创", "图灵", "黑芝麻", "智行", "灵动", "越疆", "梅卡曼德", "矩阵"],
    suffixes: ["科技", "智能", "机器人", "光电", "芯片", "传感", "智造", "自动化"],
  },
  healthcare: {
    prefixes: ["健客", "康宁", "医联", "微脉", "燃石", "诺辉", "推想", "深睿", "圆心", "思派", "和铂", "康方", "亚盛", "再鼎", "嘉和", "华大"],
    suffixes: ["医疗", "健康", "生物", "医药", "影像", "检验", "诊疗", "器械"],
  },
  energy: {
    prefixes: ["星源", "中创新航", "国轩", "欣旺达", "亿纬", "蜂巢", "瑞浦", "鹏辉", "特来电", "星星", "远景", "正力", "海辰", "清陶", "卫蓝", "协鑫"],
    suffixes: ["能源", "动力", "电池", "储能", "材料", "充电", "光伏", "电气"],
  },
  ai: {
    prefixes: ["深言", "澜舟", "面壁", "生数", "无问", "出门问问", "第四范式", "达观", "竹间", "云知声", "思必驰", "明略", "海天瑞声", "影刀", "实在", "来也"],
    suffixes: ["智能", "科技", "数据", "算法", "模型", "认知", "算力", "AI"],
  },
};

function buildCompanyCatalog(seedCatalog) {
  const windows = {
    internet: [[2005, 2009], [2006, 2012], [2010, 2015], [2014, 2020], [2018, 2024]],
    consumer: [[2005, 2011], [2008, 2014], [2012, 2018], [2015, 2021], [2018, 2024]],
    hardtech: [[2010, 2016], [2012, 2018], [2015, 2021], [2018, 2024], [2020, 2024]],
    healthcare: [[2005, 2012], [2008, 2015], [2012, 2019], [2015, 2024], [2018, 2024]],
    energy: [[2015, 2020], [2016, 2022], [2018, 2024], [2020, 2024]],
    ai: [[2020, 2024], [2021, 2024], [2022, 2024], [2023, 2024]],
  };
  const catalog = {};
  for (const sector of Object.keys(seedCatalog)) {
    const generated = generateCompanies(sector, windows[sector], 22);
    const merged = [...seedCatalog[sector], ...generated];
    const unique = [];
    const seen = new Set();
    for (const company of merged) {
      if (seen.has(company.name)) continue;
      seen.add(company.name);
      unique.push(company);
    }
    catalog[sector] = unique;
  }
  return catalog;
}

function generateCompanies(sector, windows, targetCount) {
  const parts = companyNameParts[sector];
  const companies = [];
  for (const prefix of parts.prefixes) {
    for (const suffix of parts.suffixes) {
      if (companies.length >= targetCount) return companies;
      const window = windows[companies.length % windows.length];
      companies.push({ name: `${prefix}${suffix}`, from: window[0], to: window[1] });
    }
  }
  return companies;
}

const companyCatalog = buildCompanyCatalog(companyCatalogSeed);

const projectProfiles = {
  internet: {
    businesses: [
      { from: 2005, text: "做垂直门户和分类信息站，靠广告位、会员置顶和线下代理销售变现。" },
      { from: 2005, text: "做网页游戏和社区产品，通过虚拟道具、广告和联合运营分成赚钱。" },
      { from: 2010, text: "做移动 App 分发和本地生活入口，向商户收推广费和交易佣金。" },
      { from: 2010, text: "做 O2O 交易平台，把团购、到店核销和商户后台打包成一套系统。" },
      { from: 2015, text: "做企业协同和云工具，靠订阅费、实施服务和私有化部署收费。" },
      { from: 2020, text: "做程序化广告投放优化，把预算分配、素材测试和归因分析打包成平台。" },
      { from: 2020, text: "做垂直兴趣社区，用内容、达人和交易撮合提升用户停留与转化。" },
    ],
    models: ["SaaS 订阅 + 增值服务", "广告分成 + 数据工具费", "交易佣金 + 商家服务费", "企业年框 + 私有化部署"],
    risks: [
      "获客依赖平台流量，渠道成本一旦上升，单位经济模型会迅速变薄。",
      "产品容易被大厂功能覆盖，缺少足够深的客户迁移成本。",
      "留存数据还短，当前增长可能只是补贴和销售推动出来的。",
      "收入确认口径偏激进，需要核实真实回款和续费率。",
    ],
    diligence: [
      { question: "最近 6 个月净收入留存是多少？", answer: "公司给出的口径在 105%-118% 之间，但剔除一次性实施费后会低一截；销售负责人认为大客户扩容能补回来。" },
      { question: "前五大客户收入占比是否过高？", answer: "前五大客户贡献接近一半收入，其中两家仍是试用转正式的第一年，续约谈判还没开始。" },
      { question: "销售回款周期和坏账率如何？", answer: "账期从 45 天拉长到 75 天，坏账暂时不高，但渠道代理的回款质量需要单独核。" },
    ],
  },
  consumer: {
    businesses: [
      { from: 2005, text: "做区域连锁餐饮和烘焙品牌，靠直营店验证模型，再向省会城市复制。" },
      { from: 2005, text: "做线下专卖零售品牌，主打百货商场和街边店渠道。" },
      { from: 2010, text: "做淘品牌和垂直电商品牌，通过搜索流量、达人测评和爆款 SKU 起量。" },
      { from: 2015, text: "做新式茶饮和轻食连锁，主打年轻白领商圈和社区店。" },
      { from: 2018, text: "做社区便利零售，用自有供应链提高鲜食和即时消费占比。" },
      { from: 2020, text: "做预制菜和半成品餐食，通过电商、商超和社区团购铺货。" },
    ],
    models: ["直营门店 + 加盟费", "渠道批发 + 电商零售", "品牌溢价 + 供应链毛利", "会员复购 + 私域团购"],
    risks: [
      "门店模型还没有跨城市验证，样板店利润可能被总部补贴美化。",
      "品类壁垒不高，爆品生命周期短，库存和渠道退货会吃掉利润。",
      "加盟扩张容易牺牲品控，食品安全和门店管理是隐藏雷区。",
      "营销声量高于真实复购，需要核对同店增长和自然客流。",
    ],
    diligence: [
      { question: "单店爬坡需要多久？", answer: "样板店 4-6 个月能打平，但外地新店更慢；加盟店数据只拿到了月度汇总，颗粒度不够细。" },
      { question: "自然复购和投放带来的复购能否拆开？", answer: "创始人说自然复购占多数，不过后台口径把社群优惠券也算进自然复购，真实黏性要打折看。" },
      { question: "库存周转天数是否稳定？", answer: "畅销 SKU 周转很好，长尾 SKU 明显拖累现金；最近两个月靠促销清了一批库存。" },
    ],
  },
  hardtech: {
    businesses: [
      { from: 2010, text: "做工业自动化设备和控制系统，服务电子制造和汽车零部件产线。" },
      { from: 2013, text: "研发工业视觉检测设备，用算法和光学模组替代人工质检。" },
      { from: 2015, text: "做协作机器人本体和控制系统，面向制造业柔性产线。" },
      { from: 2018, text: "做专用芯片和模组，切入车规、工业控制或高端装备供应链。" },
      { from: 2020, text: "做关键材料和传感器，供应新能源、半导体或高端制造客户。" },
    ],
    models: ["设备销售 + 维保服务", "芯片/模组出货 + 授权费", "项目制交付 + 后续耗材", "联合开发 + 长单供货"],
    risks: [
      "技术指标和实验室样机不错，但量产良率、交付周期和售后成本仍未验证。",
      "客户导入周期长，当前订单可能只是测试线，不代表规模化采购。",
      "资本开支重，下一轮融资失败会直接影响产能和研发节奏。",
      "供应链受制于少数上游，关键物料涨价会侵蚀毛利。",
    ],
    diligence: [
      { question: "量产良率是多少？", answer: "小批量良率已经接近客户要求，但放大到千台级后波动明显；生产负责人说问题在工艺窗口，不在设计。" },
      { question: "测试订单到批量订单的转化率如何？", answer: "有几个测试客户反馈不错，但正式采购还要过预算和产线验证，销售周期可能比 BP 多 6-9 个月。" },
      { question: "核心零部件是否有第二供应商？", answer: "关键器件仍依赖一家海外供应商，国产替代样品能跑通，但稳定性数据还不够。" },
    ],
  },
  healthcare: {
    businesses: [
      { from: 2005, text: "做民营专科连锁和体检服务，靠线下网点、医生资源和高客单项目增长。" },
      { from: 2008, text: "做高值耗材或检测产品，切入医院、体检和第三方实验室。" },
      { from: 2012, text: "做移动医疗和预约问诊平台，试图把医生、患者和药企服务连接起来。" },
      { from: 2015, text: "做创新药早期管线，当前处于临床前或 I/II 期阶段。" },
      { from: 2018, text: "做影像辅助诊断软件，卖给医院影像科和区域医联体。" },
      { from: 2020, text: "做慢病管理平台，把院内处方、随访和药品配送连接起来。" },
    ],
    models: ["医院采购 + 年度维护", "药企合作 + 患者服务费", "管线授权 + 里程碑付款", "耗材销售 + 检测服务"],
    risks: [
      "审批和进院周期不确定，销售收入可能比 BP 晚两三年出现。",
      "医保控费和集采会压缩价格，毛利假设需要重新打折。",
      "临床数据样本量有限，真实世界表现可能不如试验结果。",
      "KOL 背书很强，但商业团队尚未证明规模化获客能力。",
    ],
    diligence: [
      { question: "核心适应症的临床终点是什么？", answer: "临床设计看起来合理，但样本量偏紧；专家访谈认为疗效信号值得追，但不能把早期数据当成确定性。" },
      { question: "进院决策链条由谁推动？", answer: "科室主任认可产品价值，采购和信息科仍在排期；销售团队对院内流程的掌控还不算强。" },
      { question: "若价格下降 30%，模型是否还能成立？", answer: "管理层说可以靠规模摊薄成本，但目前毛利安全垫不厚，集采或医保控费会明显影响回收期。" },
    ],
  },
  energy: {
    businesses: [
      { from: 2015, text: "做锂电池材料或结构件，切入动力电池厂和消费电子供应链。" },
      { from: 2016, text: "做充电桩设备和运营，覆盖商场、园区和城市公共停车场。" },
      { from: 2018, text: "做动力电池材料或结构件，切入头部电池厂供应链。" },
      { from: 2020, text: "做工商业储能系统，帮园区削峰填谷并参与需求响应。" },
      { from: 2021, text: "做光储一体化解决方案，面向工厂、商业综合体和县域市场。" },
    ],
    models: ["设备销售 + 运维分成", "材料出货 + 长协订单", "充电服务费 + 能源管理费", "EPC 项目 + 后续运营"],
    risks: [
      "项目收益依赖电价政策和补贴，政策窗口变化会直接改写 IRR。",
      "客户回款慢，账期拉长后会吞噬现金流。",
      "产能扩张太快，若下游需求波动，库存和折旧压力会很重。",
      "安全事故容错率极低，热失控、消防和保险条款必须核实。",
    ],
    diligence: [
      { question: "项目 IRR 对电价差有多敏感？", answer: "模型对峰谷价差很敏感，价差收窄两成后回收期会明显拉长；公司正在用运维分成补一部分。" },
      { question: "应收账款账龄结构如何？", answer: "国央企客户信用好但付款慢，民营客户付款快但议价狠；现金流压力比利润表更真实。" },
      { question: "近一年是否发生过安全事故或召回？", answer: "没有公开事故记录，但有两次现场温控异常；公司说已改 BMS 策略，需要看第三方测试报告。" },
    ],
  },
  ai: {
    businesses: [
      { from: 2020, text: "做计算机视觉质检和安防算法，向园区、工厂和城市项目交付解决方案。" },
      { from: 2021, text: "做智能客服和知识库系统，先从金融、制造、政企客户切入。" },
      { from: 2022, text: "做数据治理和合成数据工具，服务模型训练、评测和安全审计。" },
      { from: 2023, text: "做垂直行业大模型，围绕法律、医药或研发流程提供 Copilot。" },
      { from: 2023, text: "做算力调度和模型推理平台，帮企业降低部署与调用成本。" },
    ],
    models: ["Token 用量费 + 企业订阅", "私有化部署 + 咨询实施", "算力差价 + 平台服务费", "数据工具授权 + 项目服务"],
    risks: [
      "Demo 很惊艳，但付费场景可能只是试点，尚未形成预算科目。",
      "模型能力迭代太快，护城河可能不在模型，而在数据和工作流嵌入。",
      "推理成本高，毛利会被算力价格和客户并发需求反复挤压。",
      "数据合规和幻觉责任边界不清，进入强监管行业会被拉长周期。",
    ],
    diligence: [
      { question: "客户是否已经从试点转正式采购？", answer: "有几家客户签了正式合同，但金额不大；最大客户还在 POC，预算归属没有完全确定。" },
      { question: "每 1 元收入对应多少推理成本？", answer: "低并发场景毛利还可以，一旦客户高频调用，算力成本会明显吃掉毛利；团队正在做模型压缩。" },
      { question: "专有数据和流程嵌入有多深？", answer: "产品能接进客户内部流程，但训练数据多数来自客户侧，公司的可迁移壁垒主要在实施经验。" },
    ],
  },
};

const eventDeck = [
  {
    title: "合伙人问你要不要跟投老朋友",
    category: "关系",
    description: "项目一般，但创始人是你最早认识的连续创业者。拒绝会伤感情，跟投会占用今年弹药。",
    choices: [
      { text: "小额跟投，保留关系", effects: { network: 8, aum: -4, health: -1 }, note: "你没有完全相信这个项目，但你相信长期关系的复利。" },
      { text: "直接拒绝，把话说清楚", effects: { network: -5, track: 4, health: 2 }, note: "短期尴尬，长期清爽。你发现说“不”也需要训练。" },
    ],
  },
  {
    title: "行业论坛给你一个圆桌席位",
    category: "声量",
    description: "台上都是大佬。你可以讲真话，也可以讲一些更容易被传播的话。",
    choices: [
      { text: "讲判断，少讲口号", effects: { track: 5, network: 3, health: -1 }, note: "掌声不大，但会后有人认真找你聊了二十分钟。" },
      { text: "输出金句，迅速出圈", effects: { network: 10, track: -2, health: -2 }, note: "朋友圈刷屏了，你也开始被更多人误解。" },
    ],
  },
  {
    title: "一个明星项目要求 48 小时内给 TS",
    category: "速度",
    description: "所有基金都在抢。你的尽调还没做完，窗口却正在关闭。",
    choices: [
      { text: "先抢额度，边投边看", effects: { aum: -6, network: 5, health: -3 }, note: "你上车了，也失眠了。" },
      { text: "坚持尽调，不追热闹", effects: { track: 6, network: -3, health: 3 }, note: "错过项目很难受，但你的投资纪律活了下来。" },
    ],
  },
  {
    title: "LP 要求你解释上一笔亏损",
    category: "募资",
    description: "会议室很安静。比起漂亮话，他们更想知道你学到了什么。",
    choices: [
      { text: "复盘错误，承认判断偏差", effects: { track: 7, aum: 4, health: -1 }, note: "诚实不是万能的，但这一次它帮你留住了信任。" },
      { text: "强调外部环境，弱化责任", effects: { aum: -5, network: -3, health: 2 }, note: "你躲过了追问，也错过了一次建立信任的机会。" },
    ],
  },
  {
    title: "董事总经理把你的项目划给了别人",
    category: "办公室政治",
    description: "项目是你最早看的，但临门一脚被更资深的人接走。你可以争，也可以忍。",
    choices: [
      { text: "在周会上把贡献说清楚", effects: { network: -4, track: 3, career: 8, health: -1 }, note: "你没有撕破脸，但所有人都知道这件事不是凭空发生的。" },
      { text: "暂时忍下，换取下次主导权", effects: { network: 5, career: 4, health: -1 }, note: "你把委屈记进了工作笔记，也换来合伙人的一个口头承诺。" },
      { text: "接受一家创业公司的战投 Offer", effects: { careerExit: "corpdev", health: 8 }, note: "你离开基金，去企业做战略投资。牌桌换了，游戏也换了。", riskyExit: true },
    ],
  },
  {
    title: "新合伙人空降",
    category: "办公室政治",
    description: "他带来一套新的打法，也带来一批自己人。你的项目排期被往后挪了。",
    choices: [
      { text: "主动靠过去，学习他的打法", effects: { network: 6, career: 5, health: -1 }, note: "你不喜欢这种姿态，但你承认他确实知道怎么赢内部资源。" },
      { text: "守住自己的赛道，不站队", effects: { track: 4, network: -5, health: -1 }, note: "你保住了判断独立性，也暂时失去了一些会议室里的盟友。" },
      { text: "转去产业方做投资负责人", effects: { careerExit: "industry", health: 10 }, note: "你不再追逐财务回报的神话，开始用产业逻辑看项目。", riskyExit: true },
    ],
  },
  {
    title: "LP 私下约你喝咖啡",
    category: "办公室政治",
    description: "对方暗示，如果你出来做一支小基金，他们愿意做基石出资人。",
    choices: [
      { text: "婉拒，继续留在平台内打磨业绩", effects: { career: 6, network: 4, health: -1 }, note: "你把诱惑放进抽屉里，决定先把当前基金的牌打完。" },
      { text: "认真聊下去，准备独立募资", effects: { careerMove: "solo", aum: 36, network: 8, health: -2 }, note: "你离开原平台，开始写自己的第一版募资材料，第一支小基金也有了基石弹药。" },
    ],
  },
];

const careerEventDeck = [
  {
    title: "投委会后，管理合伙人单独留下你",
    category: "职业机会",
    description: "过去几笔项目的表现开始被内部讨论。这个位置不是进度条攒出来的，而是有人愿意把资源交到你手上。",
    choices: [
      { text: "接受晋升，接更多盘子", effects: { careerMove: "partner", aum: 24, network: 6, health: -2 }, note: "你升为合伙人，账上多了一块可调配额度，也多了一串晚上十点后的电话。" },
      { text: "继续做案子，不急着坐上去", effects: { track: 4, career: 5, health: 2 }, note: "你没有立刻换头衔，但几个关键项目仍然留在你手里。" },
    ],
    minYear: 2011,
    requires: (s) => s.role !== "合伙人" && s.role !== "创始合伙人",
  },
  {
    title: "另一家 VC 递来 Offer",
    category: "职业机会",
    description: "他们看中了你的项目判断，也愿意给你更大的出手权限。代价是重新建立内部信任。",
    choices: [
      { text: "跳去新平台，换一支基金打", effects: { careerMove: "vc_offer", aum: 34, network: -4, health: 4 }, note: "你换到一家更激进的基金，弹药变多，关系网络却要重新缝合。" },
      { text: "留下来，用 Offer 换资源", effects: { aum: 12, network: 5, career: 6, health: -1 }, note: "你没有走，但合伙人终于愿意把一部分额度放到你手里。" },
    ],
    minYear: 2010,
    requires: () => true,
  },
  {
    title: "LP 问你要不要自己出来做",
    category: "职业机会",
    description: "对方不承诺无限弹药，只承诺一张小支票和几次引荐。真正的风险变成了你的名字。",
    choices: [
      { text: "独立出来，成立小基金", effects: { careerMove: "solo", aum: 48, network: 7, health: -4 }, note: "你成了创始合伙人。AUM 不算大，但每一笔投资都真正写着你的名字。" },
      { text: "先不出来，继续积累退出案例", effects: { track: 5, career: 5, health: 1 }, note: "你把冲动按住，决定等更多项目退出后再谈自己的旗号。" },
    ],
    minYear: 2013,
    requires: (s) => s.track >= 58 || s.network >= 62,
  },
];

const investorComments = {
  pre: [
    "一位早期投资人看完材料后说：这个项目不是没有风险，但如果判断对了，赔率来自时点。",
    "某美元基金合伙人在会后提醒：别只看增长，先看它是不是靠融资买出来的增长。",
    "一位消费投资人评价：品牌声量不等于复购，渠道健康比故事更重要。",
    "某硬科技投资人说：样机能跑和量产能交付，中间隔着一整家公司。",
    "一位老 VC 的备注写着：创始人如果能连续三年不变形，这家公司才真正开始值钱。",
    "某知名投资人风格的点评：这类机会，贵不是问题，贵且不可证伪才是问题。",
  ],
  post: [
    "退出后，一位老合伙人只说了一句：当年真正难的不是投进去，是敢等。",
    "某 LP 复盘时评价：这笔案子教会我们的东西，比账面回报还贵。",
    "一位同行笑着说：所有人都看过，只是少数人真的下了手。",
    "投后会上有人感叹：这家公司最后证明，增长质量比增长速度更难得。",
    "一位资深投资人复盘：失败不是因为风险没看见，而是看见了还低估了它。",
  ],
};

const endingTitles = [
  { title: "最后弹药", test: (s) => s.endingReason === "aum_depleted" && s.track >= 55 },
  { title: "弹尽粮绝", test: (s) => s.endingReason === "aum_depleted" },
  { title: "败局复盘", test: (s) => s.endingReason === "loss_spiral" && s.network >= 55 },
  { title: "满盘皆输", test: (s) => s.endingReason === "loss_spiral" },
  { title: "创业幕僚", test: (s) => s.careerExit === "corpdev" },
  { title: "产业棋手", test: (s) => s.careerExit === "industry" },
  { title: "新山头", test: (s) => s.role === "创始合伙人" && s.aum >= 90 },
  { title: "独立掌柜", test: (s) => s.role === "创始合伙人" && s.track >= 60 },
  { title: "小基金", test: (s) => s.role === "创始合伙人" },
  { title: "缺席者", test: (s) => s.health <= 35 && s.track >= 70 },
  { title: "失眠冠军", test: (s) => s.health <= 25 && s.aum >= 80 },
  { title: "投资教父", test: (s) => s.track >= 88 && s.aum >= 110 },
  { title: "白衣骑士", test: (s) => s.track >= 82 && s.network >= 75 && s.health >= 55 },
  { title: "泡沫猎人", test: (s) => s.track >= 78 && s.aum < 75 },
  { title: "江湖传说", test: (s) => s.network >= 86 && s.track >= 72 },
  { title: "饭局中心", test: (s) => s.network >= 88 && s.track < 65 },
  { title: "募资机器", test: (s) => s.aum >= 125 },
  { title: "合伙人", test: (s) => s.role === "合伙人" && s.track >= 72 },
  { title: "关键先生", test: (s) => s.role === "合伙人" && s.network >= 72 },
  { title: "案头手艺", test: (s) => s.track >= 78 },
  { title: "长线等待", test: (s) => s.investments.filter((item) => item.status === "pending").length >= 4 },
  { title: "错失风口", test: (s) => s.investments.length <= 4 && s.aum >= 55 },
  { title: "保守派", test: (s) => s.investments.length <= 6 && s.health >= 75 },
  { title: "投后苦旅", test: (s) => s.investments.filter((item) => item.status === "pending").length >= 3 && s.health < 55 },
  { title: "体面退场", test: (s) => s.health <= 20 && s.track >= 55 },
  { title: "隐退者", test: (s) => s.health <= 20 },
  { title: "普通合伙", test: (s) => s.role === "合伙人" },
  { title: "周期学生", test: (s) => s.track >= 60 },
  { title: "朋友圈", test: (s) => s.network >= 70 },
  { title: "守夜人", test: (s) => s.health < 45 },
  { title: "慢变量", test: (s) => s.aum >= 70 },
  { title: "幸存者", test: (s) => s.year >= END_YEAR },
  { title: "老兵", test: () => true },
];

let state = freshState();

function freshState() {
  return {
    phase: "title",
    year: START_YEAR,
    role: "投资经理",
    partnerYear: null,
    aum: 45,
    track: 50,
    network: 42,
    health: 100,
    career: 0,
    careerExit: null,
    careerEvent: null,
    careerResult: null,
    pendingYearAdvance: false,
    yearsWithoutInvestment: 0,
    endingReason: null,
    selected: [],
    projects: [],
    investments: [],
    yearLog: [],
    chronicle: [],
    event: null,
    eventResult: null,
    lastResults: [],
    seenCompanies: [],
    lastHealthNote: null,
  };
}

function eraFor(year) {
  return eras.find((era) => year >= era.from && year <= era.to) || eras[eras.length - 1];
}

function clamp(value, min = 0, max = 150) {
  return Math.max(min, Math.min(max, value));
}

function money(value) {
  return `${Math.round(value)}M`;
}

function isPartnerRole() {
  return state.role === "合伙人" || state.role === "创始合伙人";
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function applyEffects(effects) {
  state.aum = clamp(state.aum + (effects.aum || 0));
  state.track = clamp(state.track + (effects.track || 0));
  state.network = clamp(state.network + (effects.network || 0));
  state.health = clamp(state.health + (effects.health || 0), 0, 100);
  state.career = clamp(state.career + (effects.career || 0), 0, 100);
  if (effects.careerExit) state.careerExit = effects.careerExit;
  if (effects.careerMove) applyCareerMove(effects.careerMove);
}

function applyCareerMove(move) {
  if (move === "partner" && state.role !== "合伙人") {
    state.role = "合伙人";
    state.partnerYear = state.year + 1;
    state.career = clamp(state.career + 12, 0, 100);
    return;
  }
  if (move === "vc_offer") {
    state.role = state.role === "投资经理" ? "投资副总裁" : state.role;
    state.partnerYear = null;
    state.career = clamp(state.career + 8, 0, 100);
    return;
  }
  if (move === "solo") {
    state.role = "创始合伙人";
    state.partnerYear = state.year + 1;
    state.career = clamp(state.career + 16, 0, 100);
  }
}

function generateProjects() {
  const era = eraFor(state.year);
  const count = isPartnerRole() ? 5 : 3;
  const availableSectors = era.available;
  const hotSectors = era.hot.filter((sector) => availableSectors.includes(sector));
  const usedNames = new Set(state.seenCompanies);
  const usedDiligenceQuestions = new Set();
  const projects = [];
  for (let index = 0; index < count; index += 1) {
    const sector = pickProjectSector(hotSectors, availableSectors, usedNames);
    if (!sector) break;
    const heat = era.hot.includes(sector) ? rand(62, 92) : rand(36, 74);
    const team = rand(35, 95);
    const moat = rand(25, 96);
    const valuation = rand(28, 96);
    const dealTerms = buildDealTerms(state.year, sector, valuation);
    const valuationText = formatValuation(dealTerms.preMoney);
    const amount = dealTerms.amount;
    const risk = Math.round((valuation + era.risk - moat) / 2);
    const metrics = { heat, team, moat, valuation, risk };
    const memo = buildProjectMemo(sector, metrics, usedDiligenceQuestions);
    const company = uniqueProjectCompany(sector, usedNames);
    if (!company) break;
    const lead = canLeadProject(amount, metrics);
    projects.push({
      id: `${state.year}-${sector}-${index}`,
      name: company.name,
      companyFrom: company.from,
      companyTo: company.to,
      sector,
      heat,
      team,
      moat,
      valuation,
      preMoney: dealTerms.preMoney,
      ownership: dealTerms.ownership,
      valuationText,
      risk,
      amount,
      lead,
      thesis: thesisFor(sector, heat, valuation),
      business: memo.business,
      model: memo.model,
      warnings: memo.warnings,
      diligence: memo.diligence,
      investorComment: Math.random() < 0.28 ? pick(investorComments.pre) : null,
    });
  }
  ensureAffordableOpportunity(projects);
  state.seenCompanies = [...new Set([...state.seenCompanies, ...projects.map((project) => project.name)])];
  return projects;
}

function ensureAffordableOpportunity(projects) {
  if (state.yearsWithoutInvestment < 1 || state.aum < minInvestmentCheck() || projects.some((project) => project.amount <= state.aum)) return;
  const project = projects
    .filter((item) => item.preMoney > minInvestmentCheck())
    .sort((a, b) => a.amount - b.amount)[0];
  if (!project) return;
  const amount = Math.min(Math.floor(state.aum), Math.max(minInvestmentCheck(), Math.floor(project.preMoney * 0.12)));
  if (amount >= project.preMoney) return;
  project.amount = amount;
  project.ownership = amount / (project.preMoney + amount);
  project.lead = false;
  project.thesis = `${project.thesis} 这一轮留出了一小块跟投额度，给上一年没有出手的人一点窗口。`;
}

function minInvestmentCheck() {
  return isPartnerRole() ? 8 : 5;
}

function canLeadProject(amount, metrics) {
  const roleBase = isPartnerRole() ? 0.58 : 0.22;
  const capitalFit = state.aum >= amount * 8 ? 0.14 : state.aum >= amount * 5 ? 0.06 : -0.1;
  const relationshipFit = state.network >= 60 ? 0.08 : state.network < 38 ? -0.08 : 0;
  const reputationFit = state.track >= 65 ? 0.06 : state.track < 42 ? -0.06 : 0;
  const dealSizeFit = amount <= 10 ? 0.08 : amount >= 24 ? -0.1 : 0;
  const hotDealPenalty = metrics.heat > 82 && !isPartnerRole() ? -0.08 : 0;
  const probability = clamp(roleBase + capitalFit + relationshipFit + reputationFit + dealSizeFit + hotDealPenalty, 0.08, 0.82);
  return Math.random() < probability;
}

function buildDealTerms(year, sector, pressure) {
  const eraBase = year < 2010 ? 18 : year < 2015 ? 55 : year < 2020 ? 180 : 320;
  const sectorMultiplier = {
    internet: 1.1,
    consumer: 0.85,
    hardtech: 1.25,
    healthcare: 1.35,
    energy: 1.45,
    ai: 1.7,
  }[sector];
  const pressureMultiplier = 0.65 + pressure / 65;
  const preMoney = Math.max(12, Math.round(eraBase * sectorMultiplier * pressureMultiplier));
  const ownership = (isPartnerRole() ? rand(12, 25) : rand(10, 20)) / 100;
  const rawAmount = Math.round(preMoney * ownership);
  const maxCheck = Math.max(isPartnerRole() ? 30 : 16, Math.floor(state.aum * (isPartnerRole() ? 0.34 : 0.3)));
  const minCheck = minInvestmentCheck();
  const amount = clamp(rawAmount, minCheck, Math.min(maxCheck, Math.floor(preMoney * 0.28)));
  return { preMoney, amount, ownership: amount / (preMoney + amount) };
}

function formatValuation(value) {
  if (value < 100) return `投前估值约 ${value}M 美元`;
  return `投前估值约 ${(value / 100).toFixed(value >= 1000 ? 0 : 1)} 亿美元`;
}

function pickProjectSector(hotSectors, availableSectors, usedNames) {
  const sectorsWithCompanies = availableSectors.filter((sector) => liveUnseenCompanies(sector, usedNames).length > 0);
  if (!sectorsWithCompanies.length) return null;
  const hotWithCompanies = hotSectors.filter((sector) => sectorsWithCompanies.includes(sector));
  return Math.random() < 0.68 && hotWithCompanies.length ? pick(hotWithCompanies) : pick(sectorsWithCompanies);
}

function uniqueProjectCompany(sector, usedNames) {
  const candidates = liveUnseenCompanies(sector, usedNames);
  if (!candidates.length) return null;
  const company = pick(candidates);
  usedNames.add(company.name);
  return company;
}

function liveUnseenCompanies(sector, usedNames) {
  return companyCatalog[sector].filter((company) => company.from <= state.year && state.year <= company.to && !usedNames.has(company.name));
}

function buildProjectMemo(sector, metrics, usedDiligenceQuestions = new Set()) {
  const profile = projectProfiles[sector];
  const warnings = [pick(profile.risks)];
  if (metrics.valuation > 76) warnings.push("本轮估值明显提前反映未来增长，一旦增速放缓，下轮融资会很难定价。");
  if (metrics.risk > 58) warnings.push("建议把管理层访谈、客户电话和财务底稿放在同一优先级。");
  if (metrics.moat < 45) warnings.push("当前壁垒主要来自先发和执行，尚未看到强专利、网络效应或供应链锁定。");
  if (metrics.team < 50) warnings.push("团队履历与目标市场之间存在缺口，需要确认是否能招到关键岗位。");

  return {
    business: pickAvailable(profile.businesses, state.year),
    model: pick(profile.models),
    warnings: [...new Set(warnings)].slice(0, 3),
    diligence: buildDiligenceFinding(profile, metrics, usedDiligenceQuestions),
  };
}

function buildDiligenceFinding(profile, metrics, usedDiligenceQuestions) {
  const contextual = [];
  if (metrics.valuation > 78) {
    contextual.push({
      question: "这轮估值是不是已经透支了下一轮？",
      answer: "按公司给的收入预测，下一轮需要继续保持高速增长才好看；如果增长放缓，后续融资大概率要靠更苛刻条款补偿。",
    });
  }
  if (metrics.moat < 48) {
    contextual.push({
      question: "客户为什么不能换一家供应商？",
      answer: "客户访谈里更多提到响应速度和价格，而不是不可替代能力；现阶段黏性主要来自服务强度，不是结构性锁定。",
    });
  }
  if (metrics.team < 52) {
    contextual.push({
      question: "团队短板会不会影响下一阶段扩张？",
      answer: "创始人对产品和客户很熟，但财务、组织和大客户销售还偏早期；下一轮钱里很大一部分得用来补管理层。",
    });
  }
  if (metrics.heat > 82) {
    contextual.push({
      question: "是不是大家都在抢导致判断变形？",
      answer: "同赛道最近两个月明显变热，几家基金都在催 TS；项目本身有亮点，但价格和节奏已经被市场情绪推了一把。",
    });
  }
  if (metrics.risk > 60) {
    contextual.push({
      question: "有没有一个会让模型彻底失效的变量？",
      answer: "最敏感的变量不是收入增速，而是回款和交付周期；只要其中一个拉长，现金流压力会比 BP 里表现得更早。",
    });
  }
  const findings = [...profile.diligence, ...contextual];
  const freshFindings = findings.filter((finding) => !usedDiligenceQuestions.has(finding.question));
  const finding = pick(freshFindings.length ? freshFindings : findings);
  usedDiligenceQuestions.add(finding.question);
  return finding;
}

function pickAvailable(items, year) {
  const available = items.filter((item) => item.from <= year);
  return pick(available.length ? available : items).text;
}

function thesisFor(sector, heat, valuation) {
  const heatText = heat > 75 ? "市场窗口很热，融资节奏可能会推着估值继续走。" : "市场还没有完全形成共识，价格相对克制。";
  const valueText = valuation > 74 ? "价格不便宜，你需要相信它能长成更大的故事。" : "估值留有余地，容错率比同赛道项目高。";
  return `${sectors[sector]}赛道。${heatText}${valueText}`;
}

function rand(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function startYear() {
  state.selected = [];
  state.yearLog = [];
  state.lastResults = matureInvestments();
  state.projects = generateProjects();
  state.event = Math.random() < 0.62 ? pickYearEvent() : null;
  state.phase = state.lastResults.length ? "portfolio" : state.event ? "event" : "brief";
  render();
}

function pickYearEvent() {
  const candidates = eventDeck.filter((event) => {
    const hasRiskyExit = event.choices.some((choice) => choice.riskyExit);
    if (!hasRiskyExit) return true;
    return Math.random() < 0.42;
  });
  return pick(candidates.length ? candidates : eventDeck);
}

function matureInvestments() {
  const matured = state.investments.filter((item) => item.status === "pending" && shouldExitInvestment(item));
  matured.forEach((item) => {
    const era = eraFor(item.year);
    const hotBonus = era.hot.includes(item.sector) ? 12 : -4;
    const entryAge = item.companyFrom ? item.year - item.companyFrom : 2;
    const timingBonus = entryAge <= 1 ? rand(-10, 18) : entryAge >= 5 ? -8 : 4;
    const exitAge = state.year - item.year;
    const patienceBonus = exitAge >= 5 ? 5 : 0;
    const signal = item.team * 0.28 + item.moat * 0.28 + item.heat * 0.14 - item.valuation * 0.24 - item.risk * 0.2 + hotBonus + timingBonus + patienceBonus + rand(-34, 16) - 8;
    let multiple;
    let outcome;
    if (signal >= 70) {
      multiple = rand(80, 220) / 10;
      outcome = "huge";
    } else if (signal >= 48) {
      multiple = rand(20, 55) / 10;
      outcome = "good";
    } else if (signal >= 30) {
      multiple = rand(6, 13) / 10;
      outcome = "flat";
    } else {
      multiple = rand(0, 5) / 10;
      outcome = "fail";
    }
    item.status = "resolved";
    item.multiple = multiple;
    item.outcome = outcome;
    item.exitYear = state.year;
    item.exitAge = exitAge;
    item.postComment = Math.random() < 0.35 ? pick(investorComments.post) : null;
    const gain = item.amount * multiple - item.amount;
    applyEffects({
      aum: gain * 0.65,
      track: outcome === "huge" ? 18 : outcome === "good" ? 9 : outcome === "flat" ? 0 : -12,
      network: outcome === "huge" ? 9 : outcome === "fail" ? -5 : 2,
      health: outcome === "fail" ? -1 : outcome === "huge" ? 2 : 0,
      career: outcome === "huge" ? 20 : outcome === "good" ? 10 : outcome === "flat" ? 2 : -4,
    });
  });
  return matured;
}

function shouldExitInvestment(item) {
  const age = state.year - item.year;
  if (state.year >= END_YEAR) return true;
  if (age < 2) return false;
  const probabilities = { 2: 0.15, 3: 0.28, 4: 0.42, 5: 0.6 };
  const probability = probabilities[age] || 0.78;
  return Math.random() < probability;
}

function invest(projectId) {
  const maxDeals = isPartnerRole() ? 3 : 1;
  if (state.selected.length >= maxDeals) return;
  const project = state.projects.find((item) => item.id === projectId);
  if (!project || state.aum < project.amount) return;
  state.selected.push(projectId);
  state.aum = clamp(state.aum - project.amount);
  const pressure = dealPressureEvent(project);
  if (pressure) state.health = clamp(state.health - pressure.value, 0, 100);
  state.career = clamp(state.career + (project.lead ? 3 : 1), 0, 100);
  state.investments.push({
    ...project,
    year: state.year,
    exitYear: null,
    exitAge: null,
    status: "pending",
    multiple: null,
    outcome: null,
  });
  state.yearLog.push(`投了「${project.name}」：${project.lead ? "领投" : "跟投"} ${money(project.amount)}。退出时间不确定，只能等市场窗口自己打开。`);
  if (pressure) state.yearLog.push(`健康 -${pressure.value}：${pressure.reason}`);
  render();
}

function dealPressureEvent(project) {
  const chance = project.lead ? 0.38 : 0.18;
  if (Math.random() > chance) return null;
  const reasons = [
    `为「${project.name}」连夜改 IC 材料，第二天还要陪合伙人见创始人。`,
    `「${project.name}」的条款反复拉扯，你在律师、财务顾问和创始人之间来回传话。`,
    `这个项目窗口很窄，你压缩了客户电话和行业访谈的时间，心里始终不踏实。`,
    `创始人临时改融资节奏，你的周末被尽调清单和数据室吃掉。`,
  ];
  return { value: project.lead ? rand(1, 3) : rand(1, 2), reason: pick(reasons) };
}

function resolveEvent(choiceIndex) {
  const choice = state.event.choices[choiceIndex];
  const before = snapshotMetrics();
  applyEffects(choice.effects);
  const after = snapshotMetrics();
  const changes = metricChanges(before, after);
  state.eventResult = {
    title: state.event.title,
    note: choice.note,
    changes,
  };
  state.yearLog.push(`事件「${state.event.title}」：${choice.note}${changes.length ? `（${changes.map((item) => `${item.label} ${formatDelta(item.delta)}`).join("，")}）` : ""}`);
  if (state.careerExit) state.yearLog.push("你的职业路径发生改变，这一年成为投资生涯的分岔口。");
  state.event = null;
  state.phase = "eventResult";
  render();
}

function snapshotMetrics() {
  return {
    aum: Math.round(state.aum),
    track: Math.round(state.track),
    network: Math.round(state.network),
    health: Math.round(state.health),
    career: Math.round(state.career),
  };
}

function metricChanges(before, after) {
  const labels = { aum: "AUM", track: "业绩", network: "关系", health: "健康", career: "职业筹码" };
  return Object.keys(labels)
    .map((key) => ({ key, label: labels[key], before: before[key], after: after[key], delta: after[key] - before[key] }))
    .filter((item) => item.delta !== 0);
}

function formatDelta(delta) {
  return `${delta > 0 ? "+" : ""}${delta}`;
}

function endSelection() {
  state.phase = "review";
  render();
}

function advanceYear() {
  const invested = state.investments.filter((item) => item.year === state.year);
  const pending = state.investments.filter((item) => item.status === "pending" && item.year < state.year);
  const era = eraFor(state.year);
  const healthCosts = healthCostBreakdown(invested, pending);
  const annualBurn = healthCosts.reduce((sum, item) => sum + item.value, 0);
  state.health = clamp(state.health - annualBurn, 0, 100);
  const funding = annualFundingChange(invested);
  if (funding.value !== 0) applyEffects({ aum: funding.value });
  state.yearsWithoutInvestment = invested.length ? 0 : state.yearsWithoutInvestment + 1;
  state.lastHealthNote = annualBurn > 0 ? {
    year: state.year,
    burn: annualBurn,
    reasons: healthCosts.map((item) => item.reason),
  } : null;
  state.chronicle.push({
    year: state.year,
    era: era.name,
    lines: [
      `${era.name}：${era.theme}`,
      ...state.yearLog,
      invested.length ? `这一年新增 ${invested.length} 笔投资。` : "这一年你没有出手，把判断留给了下一年。",
      funding.reason,
      annualBurn > 0 ? `健康 -${annualBurn}：${healthCosts.map((item) => item.reason).join("；")}。` : "这一年你难得把节奏放慢，身体没有继续透支。",
    ],
  });

  if (state.careerExit) {
    state.phase = "ending";
    render();
    return;
  }

  const careerEvent = rollCareerEvent();
  if (careerEvent) {
    state.event = careerEvent;
    state.pendingYearAdvance = true;
    state.phase = "event";
    render();
    return;
  }

  continueToNextYearOrEnd();
}

function continueToNextYearOrEnd() {
  const endReason = terminalReason();
  if (endReason) {
    state.endingReason = endReason;
    state.phase = "ending";
    render();
    return;
  }
  if (state.year >= END_YEAR || state.health <= 0) {
    if (state.health <= 0) state.endingReason = "health";
    state.phase = "ending";
    render();
    return;
  }

  state.year += 1;
  startYear();
}

function annualFundingChange(invested) {
  let value = Math.round((state.track - 50) * 0.1 + (state.network - 45) * 0.08 - (state.health < 30 ? 4 : 0));
  const notes = [];
  if (value > 0) notes.push(`业绩和关系带来 LP 信任，AUM +${value}`);
  if (value < 0) notes.push(`募资口碑承压，AUM ${value}`);
  if (state.aum < 22 && (state.track >= 58 || state.network >= 62)) {
    const bridge = rand(8, 16);
    value += bridge;
    notes.push(`账上偏紧，但过往判断还被认可，平台追加保留额度 AUM +${bridge}`);
  }
  if (!invested.length && state.aum < 18 && state.network >= 50) {
    const reserve = rand(4, 10);
    value += reserve;
    notes.push(`你没有乱投，反而争取到一笔小额机动资金 AUM +${reserve}`);
  }
  if (!notes.length) return { value: 0, reason: "LP 和平台没有明显追加，也没有继续收紧弹药。" };
  return { value, reason: `${notes.join("；")}。` };
}

function rollCareerEvent() {
  if (state.year < 2010) return null;
  const successCount = state.investments.filter((item) => item.outcome === "huge" || item.outcome === "good").length;
  const chance = clamp(0.04 + Math.max(0, state.track - 50) * 0.006 + Math.max(0, state.network - 45) * 0.004 + state.career * 0.004 + successCount * 0.025, 0.04, 0.48);
  if (Math.random() > chance) return null;
  const candidates = careerEventDeck.filter((event) => state.year >= event.minYear && event.requires(state));
  return candidates.length ? pick(candidates) : null;
}

function terminalReason() {
  const pending = state.investments.filter((item) => item.status === "pending").length;
  const failures = state.investments.filter((item) => item.outcome === "fail").length;
  const resolved = state.investments.filter((item) => item.status === "resolved").length;
  if (state.aum < minInvestmentCheck() + 1 && pending === 0) return "aum_depleted";
  if (resolved >= 4 && failures >= Math.max(4, Math.ceil(resolved * 0.8)) && state.track < 30) return "loss_spiral";
  return null;
}

function healthCostBreakdown(invested, pending) {
  const costs = [];
  costs.push({
    value: isPartnerRole() ? 1 : 0,
    reason: isPartnerRole() ? "合伙人会、LP 沟通和团队管理占掉精力" : "项目会、周报和合伙人追问带来基础消耗",
  });
  if (invested.length) {
    const dealCost = isPartnerRole() && invested.length >= 3 ? 1 : 0;
    if (dealCost > 0) {
      costs.push({
        value: dealCost,
        reason: `${invested.length} 个新项目带来出差尽调、IC 材料和条款谈判`,
      });
    }
  }
  if (pending.length >= 3) {
    const pendingCost = Math.min(2, Math.floor(pending.length / 4));
    if (pendingCost > 0) {
      costs.push({
        value: pendingCost,
        reason: `${pending.length} 个在管项目需要投后跟进、融资撮合和创始人情绪劳动`,
      });
    }
  }
  if (state.aum < 25) {
    costs.push({ value: 3, reason: "账上弹药偏紧，募资和内部压力开始影响睡眠" });
  }
  if (state.track < 40) {
    costs.push({ value: 2, reason: "近期业绩不好，每次复盘都像重新拆一遍伤口" });
  }
  return costs;
}

function restart() {
  state = freshState();
  render();
}

function ending() {
  const endingTitle = endingTitles.find((item) => item.test(state));
  const sector = dominantSector();
  const best = bestInvestment();
  const worst = worstInvestment();
  const careerLine = careerEndingLine();
  const lifeLine = lifeEndingLine();
  const socialLine = socialEndingLine();
  const bestLine = best ? `你最亮的一笔是 ${best.year} 年投出的「${best.name}」，退出时拿到 ${best.multiple.toFixed(1)}x。` : "你没有等到一笔真正意义上的退出。";
  const worstLine = worst && worst.outcome === "fail" ? `你也记得「${worst.name}」：它没有毁掉你，但让你重新理解了“风险自担”四个字。` : "那些没有爆发的项目，也悄悄改变了你的判断方式。";
  return {
    title: endingTitle.title,
    description: `${careerLine}\n${lifeLine}\n${socialLine}\n你最熟悉的是${sectors[sector] || "多赛道"}项目。\n${bestLine}\n${worstLine}`,
  };
}

function careerEndingLine() {
  if (state.endingReason === "aum_depleted") return "基金弹药耗尽，账上剩余资金已经不足以支撑下一笔像样的出手。你不是被市场开除，而是被现金流请出了牌桌。";
  if (state.endingReason === "loss_spiral") return "连续几笔退出没有给出回报，LP 失去耐心，内部也不再愿意把新项目交到你手里。";
  if (state.careerExit === "corpdev") return "你没有继续留在基金，而是转去企业做战略投资，开始用另一种方式理解资本。";
  if (state.careerExit === "industry") return "你离开财务投资路径，进入产业方，项目不再只是回报曲线，也是业务拼图。";
  if (state.careerExit === "solo") return "你离开原平台，开始独立募资。没有大机构的光环，也没有大机构的保护。";
  if (state.role === "创始合伙人") return `你在 ${state.partnerYear} 年独立出来做自己的基金，开始同时管理项目、LP 和机构声誉。`;
  if (state.role === "合伙人") return `你在 ${state.partnerYear} 年升为合伙人，终于从看项目的人变成分配资源的人。`;
  if (state.health <= 20) return "你的身体比投资组合更早发出预警，最后你选择停下来。";
  return "你没有成为最响亮的人，但你在漫长周期里留下了自己的判断。";
}

function lifeEndingLine() {
  const totalDeals = state.investments.length;
  if (state.health <= 25 && totalDeals >= 10) return "家人记得你很多次在饭桌上接起电话，也记得你后来开始学着把手机反扣在桌面。";
  if (state.health <= 35) return "这份工作没有只消耗工作日，它也偷走了一些睡眠、周末和本来可以慢慢说完的话。";
  if (state.role === "创始合伙人") return "你把家里的安全感也押进了新基金，庆功宴和现金流压力常常在同一天出现。";
  if (state.investments.length <= 5 && state.health >= 70) return "你没有把每个机会都变成战役，生活因此保留了一点正常的形状。";
  if (state.track >= 80) return "身边人未必懂每一个项目，但他们知道你终于等到了一些迟来的证明。";
  return "你学会在机场、会议室和深夜出租车之间切换，也学会承认生活不是投资组合的附属品。";
}

function socialEndingLine() {
  if (state.network >= 86 && state.track >= 72) return "行业里有人把你讲成故事，也有人把你当成饭局上的样本，夸张和误读一起流传。";
  if (state.network >= 82) return "你在行业里的名字越来越常被提起，只是声量有时比真实业绩跑得更快。";
  if (state.track >= 85) return "媒体喜欢把你的判断写成天赋，但只有你知道那里面有多少错过、等待和不确定。";
  if (state.endingReason === "loss_spiral") return "市场不会认真记住每一次失败的理由，它只会把结果压缩成几句传闻。";
  if (state.endingReason === "aum_depleted") return "外界看见的是基金没钱了，你看见的是每一次没有退出的时间成本。";
  if (state.health <= 30) return "朋友说你越来越少出现，行业却觉得你一直在线，这可能就是这份工作的悖论。";
  return "在更大的社会叙事里，你只是资本周期里的一名参与者；但每一次出手，都真实改变过一些公司和一些人。";
}

function dominantSector() {
  const counts = {};
  for (const item of state.investments) counts[item.sector] = (counts[item.sector] || 0) + 1;
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "internet";
}

function bestInvestment() {
  return state.investments
    .filter((item) => item.multiple !== null)
    .sort((a, b) => b.multiple - a.multiple)[0] || null;
}

function worstInvestment() {
  return state.investments
    .filter((item) => item.multiple !== null)
    .sort((a, b) => a.multiple - b.multiple)[0] || null;
}

function shell(content) {
  const roleLine = isPartnerRole() && state.partnerYear ? `${state.role} · ${state.partnerYear} 年开始` : state.role;
  return `
    <section class="screen">
      <header class="topbar">
        <div>
          <div class="year">${state.year} 年</div>
          <div class="role">${roleLine} · ${eraFor(state.year).name}</div>
        </div>
        <div class="meters">
          ${meter("AUM", Math.round(state.aum))}
          ${meter("业绩", Math.round(state.track))}
          ${meter("关系", Math.round(state.network))}
          ${meter("健康", Math.round(state.health), state.health < 30 ? "danger" : "")}
        </div>
      </header>
      ${content}
    </section>
  `;
}

function meter(label, value, cls = "") {
  return `<div class="meter"><span>${label}</span><strong class="${cls}">${value}</strong></div>`;
}

function renderTitle() {
  return `
    <section class="screen center">
      <div class="title">
        <p class="eyebrow">2005-2024 · RMB / USD Fund Career Simulation</p>
        <h1>中国 VC 投资模拟器</h1>
        <p class="lede">你从投资经理开始，在二十年产业浪潮里看项目、抢额度、错过风口，也承受 LP、合伙人和身体给出的反馈。</p>
        <button class="btn" data-action="start">开始看项目</button>
      </div>
    </section>
  `;
}

function renderBrief() {
  const era = eraFor(state.year);
  const marketMood = era.risk > 64 ? "亢奋且拥挤" : era.risk > 52 ? "机会很多，价格不低" : "仍在寻找共识";
  return shell(`
    <div class="layout">
      <section class="panel">
        <p class="eyebrow">Market Brief</p>
        <h2>${era.name}</h2>
        <p class="copy">${era.theme}</p>
        <div class="brief-grid">
          <div class="brief-item"><span>热门赛道</span><strong>${era.hot.map((key) => sectors[key]).join(" / ")}</strong></div>
          <div class="brief-item"><span>市场状态</span><strong>${marketMood}</strong></div>
          <div class="brief-item"><span>今年权限</span><strong>${isPartnerRole() ? "最多 3 笔" : "最多 1 笔"}</strong></div>
        </div>
        ${state.lastHealthNote ? `<div class="health-note"><strong>${state.lastHealthNote.year} 年健康 -${state.lastHealthNote.burn}</strong><br>${state.lastHealthNote.reasons.join("；")}。</div>` : ""}
        <button class="btn" data-action="projects">进入项目会</button>
      </section>
      ${renderSide()}
    </div>
  `);
}

function renderProjects() {
  const maxDeals = isPartnerRole() ? 3 : 1;
  return shell(`
    <div class="layout">
      <section class="panel plain">
        <p class="eyebrow">Investment Committee</p>
        <h2>今年你能看到的项目</h2>
        <p class="copy">今年项目会拿到了 ${state.projects.length} 个新公司，你已经选择 ${state.selected.length}/${maxDeals} 笔。项目不会给出确定答案，只给出足够让人犹豫的信号。</p>
        <div class="project-list">
          ${state.projects.length ? state.projects.map((project) => renderProject(project, maxDeals)).join("") : `<div class="log-item">这一年没有新的可投公司进入你的视野。市场有时候不是热闹，而是安静。</div>`}
        </div>
        <div class="actions">
          <button class="btn" data-action="review">结束今年投资</button>
        </div>
      </section>
      ${renderSide()}
    </div>
  `);
}

function renderProject(project, maxDeals) {
  const selected = state.selected.includes(project.id);
  const disabled = selected || state.selected.length >= maxDeals || state.aum < project.amount;
  return `
    <article class="project">
      <div class="project-head">
        <div>
          <div class="project-title">${project.name}</div>
          <div class="meta">
            <span>${sectors[project.sector]}</span>
            <span>${project.lead ? "可领投" : "跟投额度"}</span>
            <span>投资额 ${money(project.amount)}</span>
            <span>约 ${(project.ownership * 100).toFixed(1)}% 股权</span>
          </div>
        </div>
        <span class="tag">${selected ? "已投" : "待判断"}</span>
      </div>
      <p class="copy">${project.thesis}</p>
      <div class="valuation-strip">
        <span>本轮估值</span>
        <strong>${project.valuationText}</strong>
      </div>
      ${project.investorComment ? `<div class="quote-note">${project.investorComment}</div>` : ""}
      <div class="memo-grid">
        <div class="memo">
          <span>业务描述</span>
          <p>${project.business}</p>
        </div>
        <div class="memo">
          <span>商业模式</span>
          <p>${project.model}</p>
        </div>
        <div class="memo warning">
          <span>风险警示</span>
          <ul>${project.warnings.map((warning) => `<li>${warning}</li>`).join("")}</ul>
        </div>
        <div class="memo">
          <span>尽调发现</span>
          <p><b>${project.diligence.question}</b></p>
          <p>${project.diligence.answer}</p>
        </div>
      </div>
      <button class="btn secondary" data-action="invest" data-id="${project.id}" ${disabled ? "disabled" : ""}>${selected ? "已经进入组合" : "投资"}</button>
    </article>
  `;
}

function renderPortfolioUpdate() {
  return shell(`
    <section class="panel">
      <p class="eyebrow">Portfolio Update</p>
      <h2>项目退出通知</h2>
      <div class="log">
        ${state.lastResults.map((item) => {
          const cls = item.outcome === "fail" ? "result-bad" : item.outcome === "flat" ? "result-flat" : "result-good";
          const label = item.outcome === "huge" ? "大获成功" : item.outcome === "good" ? "稳步增长" : item.outcome === "flat" ? "勉强保本" : "投资失败";
          return `<div class="log-item"><strong class="${cls}">${item.name} · ${label} · ${item.multiple.toFixed(1)}x</strong><br>${item.year} 年投出的 ${sectors[item.sector]} 项目在持有 ${item.exitAge} 年后给出了答案。${item.postComment ? `<div class="quote-note compact">${item.postComment}</div>` : ""}</div>`;
        }).join("")}
      </div>
      <div class="actions">
        <button class="btn" data-action="afterPortfolio">继续</button>
      </div>
    </section>
  `);
}

function renderEvent() {
  const event = state.event;
  return `
    ${renderBrief()}
    <div class="modal-backdrop">
      <section class="modal">
        <p class="eyebrow">${event.category}</p>
        <h2>${event.title}</h2>
        <p class="copy">${event.description}</p>
        <div class="choice-list">
          ${event.choices.map((choice, index) => `<button class="choice" data-action="choice" data-index="${index}">
            <span class="choice-text">${choice.text}</span>
          </button>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderEventResult() {
  const result = state.eventResult;
  return `
    ${renderBrief()}
    <div class="modal-backdrop">
      <section class="modal">
        <p class="eyebrow">选择结果</p>
        <h2>${result.title}</h2>
        <p class="copy">${result.note}</p>
        <div class="effect-result">
          ${result.changes.length ? result.changes.map((item) => `
            <div class="effect-row">
              <span>${item.label}</span>
              <strong class="${item.delta > 0 ? "positive" : "negative"}">${formatDelta(item.delta)}</strong>
              <small>${item.before} → ${item.after}</small>
            </div>
          `).join("") : `<div class="effect-row"><span>指标</span><small>没有直接变化</small></div>`}
        </div>
        <div class="actions">
          <button class="btn" data-action="continueEvent">继续</button>
        </div>
      </section>
    </div>
  `;
}

function renderReview() {
  const invested = state.investments.filter((item) => item.year === state.year);
  const pending = state.investments.filter((item) => item.status === "pending" && item.year < state.year);
  return shell(`
    <section class="panel">
      <p class="eyebrow">Year End Review</p>
      <h2>${state.year} 年终回顾</h2>
      <div class="log">
        ${invested.length ? invested.map((item) => `<div class="log-item"><strong>${item.name}</strong><br>${sectors[item.sector]} · ${item.lead ? "领投" : "跟投"} · ${money(item.amount)} · 退出窗口未知</div>`).join("") : `<div class="log-item">今年没有新增投资。现金没有犯错，但也不会自己变成业绩。</div>`}
        ${state.yearLog.map((line) => `<div class="log-item">${line}</div>`).join("")}
        ${pending.length ? `<div class="log-item">仍有 ${pending.length} 个项目在组合里等待退出。</div>` : ""}
      </div>
      <div class="actions">
        <button class="btn" data-action="nextYear">进入下一年</button>
      </div>
    </section>
  `);
}

function renderPromotion() {
  return shell(`
    <section class="panel">
      <p class="eyebrow">Career Milestone</p>
      <h2>晋升合伙人</h2>
      <p class="copy">你的投资业绩和行业关系终于形成了合力。从下一年开始，你可以看更多项目、投更多钱，也要承受更大的健康消耗。</p>
      <div class="actions">
        <button class="btn" data-action="acceptPromotion">开始新的篇章</button>
      </div>
    </section>
  `);
}

function renderEnding() {
  const result = ending();
  return `
    <section class="screen center">
      <div class="title">
        <p class="eyebrow">Game Over · ${state.year} 年</p>
        <h1>${result.title}</h1>
        <p class="lede">${result.description}</p>
        <div class="brief-grid">
          <div class="brief-item"><span>AUM</span><strong>${Math.round(state.aum)}</strong></div>
          <div class="brief-item"><span>业绩</span><strong>${Math.round(state.track)}</strong></div>
          <div class="brief-item"><span>关系</span><strong>${Math.round(state.network)}</strong></div>
          <div class="brief-item"><span>健康</span><strong>${Math.round(state.health)}</strong></div>
        </div>
        <div class="timeline">
          ${state.chronicle.map((item) => `<div class="timeline-item"><h3>${item.year} · ${item.era}</h3><p class="copy">${item.lines.join("\n")}</p></div>`).join("")}
        </div>
        <button class="btn" data-action="restart">再来一局</button>
      </div>
    </section>
  `;
}

function renderSide() {
  const pending = state.investments.filter((item) => item.status === "pending");
  return `
    <aside class="panel">
      <h3>投资组合</h3>
      <p class="copy">未退出项目：${pending.length} 个</p>
      <div class="side-list">
        ${pending.slice(-5).map((item) => `<div class="mini-card"><strong>${item.name}</strong>${sectors[item.sector]} · ${item.year} 投 · 已持有 ${state.year - item.year} 年</div>`).join("") || `<div class="mini-card">暂无项目。第一笔投资永远显得比实际更重。</div>`}
      </div>
    </aside>
  `;
}

function render() {
  const app = document.querySelector("#app");
  const views = {
    title: renderTitle,
    brief: renderBrief,
    projects: renderProjects,
    portfolio: renderPortfolioUpdate,
    event: renderEvent,
    eventResult: renderEventResult,
    review: renderReview,
    promotion: renderPromotion,
    ending: renderEnding,
  };
  app.innerHTML = views[state.phase]();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "start") startYear();
  if (action === "projects") {
    ensureAffordableOpportunity(state.projects);
    state.phase = "projects";
    render();
  }
  if (action === "invest") invest(target.dataset.id);
  if (action === "review") endSelection();
  if (action === "nextYear") advanceYear();
  if (action === "choice") resolveEvent(Number(target.dataset.index));
  if (action === "continueEvent") {
    state.eventResult = null;
    if (state.careerExit) {
      state.phase = "ending";
      render();
      return;
    }
    if (state.pendingYearAdvance) {
      state.pendingYearAdvance = false;
      continueToNextYearOrEnd();
      return;
    }
    ensureAffordableOpportunity(state.projects);
    state.phase = "brief";
    render();
  }
  if (action === "afterPortfolio") {
    ensureAffordableOpportunity(state.projects);
    state.phase = state.event ? "event" : "brief";
    render();
  }
  if (action === "acceptPromotion") {
    if (state.year >= END_YEAR) {
      state.phase = "ending";
      render();
      return;
    }
    state.year += 1;
    startYear();
  }
  if (action === "restart") restart();
});

render();
