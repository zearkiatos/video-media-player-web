const zelda = {
  name: "Zelda",
};

zelda.greet = function () {
  console.log(`Hi I\'m ${this.name}`);
};

const link = {
  name: "Link",
};

link.greet = function () {
  console.log(`Hi I\'m ${this.name}`);
};

const heroMethods = {
  greet: function () {
    console.log(`Hi I\'m ${this.name}`);
  },
};

function Hero(name) {
  const hero = {
    name,
  };

  hero.greet = heroMethods.greet;

  return hero;
}

function HeroObjectCreate(name) {
  const heroMethods = {
    greet: function () {
      console.log(`I\'m superheroe ${this.name}`);
    },
  };
  const hero = Object.create(heroMethods);
  hero.name = name;

  return hero;
}

function HeroPrototype(name) {
  const hero = Object.create(HeroPrototype.prototype);
  hero.name = name;

  return hero;
}

HeroPrototype.prototype.greet = function () {
  console.log(`I\'m superheroe ${this.name}`);
};

function HeroWithNew(name) {
  this.name = name;
}

HeroWithNew.prototype.greet = function () {
  console.log(`I\'m a Hyrule hero ${this.name}`);
};

export default {
  zelda,
  link,
  Hero,
  HeroObjectCreate,
  HeroPrototype,
  HeroWithNew,
};
