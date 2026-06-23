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
    rareOpportunity: true,
  },
];

const extraEventDeck = [
  {
    title: "创始人半夜发来长语音",
    category: "投后",
    description: "他和联合创始人吵了一架，开始怀疑公司方向。你知道这通电话处理不好，项目可能先从人心散掉。",
    choices: [
      { text: "耐心听完，帮他拆问题", effects: { network: 5, health: -2, career: 2 }, note: "你没有解决所有问题，但让创始人重新愿意坐下来谈。" },
      { text: "让他第二天找投后同事", effects: { health: 2, network: -3 }, note: "你保住了睡眠，也让对方觉得你只是财务投资人。" },
    ],
  },
  {
    title: "被投公司 CFO 离职",
    category: "投后",
    description: "下一轮融资前，CFO 突然离职。账、预算和董事会材料都需要重新梳理。",
    choices: [
      { text: "帮忙找临时财务顾问", effects: { network: 4, track: 3, health: -2 }, note: "你补上了一个关键空位，也把自己的周末搭了进去。" },
      { text: "要求创始人自己负责", effects: { track: -2, health: 2 }, note: "边界清楚了，但项目后续材料明显慢了下来。" },
    ],
  },
  {
    title: "LP 要看组合现金流预测",
    category: "募资",
    description: "他们不再只听故事，而是要每个项目的 runway、退出窗口和下一轮概率。",
    choices: [
      { text: "逐个项目重做模型", effects: { track: 5, aum: 3, health: -2 }, note: "模型不漂亮，但足够诚实，LP 反而更放心。" },
      { text: "先给乐观版本稳住情绪", effects: { aum: 4, track: -3, health: -1 }, note: "短期过关了，但你知道有几处假设站不太住。" },
    ],
  },
  {
    title: "媒体想写你的明星项目",
    category: "声量",
    description: "记者想采访你和创始人。曝光可能帮助融资，也可能把公司推到过热的位置。",
    choices: [
      { text: "配合采访，控制口径", effects: { network: 6, health: -1 }, note: "文章发出来很体面，但你花了很多精力避免它写得太满。" },
      { text: "劝创始人保持低调", effects: { track: 3, network: -2 }, note: "少了一次出圈机会，但公司避开了无谓的比较。" },
    ],
  },
  {
    title: "监管部门释放新信号",
    category: "监管",
    description: "赛道突然多了政策不确定性。大家都在问，这是不是方向变了。",
    choices: [
      { text: "暂停追高，重新评估", effects: { track: 4, network: -2, health: 1 }, note: "你错过了一些热闹，但保住了判断纪律。" },
      { text: "逆势加深行业访谈", effects: { career: 4, health: -2 }, note: "你没有立刻出手，但比同行更早知道哪些公司能穿越。" },
    ],
  },
  {
    title: "合伙人要求你陪客户出差",
    category: "内部",
    description: "这趟出差和你的项目关系不大，但对基金募资关系很重要。",
    choices: [
      { text: "去，顺便维护 LP", effects: { network: 5, aum: 2, health: -2 }, note: "你在飞机上改完了项目 memo，也换来 LP 一次认真反馈。" },
      { text: "留下来推进项目尽调", effects: { track: 4, network: -3 }, note: "项目推进了，但合伙人觉得你不够懂平台协作。" },
    ],
  },
  {
    title: "同事抢先约了你想见的创始人",
    category: "办公室政治",
    description: "这不是第一次了。你可以挑明，也可以用结果说话。",
    choices: [
      { text: "直接约合伙人讲清边界", effects: { career: 5, network: -4, health: -1 }, note: "话说开了，但办公室的温度低了几度。" },
      { text: "自己补行业图谱，绕开内耗", effects: { track: 4, health: -1 }, note: "你没有赢下这次会议，但赢回了一点主动权。" },
    ],
  },
  {
    title: "老同学创业找你融资",
    category: "关系",
    description: "项目早期、数据很少，但关系很近。你知道这会考验职业和私人边界。",
    choices: [
      { text: "按正常流程推进", effects: { network: 2, track: 2, health: -1 }, note: "关系没有被特殊对待，也没有被粗暴拒绝。" },
      { text: "明确回避，介绍给同行", effects: { network: 4, health: 1 }, note: "你避开了利益冲突，也保留了体面。" },
    ],
  },
  {
    title: "被投公司想高薪挖你过去",
    category: "诱惑",
    description: "创始人说你比他们很多高管更懂公司。这个邀请听起来真诚，也很危险。",
    choices: [
      { text: "拒绝，继续站在投资人位置", effects: { career: 4, network: 2 }, note: "你没有换身份，但这家公司更信任你了。" },
      { text: "认真聊聊，但不立刻决定", effects: { network: 5, health: -1 }, note: "你给自己留了余地，也多了一点职业想象。" },
    ],
  },
  {
    title: "家里临时有事",
    category: "家庭",
    description: "同一天你有项目终面和家里的重要安排。没有一个选择是完全正确的。",
    choices: [
      { text: "先处理家里的事", effects: { health: 4, track: -2 }, note: "项目会议错过了，但你没有错过更重要的人。" },
      { text: "照常参加项目会", effects: { track: 4, health: -3 }, note: "你表现得专业，也清楚自己亏欠了什么。" },
    ],
  },
  {
    title: "体检报告亮起黄灯",
    category: "健康",
    description: "医生说问题还不严重，但再这么熬下去，很难一直没事。",
    choices: [
      { text: "减少无效社交，调整节奏", effects: { health: 6, network: -3 }, note: "你少出现在几个饭局里，身体终于喘了口气。" },
      { text: "先忙完这一阵再说", effects: { track: 3, health: -4 }, note: "你太熟悉这句话了，也知道它经常不兑现。" },
    ],
  },
  {
    title: "热门赛道估值突然跳涨",
    category: "市场",
    description: "同一个公司，两周前和现在已经不是一个价格。所有人都在抢额度。",
    choices: [
      { text: "接受贵一点，买入窗口", effects: { network: 4, aum: -3, health: -1 }, note: "你拿到了票，但心里知道安全垫薄了。" },
      { text: "放弃追价，等下一批", effects: { track: 4, network: -2, health: 1 }, note: "你错过了热闹，也避免了被情绪定价。" },
    ],
  },
  {
    title: "市场突然转冷",
    category: "市场",
    description: "上个月还排队给 TS 的基金，现在都开始说要再看看。",
    choices: [
      { text: "回头看被低估的项目", effects: { track: 5, health: -1 }, note: "冷市场里，你终于能听见真实需求的声音。" },
      { text: "先保护现金，不急出手", effects: { aum: 3, health: 2, network: -2 }, note: "你让基金活得更久，也少了一些市场存在感。" },
    ],
  },
  {
    title: "创始人隐瞒了一项诉讼",
    category: "尽调",
    description: "法律顾问在最后一轮文件里发现了问题。创始人说这事不大，只是忘了讲。",
    choices: [
      { text: "暂停投资，重新尽调", effects: { track: 6, network: -3, health: -1 }, note: "你让交易慢了下来，也保住了底线。" },
      { text: "要求补充披露后继续", effects: { network: 2, track: -2 }, note: "项目没断，但你对创始人的信任打了折。" },
    ],
  },
  {
    title: "数据室开放得异常顺利",
    category: "尽调",
    description: "材料太整齐，回答太快，反而让你觉得哪里不对。",
    choices: [
      { text: "追加底层数据抽查", effects: { track: 5, health: -2 }, note: "你发现了几处口径差异，虽然不致命，但足够改变估值判断。" },
      { text: "相信团队专业度", effects: { network: 3, health: 1, track: -2 }, note: "流程更快了，但你心里留下一个小问号。" },
    ],
  },
  {
    title: "联合投资人临时撤单",
    category: "交易",
    description: "原本说好一起投的基金突然退出。创始人希望你补上缺口。",
    choices: [
      { text: "不补缺口，坚持原额度", effects: { track: 3, network: -3 }, note: "你没有被交易节奏裹挟，但关系变得尴尬。" },
      { text: "协调其他基金进来", effects: { network: 6, health: -2 }, note: "你没多出钱，却多花了很多信用。" },
    ],
  },
  {
    title: "投委会只剩十分钟",
    category: "内部",
    description: "前面的项目严重超时，你准备了三天的材料只剩十分钟可以讲。",
    choices: [
      { text: "只讲关键分歧", effects: { track: 4, career: 3 }, note: "你没有讲完整故事，但让大家记住了判断。" },
      { text: "快速过完整框架", effects: { career: 1, health: -1 }, note: "材料都讲到了，只是没有一个点真正打进去。" },
    ],
  },
  {
    title: "LP 子女想来基金实习",
    category: "关系",
    description: "这件事不大，也不小。处理不好会影响关系，处理太好又会影响团队公平。",
    choices: [
      { text: "走正式流程，标准一致", effects: { track: 3, network: -2 }, note: "你没有给特殊通道，团队里有人松了一口气。" },
      { text: "安排短期项目体验", effects: { network: 4, health: -1 }, note: "关系照顾到了，但你额外花了不少管理精力。" },
    ],
  },
  {
    title: "创始人朋友圈开炮",
    category: "投后",
    description: "他公开抱怨投资人不懂业务。虽然没点名，但大家都知道说的是谁。",
    choices: [
      { text: "私下沟通，别扩大冲突", effects: { network: 3, health: -2 }, note: "火没有烧大，但你一整晚都没睡踏实。" },
      { text: "在董事会上正式回应", effects: { track: 3, network: -3 }, note: "边界立住了，关系也更硬了。" },
    ],
  },
  {
    title: "项目需要桥接贷款",
    category: "投后",
    description: "下一轮还没关，公司现金只够三个月。创始人希望股东先救急。",
    choices: [
      { text: "帮忙撮合过桥资金", effects: { network: 5, health: -2 }, note: "公司多活了几个月，你也多背了一段压力。" },
      { text: "要求先砍成本再谈", effects: { track: 4, network: -2 }, note: "这话不好听，但让公司更早面对现实。" },
    ],
  },
  {
    title: "竞品拿到巨额融资",
    category: "市场",
    description: "你的被投公司团队有点慌。创始人问你要不要也快速启动下一轮。",
    choices: [
      { text: "马上组织融资故事", effects: { network: 4, health: -2 }, note: "团队士气稳住了，但故事还需要业绩跟上。" },
      { text: "先看经营数据，不跟风", effects: { track: 4, health: 1 }, note: "你没有被竞品节奏牵走，创始人一开始不太高兴。" },
    ],
  },
  {
    title: "被投公司想换赛道叙事",
    category: "投后",
    description: "原本做工具的公司，突然想把自己包装成平台。估值可能更高，也可能更虚。",
    choices: [
      { text: "压住叙事，先补收入", effects: { track: 5, network: -2 }, note: "你让故事少了一点性感，多了一点可信。" },
      { text: "顺势升级融资材料", effects: { network: 4, track: -2, health: -1 }, note: "融资语言更好听了，但你知道基本面还没完全跟上。" },
    ],
  },
  {
    title: "合伙人让你接一个烂摊子",
    category: "内部",
    description: "项目不是你投的，但出了问题后需要有人去董事会沟通。",
    choices: [
      { text: "接下来，换取信任", effects: { career: 5, health: -3 }, note: "你背了锅，也积累了难得的组织信用。" },
      { text: "说明边界，只提供支持", effects: { track: 2, network: -3, health: 1 }, note: "你保护了自己，但也错过了一次承担复杂局面的机会。" },
    ],
  },
  {
    title: "基金要做年度复盘",
    category: "内部",
    description: "每个人都要讲自己最成功和最失败的判断。会议室里没有人真正轻松。",
    choices: [
      { text: "把错判讲透", effects: { track: 5, career: 3, health: -1 }, note: "你没有显得完美，但显得可信。" },
      { text: "突出亮点，淡化问题", effects: { network: 3, track: -2 }, note: "PPT 好看了，但复盘价值少了。" },
    ],
  },
  {
    title: "行业协会请你闭门分享",
    category: "声量",
    description: "这不是公开论坛，但来的都是懂行的人。讲得太实会暴露打法，讲得太虚没有意义。",
    choices: [
      { text: "讲真实案例，隐去敏感细节", effects: { network: 5, career: 2, health: -1 }, note: "你赢得了一些真正懂行的尊重。" },
      { text: "讲宏观趋势，少讲方法", effects: { network: 2, health: 1 }, note: "场面过得去，但没有留下太多记忆点。" },
    ],
  },
  {
    title: "地方政府抛来橄榄枝",
    category: "政策",
    description: "他们希望基金去当地设办公室，并承诺产业资源和引导基金支持。",
    choices: [
      { text: "认真评估产业资源", effects: { aum: 4, network: 3, health: -1 }, note: "你没有只看补贴，而是先看当地有没有真实项目土壤。" },
      { text: "礼貌保持距离", effects: { track: 2, network: -2, health: 1 }, note: "你少了一个潜在资金来源，也少了很多协调成本。" },
    ],
  },
  {
    title: "新基金募资进度落后",
    category: "募资",
    description: "合伙人没有明说，但所有人都知道，如果募不起来，下一年的投资会更紧。",
    choices: [
      { text: "帮忙拜访老 LP", effects: { aum: 6, network: 4, health: -2 }, note: "你不是募资负责人，但你贡献了自己的信用。" },
      { text: "专注项目，少掺募资", effects: { track: 4, network: -2 }, note: "你保住了投研节奏，也错过了平台最需要人的时刻。" },
    ],
  },
  {
    title: "LP 对 DPI 开始焦虑",
    category: "募资",
    description: "账面回报讲了很多年，现在他们更想看到现金回来。",
    choices: [
      { text: "推动成熟项目找退出窗口", effects: { aum: 4, track: 3, health: -2 }, note: "你开始从买入思维切到退出思维。" },
      { text: "强调长期价值", effects: { network: -2, health: 1 }, note: "道理没错，但焦虑没有被真正解决。" },
    ],
  },
  {
    title: "明星创始人开始膨胀",
    category: "投后",
    description: "公司增长不错，但创始人越来越不听劝，团队里开始有人离开。",
    choices: [
      { text: "私下直说问题", effects: { track: 4, network: -2, health: -1 }, note: "这次谈话不舒服，但比董事会爆雷要早。" },
      { text: "先不破坏关系", effects: { network: 3, track: -2 }, note: "关系暂时很好，但问题没有消失。" },
    ],
  },
  {
    title: "团队分析师想离职",
    category: "管理",
    description: "他跟了你好几个项目，现在觉得成长太慢，想去创业公司。",
    choices: [
      { text: "认真聊职业路径", effects: { network: 3, career: 2, health: -1 }, note: "他未必留下，但你像一个真正的管理者那样处理了这件事。" },
      { text: "尊重决定，快速交接", effects: { health: 1, track: -2 }, note: "交接完成了，但项目记忆也丢了一部分。" },
    ],
  },
  {
    title: "董事会要求你站队",
    category: "投后",
    description: "创始人与大股东矛盾公开化，你的投票会影响下一阶段控制权。",
    choices: [
      { text: "按公司长期利益投票", effects: { track: 5, network: -3, health: -2 }, note: "你得罪了一边，但这次没有背离判断。" },
      { text: "推动双方先谈判", effects: { network: 4, health: -2 }, note: "你争取了时间，也把自己放进了冲突中心。" },
    ],
  },
  {
    title: "财务数据突然变好",
    category: "尽调",
    description: "增长曲线漂亮得有点突兀。创始人说这是新渠道起量。",
    choices: [
      { text: "拆渠道，看真实留存", effects: { track: 5, health: -1 }, note: "你发现增长里有一部分来自一次性大单。" },
      { text: "相信拐点已经出现", effects: { network: 3, track: -2 }, note: "你获得了创始人的好感，也承担了乐观判断的风险。" },
    ],
  },
  {
    title: "行业微信群传出负面消息",
    category: "市场",
    description: "没人知道真假，但消息已经开始影响下一轮投资人情绪。",
    choices: [
      { text: "找到一手信息源核实", effects: { track: 4, network: 2, health: -1 }, note: "你没有被聊天记录牵着走。" },
      { text: "先按风险处理", effects: { health: 1, network: -2 }, note: "你保守了一点，也避免了踩进传闻里。" },
    ],
  },
  {
    title: "你被邀请加入项目董事会",
    category: "投后",
    description: "这是信任，也是负担。以后公司的关键问题会更频繁地找到你。",
    choices: [
      { text: "接受董事席位", effects: { career: 5, network: 4, health: -3 }, note: "你的影响力变大了，日程也变得更碎。" },
      { text: "改做观察员", effects: { track: 2, health: 1 }, note: "你保留了参与度，也避免了过深绑定。" },
    ],
  },
  {
    title: "合伙人问你为什么没投中上一轮热门项目",
    category: "内部",
    description: "那家公司刚融了大钱，大家都在复盘为什么错过。",
    choices: [
      { text: "承认错过，复盘原因", effects: { track: 4, career: 2 }, note: "你没有强行辩解，反而让判断框架更清晰。" },
      { text: "强调当时估值过高", effects: { track: 1, network: -2 }, note: "你的理由成立一半，但听起来也像防守。" },
    ],
  },
  {
    title: "项目创始人离婚影响状态",
    category: "投后",
    description: "公司业务没立刻出问题，但团队明显感觉创始人心不在焉。",
    choices: [
      { text: "私下关心，帮团队稳节奏", effects: { network: 4, health: -2 }, note: "这不是财务模型里的变量，却真实影响公司。" },
      { text: "只关注经营指标", effects: { track: 2, network: -2 }, note: "你保持了专业距离，也少理解了一些真实风险。" },
    ],
  },
  {
    title: "春节前还有一个紧急项目",
    category: "家庭",
    description: "创始人只在假期前有空见面，而你答应家里早点回去。",
    choices: [
      { text: "改签，去见创始人", effects: { track: 4, health: -3 }, note: "你拿到了一手判断，也把亏欠带回了家。" },
      { text: "让同事先见，自己补电话", effects: { health: 3, career: -1 }, note: "你守住了一个承诺，但项目主导权弱了一点。" },
    ],
  },
  {
    title: "市场传来 IPO 暂缓消息",
    category: "退出",
    description: "几个组合公司的上市计划可能延后，DPI 压力又回来了。",
    choices: [
      { text: "寻找并购和老股转让机会", effects: { aum: 3, track: 3, health: -2 }, note: "退出不只有 IPO，但每条路都要重新谈。" },
      { text: "继续等窗口恢复", effects: { health: 1, network: -2 }, note: "耐心是策略，也可能变成拖延。" },
    ],
  },
  {
    title: "被投公司要求你帮忙招 CTO",
    category: "投后",
    description: "技术负责人空缺已经影响交付。创始人希望你调动人脉。",
    choices: [
      { text: "动用猎头和朋友网络", effects: { network: 4, track: 3, health: -2 }, note: "你像半个联合创始人一样补位。" },
      { text: "建议公司自己建立招聘能力", effects: { track: 2, network: -2 }, note: "长期正确，但短期救不了火。" },
    ],
  },
  {
    title: "基金内部开始排名",
    category: "办公室政治",
    description: "没人喜欢这个表，但所有人都在看自己排第几。",
    choices: [
      { text: "用结果争资源", effects: { career: 4, track: 3, health: -1 }, note: "你没有参加太多口水战，数字替你说了一部分话。" },
      { text: "低调做项目", effects: { health: 2, network: -2 }, note: "你避开了内耗，也少了一些可见度。" },
    ],
  },
  {
    title: "合作 FA 暗示有返佣空间",
    category: "底线",
    description: "对方说得很隐晦，但意思足够明确。你知道这条线不能碰。",
    choices: [
      { text: "明确拒绝并记录", effects: { track: 5, network: -3 }, note: "少了一个所谓朋友，多了一层职业安全。" },
      { text: "换一家顾问继续推进", effects: { health: -1, track: 3 }, note: "你没有把交易做死，也没有把底线做软。" },
    ],
  },
  {
    title: "老项目突然有并购方接触",
    category: "退出",
    description: "价格不算特别高，但能给基金带来现金回款。",
    choices: [
      { text: "推动认真谈判", effects: { aum: 5, track: 2, health: -1 }, note: "这不是最性感的退出，但现金是真的。" },
      { text: "建议再等等估值修复", effects: { track: 2, network: -2 }, note: "你选择继续等，LP 的耐心也继续被消耗。" },
    ],
  },
  {
    title: "创始人想引入战略投资人",
    category: "交易",
    description: "战投能给资源，也可能改变公司独立性。创始人希望你表态。",
    choices: [
      { text: "支持但要求条款克制", effects: { track: 4, network: 3, health: -1 }, note: "你没有迷信资源，也没有拒绝现实帮助。" },
      { text: "反对过早绑定产业方", effects: { track: 3, network: -2 }, note: "你保住了想象空间，也让融资难度上升。" },
    ],
  },
  {
    title: "同行想和你交换项目名单",
    category: "关系",
    description: "交换信息很常见，但边界稍微模糊一点，就可能伤到创始人信任。",
    choices: [
      { text: "只交流行业，不交换名单", effects: { track: 3, network: -1 }, note: "你没有获得捷径，也没有出卖信任。" },
      { text: "有限交换非敏感信息", effects: { network: 4, health: -1 }, note: "关系近了一点，边界也变得更需要自觉。" },
    ],
  },
  {
    title: "你被安排带新人",
    category: "管理",
    description: "新人聪明但没有经验。带他会占时间，不带他以后还是你救火。",
    choices: [
      { text: "认真带项目方法", effects: { career: 4, health: -2 }, note: "短期慢了一点，长期团队轻了一点。" },
      { text: "让他自己摔几次", effects: { health: 1, track: -2 }, note: "成长会发生，但代价可能落在项目上。" },
    ],
  },
  {
    title: "行业突然开始讲新概念",
    category: "市场",
    description: "一个新词在所有 BP 里出现。你还不确定这是范式变化，还是又一轮包装。",
    choices: [
      { text: "先做十个专家访谈", effects: { track: 4, health: -2 }, note: "你没有立刻相信，也没有轻易错过。" },
      { text: "快速建仓相关项目", effects: { network: 3, aum: -2, track: -1 }, note: "你上了车，但车往哪里开还不完全清楚。" },
    ],
  },
  {
    title: "被投公司出现食品安全舆情",
    category: "危机",
    description: "如果处理不好，公司多年品牌积累可能一夜归零。",
    choices: [
      { text: "要求公开透明处理", effects: { track: 5, network: -2, health: -2 }, note: "短期难看，但长期还能保住信任。" },
      { text: "先压热搜再调查", effects: { network: 2, track: -5, health: -1 }, note: "舆情小了，问题却没有真正消失。" },
    ],
  },
  {
    title: "技术项目交付延期",
    category: "投后",
    description: "客户现场迟迟跑不起来，销售还在说下个月就好。",
    choices: [
      { text: "去现场看真实问题", effects: { track: 5, health: -2 }, note: "你发现不是销售问题，而是产品化还没完成。" },
      { text: "相信团队按计划修复", effects: { network: 2, track: -2 }, note: "团队压力小了，但风险也被推迟了。" },
    ],
  },
  {
    title: "创始人要求更高估值续投",
    category: "交易",
    description: "公司确实进步了，但还没有进步到这个价格。你要不要继续支持？",
    choices: [
      { text: "续投但压低金额", effects: { network: 3, track: 2, aum: -2 }, note: "你留在牌桌上，也没有完全放弃价格纪律。" },
      { text: "不续投，保留观察权", effects: { track: 3, network: -3 }, note: "创始人不高兴，但你没有把沉没成本当理由。" },
    ],
  },
  {
    title: "一个项目让你想起上一轮失败",
    category: "判断",
    description: "它们不完全一样，但几个危险信号很像。你担心自己过度防御，也担心重蹈覆辙。",
    choices: [
      { text: "把相似点逐条拆开", effects: { track: 4, health: -1 }, note: "你没有被创伤控制，也没有忽视经验。" },
      { text: "直接放弃", effects: { health: 2, network: -2 }, note: "你避开了风险，也可能避开了一次修正判断的机会。" },
    ],
  },
];

eventDeck.push(...extraEventDeck);

const moreEventSpecs = [
  ["LP 临时取消年度会", "募资", "对方说只是行程冲突，但你知道他们最近在重新评估所有 VC 配置。", "主动补一份组合更新", { aum: 3, network: 3, health: -1 }, "你没有等对方追问，而是先把透明度交出去。", "不急着反应，等正式反馈", { health: 1, network: -2 }, "你少做了一些无效动作，也可能错过一次挽回信任的窗口。"],
  ["被投公司销售冠军离职", "投后", "收入增长有一部分来自这个人。团队说影响不大，你并不完全相信。", "追问销售体系是否可复制", { track: 4, health: -1 }, "你把问题从一个人的离职，拆成了组织能力。", "相信管理层接得住", { network: 2, track: -2 }, "关系更顺了，但风险被延后验证。"],
  ["合伙人让你压低估值", "交易", "项目不错，但价格不便宜。合伙人希望你做那个难开口的人。", "直接谈价格纪律", { track: 4, network: -2, health: -1 }, "你没有把不好听的话留给别人。", "用条款换估值空间", { network: 3, career: 2, health: -1 }, "你没有赢下价格，但赢回一些保护。"],
  ["项目 BP 被同行提前拿到", "竞争", "你还在排会议，同行已经见完创始人。信息差正在消失。", "加速约创始人深聊", { network: 4, health: -2 }, "你追上了节奏，也让一天变得更长。", "先补行业判断，不抢会", { track: 4, health: 1 }, "你没有被同行牵着跑，判断更稳了一点。"],
  ["创始人要求更宽松的对赌", "交易", "他说公司需要空间，不想被短期指标绑死。你也担心条款太软。", "保留关键保护条款", { track: 4, network: -2 }, "创始人有点不舒服，但你保住了基金底线。", "放松条款换更多股权", { network: 3, track: -1 }, "交易更容易推进，但未来风险更依赖判断。"],
  ["LP 要求 ESG 报告", "募资", "这不是你最熟悉的工作，但越来越多 LP 开始把它写进流程。", "补齐组合 ESG 信息", { aum: 3, career: 3, health: -2 }, "你做了很多琐碎工作，也让机构显得更成熟。", "先给框架，后续完善", { network: 2, health: -1 }, "你没有一次做完，但至少给了对方回应。"],
  ["董事会材料临时改版", "投后", "创始人希望把亏损讲得更轻一点。你知道 LP 和董事会迟早会看穿。", "要求如实披露", { track: 5, network: -2 }, "会议难看了一点，但信任没有继续透支。", "允许调整表达方式", { network: 3, track: -2 }, "场面稳住了，问题也被包装得更温和。"],
  ["你被拉进创始人家庭矛盾", "投后", "公司股权和家庭关系纠缠到一起。你本来只想投一家公司。", "建议引入外部律师", { track: 3, health: -1 }, "你没有亲自裁判，但推动问题进入专业流程。", "先做情绪缓冲", { network: 3, health: -3 }, "你暂时稳住了人，也消耗了很多自己。"],
  ["同行请你联名推荐项目", "关系", "项目你没完全看懂，但对方希望借你的名字提高可信度。", "拒绝背书", { track: 4, network: -2 }, "你没有把信用借给不确定的判断。", "只做有限介绍", { network: 3, career: 1 }, "你保留了关系，也把边界说在前面。"],
  ["监管问询影响组合公司", "监管", "问询不等于处罚，但资本市场已经开始重新定价。", "推动公司补充合规材料", { track: 4, health: -2 }, "流程慢了，但风险变得更可见。", "先观察问询进展", { health: 1, network: -2 }, "你没有过度反应，也可能错失提前处理的机会。"],
  ["项目创始人想做副业", "投后", "他说只是个人兴趣，但公司还没到可以分心的时候。", "明确要求聚焦主业", { track: 4, network: -2 }, "你说得很硬，但问题被及时按住了。", "观察一段时间", { network: 2, track: -2 }, "关系没伤，但你的不安没有消失。"],
  ["基金品牌被媒体质疑", "声量", "报道把几笔失败项目放在一起，标题很刺眼。", "用事实回应", { network: 2, track: 3, health: -2 }, "你没有吵架，只把能公开的信息讲清楚。", "冷处理，不放大", { health: 2, network: -2 }, "风波慢慢过去，但内部士气受了点影响。"],
  ["被投公司要裁员", "投后", "现金流撑不住了。创始人希望你支持这个痛苦决定。", "支持裁员并监督补偿", { track: 4, health: -3 }, "你没有把成本压力转嫁给员工，也没有逃避现实。", "建议再融资后处理", { network: 2, track: -3 }, "短期气氛好了，但现金流问题没有消失。"],
  ["合伙人问你是否愿意外派", "内部", "新城市有项目机会，也意味着你要离开熟悉的生活半径。", "接受外派一年", { network: 5, career: 5, health: -3 }, "你打开了新市场，也把生活重新打散。", "留在原团队深耕", { track: 3, health: 2 }, "你放弃了扩张机会，换来更稳定的节奏。"],
  ["项目财务顾问换人", "交易", "新 FA 更激进，融资节奏一下子变快，也变得更吵。", "重新校准融资节奏", { track: 3, health: -1 }, "你没有让交易被话术推着走。", "借势扩大投资人名单", { network: 4, track: -1 }, "声量变大了，确定性没有同步变强。"],
  ["合伙人想投你不看好的项目", "内部", "他很兴奋，你很犹豫。反对可能影响关系，不反对可能影响业绩。", "把反对意见写进 memo", { track: 5, network: -3 }, "你不一定能阻止交易，但留下了清楚的判断。", "保留意见但支持推进", { network: 3, track: -2 }, "你换来内部顺滑，也把风险留给未来。"],
  ["老项目突然被大厂盯上", "退出", "对方还没出价，但并购窗口可能正在打开。", "推动创始人认真准备", { aum: 4, track: 3, health: -2 }, "你没有等报价落下才开始准备。", "先稳住团队，不急谈卖", { network: 3, track: 1 }, "你保留了独立发展可能，也承担了窗口消失的风险。"],
  ["你发现项目数据口径频繁变化", "尽调", "每次问到细节，团队都能解释，但解释越来越复杂。", "要求统一底层口径", { track: 5, health: -2 }, "你把漂亮曲线拆成了可核查的表。", "接受阶段性口径差异", { network: 2, track: -2 }, "推进更快，但风险更模糊。"],
  ["你被邀请给创业营授课", "声量", "这会花掉一个周末，但也可能让你更早遇到下一批创始人。", "去讲真实案例", { network: 5, career: 2, health: -2 }, "你讲完很累，但收到了几个不错的 BP。", "婉拒，保留周末", { health: 3, network: -1 }, "你没有出现在台上，但终于睡了个完整觉。"],
  ["投资人群里开始互相甩锅", "投后", "项目进展不好，大家开始讨论当年是谁主推的。", "拉回问题本身", { track: 4, career: 2, health: -1 }, "你没有参与甩锅，而是让会议回到解决方案。", "保持沉默", { health: 1, career: -2 }, "你避开了冲突，也让别人替你定义了态度。"],
  ["创始人要求你介绍大客户", "投后", "介绍可以帮助公司，也会消耗你积累很久的信任。", "筛选后再介绍", { network: 3, track: 3, health: -1 }, "你没有滥用关系，也让介绍更有效。", "直接打开资源", { network: -1, track: 2, health: -2 }, "公司很感激，但你欠下了更多人情。"],
  ["项目进入价格战", "市场", "收入还在涨，毛利却越来越薄。创始人说这是必要阶段。", "要求看单位经济模型", { track: 5, health: -1 }, "你不再被 GMV 安慰，开始看每单到底赚不赚钱。", "支持先抢市场份额", { network: 3, track: -3 }, "增长继续好看，但商业质量变得更脆。"],
  ["基金后台系统出错", "内部", "一个项目的材料版本被传错，投委会差点引用旧数据。", "推动流程整改", { career: 3, health: -1 }, "这不是最光鲜的工作，但避免了下一次事故。", "只修这次问题", { health: 1, track: -1 }, "眼前过关了，系统性风险还在。"],
  ["你被要求参加太多路演", "健康", "每场都可能有项目，但大多数只是重复信息。", "筛选高质量场次", { health: 4, network: -2 }, "你少见了一些人，也保住了判断力。", "继续高密度参加", { network: 4, health: -3 }, "你保持在线，也明显变得迟钝。"],
  ["明星项目想跳过投委会", "底线", "创始人说额度很紧，希望你先口头承诺。", "坚持走完流程", { track: 5, network: -2 }, "你可能失去额度，但没有失去流程底线。", "先给非正式承诺", { network: 4, track: -4, health: -1 }, "你抢到了位置，也把自己放进灰区。"],
  ["你听到创始人团队内斗传闻", "尽调", "消息来源不确定，但足以让你重新看团队稳定性。", "分别访谈核心高管", { track: 4, health: -2 }, "你没有被传闻吓退，而是把它变成尽调问题。", "等正式材料披露", { health: 1, track: -2 }, "你避免了过度介入，也可能错过早期信号。"],
  ["合作律师提醒条款有坑", "交易", "问题不致命，但会在下一轮融资时变得麻烦。", "现在就改条款", { track: 4, health: -1, network: -1 }, "交易慢了一点，未来干净了很多。", "留到下一轮处理", { network: 2, track: -2 }, "当下顺了，问题被推给未来。"],
  ["被投公司想高调办发布会", "声量", "产品还没完全稳定，但团队很想制造市场声量。", "建议小范围客户会", { track: 4, network: -1 }, "声量小了，但反馈更真实。", "支持大发布会", { network: 5, track: -2, health: -1 }, "公司很兴奋，产品压力也提前暴露。"],
  ["LP 想让你投熟人项目", "关系", "项目质量一般，但 LP 语气很客气地表达了期待。", "按标准拒绝", { track: 5, network: -3 }, "你损失了一点关系温度，保住了投资纪律。", "安排正式项目会评审", { network: 3, health: -1 }, "你给了面子，也把决定交回流程。"],
  ["项目突然想出海", "市场", "国内增长放缓，创始人把希望放到海外市场。", "先验证海外渠道", { track: 4, health: -1 }, "你把口号拆成客户、渠道和合规。", "支持快速试错", { network: 3, aum: -2 }, "公司动作快了，试错成本也上来了。"],
  ["你需要在两个项目间二选一", "判断", "一个更稳，一个更有想象力。你的时间和额度都不够同时推进。", "选更稳的现金流", { track: 3, health: 1 }, "你牺牲了一点想象力，换来更可验证的路径。", "选更大的赔率", { career: 4, health: -1 }, "你选择了不确定性，也选择了承担更大的解释压力。"],
  ["项目创始人开始频繁参加论坛", "投后", "他的名气越来越大，公司的经营会议却越来越短。", "提醒他回到经营", { track: 4, network: -2 }, "你说了不讨喜的话，但公司需要这句话。", "利用声量帮助融资", { network: 4, track: -1 }, "声量带来了机会，也放大了虚火。"],
  ["合伙人让你写基金策略白皮书", "内部", "这不是单个项目，却会影响基金下一阶段怎么投。", "认真写成方法论", { career: 6, track: 3, health: -2 }, "你把零散判断变成了可被组织复用的语言。", "快速完成交差", { health: 2, career: -1 }, "任务过去了，机会也过去了。"],
  ["被投公司现金流比预期更好", "投后", "这不是爆炸增长，但公司开始证明自己能自己造血。", "鼓励降低融资依赖", { track: 5, aum: 2 }, "你看到了一种不那么性感但更抗周期的胜利。", "趁势启动下一轮融资", { network: 3, aum: 3, health: -1 }, "窗口不错，但你也知道融资不是唯一答案。"],
  ["项目核心供应商涨价", "投后", "毛利模型被重新打穿。创始人说只是短期波动。", "重算供应链敏感性", { track: 4, health: -1 }, "你把风险从一句解释变成了数字。", "相信短期波动", { network: 2, track: -2 }, "关系更顺，但毛利问题没有被解决。"],
  ["基金考虑合并两条产品线", "内部", "组织调整会影响你能看的项目和汇报对象。", "主动争取新产品线角色", { career: 5, network: 2, health: -1 }, "你没有等安排落下来，而是先表达了位置。", "先观察组织风向", { health: 1, career: -1 }, "你避开了站队，也暂时失去主动权。"],
  ["合伙人让你去安抚创始人", "投后", "基金决定不再追加投资，创始人情绪很大。", "坦诚解释原因", { track: 4, network: -2, health: -2 }, "关系很难完全保住，但你没有用空话拖延。", "留下模糊空间", { network: 2, track: -3 }, "场面好看了一点，信任却被慢慢消耗。"],
  ["你发现自己越来越怕错", "心理", "几次失败之后，你开始下意识寻找不投的理由。", "把恐惧写进决策框架", { track: 5, health: 1 }, "你没有否认情绪，而是让它接受审计。", "继续用忙碌掩盖犹豫", { health: -2, career: -2 }, "你看了很多项目，却越来越难按下确认键。"],
  ["市场开始奖励盈利", "市场", "过去讲增长的公司，现在都被问什么时候赚钱。", "重估组合盈利路径", { track: 5, health: -1 }, "你不再只看增速，也开始看公司能不能自己活下去。", "坚持增长优先", { network: 2, track: -2 }, "这在顺风期有用，在逆风期会更难解释。"],
  ["项目法务尽调发现历史代持", "尽调", "创始人说早就解决了，但文件链条并不完整。", "补齐确权文件", { track: 5, health: -2 }, "交易慢下来，但未来少了一个雷。", "签承诺函后继续", { network: 2, track: -2 }, "流程快了，风险也被留在纸面上。"],
  ["创始人想用融资买增长", "投后", "模型显示只要砸钱，收入就能上去。但单位经济还没证明。", "先验证单城模型", { track: 5, network: -2 }, "你挡住了扩张冲动，也挡住了一些短期漂亮数据。", "支持快速铺开", { network: 4, aum: -2, track: -2 }, "增长变快了，问题也变大了。"],
  ["你被要求陪 LP 打一整天会", "募资", "这一天没有新项目，但可能决定下一只基金能否多拿一笔钱。", "认真陪完并复盘组合", { aum: 6, network: 4, health: -2 }, "你用一天时间换来了一点长期信任。", "只参加关键环节", { track: 2, network: -2, health: 1 }, "你保住了项目时间，也少了一些 LP 温度。"],
  ["项目突然收到大客户预付款", "投后", "这笔钱改善了现金流，也可能掩盖产品仍未标准化的问题。", "追问可复制性", { track: 4, health: -1 }, "你没有被一笔大单冲昏头脑。", "把它作为融资亮点", { network: 3, aum: 2, track: -1 }, "故事更好讲了，但它还不是系统能力。"],
  ["内部开始讨论接班梯队", "职业机会", "你不是唯一候选人。接下来几年，项目结果和组织信用都会被放大。", "主动承担难项目", { career: 7, health: -2 }, "你没有只挑顺风局，也让自己进入更核心的视野。", "保持稳健节奏", { track: 3, health: 2 }, "你没有冒进，但存在感也没那么强。"],
  ["合伙人提醒你别太像创始人", "边界", "你帮某个项目太多，已经开始像公司半个高管。", "退回董事会边界", { health: 3, track: 2 }, "你减少了救火，也让创始人重新承担责任。", "继续深度介入", { network: 4, track: 2, health: -3 }, "项目短期更稳，你也更难抽身。"],
];

eventDeck.push(...moreEventSpecs.map(([title, category, description, textA, effectsA, noteA, textB, effectsB, noteB]) => ({
  title,
  category,
  description,
  choices: [
    { text: textA, effects: effectsA, note: noteA },
    { text: textB, effects: effectsB, note: noteB },
  ],
})));

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
    weight: 8,
  },
  {
    title: "另一家 VC 递来 Offer",
    category: "职业机会",
    description: "他们看中了你的项目判断，也愿意给你更大的出手权限。代价是重新建立内部信任。",
    choices: [
      { text: "跳去新平台，换一支基金打", effects: { careerMove: "vc_offer", aum: 34, network: -4, health: 4 }, note: "你换到一家更激进的基金，弹药变多，关系网络却要重新缝合。" },
      { text: "留下来，用 Offer 换资源", effects: { aum: 12, network: 5, career: 6, health: -1 }, note: "你没有走，但合伙人终于愿意把一部分额度放到你手里。" },
    ],
    minYear: 2014,
    requires: (s) => s.track >= 62 || s.network >= 68,
    weight: 1,
  },
  {
    title: "LP 问你要不要自己出来做",
    category: "职业机会",
    description: "对方不承诺无限弹药，只承诺一张小支票和几次引荐。真正的风险变成了你的名字。",
    choices: [
      { text: "独立出来，成立小基金", effects: { careerMove: "solo", aum: 48, network: 7, health: -4 }, note: "你成了创始合伙人。AUM 不算大，但每一笔投资都真正写着你的名字。" },
      { text: "先不出来，继续积累退出案例", effects: { track: 5, career: 5, health: 1 }, note: "你把冲动按住，决定等更多项目退出后再谈自己的旗号。" },
    ],
    minYear: 2016,
    requires: (s) => s.role !== "投资经理" && (s.track >= 70 || s.network >= 76),
    weight: 1,
  },
];

careerEventDeck.push(
  {
    title: "基金准备设赛道负责人",
    category: "职业机会",
    description: "合伙人想把某个重点赛道交给一个人长期负责。你有机会拿到更稳定的话语权，也会被这个标签绑定。",
    choices: [
      { text: "接下赛道负责人", effects: { career: 10, network: 5, aum: 6, health: -2 }, note: "你有了更清晰的地盘，也开始为这个赛道的每一次波动负责。" },
      { text: "保持多赛道灵活性", effects: { track: 5, health: 1 }, note: "你没有被标签锁住，但资源倾斜也少了一些。" },
    ],
    minYear: 2012,
    requires: (s) => s.track >= 55 || s.network >= 58,
    weight: 5,
  },
  {
    title: "合伙人给你一笔试点额度",
    category: "职业机会",
    description: "额度不大，但可以由你主导判断。它像一场不公开的考试。",
    choices: [
      { text: "接受额度，自己负责结果", effects: { aum: 10, career: 8, health: -1 }, note: "你第一次真正感觉到，钱不是数字，是责任。" },
      { text: "先要求共同决策", effects: { track: 3, career: 3, health: 1 }, note: "你放慢了授权速度，但降低了单独背锅的风险。" },
    ],
    minYear: 2010,
    requires: (s) => s.role === "投资经理" && s.track >= 52,
    weight: 7,
  },
  {
    title: "年度奖金谈判",
    category: "职业机会",
    description: "你的项目贡献不小，但奖金池有限。你可以谈钱，也可以谈权限。",
    choices: [
      { text: "争取更多项目主导权", effects: { career: 7, network: 2, health: -1 }, note: "你没有只盯着奖金，而是把谈判换成了下一年的空间。" },
      { text: "直接争取现金奖金", effects: { health: 3, network: -2 }, note: "这很现实，也让部分合伙人觉得你还不够长期。" },
    ],
    minYear: 2008,
    requires: (s) => s.track >= 50,
    weight: 4,
  },
  {
    title: "Carry 分配重新讨论",
    category: "职业机会",
    description: "基金准备调整 Carry 方案。你的名字第一次出现在讨论名单里。",
    choices: [
      { text: "争取进入 Carry 池", effects: { career: 9, network: -2, health: -1 }, note: "你把话说得很清楚，也让自己真正进入长期激励游戏。" },
      { text: "先争取下一只基金份额", effects: { career: 5, network: 3 }, note: "你没有在当下硬碰硬，而是把筹码放到下一周期。" },
    ],
    minYear: 2014,
    requires: (s) => s.track >= 62 || s.role === "合伙人",
    weight: 4,
  },
  {
    title: "被安排管理两名分析师",
    category: "职业机会",
    description: "你不再只是自己看项目，还要让别人看得更好。管理开始进入你的工作。",
    choices: [
      { text: "认真搭投研方法", effects: { career: 7, track: 3, health: -2 }, note: "团队开始复用你的判断框架，你也开始被更多杂事找上门。" },
      { text: "继续自己冲在前面", effects: { track: 4, health: -1 }, note: "你效率还在，但团队成长慢了一点。" },
    ],
    minYear: 2011,
    requires: (s) => s.track >= 55 || s.career >= 25,
    weight: 5,
  },
  {
    title: "关键项目让你进投委会旁听",
    category: "职业机会",
    description: "你还没有正式投票权，但可以坐进那个房间。很多职业变化都是从旁听开始的。",
    choices: [
      { text: "抓住机会表达判断", effects: { career: 8, track: 2, health: -1 }, note: "你说得不多，但有一句话被合伙人记住了。" },
      { text: "先观察合伙人怎么争论", effects: { career: 4, health: 1 }, note: "你没有急着表现，却看懂了决策真正发生的方式。" },
    ],
    minYear: 2009,
    requires: (s) => s.role === "投资经理" && (s.track >= 50 || s.network >= 55),
    weight: 6,
  },
  {
    title: "老合伙人准备退休",
    category: "职业机会",
    description: "他的几个项目和关系需要有人接住。接得住是机会，接不住就是包袱。",
    choices: [
      { text: "接手他的组合和关系", effects: { career: 9, network: 6, health: -3 }, note: "你突然被更多人认识，也突然有了更多历史问题。" },
      { text: "只接熟悉的部分", effects: { track: 4, health: -1 }, note: "你没有贪多，错过了一些关系，也少背了一些旧账。" },
    ],
    minYear: 2013,
    requires: (s) => s.role !== "投资经理" || s.network >= 65,
    weight: 4,
  },
  {
    title: "基金想让你转募资岗",
    category: "职业机会",
    description: "你关系维护得不错，合伙人觉得你也许适合去前台募资。你知道这会改变职业曲线。",
    choices: [
      { text: "拒绝转岗，继续做投资", effects: { track: 4, career: 3, network: -2 }, note: "你守住了投资身份，也放弃了一条更靠近 LP 的路。" },
      { text: "兼顾募资和投资", effects: { aum: 8, network: 6, health: -3 }, note: "你拿到更多 LP 入口，也让自己的日程变得更难完整。" },
    ],
    minYear: 2012,
    requires: (s) => s.network >= 62,
    weight: 3,
  },
  {
    title: "你被边缘化到冷门赛道",
    category: "职业机会",
    description: "热门项目暂时轮不到你了。冷门赛道看起来像惩罚，也可能是新的入口。",
    choices: [
      { text: "把冷门赛道做深", effects: { track: 6, career: 4, health: -1 }, note: "你没有把边缘当成失败，而是把它变成了差异化。" },
      { text: "继续争取热门项目", effects: { network: -3, career: 3, health: -1 }, note: "你没有认命，但内部摩擦也变多了。" },
    ],
    minYear: 2010,
    requires: (s) => s.track < 65,
    weight: 4,
  },
  {
    title: "合伙人让你代表基金发言",
    category: "职业机会",
    description: "这是一次公开露面。讲得好，你会被行业记住；讲得太满，也会被行业记住。",
    choices: [
      { text: "讲克制的长期判断", effects: { network: 6, career: 4, health: -1 }, note: "你没有制造爆款金句，但几个重要的人听懂了。" },
      { text: "讲更锋利的观点", effects: { network: 8, track: -2, health: -2 }, note: "你出圈了，也被贴上了更鲜明的标签。" },
    ],
    minYear: 2011,
    requires: (s) => s.network >= 58 || s.track >= 58,
    weight: 4,
  },
  {
    title: "下一只基金要不要给你 GP Title",
    category: "职业机会",
    description: "这不是完整合伙人，但已经是通往合伙人的门缝。Title、责任和压力一起到来。",
    choices: [
      { text: "接受 GP Title", effects: { career: 12, aum: 12, network: 4, health: -2 }, note: "你的名片变了，别人看你的方式也变了。" },
      { text: "等真正投票权再说", effects: { track: 5, health: 2 }, note: "你没有被 Title 打动，更在意它背后的权力是否真实。" },
    ],
    minYear: 2015,
    requires: (s) => s.role !== "合伙人" && s.role !== "创始合伙人" && s.track >= 62,
    weight: 5,
  },
  {
    title: "某个 LP 点名想见你",
    category: "职业机会",
    description: "他们不是想见基金，而是想听你讲组合。你的个人信用开始从机构里长出来。",
    choices: [
      { text: "亲自复盘组合", effects: { aum: 8, network: 6, career: 5, health: -2 }, note: "你讲得不花哨，但 LP 感到这个人真的知道钱投去了哪里。" },
      { text: "请合伙人一起出面", effects: { network: 4, career: 3 }, note: "你没有独占关系，也让平台更放心。" },
    ],
    minYear: 2014,
    requires: (s) => s.track >= 60 || s.network >= 66,
    weight: 4,
  }
);

const investorComments = {
  pre: [
    "一位早期投资人看完材料后说：这个项目不是没有风险，但如果判断对了，赔率来自时点。",
    "某美元基金合伙人在会后提醒：别只看增长，先看它是不是靠融资买出来的增长。",
    "一位消费投资人评价：品牌声量不等于复购，渠道健康比故事更重要。",
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

const eraInvestorComments = [
  { from: 2005, to: 2009, phase: "pre", text: "沈南鹏式的判断会先问：这个市场够不够大，创始人有没有连续创业的韧性。" },
  { from: 2005, to: 2011, phase: "pre", text: "熊晓鸽那代美元基金常讲的一句话是，先看人，再看市场给不给十年窗口。" },
  { from: 2008, to: 2014, phase: "pre", text: "徐新风格的消费判断很直接：品牌最终要回到复购、毛利和渠道效率。" },
  { from: 2010, to: 2015, phase: "pre", text: "朱啸虎式的提醒：速度重要，但烧钱买来的规模要小心被误认为网络效应。" },
  { from: 2012, to: 2018, phase: "pre", text: "张磊常被提到的长期主义，在这一轮里会变成一个问题：这家公司十年后还重要吗？" },
  { from: 2014, to: 2020, phase: "pre", text: "王兴式的冷问题会落在终局：如果所有人都进来补贴，最后谁留下真实供给？" },
  { from: 2015, to: 2021, phase: "pre", text: "傅盛那类产品人会追问：增长不是答案，用户为什么非用你不可才是答案。" },
  { from: 2018, to: 2024, phase: "pre", text: "硬科技投资人的共识越来越像一句老话：实验室指标不等于工程化交付。" },
  { from: 2020, to: 2024, phase: "pre", text: "AI 项目会让人想起孙正义式的豪赌，但真正难的是把愿景拆成收入和毛利。" },
  { from: 2005, to: 2012, phase: "post", text: "退出复盘时，有人提起段永平的朴素标准：看懂生意，比听懂故事重要。" },
  { from: 2010, to: 2016, phase: "post", text: "一位同行复盘说，这笔像刘强东早年讲现金流那样现实：活下来本身就是战略。" },
  { from: 2015, to: 2020, phase: "post", text: "后来看，这更像张一鸣常说的延迟满足：真正的回报不是最吵的时候给出的。" },
  { from: 2018, to: 2024, phase: "post", text: "投后会上有人借用巴菲特那句老逻辑：潮水退去，才知道谁在裸泳。" },
  { from: 2020, to: 2024, phase: "post", text: "AI 热潮后复盘，大家终于承认：参数不是壁垒，场景、数据和组织才是。" },
];

const failedInvestmentLines = [
  "你也记得「{name}」：它像一张没有寄出的明信片，提醒你当年有些风险其实已经写在纸面上。",
  "「{name}」后来成了你投委会里的反面教材，不是因为它最惨，而是因为你曾经最愿意替它辩护。",
  "你偶尔还会想起「{name}」的数据室，里面每一个没追问到底的文件夹，后来都变成了学费。",
  "「{name}」没有把你击垮，但它让你从此对“创始人很强”这句话多问三遍为什么。",
  "最难忘的不是「{name}」亏了钱，而是你终于承认，自己当时把愿望当成了判断。",
  "「{name}」退出后，你在复盘里写下：风险不是黑天鹅，更多时候是被忽略的小字。",
];

const quietInvestmentLines = [
  "那些没有爆发的项目，也悄悄改变了你的判断方式。",
  "有些项目没有成为新闻，却让你学会在热闹之外重新计算赔率。",
  "没有每一笔都给出戏剧性的答案，但每一笔都在训练你识别周期的噪音。",
  "组合里那些平淡的名字，最后反而教会你：VC 不是连续押中风口那么简单。",
  "你没有记住每一次董事会，却记住了那些现金流、招聘和下一轮融资带来的细节。",
];

const lifeLines = {
  exhausted: [
    "家人记得你很多次在饭桌上接起电话，也记得你后来开始学着把手机反扣在桌面。",
    "孩子或伴侣未必懂 AUM 是什么，但他们知道你有几年总是在登机、开会和补觉之间切换。",
    "家里人对你的工作评价很简单：不是不支持，只是希望你偶尔真的在场。",
    "你把很多压力留在电梯和车里，回家后尽量像没事一样，但亲近的人其实都看得出来。",
  ],
  tired: [
    "这份工作没有只消耗工作日，它也偷走了一些睡眠、周末和本来可以慢慢说完的话。",
    "你开始习惯半夜醒来回消息，也开始明白身体不是可以无限追加的基金。",
    "朋友聚会里你常常迟到早退，大家嘴上调侃，心里也知道你被周期推着走。",
    "体检报告比 LP 邮件更诚实，它不关心你刚投中什么项目。",
  ],
  solo: [
    "你把家里的安全感也押进了新基金，庆功宴和现金流压力常常在同一天出现。",
    "独立之后，家人第一次意识到，原来你不是只在投公司，也在经营自己的命运。",
    "你的名片更自由了，但每一次募资不顺，都会真实地影响家里的空气。",
    "身边人看到你终于有了自己的旗号，也看到你越来越少把疲惫说出口。",
  ],
  balanced: [
    "你没有把每个机会都变成战役，生活因此保留了一点正常的形状。",
    "你错过过项目，也保住过周末；这在某些基金故事里不够传奇，但在生活里很珍贵。",
    "家人对你的评价不是最成功，而是这些年你至少还记得回来吃饭。",
    "你没有成为手机永远在线的人，这让你少了一些机会，也留住了一些关系。",
  ],
  proven: [
    "身边人未必懂每一个项目，但他们知道你终于等到了一些迟来的证明。",
    "后来亲友提起你的工作，不再只说辛苦，也开始说你当年确实看对过一些东西。",
    "你没有解释每一个行业术语，只是在某次退出后，终于请家里人吃了一顿很踏实的饭。",
    "那些年被打断的晚餐没有完全白费，至少有几次判断给了你和家人新的安全感。",
  ],
  default: [
    "你学会在机场、会议室和深夜出租车之间切换，也学会承认生活不是投资组合的附属品。",
    "家人和朋友看见的是一个总在赶路的人，你自己知道，这条路有时也会反过来推着你走。",
    "你很少把压力讲完整，更多时候只是说一句最近有点忙。",
    "这份职业给了你视野，也让你不断练习如何不被工作吃掉全部生活。",
  ],
};

const socialLines = {
  legend: [
    "行业里有人把你讲成故事，也有人把你当成饭局上的样本，夸张和误读一起流传。",
    "你的名字开始出现在别人的募资材料和茶水间闲聊里，真假各半，但都说明你被看见了。",
    "有些年轻投资人把你当作坐标，有些同行把你当作变量；这就是江湖的评价方式。",
  ],
  network: [
    "你在行业里的名字越来越常被提起，只是声量有时比真实业绩跑得更快。",
    "饭局和群聊给了你很多入口，也让你明白人脉不是护城河，只是更早听见风声。",
    "你认识的人很多，真正能在低谷时接电话的人少一些，这也是行业的真实质地。",
  ],
  track: [
    "媒体喜欢把你的判断写成天赋，但只有你知道那里面有多少错过、等待和不确定。",
    "外界把成功项目压缩成一句“眼光好”，你知道里面更多是时点、运气和忍耐。",
    "行业会奖励结果，却很少记录过程；你只好自己记住那些不确定的夜晚。",
  ],
  loss: [
    "市场不会认真记住每一次失败的理由，它只会把结果压缩成几句传闻。",
    "失败项目退出后，外界最爱问的是谁投了，最少问的是当时为什么看起来合理。",
    "行业对亏损的记忆很短，对标签的记忆很长，你只能在下一次判断里慢慢修正。",
  ],
  aum: [
    "外界看见的是基金没钱了，你看见的是每一次没有退出的时间成本。",
    "当弹药变少，行业里的声音也会变轻；资本市场有时就是这样现实。",
    "别人说你保守，你知道自己只是被现金流逼着重新学习节奏。",
  ],
  tired: [
    "朋友说你越来越少出现，行业却觉得你一直在线，这可能就是这份工作的悖论。",
    "你的朋友圈像还在高强度运转，但真正熟的人知道你已经很久没好好休息。",
    "行业需要你永远敏锐，生活却提醒你，人不是一套永动的投研系统。",
  ],
  default: [
    "在更大的社会叙事里，你只是资本周期里的一名参与者；但每一次出手，都真实改变过一些公司和一些人。",
    "你没有改写整个时代，但你参与过一些公司的生长，也承担过一些判断的后果。",
    "资本市场最后留下的不是每一次会议纪要，而是那些被资金改变过的组织和人。",
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
    firm: "衡岳创投",
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
    seenEvents: [],
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

function pickByTemplate(list, values = {}) {
  return pick(list).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function investorCommentFor(phase, year) {
  const timeless = investorComments[phase] || [];
  const eraComments = eraInvestorComments
    .filter((comment) => comment.phase === phase && comment.from <= year && year <= comment.to)
    .map((comment) => comment.text);
  return pick([...timeless, ...eraComments]);
}

function applyEffects(effects) {
  state.aum = clamp(state.aum + (effects.aum || 0), 0, 300);
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
    state.firm = pick(["峻岭创投", "北辰资本", "云岫基金", "远桥资本"]);
    state.role = state.role === "投资经理" ? "投资副总裁" : state.role;
    state.partnerYear = null;
    state.career = clamp(state.career + 8, 0, 100);
    return;
  }
  if (move === "solo") {
    state.firm = "自有基金";
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
      investorComment: Math.random() < 0.42 ? investorCommentFor("pre", state.year) : null,
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
  const amount = Math.min(maxInvestmentCheck(state.year), Math.floor(state.aum), Math.max(minInvestmentCheck(), Math.floor(project.preMoney * 0.12)));
  if (amount >= project.preMoney) return;
  project.amount = amount;
  project.ownership = amount / (project.preMoney + amount);
  project.lead = false;
  project.thesis = `${project.thesis} 这一轮留出了一小块跟投额度，给上一年没有出手的人一点窗口。`;
}

function minInvestmentCheck() {
  return isPartnerRole() ? 8 : 5;
}

function maxInvestmentCheck(year) {
  if (year < 2015) return 10;
  if (year < 2020) return 15;
  return 20;
}

function canLeadProject(amount, metrics) {
  const roleBase = isPartnerRole() ? 0.58 : 0.22;
  const capitalFit = state.aum >= amount * 8 ? 0.14 : state.aum >= amount * 5 ? 0.06 : -0.1;
  const relationshipFit = state.network >= 60 ? 0.08 : state.network < 38 ? -0.08 : 0;
  const reputationFit = state.track >= 65 ? 0.06 : state.track < 42 ? -0.06 : 0;
  const dealSizeFit = amount <= 10 ? 0.08 : amount >= 18 ? -0.06 : 0;
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
  const yearCap = maxInvestmentCheck(year);
  const maxCheck = Math.floor(Math.min(yearCap, Math.max(isPartnerRole() ? yearCap * 0.9 : yearCap * 0.7, Math.floor(state.aum * (isPartnerRole() ? 0.28 : 0.24)))));
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
    if (state.seenEvents.includes(event.title)) return false;
    const hasRiskyExit = event.choices.some((choice) => choice.riskyExit);
    if (event.rareOpportunity) {
      if (state.year < 2015 || state.role === "投资经理") return false;
      return Math.random() < 0.18;
    }
    if (!hasRiskyExit) return true;
    if (state.year < 2012) return false;
    return Math.random() < 0.12;
  });
  const event = pick(candidates.length ? candidates : eventDeck.filter((item) => !state.seenEvents.includes(item.title)));
  if (event) state.seenEvents.push(event.title);
  return event || null;
}

function matureInvestments() {
  const matured = state.investments.filter((item) => item.status === "pending" && shouldExitInvestment(item));
  matured.forEach((item) => {
    const exitAge = state.year - item.year;
    const exitModel = buildExitModel(item, exitAge);
    const signal = exitModel.signal;
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
    item.exitReasons = exitModel.reasons;
    item.postComment = Math.random() < 0.45 ? investorCommentFor("post", state.year) : null;
    const proceeds = item.amount * multiple;
    const reputationBonus = outcome === "huge" ? item.amount * 0.35 : outcome === "good" ? item.amount * 0.16 : outcome === "flat" ? item.amount * 0.04 : 0;
    item.aumReturn = proceeds + reputationBonus;
    applyEffects({
      aum: item.aumReturn,
      track: outcome === "huge" ? 18 : outcome === "good" ? 9 : outcome === "flat" ? 0 : -12,
      network: outcome === "huge" ? 9 : outcome === "fail" ? -5 : 2,
      health: outcome === "fail" ? -1 : outcome === "huge" ? 2 : 0,
      career: outcome === "huge" ? 20 : outcome === "good" ? 10 : outcome === "flat" ? 2 : -4,
    });
  });
  return matured;
}

function buildExitModel(item, exitAge) {
  const entryEra = eraFor(item.year);
  const exitEra = eraFor(state.year);
  const entryAge = item.companyFrom ? item.year - item.companyFrom : 2;
  const base = item.team * 0.3 + item.moat * 0.26 + item.heat * 0.1 - item.valuation * 0.22 - item.risk * 0.18;
  const factors = [
    sectorCycleFactor(item, entryEra, exitEra),
    timingFactor(item, entryAge),
    financingWindowFactor(item, exitAge),
    competitionFactor(item),
    policyFactor(item),
    founderFactor(item),
  ];
  const patience = exitAge >= 5 ? { score: 5, text: "持有时间拉长，公司终于等到一个相对成熟的退出窗口" } : { score: 0, text: null };
  const noise = rand(-10, 10);
  const score = factors.reduce((sum, factor) => sum + factor.score, 0) + patience.score;
  const signal = base + score + noise - 8;
  const reasons = [...factors, patience]
    .filter((factor) => factor.text)
    .sort((a, b) => Math.abs(b.score) - Math.abs(a.score))
    .slice(0, 4)
    .map((factor) => factor.text);
  return { signal, reasons };
}

function sectorCycleFactor(item, entryEra, exitEra) {
  const hotAtEntry = entryEra.hot.includes(item.sector);
  const hotAtExit = exitEra.hot.includes(item.sector);
  if (hotAtEntry && hotAtExit) return { score: 12, text: `${sectors[item.sector]}赛道从投资到退出都在资金关注区，下一轮和退出窗口都更顺` };
  if (hotAtEntry && !hotAtExit) return { score: -10, text: `入场时赛道很热，但退出时市场叙事已经转向，估值中枢被压下来` };
  if (!hotAtEntry && hotAtExit) return { score: 8, text: `入场时并不拥挤，后来赛道被重新定价，早期价格反而成了优势` };
  return { score: -2, text: `赛道始终不是主线资金偏好的中心，融资和退出都要靠公司自己证明` };
}

function timingFactor(item, entryAge) {
  if (entryAge <= 1 && item.valuation < 70) return { score: 12, text: "你投得足够早，价格还没有被市场情绪完全打满" };
  if (entryAge <= 1 && item.valuation >= 82) return { score: -4, text: "虽然入场早，但估值已经提前反映了太多乐观预期" };
  if (entryAge >= 5) return { score: -9, text: "公司已经过了最便宜的阶段，你买到的是被多轮融资抬高后的价格" };
  if (item.valuation >= 85) return { score: -8, text: "入场估值偏贵，后续每一次融资都需要更强的增长来接住" };
  return { score: 2, text: "入场时点不算极早，但价格和业务进度还算匹配" };
}

function financingWindowFactor(item, exitAge) {
  const windowScore = financingWindowScore(state.year, item.sector);
  if (windowScore >= 8) return { score: windowScore, text: "退出年份融资窗口打开，后续投资人愿意为增长和确定性继续付钱" };
  if (windowScore <= -8) return { score: windowScore, text: "退出年份融资窗口收紧，公司不是没有业务，而是下一轮资金变得更难" };
  if (exitAge <= 2 && item.risk > 65) return { score: -6, text: "持有时间太短，风险还没被业务验证消化，市场不愿给高倍数" };
  return { score: windowScore, text: null };
}

function financingWindowScore(year, sector) {
  let score = 0;
  if (year >= 2009 && year <= 2014 && sector === "internet") score += 9;
  if (year >= 2015 && year <= 2018 && ["consumer", "healthcare", "energy"].includes(sector)) score += 7;
  if (year >= 2020 && ["hardtech", "energy", "ai"].includes(sector)) score += 8;
  if (year >= 2021 && ["consumer", "internet"].includes(sector)) score -= 8;
  if (year >= 2022 && sector === "healthcare") score -= 5;
  return score;
}

function competitionFactor(item) {
  if (item.sector === "internet" && item.year >= 2014 && item.moat < 65) return { score: -10, text: "互联网平台化竞争加剧，缺少强网络效应的公司很难守住入口" };
  if (item.sector === "consumer" && item.year >= 2018 && item.heat > 75 && item.moat < 60) return { score: -9, text: "消费赛道供给迅速拥挤，品牌声量没有转化成足够稳定的复购" };
  if (item.sector === "ai" && item.moat < 70) return { score: -8, text: "AI 能力迭代太快，公司壁垒不在模型本身，后续被平台和竞品持续挤压" };
  if (item.moat >= 82) return { score: 9, text: "公司形成了比较清楚的客户、数据或供应链壁垒，竞争没有轻易打穿它" };
  return { score: item.moat >= 65 ? 3 : -3, text: item.moat >= 65 ? "竞争存在，但公司至少有一块能被客户记住的差异化" : "竞争格局比 BP 里更拥挤，公司没有证明自己不可替代" };
}

function policyFactor(item) {
  if (item.sector === "healthcare" && state.year >= 2018 && item.risk > 58) return { score: -8, text: "医保控费、集采和审批周期让医疗项目的商业化比预期更慢" };
  if (item.sector === "energy" && item.year <= 2018 && state.year >= 2019) return { score: -4, text: "补贴退坡和产能周期改变了新能源公司的利润假设" };
  if (item.sector === "hardtech" && state.year >= 2020) return { score: 6, text: "国产替代和产业政策给硬科技项目提供了额外订单和融资支撑" };
  if (item.sector === "ai" && state.year >= 2023 && item.risk > 60) return { score: -5, text: "数据合规、模型备案和客户预算让 AI 项目落地节奏慢于热度" };
  return { score: 0, text: null };
}

function founderFactor(item) {
  if (item.team >= 82 && item.risk < 65) return { score: 10, text: "创始人在融资、招人和战略取舍上没有明显变形，团队执行力托住了周期" };
  if (item.team >= 72) return { score: 5, text: "创始人能力不错，几次关键调整让公司没有在压力里散掉" };
  if (item.team <= 45) return { score: -10, text: "创始团队在压力下暴露出组织短板，融资和交付问题互相放大" };
  return { score: -2, text: "创始团队没有犯致命错误，但也没能把公司带出明显的拐点" };
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
    aumReturn: null,
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
  const baseChance = 0.04 + Math.max(0, state.track - 50) * 0.006 + Math.max(0, state.network - 45) * 0.004 + state.career * 0.004 + successCount * 0.025;
  const chance = clamp(state.role === "投资经理" && state.year >= 2011 ? baseChance + 0.12 : baseChance, 0.04, 0.5);
  if (Math.random() > chance) return null;
  const candidates = careerEventDeck.filter((event) => !state.seenEvents.includes(event.title) && state.year >= event.minYear && event.requires(state));
  const event = candidates.length ? weightedPick(candidates) : null;
  if (event) state.seenEvents.push(event.title);
  return event;
}

function weightedPick(items) {
  const total = items.reduce((sum, item) => sum + (item.weight || 1), 0);
  let cursor = Math.random() * total;
  for (const item of items) {
    cursor -= item.weight || 1;
    if (cursor <= 0) return item;
  }
  return items[items.length - 1];
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
  const worstLine = worst && worst.outcome === "fail" ? pickByTemplate(failedInvestmentLines, { name: worst.name }) : pick(quietInvestmentLines);
  const sectorLine = pick([
    `你最熟悉的是${sectors[sector] || "多赛道"}项目。`,
    `如果把这些年摊开看，${sectors[sector] || "多赛道"}是你投入最多注意力的地方。`,
    `你的判断最终更多留在了${sectors[sector] || "多赛道"}这条线上。`,
  ]);
  return {
    title: endingTitle.title,
    description: endingDescription([careerLine, lifeLine, socialLine, sectorLine, bestLine, worstLine]),
  };
}

function endingDescription(lines) {
  const templates = [
    [0, 3, 4, 5, 1],
    [0, 1, 4, 2, 5],
    [3, 4, 0, 5, 2],
    [0, 4, 3, 1],
    [1, 0, 2, 4, 5],
    [0, 5, 4, 2],
  ];
  const selected = pick(templates)
    .map((index) => lines[index])
    .filter(Boolean);
  return [...new Set(selected)].join("\n");
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
  if (state.health <= 25 && totalDeals >= 10) return pick(lifeLines.exhausted);
  if (state.health <= 35) return pick(lifeLines.tired);
  if (state.role === "创始合伙人") return pick(lifeLines.solo);
  if (state.investments.length <= 5 && state.health >= 70) return pick(lifeLines.balanced);
  if (state.track >= 80) return pick(lifeLines.proven);
  return pick(lifeLines.default);
}

function socialEndingLine() {
  if (state.network >= 86 && state.track >= 72) return pick(socialLines.legend);
  if (state.network >= 82) return pick(socialLines.network);
  if (state.track >= 85) return pick(socialLines.track);
  if (state.endingReason === "loss_spiral") return pick(socialLines.loss);
  if (state.endingReason === "aum_depleted") return pick(socialLines.aum);
  if (state.health <= 30) return pick(socialLines.tired);
  return pick(socialLines.default);
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
  const roleLine = isPartnerRole() && state.partnerYear ? `${state.firm} · ${state.role} · ${state.partnerYear} 年开始` : `${state.firm} · ${state.role}`;
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
    <section class="screen title-screen">
      <div class="terminal-hero">
        <div class="hero-copy">
          <p class="eyebrow">FUND CAREER FILE · 2005-2024</p>
          <h1>中国 VC<br>投资档案</h1>
          <p class="lede">从投资经理开始，在二十年产业周期里管理弹药、项目、LP、健康和职业声誉。每一次出手都只是开始，真正的答案要等市场给。</p>
          <div class="hero-actions">
            <button class="btn" data-action="start">启动职业模拟</button>
            <span>单局公司与事件不重复</span>
          </div>
        </div>
        <div class="hero-dossier" aria-hidden="true">
          <div class="dossier-top">
            <span>CASE CN-VC-2005</span>
            <strong>ACTIVE</strong>
          </div>
          <div class="dossier-grid">
            <div><span>START ROLE</span><strong>投资经理</strong></div>
            <div><span>CAPITAL</span><strong>45M</strong></div>
            <div><span>EVENT POOL</span><strong>117</strong></div>
            <div><span>COMPANIES</span><strong>179</strong></div>
          </div>
          <div class="dossier-line"></div>
          <p>LP Call · IC Memo · Portfolio Risk · Promotion Track · Health Cost</p>
        </div>
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
  const investLabel = selected
    ? "已经进入组合"
    : state.aum < project.amount
      ? "AUM 不足"
      : state.selected.length >= maxDeals
        ? "本年额度已满"
        : "投资";
  const investHint = selected
    ? "等待退出"
    : state.aum < project.amount
      ? "无法出手"
      : state.selected.length >= maxDeals
        ? "明年再看"
        : project.lead
          ? "领投此轮"
          : "加入本轮";
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
      <button class="btn invest-button" data-action="invest" data-id="${project.id}" ${disabled ? "disabled" : ""}>
        <span>${investLabel}</span>
        <small>${investHint}</small>
      </button>
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
          const returnText = item.aumReturn ? `本次退出回款让 AUM 增加 ${money(item.aumReturn)}。` : "";
          return `<div class="log-item"><strong class="${cls}">${item.name} · ${label} · ${item.multiple.toFixed(1)}x</strong><br>${item.year} 年投出的 ${sectors[item.sector]} 项目在持有 ${item.exitAge} 年后给出了答案。${returnText}${item.postComment ? `<div class="quote-note compact">${item.postComment}</div>` : ""}</div>`;
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
