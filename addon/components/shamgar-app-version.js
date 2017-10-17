import Ember from 'ember';
import layout from '../templates/components/shamgar-app-version';


export default Ember.Component.extend({
  layout,
  version(){
    return shamgarAppVersion();
  },

});
