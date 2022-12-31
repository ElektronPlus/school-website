'use strict';

/**
 * social service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::social.social');
