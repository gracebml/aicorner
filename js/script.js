// script.js - JavaScript chính cho blog
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý thanh tìm kiếm
    const searchForm = document.querySelector('.search-form form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const searchTerm = this.querySelector('input').value.trim();
            if (!searchTerm) {
                e.preventDefault();
                alert('Vui lòng nhập từ khóa tìm kiếm');
            }
        });
    }

    // Xử lý menu trên mobile
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        if (!header || !nav) return;
        
        // Tạo toggle button cho menu
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        
        header.querySelector('.container').insertBefore(menuToggle, nav);
        
        // Thêm class cho nav để CSS
        nav.classList.add('desktop-nav');
        
        // Xử lý sự kiện click
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
            this.innerHTML = nav.classList.contains('show') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    };

    // Chỉ tạo mobile menu khi cần thiết
    const isMobile = window.matchMedia('(max-width: 768px)');
    if (isMobile.matches) {
        createMobileMenu();
    }

    // Theo dõi thay đổi kích thước màn hình
    isMobile.addEventListener('change', (e) => {
        if (e.matches) {
            createMobileMenu();
        } else {
            // Xóa mobile menu khi không còn ở chế độ mobile
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) menuToggle.remove();
            
            document.querySelector('nav')?.classList.remove('show', 'desktop-nav');
        }
    });

    // Hiệu ứng scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hiệu ứng lazy loading cho hình ảnh
    const lazyLoad = () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback cho trình duyệt không hỗ trợ Intersection Observer
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    };
    
    // Gọi hàm lazy load
    lazyLoad();
    
    // Hiệu ứng hiển thị bài viết khi scroll
    const animatePosts = () => {
        const posts = document.querySelectorAll('.post-card');
        
        if ('IntersectionObserver' in window) {
            const postObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        postObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            posts.forEach(post => {
                post.classList.add('post-animation');
                postObserver.observe(post);
            });
        }
    };
    
    // Gọi hàm animation
    animatePosts();
});