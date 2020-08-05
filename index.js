// powercord.styleManager.themes.forEach((f) => powercord.styleManager.disable(f.entityID))
const { Plugin } = require('powercord/entities');

module.exports = class Panikk extends Plugin {
  constructor() {
    super();
  }

  async startPlugin() {
    document.body.addEventListener("keyup", this.keyup);
  }

  pluginWillUnload() {
    document.body.removeEventListener("keyup", this.keyup);
  }
  keyup(event) {
    if (event.key == 'F5') {
      powercord.styleManager.themes.forEach((f) => {
	if(f.applied) powercord.styleManager.disable(f.entityID);
	else powercord.styleManager.enable(f.entityID);
	}
      );
    }
  }
};
