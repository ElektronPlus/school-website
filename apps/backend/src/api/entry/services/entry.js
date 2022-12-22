'use strict';

/**
 * entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::entry.entry');
