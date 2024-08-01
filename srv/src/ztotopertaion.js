const { getService } = require("./util");
const cds = require("@sap/cds");

const getData = async (req) => {
  const oSrv = await getService("ZTOTECNFWCSTOSAP_SRV");
  return oSrv.tx(req).run(req.query);
};
const createDate = async (req) => {
    const oSrv = await getService("ZTOTECNFWCSTOSAP_SRV");
    const oPayload = req.data;
    const oResult = await oSrv.send("POST", "/ZTOTECNFWCSTOSAPSet", oPayload);
    return oResult;
  };


module.exports = {
    getData,
    createDate
  };