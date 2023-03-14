class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const card = `
      <h4>${heading}</h4>
      <p>${item.format()}</p>
    `;
        li.innerHTML = card;
        if (position === 'start') {
            this.container.prepend(li);
        }
        this.container.append(li);
    }
    ;
}
export { ListTemplate };
