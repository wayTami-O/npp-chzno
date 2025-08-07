export function modals() {

    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', () => {
            const modalValue = button.dataset.typeModal;
            openModal(modalValue);
        });
    });

    document.querySelectorAll('.btn-modal-close, .modal__inset, .__modal_close__btn').forEach(closeButton => {
        closeButton.addEventListener('click', closeAllModals);
    });
}

export function openModal(attr) {
    closeAllModals();

    const modalElement = document.querySelector(`[data-type="${attr}"]`);
    modalElement.dataset.modalState = "open";
    document.documentElement.style.overflow = "hidden";
}

export function closeAllModals() {
    const allModals = document.querySelectorAll(".modal");

    allModals.forEach((el) => {
        el.dataset.modalState = "close";
    });
    document.documentElement.style.overflow = null;
}

// Для корректной работы необходимо подключить и активировать эту функцию в app.js

// Пример подключения: import { modals } from "./путь/к/файлу/modals.js";

// Активация: modals();