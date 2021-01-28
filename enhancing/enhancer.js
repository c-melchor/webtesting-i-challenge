module.exports = {
  success,
  fail,
  repair,
  get
};

module.exports = item = {
  name: "item_name",
  durability: 0,
  enhancement: 0
}

function success(item) {
  if (item.enhancement != 20 && item.enhancement < 20) {
    return item.enhancement + 1;
  } else {
    return { ...item };
  }
}


function fail(item) {
  if (item.enhancement < 15) {
    return item.durability - 5;
  } else if (item.enhancement >= 15) {
    return item.durability - 10;
  } else if (item.enhancement > 16 && item.enhancement < 21) {
    return item.enhancement - 1;
  } else {
    return { ...item }
  }
}

function repair(item) {
  return { ...item, [item.durability]: 100 };
}

function get(item) {
  return { ...item };
}
