import { test } from 'qunit';
import moduleForAcceptance from 'switbuks/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list expenses');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
