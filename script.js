document.addEventListener('DOMContentLoaded', function() {
    const createButton = document.querySelector('.Create-Button');
    const modalContainer = document.getElementById('modalContainer');

    if (createButton) {
        createButton.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleModal();
        });
    }

    if (modalContainer) {
        modalContainer.addEventListener('click', function() {
            toggleModal();
        });

        const menu = modalContainer.querySelector('.menu');
        if (menu) {
            menu.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        }
    }

    function toggleModal() {
        if (modalContainer) {
            const isModalVisible = getComputedStyle(modalContainer).display === 'flex';
            modalContainer.style.display = isModalVisible ? 'none' : 'flex';
        }
    }
});