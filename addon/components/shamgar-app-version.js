import Ember from 'ember';
import layout from '../templates/components/shamgar-app-version';
import ShamgarAppVersion from "../utils/shamgar-app-version";


const {Component,computed} = Ember;
export default Component.extend({
  layout,
  tagName: "",
  version: computed(function(){
    return ShamgarAppVersion();
  }),

});
