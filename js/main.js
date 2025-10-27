// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
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
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            }
        });
    });
    
    // Close modal when clicking outside
    const consultModal = document.getElementById('consultModal');
    if (consultModal) {
        consultModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeConsultModal();
            }
        });
    }
    
    // Consultation Form Submit (Netlify Forms)
    const consultForm = document.getElementById('consultForm');
    if (consultForm) {
        consultForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const form = e.target;
            const formData = new FormData(form);
            
            try {
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
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
    }
    
    // Load Blog Posts
    loadBlogPosts();
});

// Modal Functions (Global scope for onclick handlers)
window.openConsultModal = function() {
    const modal = document.getElementById('consultModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

window.closeConsultModal = function() {
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
    }
}

// Load Blog Posts (최신 3개)
async function loadBlogPosts() {
    try {
        const response = await fetch('https://api.github.com/repos/contact604/0to1tax-website/contents/_posts');
        const files = await response.json();
        
        if (!Array.isArray(files)) {
            throw new Error('Failed to fetch posts');
        }
        
        const markdownFiles = files.filter(file => file.name.endsWith('.md'));
        
        const blogPostsList = document.getElementById('blogPostsList');
        
        if (!blogPostsList) return;
        
        if (markdownFiles.length === 0) {
            blogPostsList.innerHTML = `
                <div class="col-span-full text-center text-gray-500 py-12">
                    <i class="fas fa-file-alt text-6xl mb-4"></i>
                    <p class="text-xl">아직 게시된 글이 없습니다.</p>
                </div>
            `;
            return;
        }
        
        // Fetch and parse each markdown file
        const posts = await Promise.all(
            markdownFiles.slice(0, 3).map(async (file) => {
                const contentResponse = await fetch(file.download_url);
                const content = await contentResponse.text();
                return parseMarkdownPost(content, file.name);
            })
        );
        
        // Filter published posts and sort by date
        const publishedPosts = posts
            .filter(post => post && post.published)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        
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
            const date = new Date(post.date).toLocaleDateString('ko-KR');
            const excerpt = post.excerpt || post.body.substring(0, 100) + '...';
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
                        <a href="blog-detail.html?slug=${post.slug}" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                            자세히 보기 <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </article>
            `;
        }).join('');
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        const blogPostsList = document.getElementById('blogPostsList');
        if (blogPostsList) {
            blogPostsList.innerHTML = `
                <div class="col-span-full text-center text-gray-500 py-12">
                    <p class="text-xl">글을 불러오는 중 오류가 발생했습니다.</p>
                </div>
            `;
        }
    }
}

// Parse markdown post with front matter
function parseMarkdownPost(content, filename) {
    const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontMatterRegex);
    
    if (!match) {
        return null;
    }
    
    const frontMatter = match[1];
    const body = match[2];
    
    // Parse front matter
    const metadata = {};
    frontMatter.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            
            // Remove quotes
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            
            // Handle boolean
            if (value === 'true') value = true;
            if (value === 'false') value = false;
            
            metadata[key] = value;
        }
    });
    
    // Extract slug from filename
    const slug = filename.replace('.md', '');
    
    return {
        ...metadata,
        body: body.trim(),
        slug: slug,
        filename: filename
    };
}
