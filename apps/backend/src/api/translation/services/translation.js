'use strict';

/**
 * translation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::translation.translation');
