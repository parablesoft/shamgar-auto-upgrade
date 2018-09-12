import Mixin from '@ember/object/mixin';

export default Mixin.create({
  resetController(controller) {
    controller.stopVersionCheck();
  },
  actions: {
    didTransition() {
      if (this.controller.get("upgradePending", true)) {
        document.location.reload();
      }
    },
  }
});