// taxZ1로그 - Knowledge Base JavaScript

let allArticles = [];
let currentCategory = 'all';
let currentPage = 1;
const articlesPerPage = 10;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', async () => {
    await loadArticles();
    renderArticles();
    updatePopularTags();
    setupEventListeners();
});

// 이벤트 리스너 설정
function setupEventListeners() {
    // 검색 입력
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }

    // 모바일 메뉴 토글
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 데이터베이스에서 아티클 로드
async function loadArticles() {
    try {
        const response = await fetch('tables/blog_posts?limit=100&sort=-created_at');
        const data = await response.json();
        
        // published가 true인 게시글만 필터링
        allArticles = data.data.filter(article => article.published === true);
        
        console.log(`Loaded ${allArticles.length} published articles`);
    } catch (error) {
        console.error('Failed to load articles:', error);
        allArticles = [];
    }
}

// 카테고리로 필터링
function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1;
    
    // 카테고리 버튼 활성화 상태 업데이트
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderArticles();
    
    // 페이지 상단으로 스크롤 (부드럽게)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 검색 처리
function handleSearch() {
    currentPage = 1;
    renderArticles();
}

// 태그를 배열로 변환하는 헬퍼 함수
function getTagsArray(tags) {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    if (typeof tags === 'string') return tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    return [];
}

// 태그를 문자열로 변환하는 헬퍼 함수
function getTagsString(tags) {
    const tagsArray = getTagsArray(tags);
    return tagsArray.join(' ');
}

// 필터링된 아티클 가져오기
function getFilteredArticles() {
    let filtered = [...allArticles];
    
    // 카테고리 필터
    if (currentCategory !== 'all') {
        filtered = filtered.filter(article => article.category === currentCategory);
    }
    
    // 검색 필터
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    if (searchTerm) {
        filtered = filtered.filter(article => {
            const titleMatch = article.title.toLowerCase().includes(searchTerm);
            const contentMatch = article.content.toLowerCase().includes(searchTerm);
            const tagsString = getTagsString(article.tags);
            const tagsMatch = tagsString.toLowerCase().includes(searchTerm);
            return titleMatch || contentMatch || tagsMatch;
        });
    }
    
    return filtered;
}

// 아티클 렌더링
function renderArticles() {
    const container = document.getElementById('articlesList');
    if (!container) return;
    
    const filtered = getFilteredArticles();
    const totalPages = Math.ceil(filtered.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const pageArticles = filtered.slice(startIndex, endIndex);
    
    if (pageArticles.length === 0) {
        container.innerHTML = `
            <div class="text-center py-16">
                <i class="fas fa-search text-gray-300 text-6xl mb-4"></i>
                <p class="text-gray-500 text-lg">검색 결과가 없습니다.</p>
                <p class="text-gray-400 text-sm mt-2">다른 검색어를 시도해보세요.</p>
            </div>
        `;
        updatePagination(0, 0);
        return;
    }
    
    container.innerHTML = pageArticles.map(article => `
        <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 mb-4">
            <div class="flex items-start justify-between mb-3">
                <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full" 
                      style="background-color: ${getCategoryColor(article.category)}20; color: ${getCategoryColor(article.category)};">
                    ${article.category || '기타'}
                </span>
                <span class="text-sm text-gray-400">${formatDate(article.created_at)}</span>
            </div>
            
            <h2 class="text-xl font-bold text-gray-800 mb-3 hover:text-[#2563EB] transition-colors">
                <a href="blog-detail.html?id=${article.id}">${escapeHtml(article.title)}</a>
            </h2>
            
            <p class="text-gray-600 mb-4 line-clamp-2">
                ${getPlainTextPreview(article.content)}
            </p>
            
            ${article.tags ? `
                <div class="flex flex-wrap gap-2 mb-4">
                    ${getTagsArray(article.tags).map(tag => `
                        <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            #${tag}
                        </span>
                    `).join('')}
                </div>
            ` : ''}
            
            <a href="blog-detail.html?id=${article.id}" 
               class="inline-flex items-center text-[#2563EB] hover:text-[#3B82F6] font-semibold text-sm transition-colors">
                자세히 보기 
                <i class="fas fa-arrow-right ml-2"></i>
            </a>
        </article>
    `).join('');
    
    updatePagination(filtered.length, totalPages);
}

// 카테고리 색상 가져오기
function getCategoryColor(category) {
    const colors = {
        '세무': '#2563EB',
        '회계': '#3B82F6',
        '스타트업': '#FF6B6B',
        '기타': '#6C757D'
    };
    return colors[category] || colors['기타'];
}

// 날짜 포맷팅
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// HTML 이스케이프
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Quill 에디터의 HTML 콘텐츠에서 순수 텍스트 추출 (미리보기용)
function getPlainTextPreview(html, maxLength = 150) {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// 페이지네이션 업데이트
function updatePagination(totalArticles, totalPages) {
    const container = document.getElementById('pagination');
    if (!container) return;
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '<div class="flex items-center justify-center space-x-2">';
    
    // 이전 버튼
    if (currentPage > 1) {
        html += `
            <button onclick="goToPage(${currentPage - 1})" 
                    class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                <i class="fas fa-chevron-left"></i>
            </button>
        `;
    }
    
    // 페이지 번호
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    
    if (endPage - startPage < maxButtons - 1) {
        startPage = Math.max(1, endPage - maxButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            html += `
                <button class="px-4 py-2 rounded-lg gradient-blue text-white font-semibold">
                    ${i}
                </button>
            `;
        } else {
            html += `
                <button onclick="goToPage(${i})" 
                        class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                    ${i}
                </button>
            `;
        }
    }
    
    // 다음 버튼
    if (currentPage < totalPages) {
        html += `
            <button onclick="goToPage(${currentPage + 1})" 
                    class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
    }
    
    html += '</div>';
    
    // 총 게시글 수 표시
    html += `
        <p class="text-center text-gray-500 text-sm mt-4">
            전체 ${totalArticles}개의 글 중 ${((currentPage - 1) * articlesPerPage) + 1}-${Math.min(currentPage * articlesPerPage, totalArticles)}번째
        </p>
    `;
    
    container.innerHTML = html;
}

// 페이지 이동
function goToPage(page) {
    currentPage = page;
    renderArticles();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 인기 태그 업데이트
function updatePopularTags() {
    const container = document.getElementById('popularTags');
    if (!container) return;
    
    // 모든 태그 수집 및 빈도 계산
    const tagFrequency = {};
    allArticles.forEach(article => {
        const tagsArray = getTagsArray(article.tags);
        tagsArray.forEach(tag => {
            if (tag) {
                tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
            }
        });
    });
    
    // 빈도순으로 정렬하고 상위 10개 선택
    const sortedTags = Object.entries(tagFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    
    if (sortedTags.length === 0) {
        container.innerHTML = '<p class="text-gray-400 text-sm">아직 태그가 없습니다.</p>';
        return;
    }
    
    container.innerHTML = sortedTags.map(([tag, count]) => `
        <button onclick="searchByTag('${tag}')" 
                class="text-sm text-gray-600 hover:text-[#2563EB] transition-colors">
            #${tag} <span class="text-gray-400">(${count})</span>
        </button>
    `).join('');
}

// 태그로 검색
function searchByTag(tag) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = tag;
        currentPage = 1;
        renderArticles();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 카테고리 통계 업데이트 (사이드바 카드에 게시글 수 표시)
function updateCategoryStats() {
    const categories = ['세무', '회계', '스타트업', '기타'];
    
    categories.forEach(category => {
        const count = allArticles.filter(article => article.category === category).length;
        const element = document.getElementById(`category-count-${category}`);
        if (element) {
            element.textContent = count;
        }
    });
}

// 전역 함수로 내보내기 (HTML에서 onclick으로 호출하기 위해)
window.filterByCategory = filterByCategory;
window.goToPage = goToPage;
window.searchByTag = searchByTag;
