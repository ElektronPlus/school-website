'use strict';

/**
 * entry controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::entry.entry');
