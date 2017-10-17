import Ember from 'ember';

export default Ember.Mixin.create({
  resetController(controller){
    controller.stopVersionCheck();
  },
  actions:{
    didTransition(transition){
      if(this.controller.get("upgradePending",true)){
	document.location.reload();
      }
    },
  }
});
