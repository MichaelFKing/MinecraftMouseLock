const sensitivity = Client.getMinecraft().field_71474_y.field_74341_c

var preLockSensitivity = 0
var locked = false

register("command", (...args) => {
    newSensitivity = -1/3
    if (args[0] != null) {
        newSensitivity = args[0]
    }

    if (locked) {

        Client.getMinecraft().field_71474_y.field_74341_c = preLockSensitivity
        ChatLib.chat("&aMouse Unlocked!")
        locked = false 

    } else {

    preLockSensitivity = sensitivity
    
    Client.getMinecraft().field_71474_y.field_74341_c = newSensitivity
    ChatLib.chat("&aMouse Locked!")
    locked = true

    }

}).setName("mouselock")
