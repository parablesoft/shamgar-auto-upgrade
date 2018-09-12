import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/shamgar-app-version';
import ShamgarAppVersion from "../utils/shamgar-app-version";


export default Component.extend({
  layout,
  tagName: "",
  version: computed(function(){
    return ShamgarAppVersion();
  }),

});
