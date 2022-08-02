const bcryptjs = require('bcryptjs')

module.exports = {
    encriptPass: function(password) {
        const salt = bcryptjs.genSaltSync();
        return bcryptjs.hashSync(password, salt);
    },
    validPass: function (password, userPassword) {
        return bcryptjs.compareSync(password, userPassword);
    }
}


