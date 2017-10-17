import Ember from 'ember';
import AutoUpgradeRouteMixin from 'shamgar-auto-upgrade/mixins/auto-upgrade-route';
import { module, test } from 'qunit';

module('Unit | Mixin | auto upgrade route');

// Replace this with your real tests.
test('it works', function(assert) {
  let AutoUpgradeRouteObject = Ember.Object.extend(AutoUpgradeRouteMixin);
  let subject = AutoUpgradeRouteObject.create();
  assert.ok(subject);
});
