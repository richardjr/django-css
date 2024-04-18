export class IBTW {
    constructor() {
        this.init();
    }
    init() {
        console.log('Itzy Bitzy Teeny Weeny on the client side!');
    }

    /**
     * Establish an event for a click
     * @param query
     * @param callback
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
     * Establish an event for the dom loading and ready
     * @param callback
     */
    onLoad(callback: () => void) {
        document.addEventListener('DOMContentLoaded', callback);
    }
}
