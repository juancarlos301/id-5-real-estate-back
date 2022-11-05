const boom = require("@hapi/boom");

const { models } = require("../libs/sequelize");

class CountriesService {
  constructor() {}

  async create(data) {
    const newCountry = await models.Countries.create(data);
    return newCountry;
  }

  async find() {
    const rta = await models.Countries.findAll();
    return rta;
  }

  async findOne(id) {
    const property = await models.Countries.findByPk(id);
    if (!property) {
      throw boom.notFound("country not found");
    }
    return property;
  }

  async update(id, changes) {
    const country = await this.findOne(id);
    const rta = await country.update(changes);
    return rta;
  }

  async delete(id) {
    const country = await this.findOne(id);
    await country.destroy();
    return { id };
  }
}

module.exports = CountriesService;
