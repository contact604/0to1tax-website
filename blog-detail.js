// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});

// Get post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Load Post
async function loadPost() {
    if (!postId) {
        showError();
        return;
    }
    
    try {
        const response = await fetch(`tables/blog_posts/${postId}`);
        
        if (!response.ok) {
            showError();
            return;
        }
        
        const post = await response.json();
        
        if (!post || !post.published) {
            showError();
            return;
        }
        
        displayPost(post);
    } catch (error) {
        console.error('Error loading post:', error);
        showError();
    }
}

// Display Post
function displayPost(post) {
    // Hide loading
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('postContent').classList.remove('hidden');
    
    // Set page title
    document.getElementById('pageTitle').textContent = `${post.title} - Z1로그`;
    
    // Category colors
    const categoryColors = {
        '세무': 'bg-blue-100 text-blue-700',
        '회계': 'bg-green-100 text-green-700',
        '스타트업': 'bg-purple-100 text-purple-700',
        '기타': 'bg-gray-100 text-gray-700'
    };
    const categoryColor = categoryColors[post.category] || categoryColors['기타'];
    
    // Set category
    const categoryEl = document.getElementById('postCategory');
    categoryEl.textContent = post.category;
    categoryEl.className = `px-4 py-2 rounded-full text-sm font-semibold ${categoryColor}`;
    
    // Set date
    const date = new Date(post.created_at).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('postDate').textContent = date;
    
    // Set title
    document.getElementById('postTitle').textContent = post.title;
    
    // Set tags
    const tagsEl = document.getElementById('postTags');
    if (post.tags && post.tags.length > 0) {
        tagsEl.innerHTML = post.tags.map(tag => 
            `<span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">#${tag}</span>`
        ).join('');
    } else {
        tagsEl.innerHTML = '';
    }
    
    // Set body
    document.getElementById('postBody').innerHTML = formatContent(post.content);
}

// Format Content
function formatContent(content) {
    // Convert line breaks to paragraphs if not already formatted
    if (!content.includes('<p>') && !content.includes('<h')) {
        const paragraphs = content.split('\n\n');
        return paragraphs.map(para => {
            if (para.trim()) {
                return `<p>${para.trim().replace(/\n/g, '<br>')}</p>`;
            }
            return '';
        }).join('');
    }
    return content;
}

// Show Error
function showError() {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('error').classList.remove('hidden');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadPost();
});