class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.phasersCharge = 'uncharged'
    this.warpDrive = 'disengaged'
    this.crew = crew
    this.notifyCrew()
    if (this.crew.length > 0) {
      this.docked = false
    } else {
      this.docked = true
    }
  }

  notifyCrew() {
    this.crew.forEach(member => {
    member.currentShip = this
    })
  }

  find(crew, position) {
    crew.forEach(function(member) {
      if (member.position === position) {
        return member
      }
    })
  }

}
