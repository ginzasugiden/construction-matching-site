// DOMContentLoaded - ページ読み込み後に実行
document.addEventListener('DOMContentLoaded', function() {
    // モバイルメニューの初期化
    initMobileMenu();
    
    // ページごとの初期化
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        initHomePage();
    } else if (currentPage === 'jobs.html') {
        initJobsPage();
    } else if (currentPage === 'job-detail.html') {
        initJobDetailPage();
    } else if (currentPage === 'for-companies.html') {
        initCompaniesPage();
    } else if (currentPage === 'for-jobseekers.html') {
        initJobseekersPage();
    }
    
    // スムーズスクロール
    initSmoothScroll();
});

/* ===========================
   モバイルメニュー
   =========================== */
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            
            // アイコン切り替え
            const icon = this.querySelector('i');
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // メニュー外をクリックしたら閉じる
        document.addEventListener('click', function(e) {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
                const icon = toggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

/* ===========================
   ホームページ初期化
   =========================== */
function initHomePage() {
    // 注目の求人を表示
    displayPopularJobs();
}

function displayPopularJobs() {
    const container = document.getElementById('popularJobs');
    if (!container) return;
    
    const featuredJobs = getFeaturedJobs(6);
    
    if (featuredJobs.length === 0) {
        container.innerHTML = '<p class="loading">現在、表示できる求人がありません。</p>';
        return;
    }
    
    container.innerHTML = featuredJobs.map(job => createJobCard(job)).join('');
}

/* ===========================
   求人一覧ページ初期化
   =========================== */
function initJobsPage() {
    // URLパラメータから検索条件を取得
    const urlParams = new URLSearchParams(window.location.search);
    const filters = {
        keyword: urlParams.get('keyword') || '',
        location: urlParams.get('location') || '',
        employmentType: urlParams.get('employmentType') || '',
        experience: urlParams.get('experience') || ''
    };
    
    // フォームに検索条件を反映
    applyFiltersToForm(filters);
    
    // 求人一覧を表示
    displayJobs(filters);
    
    // フィルターイベントの設定
    setupFilterEvents();
    
    // 検索フォームのイベント
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch();
        });
    }
}

function applyFiltersToForm(filters) {
    // キーワード
    const keywordInput = document.getElementById('keywordInput');
    if (keywordInput && filters.keyword) {
        keywordInput.value = filters.keyword;
    }
    
    // 勤務地
    const locationSelect = document.getElementById('locationFilter');
    if (locationSelect && filters.location) {
        locationSelect.value = filters.location;
    }
    
    // 雇用形態
    const employmentTypeSelect = document.getElementById('employmentTypeFilter');
    if (employmentTypeSelect && filters.employmentType) {
        employmentTypeSelect.value = filters.employmentType;
    }
    
    // 経験年数
    const experienceSelect = document.getElementById('experienceFilter');
    if (experienceSelect && filters.experience) {
        experienceSelect.value = filters.experience;
    }
}

function displayJobs(filters = {}) {
    const container = document.getElementById('jobsList');
    const countElement = document.getElementById('jobsCount');
    
    if (!container) return;
    
    const filteredJobs = filterJobs(filters);
    
    // 件数表示
    if (countElement) {
        countElement.textContent = `${filteredJobs.length}件`;
    }
    
    if (filteredJobs.length === 0) {
        container.innerHTML = '<p class="no-results">条件に合う求人が見つかりませんでした。検索条件を変更してお試しください。</p>';
        return;
    }
    
    container.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
}

function setupFilterEvents() {
    const filters = ['locationFilter', 'employmentTypeFilter', 'experienceFilter', 'sortFilter'];
    
    filters.forEach(filterId => {
        const element = document.getElementById(filterId);
        if (element) {
            element.addEventListener('change', performSearch);
        }
    });
}

function performSearch() {
    const keyword = document.getElementById('keywordInput')?.value || '';
    const location = document.getElementById('locationFilter')?.value || '';
    const employmentType = document.getElementById('employmentTypeFilter')?.value || '';
    const experience = document.getElementById('experienceFilter')?.value || '';
    
    const filters = {
        keyword,
        location,
        employmentType,
        experience
    };
    
    displayJobs(filters);
}

/* ===========================
   求人詳細ページ初期化
   =========================== */
function initJobDetailPage() {
    // URLパラメータからジョブIDを取得
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    
    if (jobId) {
        displayJobDetail(jobId);
    } else {
        // IDがない場合はエラー表示
        const container = document.getElementById('jobDetailContent');
        if (container) {
            container.innerHTML = '<p class="error-message">求人情報が見つかりませんでした。</p>';
        }
    }
    
    // 応募ボタンのイベント
    const applyBtn = document.getElementById('applyBtn');
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            alert('応募機能は現在準備中です。本番環境では応募フォームが表示されます。');
        });
    }
}

function displayJobDetail(jobId) {
    const job = getJobById(jobId);
    const container = document.getElementById('jobDetailContent');
    
    if (!job || !container) {
        if (container) {
            container.innerHTML = '<p class="error-message">求人情報が見つかりませんでした。</p>';
        }
        return;
    }
    
    // 求人詳細のHTMLを生成（詳細ページで使用）
    // ここでは基本的な情報のみ表示
    document.title = `${job.title} - ${job.company} | 建設現場監督マッチング`;
}

/* ===========================
   企業向けページ初期化
   =========================== */
function initCompaniesPage() {
    const contactForm = document.getElementById('companyContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleCompanyContact(this);
        });
    }
}

function handleCompanyContact(form) {
    // フォームデータの取得
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // 簡単なバリデーション
    if (!data.companyName || !data.email || !data.phone) {
        alert('必須項目を入力してください。');
        return;
    }
    
    // 実際の実装では、ここでAPIにデータを送信
    console.log('企業お問い合わせデータ:', data);
    alert('お問い合わせを受け付けました。担当者より3営業日以内にご連絡いたします。');
    form.reset();
}

/* ===========================
   求職者向けページ初期化
   =========================== */
function initJobseekersPage() {
    const registerForm = document.getElementById('jobseekerRegisterForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleJobseekerRegister(this);
        });
    }
}

function handleJobseekerRegister(form) {
    // フォームデータの取得
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // 簡単なバリデーション
    if (!data.name || !data.email || !data.password) {
        alert('必須項目を入力してください。');
        return;
    }
    
    if (data.password !== data.confirmPassword) {
        alert('パスワードが一致しません。');
        return;
    }
    
    // 実際の実装では、ここでAPIにデータを送信
    console.log('求職者登録データ:', data);
    alert('会員登録が完了しました。ご登録いただいたメールアドレスに確認メールを送信しました。');
    form.reset();
}

/* ===========================
   ユーティリティ関数
   =========================== */

// 求人カードのHTML生成
function createJobCard(job) {
    const badge = job.badge ? `<div class="job-badge">${job.badge}</div>` : '';
    const tags = job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('');
    
    return `
        <a href="job-detail.html?id=${job.id}" class="job-card">
            <div class="job-header">
                <div class="job-company-logo">
                    <i class="fas fa-building"></i>
                </div>
                ${badge}
            </div>
            <h3 class="job-title">${job.title}</h3>
            <p class="job-company">
                <i class="fas fa-building"></i>
                ${job.company}
            </p>
            <div class="job-info">
                <div class="job-info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${job.location}</span>
                </div>
                <div class="job-info-item">
                    <i class="fas fa-yen-sign"></i>
                    <span>${job.salary}</span>
                </div>
                <div class="job-info-item">
                    <i class="fas fa-briefcase"></i>
                    <span>${job.experience}</span>
                </div>
            </div>
            <div class="job-tags">
                ${tags}
            </div>
        </a>
    `;
}

// スムーズスクロール
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ローディング表示
function showLoading(container) {
    if (container) {
        container.innerHTML = '<div class="loading">読み込み中...</div>';
    }
}

// エラーメッセージ表示
function showError(container, message) {
    if (container) {
        container.innerHTML = `<p class="error-message">${message}</p>`;
    }
}