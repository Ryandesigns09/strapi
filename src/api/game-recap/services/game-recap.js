'use strict';

/**
 * game-recap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-recap.game-recap');
