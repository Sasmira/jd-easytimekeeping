/**
 * Defines the constants which are used in multiple places for time calculations.
 */
import { MODULE_ID, SETTINGS } from './settings.mjs'

export class Constants {
    // True constants
    static minutesPerDay = 24 * 60
    static secondsPerDay = 24 * 60 * 60
    static shiftsPerDay = 4
    static hoursPerShift = 6
    static hoursPerDay = 24
    static minutesPerShift = 6 * 60 // hoursPerShift * minutesPerHour
    static daysPerWeek = 7

    // Variable and calculated values that I'm refactoring to look like the old constants
    static get minutesPerStretch () {
        return game.settings.get(MODULE_ID, SETTINGS.SMALL_TIME_DELTA)
    }

    // static stretchesPerShift = 24
    static get stretchesPerShift () {
        return Constants.minutesPerShift / Constants.minutesPerStretch
    }

    static get stretchesPerDay () {
        return Constants.stretchesPerShift * Constants.shiftsPerDay
    }
}
