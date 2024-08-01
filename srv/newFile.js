const cds = require("@sap/cds");
const { getData, createDate } = require("./src/ztotopertaion");

module.exports = cds.service.impl(async function () {
    this.on("READ", "ZTOTECNFWCSTOSAPSet", getData);
    this.on("CREATE", "ZTOTECNFWCSTOSAPSet", createDate);


});
