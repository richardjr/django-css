/**
 * IBTW class
 *
 * This class provides methods to initialize the class, establish click events on elements, and establish an event for when the DOM is loaded and ready.
 */
export class IBTW {
    debug: boolean = false;
    /**
     * constructor
     *
     * The constructor method is a special method for creating and initializing an object created within a class.
     * There can only be one special method with the name "constructor" in a class.
     * Here, it calls the init method to initialize the class.
     */
    constructor(debug?: boolean) {
        if (debug) {
            this.debug = debug;
        }
        this.init();
    }

    /**
     * init
     *
     * This method is used to initialize the class. It logs a message to the console.
     */
    init():void {
        console.log('Itzy Bitzy Teeny Weeny on the client side!');
    }

    _performActionOnQuery(query:string,action:Function) {
        const element = document.querySelectorAll(query) as NodeListOf<HTMLElement>;
        // Check if a valid element was found
        if (!element) {
            return;
        }
        for (let i = 0; i < element.length; i++) {
            action(element[i]);
        }
    }

    /**
     * click
     *
     * This method establishes an event for a click on the elements that match the provided query.
     * @param {string} query - A string containing one or more CSS selectors separated by commas.
     * @param {function} callback - A function to execute when the event is triggered.
     */
    click(query:string, callback: (e: Event) => void) {
        this._performActionOnQuery(query, (element: HTMLElement) => {
            element.addEventListener('click', callback);
        });
    }

    /**
     * Toggle a class on an element or elements
     * @param className
     * @param query
     */
    toggleClass(className:string, query: string): void {
        this._performActionOnQuery(query, (element: HTMLElement) => {
            element.classList.toggle(className);
        });
    }

    /**
     * Remove a class from an element or elements
     * @param className
     * @param query
     */
    removeClass(className:string, query: string): void {
        this._performActionOnQuery(query, (element: HTMLElement) => {
            element.classList.remove(className);
        });
    }

    /**
     * Add a class to an element or elements
     * @param className
     * @param query
     */
    addClass(className:string, query: string): void {
        this._performActionOnQuery(query, (element: HTMLElement) => {
            element.classList.add(className);
        });
    }

    /**
     * print alias for console.log but we only want to use this method in debug mode
     * @param string
     */
    print(string: any) {
        if (this.debug)
            console.log(string);
    }

    /**
     * onLoad
     *
     * This method establishes an event for when the DOM is loaded and ready.
     * @param {function} callback - A function to execute when the DOM is fully loaded.
     */
    onLoad(callback: () => void) {
        document.addEventListener('DOMContentLoaded', callback);
    }

    /**
     * Disable an element or elements
     * @param query
     */
    disable(query: string): void {
        this._performActionOnQuery(query, (element: HTMLElement) => {
            element.setAttribute('disabled', 'true');
        });
    }

    /**
     * Enable an element or elements
     * @param query
     */
    enable(query: string): void {
        this._performActionOnQuery(query, (element: HTMLElement) => {
            element.removeAttribute('disabled');
        });
    }
}