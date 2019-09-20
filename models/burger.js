let orm = require('../config/orm');

let burger = {
    selectAll: (cb) => {
      orm.selectAll('burgers', (res) => {
        cb(res);
      });
    },

    insertOne: (cols, vals, cb) => {
      orm.create('burgers', cols, vals, (res) => {
        cb(res);
      });
    },

    updateOne: (objColVals, condition, cb) => {
      orm.updateOne('burgers', objColVals, condition, (res) => {
        cb(res);
      });
    },

    delete: (condition, cb) => {
      orm.delete('burgers', condition, (res) => {
        cb(res);
      });
    }
};

module.exports = burger;