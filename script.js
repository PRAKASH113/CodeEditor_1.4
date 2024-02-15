document.addEventListener('DOMContentLoaded', function() {
    const createButton = document.querySelector('.Create-Button');
    const modalContainer = document.getElementById('modalContainer');

    if (createButton) {
        createButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click on the button from triggering document click
            toggleModal();
        });
    }

    if (modalContainer) {
        modalContainer.addEventListener('click', function() {
            toggleModal();
        });

        const menu = modalContainer.querySelector('.menu'); // Updated class name
        if (menu) {
            menu.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent click inside menu from closing the modal
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