const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    let textareaH = item.offsetHeight;
    item.addEventListener('input', event => {
        $this = event.target;

        $this.style.height = textareaH +'px';
        $this.style.height = $this.scrollHeight + 'px';

    });
});