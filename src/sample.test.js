import test from 'ava';

test(t => {
  t.deepEqual([1, 2], [1, 2]);
});

function promiseFn() {
  return Promise.resolve(true);
}

test(async t => {
  const value = await promiseFn();
  t.true(value);
});
