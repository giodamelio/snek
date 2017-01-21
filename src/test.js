const sneks = require('./sneks');
const Drawer = require('./');

const drawer = new Drawer(sneks.TALL_SNEK);
drawer.start();
