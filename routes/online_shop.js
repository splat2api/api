const config = require('../config.json');

module.exports = [
    {
        name: "/merchandises",
        export(req, res) {
            res.status(200).json(config.endpoints.merchandises);
        },
        description: "Returns a list of gear you can order at SplatNet2.",
    }
];