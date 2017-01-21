const sneks = require('./sneks');
const Drawer = require('./');

const drawer = new Drawer(sneks.NORMAL_SNEK);
drawer.start();
