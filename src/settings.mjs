export { MODULE_ID, SETTINGS, registerSettings }

import { registerAutoTellTimeSettings } from './autotelltimesettings.mjs'
import { registerDaylightCycleSettings } from './daylightcyclesettings.mjs'

const MODULE_ID = 'jd-easytimekeeping'
const SETTINGS = {
    TOTAL_ELAPSED_MINUTES: 'totalElapsedMinutes',
    TIME_CHANGE_MACRO: 'timeChangeMacro',
    AUTO_TELL_TIME_SETTINGS: 'autoTellTimeSettings',
    AUTO_TELL_TIME_MENU: 'autoTellTimeMenu',
    DAYLIGHT_CYCLE_SETTINGS: 'daylightCycleSettings',
    DAYLIGHT_CYCLE_MENU: 'daylightCycleMenu',
    DISPLAY_24_HOUR_TIME: 'display24HourTime',
    SMALL_TIME_DELTA: 'smallTimeDelta',
    LARGE_TIME_DELTA: 'largeTimeDelta',
    UI_RADIAL_CLOCK_COLOR: 'uiRadialClockColor',
    SHOW_RADIAL_CLOCK: 'showRadialClock',
    SHOW_DRAGONBANE_TIME: 'showDragonbaneTime',
    SHOW_TIME_OF_DAY: 'showTimeOfDay',
    UI_TEXT_COLOR: 'uiTextColor',
    RADIAL_CLOCK_COLOR: 'radialClockColor',
}

function registerSettings () {
    // Register the menus
    registerAutoTellTimeSettings()
    registerDaylightCycleSettings()

    game.settings.register(MODULE_ID, SETTINGS.SHOW_TIME_OF_DAY, {
        name: 'JDTIMEKEEPING.Settings.ShowTimeOfDay.name',
        hint: 'JDTIMEKEEPING.Settings.ShowTimeOfDay.hint',
        scope: 'world',
        config: true,
        type: Boolean,
        default: true,
        requiresReload: true,
        restricted: true,
    })

    game.settings.register(MODULE_ID, SETTINGS.DISPLAY_24_HOUR_TIME, {
        name: game.i18n.localize('JDTIMEKEEPING.Settings.Display24HourFormat.name'),
        scope: 'world',
        config: true,
        type: Boolean,
        default: false,
        requiresReload: true,
        restricted: true,
    })

    game.settings.register(MODULE_ID, SETTINGS.SHOW_DRAGONBANE_TIME, {
        name: 'JDTIMEKEEPING.Settings.ShowDragonbaneTime.name',
        hint: 'JDTIMEKEEPING.Settings.ShowDragonbaneTime.hint',
        scope: 'world',
        config: true,
        type: Boolean,
        default: false,
        requiresReload: true,
        restricted: true,
    })

    game.settings.register(MODULE_ID, SETTINGS.SHOW_RADIAL_CLOCK, {
        name: 'JDTIMEKEEPING.Settings.ShowRadialClock.name',
        hint: 'JDTIMEKEEPING.Settings.ShowRadialClock.hint',
        scope: 'world',
        config: true,
        type: Boolean,
        default: false,
        requiresReload: true,
        restricted: true,
    })

    game.settings.register(MODULE_ID, SETTINGS.UI_TEXT_COLOR, {
        name: 'JDTIMEKEEPING.Settings.UITextColor.name',
        hint: 'JDTIMEKEEPING.Settings.UITextColor.hint',
        scope: 'world',
        config: true,
        type: new foundry.data.fields.ColorField(),
        default: '#ffffff',
        requiresReload: true,
        restricted: true,
    })

    game.settings.register(MODULE_ID, SETTINGS.RADIAL_CLOCK_COLOR, {
        name: 'JDTIMEKEEPING.Settings.RadialClockColor.name',
        hint: 'JDTIMEKEEPING.Settings.RadialClockColor.hint',
        scope: 'world',
        config: true,
        type: new foundry.data.fields.ColorField(),
        default: '#138b37',
        requiresReload: true,
        restricted: true,
    })

    // small time delta in minutes
    game.settings.register(MODULE_ID, SETTINGS.SMALL_TIME_DELTA, {
        name: 'JDTIMEKEEPING.Settings.SmallTimeDelta.name',
        hint: 'JDTIMEKEEPING.Settings.SmallTimeDelta.hint',
        scope: 'world',
        config: true,
        type: new foundry.data.fields.StringField({
            choices: {
                5: '5',
                10: '10',
                15: '15',
                20: '20',
                30: '30',
            },
            required: true,
        }),
        default: 15,
        onChange: value => {
            console.log('JD ETime | %s %d', SETTINGS.SMALL_TIME_DELTA, value)
        },
        requiresReload: false,
        restricted: true,
    })

    // Large time delta in hours
    game.settings.register(MODULE_ID, SETTINGS.LARGE_TIME_DELTA, {
        name: 'JDTIMEKEEPING.Settings.LargeTimeDelta.name',
        hint: 'JDTIMEKEEPING.Settings.LargeTimeDelta.hint',
        scope: 'world',
        config: true,
        type: new foundry.data.fields.StringField({
            choices: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                12: '12',
            },
            required: true,
        }),
        default: 6,
        onChange: value => {
            console.log('JD ETime | %s %d', SETTINGS.LARGE_TIME_DELTA, value)
        },
        requiresReload: false,
        restricted: true,
    })

    game.settings.register(MODULE_ID, SETTINGS.TIME_CHANGE_MACRO, {
        name: game.i18n.localize('JDTIMEKEEPING.Settings.TimeChangeMacro.name'),
        hint: game.i18n.localize('JDTIMEKEEPING.Settings.TimeChangeMacro.hint'),
        scope: 'world',
        config: true,
        type: new foundry.data.fields.DocumentUUIDField({ type: 'Macro' }),
        requiresReload: false,
        restricted: true,
    })

    game.settings.register(MODULE_ID, SETTINGS.TOTAL_ELAPSED_MINUTES, {
        scope: 'world',
        config: false,
        type: Number,
        default: 0,
        requiresReload: false,
        restricted: true,
    })
}
