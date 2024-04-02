// https://byui-cit.github.io/learning-modules/modules/js/operators/ponder1/

let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

// Write code. Math.random() will generate a number between 0 and 1.
function isHit() {
  return Math.random() > 0.5;
}
// It should return true if the ship's health is above 0 AND ammo is above 0, return false otherwise
function shipCanFire() {
  return shipAmmo > 0 && shipHealth > 0;
}
//  It should return true if health is zero or less
function isDestroyed(health) {
  return health <= 0;
}
// If the ship runs out of ammo before destroying the target, it will suffer damage. 
// This function sohuld reduce ship health by 1 and increase ammo by 3.
function reloadShip() {
  shipHealth--;
  shipAmmo += 3;
}

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

encounter();