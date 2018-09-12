import $ from 'jquery';
import { cancel, later } from '@ember/runloop';
import Mixin from '@ember/object/mixin';
import { set, get } from '@ember/object';
import config from "ember-get-config";


const normalPoll = 10000;
const reminderPoll = 180000;

const {
  APP: {
    version
  }
} = config;
export default Mixin.create({
  stopVersionCheck(){
    this.cancelChecker();
  },
  cancelChecker(){
    let checker = get(this,'checker');
    cancel(checker);
    set(this,'checker',null);
  },
  upgradePending: false,
  confirmReload(){
    this.cancelChecker();
    let message = "A new version of the software is available. If you would like to load it up now, click upgrade. If you are in the middle of working on something, we'll remind you again in a few minutes.";
    let self = this;
    swal({
      title: "Upgrade Available!",
      text: message,
      showCancelButton: true,
      cancelButtonText: "No, Remind me Later",
      confirmButtonColor: "#016b40",
      confirmButtonText: "Yes, Upgrade!",
      closeOnConfirm: true},
      function(isConfirm){
	if(isConfirm){
	  document.location.reload();
	}
	else{
	  set(self,"upgradePending",true);
	  self.registerChecker(reminderPoll);
	}
      });
  },
  versionWithoutSha(){
    const versionRegExp = /\d+[.]\d+[.]\d+/;
    return version.match(versionRegExp)[0].trim();
  },
  registerChecker(interval){
    let checker = later(this,function(){
      this.checkVersion();
    },interval);
    set(this,"checker",checker);
  },
  checkVersion(){
    let url = `/latest.txt?timestamp=${new Date().getTime()}`
    $.get(url).then(data =>{
      if(this.versionWithoutSha() != data.trim()){
	this.confirmReload();
      }
      else{
	this.registerChecker(normalPoll);
      }
    });
  },
  startVersionCheck(){
    this.checkVersion();
  },
  init(){
    this._super(...arguments);
    this.startVersionCheck();
  }
});
