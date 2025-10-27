// Zero to one TAX - Netlify CMS 블로그 시스템
// Markdown 파일을 읽어서 블로그 목록과 상세 페이지에 표시

// Marked.js 로드 (Markdown → HTML 변환)
// <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

// 블로그 게시글 데이터 저장
let allPosts = [];
let filteredPosts = [];
let currentCategory = 'all';
let currentPage = 1;
const postsPerPage = 9;

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', async () => {
    // GitHub API를 통해 _posts 폴더의 모든 Markdown 파일 가져오기
    await loadBlogPosts();
    
    // 블로그 목록 페이지라면
    if (document.getElementById('blog-list')) {
        renderBlogList();
        setupCategoryFilter();
        setupSearch();
    }
    
    // 블로그 상세 페이지라면
    if (document.getElementById('blog-detail')) {
        renderBlogDetail();
    }
});

// GitHub에서 블로그 포스트 목록 가져오기
async function loadBlogPosts() {
    try {
        // GitHub API - _posts 폴더의 파일 목록
        const response = await fetch('https://api.github.com/repos/contact604/0to1tax-website/contents/_posts');
        const files = await response.json();
        
        // .md 파일만 필터링
        const markdownFiles = files.filter(file => file.name.endsWith('.md'));
        
        // 각 파일의 내용 가져오기
        const posts = await Promise.all(
            markdownFiles.map(async (file) => {
                const contentResponse = await fetch(file.download_url);
                const content = await contentResponse.text();
                return parseMarkdownPost(content, file.name);
            })
        );
        
        // 날짜순 정렬 (최신순)
        allPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        filteredPosts = [...allPosts];
        
    } catch (error) {
        console.error('블로그 포스트 로딩 실패:', error);
        // 에러 시 로컬 예시 데이터 사용
        loadLocalPosts();
    }
}

// Markdown 파일 파싱 (Front Matter + 본문)
function parseMarkdownPost(content, filename) {
    // Front Matter 추출 (---)
    const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontMatterRegex);
    
    if (!match) {
        console.error('Invalid markdown format:', filename);
        return null;
    }
    
    const frontMatter = match[1];
    const body = match[2];
    
    // Front Matter 파싱
    const metadata = {};
    frontMatter.split('\n').forEach(line => {
        const [key, ...values] = line.split(':');
        if (key && values.length > 0) {
            const value = values.join(':').trim();
            
            // 배열 처리 (tags)
            if (key.trim() === 'tags') {
                metadata[key.trim()] = [];
            } else if (line.startsWith('  - ')) {
                // 배열 항목
                const arrayValue = line.replace('  - ', '').trim();
                if (metadata.tags) {
                    metadata.tags.push(arrayValue);
                }
            } else {
                // 따옴표 제거
                metadata[key.trim()] = value.replace(/^["']|["']$/g, '');
            }
        }
    });
    
    // 파일명에서 slug 추출
    const slug = filename.replace('.md', '');
    
    return {
        slug,
        title: metadata.title || 'Untitled',
        date: metadata.date || new Date().toISOString(),
        author: metadata.author || 'Zero to one TAX',
        category: metadata.category || '기타',
        tags: metadata.tags || [],
        thumbnail: metadata.thumbnail || '',
        excerpt: metadata.excerpt || body.substring(0, 150) + '...',
        body: body,
        published: metadata.published !== 'false'
    };
}

// 블로그 목록 렌더링
function renderBlogList() {
    const blogList = document.getElementById('blog-list');
    if (!blogList) return;
    
    // 공개된 글만 필터링
    const publishedPosts = filteredPosts.filter(post => post.published);
    
    // 페이지네이션
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = publishedPosts.slice(startIndex, endIndex);
    
    // 카드 렌더링
    blogList.innerHTML = postsToShow.map(post => `
        <article class="blog-card" onclick="location.href='blog-detail.html?slug=${post.slug}'">
            ${post.thumbnail ? `
                <div class="blog-thumbnail">
                    <img src="${post.thumbnail}" alt="${post.title}" loading="lazy">
                </div>
            ` : ''}
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="category">${post.category}</span>
                    <span class="date">${formatDate(post.date)}</span>
                </div>
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
    
    // 페이지네이션 렌더링
    renderPagination(publishedPosts.length);
}

// 날짜 포맷팅
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// 페이지네이션 렌더링
function renderPagination(totalPosts) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    
    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += `
            <button class="page-btn ${i === currentPage ? 'active' : ''}" 
                    onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    pagination.innerHTML = html;
}

// 페이지 변경
function changePage(page) {
    currentPage = page;
    renderBlogList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 카테고리 필터 설정
function setupCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 활성화 상태 변경
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 필터링
            currentCategory = btn.dataset.category;
            filterPosts();
        });
    });
}

// 검색 설정
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        filterPosts(e.target.value);
    });
}

// 포스트 필터링
function filterPosts(searchTerm = '') {
    filteredPosts = allPosts.filter(post => {
        // 카테고리 필터
        const categoryMatch = currentCategory === 'all' || post.category === currentCategory;
        
        // 검색어 필터
        const searchMatch = searchTerm === '' || 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        return categoryMatch && searchMatch && post.published;
    });
    
    currentPage = 1;
    renderBlogList();
}

// 블로그 상세 페이지 렌더링
async function renderBlogDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
        document.getElementById('blog-detail').innerHTML = '<p>블로그 글을 찾을 수 없습니다.</p>';
        return;
    }
    
    // 포스트 로드
    await loadBlogPosts();
    const post = allPosts.find(p => p.slug === slug);
    
    if (!post) {
        document.getElementById('blog-detail').innerHTML = '<p>블로그 글을 찾을 수 없습니다.</p>';
        return;
    }
    
    // Markdown을 HTML로 변환
    const htmlContent = marked.parse(post.body);
    
    // 렌더링
    document.getElementById('blog-detail').innerHTML = `
        <article class="blog-post">
            <header class="blog-header">
                <div class="blog-meta">
                    <span class="category">${post.category}</span>
                    <span class="date">${formatDate(post.date)}</span>
                    <span class="author">작성: ${post.author}</span>
                </div>
                <h1 class="blog-title">${post.title}</h1>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
            </header>
            
            ${post.thumbnail ? `
                <div class="blog-featured-image">
                    <img src="${post.thumbnail}" alt="${post.title}">
                </div>
            ` : ''}
            
            <div class="blog-content markdown-body">
                ${htmlContent}
            </div>
        </article>
    `;
    
    // 메타 태그 업데이트
    document.title = `${post.title} - Zero to one TAX Blog`;
    updateMetaTags(post);
}

// SEO 메타 태그 업데이트
function updateMetaTags(post) {
    // Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = post.excerpt;
    
    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = post.title;
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = post.excerpt;
    
    if (post.thumbnail) {
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.content = post.thumbnail;
    }
}

// 로컬 예시 데이터 (API 실패 시)
function loadLocalPosts() {
    allPosts = [
        {
            slug: '2024-10-27-welcome',
            title: 'Zero to one TAX 블로그에 오신 것을 환영합니다',
            date: '2024-10-27 10:00:00',
            author: 'Zero to one TAX',
            category: '기타',
            tags: ['공지', '환영', '블로그'],
            thumbnail: '',
            excerpt: 'Zero to one TAX 공식 블로그가 오픈했습니다. 스타트업 세무·회계에 관한 유익한 정보를 공유하겠습니다.',
            body: '# 환영합니다!\n\nZero to one TAX 블로그입니다.',
            published: true
        }
    ];
    filteredPosts = [...allPosts];
}

// 전역 함수로 export
window.changePage = changePage;
