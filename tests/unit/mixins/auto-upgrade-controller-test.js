import Ember from 'ember';
import AutoUpgradeControllerMixin from 'shamgar-auto-upgrade/mixins/auto-upgrade-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | auto upgrade controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let AutoUpgradeControllerObject = Ember.Object.extend(AutoUpgradeControllerMixin);
  let subject = AutoUpgradeControllerObject.create();
  assert.ok(subject);
});
