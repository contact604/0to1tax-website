// Initialize Quill Editor
const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'blockquote', 'code-block'],
            ['clean']
        ]
    }
});

let currentEditPostId = null;
let currentConsultId = null;
let currentConsultFilter = 'all';

// Tab Switching
function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide tabs
    if (tab === 'posts') {
        document.getElementById('postsTab').classList.remove('hidden');
        document.getElementById('consultationsTab').classList.add('hidden');
        loadPosts();
    } else if (tab === 'consultations') {
        document.getElementById('postsTab').classList.add('hidden');
        document.getElementById('consultationsTab').classList.remove('hidden');
        loadConsultations();
    }
}

// ============ POSTS MANAGEMENT ============

// Load Posts
async function loadPosts() {
    try {
        const response = await fetch('tables/blog_posts?limit=100&sort=-created_at');
        const result = await response.json();
        
        const postsList = document.getElementById('postsList');
        
        if (result.data && result.data.length > 0) {
            postsList.innerHTML = result.data.map(post => {
                const statusColor = post.published ? 'text-green-600' : 'text-gray-400';
                const statusIcon = post.published ? 'fa-eye' : 'fa-eye-slash';
                
                return `
                    <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition cursor-pointer" onclick="editPost('${post.id}')">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">${post.category}</span>
                            <i class="fas ${statusIcon} ${statusColor}"></i>
                        </div>
                        <h4 class="font-semibold text-gray-900 mb-1 line-clamp-2">${post.title}</h4>
                        <p class="text-xs text-gray-500">${new Date(post.created_at).toLocaleDateString('ko-KR')}</p>
                    </div>
                `;
            }).join('');
        } else {
            postsList.innerHTML = '<p class="text-gray-500 text-center py-8">게시글이 없습니다.</p>';
        }
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

// Search Posts
document.getElementById('searchPosts').addEventListener('input', async function(e) {
    const query = e.target.value.toLowerCase();
    
    try {
        const response = await fetch('tables/blog_posts?limit=100');
        const result = await response.json();
        
        if (result.data) {
            const filtered = result.data.filter(post => 
                post.title.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query)
            );
            
            const postsList = document.getElementById('postsList');
            
            if (filtered.length > 0) {
                postsList.innerHTML = filtered.map(post => {
                    const statusColor = post.published ? 'text-green-600' : 'text-gray-400';
                    const statusIcon = post.published ? 'fa-eye' : 'fa-eye-slash';
                    
                    return `
                        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition cursor-pointer" onclick="editPost('${post.id}')">
                            <div class="flex justify-between items-start mb-2">
                                <span class="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">${post.category}</span>
                                <i class="fas ${statusIcon} ${statusColor}"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-1 line-clamp-2">${post.title}</h4>
                            <p class="text-xs text-gray-500">${new Date(post.created_at).toLocaleDateString('ko-KR')}</p>
                        </div>
                    `;
                }).join('');
            } else {
                postsList.innerHTML = '<p class="text-gray-500 text-center py-8">검색 결과가 없습니다.</p>';
            }
        }
    } catch (error) {
        console.error('Error searching posts:', error);
    }
});

// Edit Post
async function editPost(postId) {
    try {
        const response = await fetch(`tables/blog_posts/${postId}`);
        const post = await response.json();
        
        currentEditPostId = postId;
        
        // Update form
        document.getElementById('editorTitle').textContent = '게시글 수정';
        document.getElementById('submitBtnText').textContent = '수정';
        document.getElementById('postId').value = post.id;
        document.getElementById('postTitle').value = post.title;
        document.getElementById('postCategory').value = post.category;
        document.getElementById('postTags').value = Array.isArray(post.tags) ? post.tags.join(', ') : '';
        document.getElementById('postPublished').checked = post.published;
        quill.root.innerHTML = post.content;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Error loading post:', error);
        alert('게시글을 불러오는데 실패했습니다.');
    }
}

// Reset Form
function resetForm() {
    currentEditPostId = null;
    document.getElementById('editorTitle').textContent = '새 게시글 작성';
    document.getElementById('submitBtnText').textContent = '저장';
    document.getElementById('postForm').reset();
    document.getElementById('postId').value = '';
    quill.root.innerHTML = '';
}

// Submit Post
document.getElementById('postForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const title = document.getElementById('postTitle').value;
    const category = document.getElementById('postCategory').value;
    const tagsInput = document.getElementById('postTags').value;
    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
    const content = quill.root.innerHTML;
    const published = document.getElementById('postPublished').checked;
    
    const data = {
        title,
        category,
        tags,
        content,
        published,
        updated_at: new Date().toISOString()
    };
    
    try {
        let response;
        
        if (currentEditPostId) {
            // Update existing post
            data.created_at = new Date().toISOString(); // Keep existing created_at
            response = await fetch(`tables/blog_posts/${currentEditPostId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        } else {
            // Create new post
            data.created_at = new Date().toISOString();
            response = await fetch('tables/blog_posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        }
        
        if (response.ok) {
            alert('저장되었습니다!');
            resetForm();
            loadPosts();
        } else {
            alert('저장에 실패했습니다.');
        }
    } catch (error) {
        console.error('Error saving post:', error);
        alert('저장 중 오류가 발생했습니다.');
    }
});

// ============ CONSULTATIONS MANAGEMENT ============

// Load Consultations
async function loadConsultations() {
    try {
        const response = await fetch('tables/consultations?limit=100&sort=-created_at');
        const result = await response.json();
        
        const consultationsList = document.getElementById('consultationsList');
        
        if (result.data && result.data.length > 0) {
            let consultations = result.data;
            
            // Filter by status
            if (currentConsultFilter !== 'all') {
                consultations = consultations.filter(c => c.status === currentConsultFilter);
            }
            
            if (consultations.length > 0) {
                consultationsList.innerHTML = consultations.map(consult => {
                    const statusColors = {
                        '대기중': 'bg-yellow-100 text-yellow-700',
                        '진행중': 'bg-blue-100 text-blue-700',
                        '완료': 'bg-green-100 text-green-700'
                    };
                    const statusColor = statusColors[consult.status] || 'bg-gray-100 text-gray-700';
                    
                    return `
                        <tr class="border-b hover:bg-gray-50 transition cursor-pointer" onclick="viewConsultation('${consult.id}')">
                            <td class="px-4 py-3">${consult.name}</td>
                            <td class="px-4 py-3">${consult.email}</td>
                            <td class="px-4 py-3">${consult.phone}</td>
                            <td class="px-4 py-3">${consult.company || '-'}</td>
                            <td class="px-4 py-3">
                                <span class="px-3 py-1 rounded-full text-sm font-semibold ${statusColor}">
                                    ${consult.status}
                                </span>
                            </td>
                            <td class="px-4 py-3 text-sm text-gray-500">${new Date(consult.created_at).toLocaleDateString('ko-KR')}</td>
                            <td class="px-4 py-3">
                                <button onclick="event.stopPropagation(); viewConsultation('${consult.id}')" class="text-blue-600 hover:text-blue-700">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                    `;
                }).join('');
            } else {
                consultationsList.innerHTML = '<tr><td colspan="7" class="px-4 py-8 text-center text-gray-500">상담 문의가 없습니다.</td></tr>';
            }
        } else {
            consultationsList.innerHTML = '<tr><td colspan="7" class="px-4 py-8 text-center text-gray-500">상담 문의가 없습니다.</td></tr>';
        }
    } catch (error) {
        console.error('Error loading consultations:', error);
    }
}

// Filter Consultations
function filterConsultations(status) {
    currentConsultFilter = status;
    
    // Update active button
    document.querySelectorAll('.consult-filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700');
    });
    event.target.classList.add('active', 'bg-blue-600', 'text-white');
    event.target.classList.remove('bg-gray-100', 'text-gray-700');
    
    loadConsultations();
}

// View Consultation
async function viewConsultation(consultId) {
    try {
        const response = await fetch(`tables/consultations/${consultId}`);
        const consult = await response.json();
        
        currentConsultId = consultId;
        
        const consultDetail = document.getElementById('consultDetail');
        consultDetail.innerHTML = `
            <div>
                <label class="block text-gray-700 font-semibold mb-1">이름</label>
                <p class="text-gray-900">${consult.name}</p>
            </div>
            <div>
                <label class="block text-gray-700 font-semibold mb-1">이메일</label>
                <p class="text-gray-900">${consult.email}</p>
            </div>
            <div>
                <label class="block text-gray-700 font-semibold mb-1">연락처</label>
                <p class="text-gray-900">${consult.phone}</p>
            </div>
            <div>
                <label class="block text-gray-700 font-semibold mb-1">회사명</label>
                <p class="text-gray-900">${consult.company || '-'}</p>
            </div>
            <div>
                <label class="block text-gray-700 font-semibold mb-1">상담 내용</label>
                <p class="text-gray-900 whitespace-pre-wrap">${consult.message || '-'}</p>
            </div>
            <div>
                <label class="block text-gray-700 font-semibold mb-1">신청일</label>
                <p class="text-gray-900">${new Date(consult.created_at).toLocaleString('ko-KR')}</p>
            </div>
        `;
        
        document.getElementById('consultStatus').value = consult.status;
        document.getElementById('consultModal').classList.remove('hidden');
        document.getElementById('consultModal').classList.add('flex');
    } catch (error) {
        console.error('Error loading consultation:', error);
        alert('상담 정보를 불러오는데 실패했습니다.');
    }
}

// Close Consultation Modal
function closeConsultModal() {
    document.getElementById('consultModal').classList.add('hidden');
    document.getElementById('consultModal').classList.remove('flex');
    currentConsultId = null;
}

// Update Consultation Status
async function updateConsultStatus() {
    if (!currentConsultId) return;
    
    const newStatus = document.getElementById('consultStatus').value;
    
    try {
        const response = await fetch(`tables/consultations/${currentConsultId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        });
        
        if (response.ok) {
            alert('상태가 변경되었습니다!');
            closeConsultModal();
            loadConsultations();
        } else {
            alert('상태 변경에 실패했습니다.');
        }
    } catch (error) {
        console.error('Error updating status:', error);
        alert('상태 변경 중 오류가 발생했습니다.');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set default filter button style
    document.querySelector('.consult-filter-btn.active').classList.add('bg-blue-600', 'text-white');
    
    loadPosts();
});