// Zero to one TAX - Blog Loader (GitHub Raw Content)
// CORS 문제 해결을 위해 Raw URL 사용

// 블로그 포스트 목록 (수동 관리)
const BLOG_POSTS = [
    '2024-10-28-welcome.md',
    '2025-10-30-startup-corporate-tax-savings.md'
];

const RAW_BASE_URL = 'https://raw.githubusercontent.com/contact604/0to1tax-website/main/_posts/';

// 블로그 포스트 로드
async function loadBlogPosts() {
    try {
        console.log('📡 Loading blog posts from GitHub Raw...');
        
        const posts = await Promise.all(
            BLOG_POSTS.map(async (filename) => {
                const timestamp = new Date().getTime();
                const url = `${RAW_BASE_URL}${filename}?t=${timestamp}`;
                console.log('📄 Loading:', filename);
                
                try {
                    const response = await fetch(url, {
                        cache: 'no-cache',
                        headers: {
                            'Cache-Control': 'no-cache',
                            'Pragma': 'no-cache'
                        }
                    });
                    
                    if (!response.ok) {
                        console.warn(`⚠️ Failed to load ${filename}:`, response.status);
                        return null;
                    }
                    
                    const content = await response.text();
                    console.log(`✅ Loaded ${filename} (${content.length} bytes)`);
                    return parseMarkdownPost(content, filename);
                } catch (error) {
                    console.error(`❌ Error loading ${filename}:`, error);
                    return null;
                }
            })
        );
        
        const validPosts = posts.filter(post => post !== null && post.published);
        console.log(`✅ Total posts loaded: ${validPosts.length}`);
        
        return validPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
    } catch (error) {
        console.error('❌ Failed to load blog posts:', error);
        throw error;
    }
}

// Markdown Front Matter 파싱
function parseMarkdownPost(content, filename) {
    const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontMatterRegex);
    
    if (!match) {
        console.error('Invalid markdown format:', filename);
        return null;
    }
    
    const frontMatter = match[1];
    const body = match[2];
    
    const metadata = {};
    const lines = frontMatter.split('\n');
    let currentKey = null;
    
    lines.forEach(line => {
        if (line.startsWith('  - ')) {
            const arrayValue = line.replace('  - ', '').trim();
            if (currentKey && metadata[currentKey]) {
                metadata[currentKey].push(arrayValue);
            }
        } else if (line.includes(':')) {
            const colonIndex = line.indexOf(':');
            const key = line.substring(0, colonIndex).trim();
            const value = line.substring(colonIndex + 1).trim();
            
            if (key === 'tags') {
                metadata[key] = [];
                currentKey = key;
            } else {
                metadata[key] = value.replace(/^["']|["']$/g, '');
                currentKey = null;
            }
        }
    });
    
    const slug = filename.replace('.md', '');
    
    return {
        slug,
        title: metadata.title || 'Untitled',
        date: metadata.date || new Date().toISOString(),
        author: metadata.author || 'Zero to one TAX',
        category: metadata.category || '기타',
        tags: metadata.tags || [],
        thumbnail: metadata.thumbnail || '',
        excerpt: metadata.excerpt || '',
        body: body,
        published: metadata.published !== 'false'
    };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadBlogPosts, parseMarkdownPost };
}
