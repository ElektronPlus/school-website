'use strict';

/**
 * social-media service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::social-media.social-media');
