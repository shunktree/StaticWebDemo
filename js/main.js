// 图片点击放大效果
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('expanded');
    });
});