'use strict'

const Speedtest = use("App/Models/Speedtest");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with speedtests
 */
class SpeedtestController {
  /**
   * Show a list of all speedtests.
   * GET speedtests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const speedtests = await Speedtest.query().orderBy('created_at', 'desc').fetch();
    return view.render('index', {speedtests: speedtests.toJSON()});
  }

  /**
   * Render a form to be used for creating a new speedtest.
   * GET speedtests/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const data = request.all();

    const newSpeedtest = new Speedtest();
    newSpeedtest.fill(data);
    newSpeedtest.save();

    return await newSpeedtest;
  }

  /**
   * Create/save a new speedtest.
   * POST speedtests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single speedtest.
   * GET speedtests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing speedtest.
   * GET speedtests/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update speedtest details.
   * PUT or PATCH speedtests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a speedtest with id.
   * DELETE speedtests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = SpeedtestController
