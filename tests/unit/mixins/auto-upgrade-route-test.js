import EmberObject from '@ember/object';
import AutoUpgradeRouteMixin from 'shamgar-auto-upgrade/mixins/auto-upgrade-route';
import { module, test } from 'qunit';

module('Unit | Mixin | auto upgrade route', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let AutoUpgradeRouteObject = EmberObject.extend(AutoUpgradeRouteMixin);
    let subject = AutoUpgradeRouteObject.create();
    assert.ok(subject);
  });
});
