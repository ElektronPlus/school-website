'use strict';

/**
 * entry router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::entry.entry');
