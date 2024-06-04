let count = 0;

async function addCount() {
  count += 1;
  return count;
}

async function minusCount() {
  count -= 1;
  return count;
}

async function getCount() {
  return count;
}

export default {
  addCount,
  minusCount,
  getCount,
};
