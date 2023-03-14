import { HasFormatter } from '../interfaces/HasFormatter';

class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: HasFormatter, heading: string, position: 'start' | 'end'){
    const li = document.createElement('li');

    const card = `
      <h4>${heading}</h4>
      <p>${item.format()}</p>
    `;

    li.innerHTML = card

    if(position === 'start'){
      this.container.prepend(li);
    }
    this.container.append(li);
  };
}

export {ListTemplate};