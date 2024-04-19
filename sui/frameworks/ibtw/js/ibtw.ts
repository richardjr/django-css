/**
 * IBTW class
 *
 * This class provides methods to initialize the class, establish click events on elements, and establish an event for when the DOM is loaded and ready.
 */
export class IBTW {

    /**
     * constructor
     *
     * The constructor method is a special method for creating and initializing an object created within a class.
     * There can only be one special method with the name "constructor" in a class.
     * Here, it calls the init method to initialize the class.
     */
    constructor() {
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

    /**
     * click
     *
     * This method establishes an event for a click on the elements that match the provided query.
     * @param {string} query - A string containing one or more CSS selectors separated by commas.
     * @param {function} callback - A function to execute when the event is triggered.
     */
    click(query:string, callback: (e: Event) => void) {
        const element = document.querySelectorAll(query) as NodeListOf<HTMLElement>;
        // Check if a valid element was found
        if (!element) {
            return;
        }
        // Add the event listener to the elements
        for (let i = 0; i < element.length; i++) {
            element[i].addEventListener('click', callback);
        }
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
}