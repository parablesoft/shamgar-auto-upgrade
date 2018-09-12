import EmberObject from '@ember/object';
import AutoUpgradeControllerMixin from 'shamgar-auto-upgrade/mixins/auto-upgrade-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | auto upgrade controller', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let AutoUpgradeControllerObject = EmberObject.extend(AutoUpgradeControllerMixin);
    let subject = AutoUpgradeControllerObject.create();
    assert.ok(subject);
  });
});
