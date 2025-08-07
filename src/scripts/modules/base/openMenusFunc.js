import { closeAllModals } from "./modals.js";

export function openMenusFunc() {
    const buttons = document.querySelectorAll('[data-open-menu]');
    const menus = document.querySelectorAll('[data-menu]');
    const closebuttons = document.querySelectorAll('[data-close-menu]');
    const inset = document.querySelector('.__inset');
    if(buttons.length !== 0 || menus.length !== 0) {
        buttons.forEach(btn=>{
            btn.addEventListener('click',()=>{
                if(!btn.dataset.state) btn.dataset.state='unactive';
                if(btn.dataset.state == 'unactive') {
                    openMenu(btn.dataset.openMenu);
                    inset.classList.add('show');
                } else if (btn.dataset.state == 'active') {
                    closeAllMenus();
                    inset.classList.remove('show');
                };
            });
        });
    };

    if(closebuttons.length !== 0 || menus.length !== 0) {
        closebuttons.forEach(btn=>{
            btn.addEventListener('click',()=>{
                closeAllMenus();
                inset.classList.remove('show');
            });
        });
    };
};

export function openMenu(attr) {
    closeAllMenus();
    closeAllModals();

    const buttons = document.querySelectorAll(`[data-open-menu="${attr}"]`);
    const menu = document.querySelector(`[data-menu="${attr}"]`);
    if(!menu) return;
    document.documentElement.style.overflow = 'hidden';
    menu.dataset.state="active";
    if(buttons.length === 0) return;
    buttons.forEach(button=>{
        button.dataset.state="active";
    });
};

export function closeSingleMenu(attr) {
    const buttons = document.querySelectorAll(`[data-open-menu="${attr}"]`);
    const menu = document.querySelector(`[data-menu="${attr}"]`);
    if(!menu) return;
    menu.dataset.state="unactive";
    if(buttons.length === 0) return;
    buttons.forEach(button=>{
        button.dataset.state="unactive";
    });
};

export function closeAllMenus() {
    const buttons = document.querySelectorAll('[data-open-menu]');
    const menus = document.querySelectorAll('[data-menu]');
    document.documentElement.style.overflow = null;
    buttons.forEach(unactive=>{
        unactive.dataset.state = 'unactive';
    });
    menus.forEach(unactive=>{
        unactive.dataset.state = 'unactive';
    });
};