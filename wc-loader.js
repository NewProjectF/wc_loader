// Crea una clase para el elemento titulo
class loader extends HTMLElement {

    constructor() {

        // Llamar siempre a super primero en el constructor
        super();

        // Crear una shadow root
        var shadowRoot = this.attachShadow({ mode: 'open' });


        // -- CREACION DE ELEMENTOS --
        // Crear div loader
        var loader = document.createElement('div');
        loader.setAttribute('class', 'loader');
        // Crear cita q inicio
        var q = document.createElement('q');
        q.setAttribute('class', 'quote');


        // -- INSERCCION DE ELEMENTOS --
        // Insertar q a loader
        loader.appendChild(q);


        // -- CREACION DE ESTILOS EXTERNOS --
        // Aplicar estilos reset externos al shadow dom
        const linkElemReset = document.createElement('link');
        linkElemReset.setAttribute('rel', 'stylesheet');
        linkElemReset.setAttribute('href', 'wc_loader/css/estilos_por_defecto.css');
        // Aplicar estilos personalizados externos al shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'wc_loader/css/estilos.css');


        // adjuntar los elementos creados al shadow DOM
        shadowRoot.appendChild(linkElemReset);
        shadowRoot.appendChild(linkElem);
        shadowRoot.appendChild(loader);

    }

    // Se ejecuta cada vez que el elemento se agrega al DOM
    connectedCallback() {

        var shadowRoot = this.shadowRoot;

        if (!this.hasAttribute('start-quote')) { this.startQuote = "LOADING..."; }
        if (!this.hasAttribute('end-quote')) { this.endQuote = "ENDING..."; }
        if (!this.hasAttribute('time')) { this.time = "8"; }
        if (!this.hasAttribute('color')) { this.color = "yellow"; }
        if (!this.hasAttribute('bar')) { this.bar = "linear-gradient(to right, #B61813, #67092B, #67092B, #B61813)"; }
        if (!this.hasAttribute('spacing')) { this.spacing = "1.5"; }
        if (!this.hasAttribute('background')) { this.background = "black"; }
        if (!this.hasAttribute('line')) { this.line = "linear-gradient(to right, #67092B4a, #B61813, #B61813, #67092B4a) 1"; }
        if (!this.hasAttribute('height')) { this.height = "100"; }
        if (!this.hasAttribute('width')) { this.width = "auto"; }
        if (!this.hasAttribute('size')) { this.size = "1"; }
        if (!this.hasAttribute('display')) { this.display = "flex"; }
        if (!this.hasAttribute('margin')) { this.margin = "0"; }

        var q = shadowRoot.querySelector("q");
        var s = this.getAttribute("start-quote");
        var e = this.getAttribute("end-quote");
        var t = this.getAttribute("time");
        progressBar(q, s, e, t);

    }

    // Se especifican los atributos observados para que "attributeChangedCallback" funcione
    static get observedAttributes() {
        return ['start-quote', 'end-quote', 'margin', 'time', 'color', 'bar', 'spacing', 'background', 'line', 'height', 'width', 'size', 'display'];
    }

    // Se ejecuta cada vez que uno de los atributos del elemento cambia de alguna manera
    // Produce cambios dependiendo de los atributos utilizados en la etiqueta
    attributeChangedCallback(attrName, oldVal, newVal) {

        var shadowRoot = this.shadowRoot;

        switch (attrName) {
            case "time":
                var time = shadowRoot.querySelector("q");
                time.style.setProperty("--time-animate", newVal + "s");
                break;
            case "color":
                var color = shadowRoot.querySelector("q");
                color.style.setProperty("--color-primary", newVal);
                break;
            case "bar":
                var background = shadowRoot.querySelector("q");
                background.style.setProperty("--color-secundary", newVal);
                break;
            case "spacing":
                var spacing = shadowRoot.querySelector("q");
                spacing.style.lineHeight = newVal + "em";
                break;
            case "background":
                var background = shadowRoot.querySelector(".loader");
                background.style.background = newVal;
                break;
            case "line":
                var line = shadowRoot.querySelector("q");
                line.style.borderImage = newVal;
                break;
            case "height":
                var height = shadowRoot.querySelector(".loader");
                height.style.minHeight = newVal + "vh";
                break;
            case "width":
                var width = shadowRoot.querySelector("q");
                width.style.width = newVal + "%";
                break;
            case "size":
                var size = shadowRoot.querySelector(".loader");
                size.style.fontSize = newVal + "em";
                break;
            case "display":
                var display = shadowRoot.querySelector(".loader");
                display.style.display = newVal;
                break;
            case "margin":
                var margin = shadowRoot.querySelector(".loader");
                margin.style.margin = newVal;
                break;
        }

    }

    //Getter
    get startQuote() {
        return this.hasAttribute('start-quote');
    }
    get endQuote() {
        return this.hasAttribute('end-quote');
    }
    get time() {
        return this.hasAttribute('time');
    }
    get color() {
        return this.hasAttribute('color');
    }
    get bar() {
        return this.hasAttribute('bar');
    }
    get spacing() {
        return this.hasAttribute('spacing');
    }
    get background() {
        return this.hasAttribute('background');
    }
    get line() {
        return this.hasAttribute('line');
    }
    get height() {
        return this.hasAttribute('height');
    }
    get width() {
        return this.hasAttribute('height');
    }
    get size() {
        return this.hasAttribute('size');
    }
    get display() {
        return this.hasAttribute('display');
    }
    get margin() {
        return this.hasAttribute('margin');
    }


    //Setter
    set startQuote(val) {
        if (val) {
            this.setAttribute('start-quote', val);
        } else {
            this.removeAttribute('start-quote');
        }
    }
    set endQuote(val) {
        if (val) {
            this.setAttribute('end-quote', val);
        } else {
            this.removeAttribute('end-quote');
        }
    }
    set time(val) {
        if (val) {
            this.setAttribute('time', val);
        } else {
            this.removeAttribute('time');
        }
    }
    set color(val) {
        if (val) {
            this.setAttribute('color', val);
        } else {
            this.removeAttribute('color');
        }
    }
    set bar(val) {
        if (val) {
            this.setAttribute('bar', val);
        } else {
            this.removeAttribute('bar');
        }
    }
    set spacing(val) {
        if (val) {
            this.setAttribute('spacing', val);
        } else {
            this.removeAttribute('spacing');
        }
    }
    set background(val) {
        if (val) {
            this.setAttribute('background', val);
        } else {
            this.removeAttribute('background');
        }
    }
    set line(val) {
        if (val) {
            this.setAttribute('line', val);
        } else {
            this.removeAttribute('line');
        }
    }
    set height(val) {
        if (val) {
            this.setAttribute('height', val);
        } else {
            this.removeAttribute('height');
        }
    }
    set width(val) {
        if (val) {
            this.setAttribute('width', val);
        } else {
            this.removeAttribute('width');
        }
    }
    set size(val) {
        if (val) {
            this.setAttribute('size', val);
        } else {
            this.removeAttribute('size');
        }
    }
    set display(val) {
        if (val) {
            this.setAttribute('display', val);
        } else {
            this.removeAttribute('display');
        }
    }
    set margin(val) {
        if (val) {
            this.setAttribute('margin', val);
        } else {
            this.removeAttribute('margin');
        }
    }

}

// Funcion que recoge los datos introducidos por parametros para cargar la barra
function progressBar(q, start, end, time) {

    time = (time * 1000) / 2;

    q.innerHTML = start;
    setTimeout(function() {
        q.innerHTML = end;
    }, time);

}

// Definir el nuevo elemento
customElements.define("wc-loader", loader);