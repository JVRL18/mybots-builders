import { ActionRowBuilder, TextInputStyle, TextInputBuilder, ModalBuilder } from 'discord.js'

/**
 * @typedef {Object} ModalArray
 * @property {String} value - the value to be collected later.
 * @property {String} text - the actual text .
 * @property {Boolean?} style - true if wants it to be a Paragraph.
 * @property {String} placeholder - text to be before user texting.
 * @property {Number?} maxLength - default 1000.
 */

/**
 * Modal items array
 * @param {ModalArray[]} array 
 * @returns {ActionRowBuilder}
 */
function modalFieldsToRows(array) {
    return array.map(e => {
        if (!e.value) throw new Error(`Modal value is missing given: ${e.value}, expected a string.`)
        if (!e.text) throw new Error(`Modal text field is missing given: ${e.text}, expected a string.`)
        if (!e.placeholder) throw new Error(`Modal placehold field is missing given: ${e.placeholder}, expected a string.`)

        return new ActionRowBuilder().addComponents(
            new TextInputBuilder()
                .setCustomId(String(e.value))
                .setLabel(String(e.text))
                .setStyle(e.style ? TextInputStyle.Paragraph : TextInputStyle.Short)
                .setMaxLength(e.maxLength ? e.maxLength : 1000)
                .setPlaceholder(String(e.placeholder))
                .setRequired(true))
    })
}
/**
 * @typedef {Object} modalData
 * @property {ActionRowBuilder[]} items - THe fields max 5
 * @property {String} customId - The customId
 * @property {String} title - The form title
 */

/**
 * 
 * @param {modalData} data 
 * @returns {ModalBuilder}
 */
function modal(data) {
    return new ModalBuilder()
        .setCustomId(data.customId)
        .setTitle(data.title)
        .addComponents(data.items)
}

export {
    modal, modalFieldsToRows
}