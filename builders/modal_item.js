/**
 * @typedef {Object} ModalArray
 * @property {String} value - the value to be collected later.
 * @property {String} text - the actual text .
 * @property {Boolean?} style - true if wants it to be a Paragraph.
 * @property {String} placeholder - text to be before user texting.
 * @property {Number?} maxLength - default 1000.
 */

class ModalFieldBuilder {
    constructor() {
        this.value = undefined;
        this.text = undefined;
        this.style = false;
        this.placeholder = undefined;
        this.maxLength = 1000;
    }

    /**
     * This value will be the value to collect later when submiting the modal
     * @param {String} value 
     * @returns {ModalArray}
     */
    setValue(value) {
        if (!value) throw new Error(`Expected a string recived: ${value}`)
        this.value = value
        return this
    }

    /**
     * Will set the title of the form field.
     * @param {String} text 
     * @returns {ModalArray}
     */
    setText(text) {
        if (!value) throw new Error(`Expected a string recived: ${value}`)
        this.text = text
        return this
    }

    /**
     * Sets the text to be used as placeHolder
     * @param {String} text 
     * @returns {ModalArray}
     */
    setPlaceholder(text) {
        if (!value) throw new Error(`Expected a string recived: ${value}`)
        this.placeholder = text
        return this
    }

    /**
     * Sets the max length that user can type.
     * @param {Number} value 
     * @returns {ModalArray}
     */
    setMaxLength(value) {
        if (!value) throw new Error(`Expected a number recived: ${value}`)
        this.maxLength = value
        return this
    }

    /**
     * Sets wheter or not this field should be a paragraph
     * @param {Boolean} boolean 
     * @returns {ModalArray}
     */
    setStyle(boolean) {
        if (!value) throw new Error(`Expected a boolean recived: ${value}`)
        this.style = boolean
        return this
    }

}

export {
    ModalFieldBuilder
}