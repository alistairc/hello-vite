class CounterButtonElement extends HTMLElement {
    count = 0
    message = ''

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'closed'});
    }

    up() {
        if (this.count == 10) {
            this.message = "Can't go any higher!"
            this.update();
            return;
        }
        this.message = ""
        this.count++;

        this.update();
    }

    down()  {
        if (this.count == 0) {
            this.message = "Can't go any lower!"
            this.update();
            return;
        }
        this.message = ""
        this.count--;

        this.update();
    }

    connectedCallback() {
        this.render();

        var upButton = this.shadow.querySelector("#upButton")
        upButton.addEventListener('click', this.up.bind(this));

        var downButton = this.shadow.querySelector("#downButton")
        downButton.addEventListener('click', this.down.bind(this));
    }

    render() {
        this.shadow.innerHTML = `
            <button id="upButton">Up</button>
            <button id="downButton">Down</button>
            <div id="messages">
            </div>
        `;
        this.messagesElem = this.shadow.querySelector('#messages');
        this.update();
    }

    update() {
        this.messagesElem.innerHTML = `
            Count is: ${this.count}
            <div>${this.message}</div>
        `
    }
}

export function registerElement(elementName = 'counter-button') {
    customElements.define(elementName, CounterButtonElement)
}