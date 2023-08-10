// Designing an Object-Oriented Program

class Animal {
    // --- code here ---
    // constructor: color, energy
    constructor(color="yellow", energy=100) {
        this.color = color;
        this.energy = energy
    }
}

class Cat extends Animal {
    // --- code here ---
    // constructor: color, energy, sound, canClimbHigh, canClimbTrees
    constructor(color, energy, sound="purr", canJumpHigh=true, canClimbTrees=true) {
        super(color, energy)
        this.sound = sound
        this.canJumpHigh = canJumpHigh
        this.canClimbTrees = canClimbTrees
    }
}

class Bird extends Animal {
    // --- code here ---
    // constructor: color, energy, sound, canFly
    constructor(color, energy, sound="chirp", canFly=true) {
        super(color, energy)
        this.sound = sound
        this.canFly = canFly
    }
}

class HouseCat extends Cat {
    // --- code here ---
    // constructor: houseCatSound, color, energy, sound, canClimbHigh, canClimbTrees
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound="meow") {
        super(color, energy, sound, canJumpHigh, canClimbTrees)
        this.houseCatSound = houseCatSound
    }
}

class Tiger extends Cat {
    // --- code here ---
    // constructor: tigerSound, color, energy, sound, canClimbHigh, canClimbTrees
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, tigerSound="Roar!") {
        super(color, energy, sound, canClimbTrees, canJumpHigh)
        this.tigerSound = tigerSound
    }
}

class Parrot extends Bird {
    // --- code here ---
    // constructor: canTalk, color, energy, sound, canFly
    constructor(color, energy, sound, canFly, canTalk=false) {
        super(color, energy, sound, canFly)
        this.canTalk = canTalk
    }
}