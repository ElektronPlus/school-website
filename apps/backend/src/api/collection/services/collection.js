'use strict';

/**
 * collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::collection.collection');
