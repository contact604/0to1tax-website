let currentPage = 1;
let currentCategory = 'all';
const postsPerPage = 9;

// Mobile Menu Toggle (Pure CSS - no JavaScript needed)
// Mobile menu is now controlled by CSS :checked selector

// Filter Posts
function filterPosts(category) {
    currentCategory = category;
    currentPage = 1;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('bg-white', 'hover:bg-gray-50');
    });
    event.target.classList.add('active');
    event.target.classList.remove('bg-white', 'hover:bg-gray-50');
    
    loadBlogPosts();
}

// Load Blog Posts
async function loadBlogPosts() {
    try {
        const response = await fetch(`tables/blog_posts?limit=100&sort=-created_at`);
        const result = await response.json();
        
        if (result.data && result.data.length > 0) {
            // Filter published posts
            let posts = result.data.filter(post => post.published === true);
            
            // Filter by category
            if (currentCategory !== 'all') {
                posts = posts.filter(post => post.category === currentCategory);
            }
            
            // Calculate pagination
            const totalPosts = posts.length;
            const totalPages = Math.ceil(totalPosts / postsPerPage);
            const startIndex = (currentPage - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            const paginatedPosts = posts.slice(startIndex, endIndex);
            
            // Display posts
            displayPosts(paginatedPosts);
            
            // Display pagination
            displayPagination(totalPages);
        } else {
            displayNoPosts();
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
        displayError();
    }
}

// Display Posts
function displayPosts(posts) {
    const blogPostsList = document.getElementById('blogPostsList');
    
    if (posts.length === 0) {
        displayNoPosts();
        return;
    }
    
    blogPostsList.innerHTML = posts.map(post => {
        const date = new Date(post.created_at).toLocaleDateString('ko-KR');
        const excerpt = stripHtml(post.content).substring(0, 150) + '...';
        const categoryColors = {
            '세무': 'bg-blue-100 text-blue-700',
            '회계': 'bg-green-100 text-green-700',
            '스타트업': 'bg-purple-100 text-purple-700',
            '기타': 'bg-gray-100 text-gray-700'
        };
        const categoryColor = categoryColors[post.category] || categoryColors['기타'];
        
        return `
            <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100 flex flex-col">
                <div class="p-6 flex-1 flex flex-col">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="px-3 py-1 rounded-full text-sm font-semibold ${categoryColor}">
                            ${post.category}
                        </span>
                        <span class="text-sm text-gray-500">${date}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        ${post.title}
                    </h3>
                    <p class="text-gray-600 mb-4 line-clamp-3 flex-1">
                        ${excerpt}
                    </p>
                    <a href="blog-detail.html?id=${post.id}" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-auto">
                        자세히 보기 <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </article>
        `;
    }).join('');
}

// Display Pagination
function displayPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Previous button
    if (currentPage > 1) {
        html += `
            <button onclick="changePage(${currentPage - 1})" class="px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition">
                <i class="fas fa-chevron-left"></i>
            </button>
        `;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            html += `
                <button class="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold">
                    ${i}
                </button>
            `;
        } else if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `
                <button onclick="changePage(${i})" class="px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span class="px-2">...</span>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        html += `
            <button onclick="changePage(${currentPage + 1})" class="px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
    }
    
    pagination.innerHTML = html;
}

// Change Page
function changePage(page) {
    currentPage = page;
    loadBlogPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Display No Posts
function displayNoPosts() {
    document.getElementById('blogPostsList').innerHTML = `
        <div class="col-span-full text-center text-gray-500 py-12">
            <i class="fas fa-file-alt text-6xl mb-4"></i>
            <p class="text-xl">게시된 글이 없습니다.</p>
        </div>
    `;
    document.getElementById('pagination').innerHTML = '';
}

// Display Error
function displayError() {
    document.getElementById('blogPostsList').innerHTML = `
        <div class="col-span-full text-center text-gray-500 py-12">
            <i class="fas fa-exclamation-triangle text-6xl mb-4"></i>
            <p class="text-xl">글을 불러오는 중 오류가 발생했습니다.</p>
        </div>
    `;
    document.getElementById('pagination').innerHTML = '';
}

// Strip HTML tags
function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
});

// Check URL parameters and open modal if needed
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('modal') === 'consult') {
        setTimeout(() => {
            if (window.openConsultModal) {
                window.openConsultModal();
            }
        }, 300);
    }
});

// Modal Functions (Global scope for onclick handlers)
window.openConsultModal = function() {
    console.log('Opening modal...');
    const modal = document.getElementById('consultModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened');
    } else {
        console.error('Modal not found');
    }
}

window.closeConsultModal = function() {
    console.log('Closing modal...');
    const modal = document.getElementById('consultModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Reset form
        const form = document.getElementById('consultForm');
        const success = document.getElementById('consultSuccess');
        if (form) {
            form.reset();
            form.classList.remove('hidden');
        }
        if (success) {
            success.classList.add('hidden');
        }
        console.log('Modal closed');
    }
}