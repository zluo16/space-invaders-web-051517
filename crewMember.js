class CrewMember {

  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else if (this.position === 'Pilot') {
      return this.currentShip.warpDrive = 'engaged!'
    }
  }

  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else if (this.position === 'Defender') {
      return this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else if (this.position === 'Gunner') {
      return this.currentShip.phasersCharge = 'charged!'
    }
  }

}
