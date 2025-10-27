// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // Navigation height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                document.getElementById('mobileMenu').classList.add('hidden');
            }
        }
    });
});

// Modal Functions
function openConsultModal() {
    document.getElementById('consultModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeConsultModal() {
    document.getElementById('consultModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    // Reset form
    document.getElementById('consultForm').reset();
    document.getElementById('consultForm').classList.remove('hidden');
    document.getElementById('consultSuccess').classList.add('hidden');
}

// Close modal when clicking outside
document.getElementById('consultModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeConsultModal();
    }
});

// Consultation Form Submit
document.getElementById('consultForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company') || '',
        message: formData.get('message') || '',
        status: '대기중',
        created_at: new Date().toISOString()
    };
    
    try {
        const response = await fetch('tables/consultations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            // Show success message
            document.getElementById('consultForm').classList.add('hidden');
            document.getElementById('consultSuccess').classList.remove('hidden');
        } else {
            alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
});

// Load Blog Posts (최신 3개)
async function loadBlogPosts() {
    try {
        const response = await fetch('tables/blog_posts?limit=3&sort=-created_at');
        const result = await response.json();
        
        const blogPostsList = document.getElementById('blogPostsList');
        
        if (result.data && result.data.length > 0) {
            // Filter only published posts
            const publishedPosts = result.data.filter(post => post.published === true);
            
            if (publishedPosts.length === 0) {
                blogPostsList.innerHTML = `
                    <div class="col-span-full text-center text-gray-500 py-12">
                        <i class="fas fa-file-alt text-6xl mb-4"></i>
                        <p class="text-xl">아직 게시된 글이 없습니다.</p>
                    </div>
                `;
                return;
            }
            
            blogPostsList.innerHTML = publishedPosts.map(post => {
                const date = new Date(post.created_at).toLocaleDateString('ko-KR');
                const excerpt = post.content.substring(0, 100) + '...';
                const categoryColors = {
                    '세무': 'bg-blue-100 text-blue-700',
                    '회계': 'bg-green-100 text-green-700',
                    '스타트업': 'bg-purple-100 text-purple-700',
                    '기타': 'bg-gray-100 text-gray-700'
                };
                const categoryColor = categoryColors[post.category] || categoryColors['기타'];
                
                return `
                    <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100">
                        <div class="p-6">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="px-3 py-1 rounded-full text-sm font-semibold ${categoryColor}">
                                    ${post.category}
                                </span>
                                <span class="text-sm text-gray-500">${date}</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                ${post.title}
                            </h3>
                            <p class="text-gray-600 mb-4 line-clamp-3">
                                ${excerpt}
                            </p>
                            <a href="blog-detail.html?id=${post.id}" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                                자세히 보기 <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </article>
                `;
            }).join('');
        } else {
            blogPostsList.innerHTML = `
                <div class="col-span-full text-center text-gray-500 py-12">
                    <i class="fas fa-file-alt text-6xl mb-4"></i>
                    <p class="text-xl">아직 게시된 글이 없습니다.</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
        document.getElementById('blogPostsList').innerHTML = `
            <div class="col-span-full text-center text-gray-500 py-12">
                <p class="text-xl">글을 불러오는 중 오류가 발생했습니다.</p>
            </div>
        `;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
});