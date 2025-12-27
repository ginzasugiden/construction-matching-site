// サンプル求人データ
const jobsData = [
    {
        id: 1,
        title: "大規模商業施設の現場監督",
        company: "大和建設株式会社",
        location: "東京都港区",
        salary: "月給35万円～50万円",
        employmentType: "正社員",
        experience: "3年以上",
        badge: "急募",
        tags: ["1級建築施工管理技士", "大規模案件", "残業少なめ"],
        description: "都心の大型商業施設建設プロジェクトの現場監督を募集しています。",
        isNew: true,
        featured: true
    },
    {
        id: 2,
        title: "マンション新築工事の現場代理人",
        company: "東京建設工業株式会社",
        location: "東京都新宿区",
        salary: "月給40万円～60万円",
        employmentType: "正社員",
        experience: "5年以上",
        badge: "高収入",
        tags: ["2級建築施工管理技士", "マンション経験", "福利厚生充実"],
        description: "高級マンション建設の現場代理人として、工程管理・品質管理をお任せします。",
        isNew: true,
        featured: true
    },
    {
        id: 3,
        title: "道路・橋梁工事の現場監督",
        company: "関東土木株式会社",
        location: "神奈川県横浜市",
        salary: "月給32万円～45万円",
        employmentType: "正社員",
        experience: "2年以上",
        badge: "未経験歓迎",
        tags: ["1級土木施工管理技士", "公共工事", "安定"],
        description: "国道拡張工事の現場監督を募集。公共工事の経験を積めます。",
        isNew: false,
        featured: true
    },
    {
        id: 4,
        title: "リノベーション工事の施工管理",
        company: "都市リノベーション株式会社",
        location: "大阪府大阪市",
        salary: "月給30万円～42万円",
        employmentType: "正社員",
        experience: "1年以上",
        badge: "働きやすい",
        tags: ["リノベーション", "2級建築士", "土日休み"],
        description: "オフィスビルやマンションのリノベーション工事の施工管理職です。",
        isNew: true,
        featured: false
    },
    {
        id: 5,
        title: "工場建設プロジェクトの現場監督",
        company: "中部工業建設株式会社",
        location: "愛知県名古屋市",
        salary: "月給38万円～55万円",
        employmentType: "正社員",
        experience: "4年以上",
        badge: "大手企業",
        tags: ["工場建設", "1級建築施工管理技士", "昇給あり"],
        description: "最新設備を導入する工場建設プロジェクトの現場監督を募集。",
        isNew: false,
        featured: true
    },
    {
        id: 6,
        title: "住宅新築工事の現場管理",
        company: "ハウジング建設株式会社",
        location: "福岡県福岡市",
        salary: "月給28万円～38万円",
        employmentType: "正社員",
        experience: "1年以上",
        badge: null,
        tags: ["住宅建築", "2級建築施工管理技士", "資格支援"],
        description: "注文住宅の現場管理をお任せします。資格取得支援制度あり。",
        isNew: false,
        featured: false
    },
    {
        id: 7,
        title: "病院建設の工事主任",
        company: "医療施設建設株式会社",
        location: "東京都千代田区",
        salary: "月給42万円～65万円",
        employmentType: "正社員",
        experience: "6年以上",
        badge: "高収入",
        tags: ["医療施設", "1級建築施工管理技士", "大規模案件"],
        description: "500床規模の総合病院建設プロジェクトの工事主任を募集。",
        isNew: true,
        featured: true
    },
    {
        id: 8,
        title: "トンネル工事の現場責任者",
        company: "山岳トンネル建設株式会社",
        location: "北海道札幌市",
        salary: "月給36万円～50万円",
        employmentType: "正社員",
        experience: "5年以上",
        badge: "急募",
        tags: ["トンネル工事", "1級土木施工管理技士", "特殊工法"],
        description: "高速道路トンネル工事の現場責任者として、安全管理と工程管理を担当。",
        isNew: true,
        featured: false
    },
    {
        id: 9,
        title: "ホテル建設の現場監督",
        company: "ホスピタリティ建設株式会社",
        location: "京都府京都市",
        salary: "月給34万円～48万円",
        employmentType: "正社員",
        experience: "3年以上",
        badge: null,
        tags: ["ホテル建設", "2級建築施工管理技士", "英語力活かせる"],
        description: "外資系ホテルチェーンの新築工事における現場監督を募集。",
        isNew: false,
        featured: false
    },
    {
        id: 10,
        title: "ダム建設工事の施工管理",
        company: "水資源開発建設株式会社",
        location: "岐阜県高山市",
        salary: "月給40万円～58万円",
        employmentType: "正社員",
        experience: "7年以上",
        badge: "大規模",
        tags: ["ダム工事", "1級土木施工管理技士", "公共工事"],
        description: "国家プロジェクトのダム建設工事における施工管理職を募集。",
        isNew: false,
        featured: true
    },
    {
        id: 11,
        title: "学校施設の改修工事監督",
        company: "教育施設建設株式会社",
        location: "埼玉県さいたま市",
        salary: "月給30万円～42万円",
        employmentType: "正社員",
        experience: "2年以上",
        badge: "働きやすい",
        tags: ["改修工事", "2級建築施工管理技士", "公共施設"],
        description: "小中学校の耐震改修工事や校舎リニューアル工事の現場監督。",
        isNew: true,
        featured: false
    },
    {
        id: 12,
        title: "ショッピングモール建設の工事長",
        company: "商業施設建設株式会社",
        location: "千葉県千葉市",
        salary: "月給45万円～70万円",
        employmentType: "正社員",
        experience: "8年以上",
        badge: "高収入",
        tags: ["大規模商業施設", "1級建築施工管理技士", "管理職"],
        description: "大型ショッピングモール建設プロジェクトの工事長として全体統括。",
        isNew: false,
        featured: true
    },
    {
        id: 13,
        title: "駅ビル建設の現場代理人",
        company: "鉄道関連建設株式会社",
        location: "東京都渋谷区",
        salary: "月給38万円～52万円",
        employmentType: "正社員",
        experience: "4年以上",
        badge: null,
        tags: ["駅ビル", "1級建築施工管理技士", "鉄道関連"],
        description: "主要駅の駅ビル再開発プロジェクトにおける現場代理人を募集。",
        isNew: true,
        featured: false
    },
    {
        id: 14,
        title: "高速道路建設の現場監督",
        company: "高速道路建設株式会社",
        location: "静岡県静岡市",
        salary: "月給35万円～48万円",
        employmentType: "正社員",
        experience: "3年以上",
        badge: "公共工事",
        tags: ["高速道路", "1級土木施工管理技士", "安定"],
        description: "新東名高速道路延伸工事の現場監督として工程・品質管理を担当。",
        isNew: false,
        featured: false
    },
    {
        id: 15,
        title: "データセンター建設の施工管理",
        company: "IT施設建設株式会社",
        location: "東京都江東区",
        salary: "月給42万円～60万円",
        employmentType: "正社員",
        experience: "5年以上",
        badge: "最先端",
        tags: ["データセンター", "1級建築施工管理技士", "IT施設"],
        description: "次世代データセンター建設における施工管理職。最新技術に触れられます。",
        isNew: true,
        featured: true
    }
];

// 求人データをフィルタリングする関数
function filterJobs(filters = {}) {
    let filtered = [...jobsData];
    
    // キーワード検索
    if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        filtered = filtered.filter(job => 
            job.title.toLowerCase().includes(keyword) ||
            job.company.toLowerCase().includes(keyword) ||
            job.tags.some(tag => tag.toLowerCase().includes(keyword))
        );
    }
    
    // 勤務地フィルター
    if (filters.location) {
        filtered = filtered.filter(job => job.location.includes(filters.location));
    }
    
    // 雇用形態フィルター
    if (filters.employmentType) {
        filtered = filtered.filter(job => job.employmentType === filters.employmentType);
    }
    
    // 経験年数フィルター
    if (filters.experience) {
        filtered = filtered.filter(job => job.experience === filters.experience);
    }
    
    // 注目求人のみ
    if (filters.featured) {
        filtered = filtered.filter(job => job.featured);
    }
    
    // 新着求人のみ
    if (filters.isNew) {
        filtered = filtered.filter(job => job.isNew);
    }
    
    return filtered;
}

// 求人を取得する関数（IDで検索）
function getJobById(id) {
    return jobsData.find(job => job.id === parseInt(id));
}

// 注目の求人を取得
function getFeaturedJobs(limit = 6) {
    return jobsData.filter(job => job.featured).slice(0, limit);
}

// 新着求人を取得
function getNewJobs(limit = 6) {
    return jobsData.filter(job => job.isNew).slice(0, limit);
}