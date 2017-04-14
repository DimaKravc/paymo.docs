export default (e) => {
    e.preventDefault();

    let trigger = e.target;
    let content = trigger.parentNode.querySelector('span').textContent;
    let clipboard = document.getElementById('clipboard');

    clipboard.value = content;
    clipboard.select();
    document.execCommand("Copy");
    trigger.style.opacity = 0;

    setTimeout(()=>trigger.style.opacity = 1, 3000)
}