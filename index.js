const settings = Client.getMinecraft().field_71474_y
const sensitivity = settings.field_74341_c

const newSensitivity = -1/3
var preLockSensitivity = 0
var locked = false

register("command", (...args) => {

    if (locked) {

        unlock()

    } else {

        lock()

    }

}).setName("mouselock")


const lock = () => {
    if (locked) return
    preLockSensitivity = sensitivity
    
    setSensitivity(newSensitivity)
    ChatLib.chat("&aMouse Locked!")
    locked = true
}

const unlock = () => {
    if (!locked) return
    setSensitivity(preLockSensitivity)
    ChatLib.chat("&aMouse Unlocked!")
    locked = false 
}

const setSensitivity = (sensitivity) => {
    settings.field_74341_c = sensitivity
}

register("gameUnload", () => {
    if (locked) {
        unlock()
    }
});