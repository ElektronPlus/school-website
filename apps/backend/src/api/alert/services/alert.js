'use strict';

/**
 * alert service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alert.alert');
