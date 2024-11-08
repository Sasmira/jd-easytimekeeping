/**
 * Encapsulates the Clock view for Dragonbane Timekeeping
 */
import { MODULE_ID, SETTINGS } from './settings.js'

export class ClockView {
    #constants = null

    /**
     * Construct a ClockView instance
     */
    constructor (constants) {
        this.#constants = constants
    }

    initialise () {
        console.debug('DB Time | ClockView Checking for Clocks')
    }

    updateTime (time) {
        this.#checkAutoTellTime(time)
    }

    tellTime (time) {
        const timeOfDay = this.#toTimeOfDay(time)
        let content = `It's ${timeOfDay} on day ${time.days + 1}` // display in 1-based days
        console.log('DB Time | %s', content)
        ChatMessage.create({
            speaker: { actor: game.user.id },
            content: content,
        })
    }

    get showHours () {
        return game.settings.get(MODULE_ID, SETTINGS.SHOW_HOURS)
    }

    get showDays () {
        return game.settings.get(MODULE_ID, SETTINGS.SHOW_DAYS)
    }

    #checkAutoTellTime (time) {
        const tellTimeSettings = game.settings.get(MODULE_ID, SETTINGS.AUTO_TELL_TIME_SETTINGS)
        if (tellTimeSettings[time.timeOfDay]) this.tellTime(time)
    }

    #toTimeOfDay (time) {
        // TODO: module settings for 24-hour display
        // time.hour is a value from 0 to 23
        const amPm = time.hour >= 12 ? 'PM' : 'AM'
        let hour = time.hour > 12 ? time.hour - 12 : time.hour
        if (hour === 0) hour = 12
        return `${hour}:${time.minute.toString().padStart(2, '0')} ${amPm}`
    }
}
