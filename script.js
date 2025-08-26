const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const navList = document.querySelector('header nav ul');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    navList.classList.toggle('show');
});
