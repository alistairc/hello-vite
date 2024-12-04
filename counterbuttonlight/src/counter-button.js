class CounterButtonElement extends HTMLElement {
    count = 0
    message = ''

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

        var upButton = this.querySelector(".upButton")
        upButton.addEventListener('click', this.up.bind(this));

        var downButton = this.querySelector(".downButton")
        downButton.addEventListener('click', this.down.bind(this));
    }

    render() {
        this.innerHTML = `
            <button class="upButton">Up</button>
            <button class="downButton">Down</button>
            <div class="messages">
            </div>
        `;
        this.messagesElem = this.querySelector('.messages');
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