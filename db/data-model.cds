namespace AKE.db;
using {ZTOTECNFWCSTOSAP_SRV} from '../srv/external/ZTOTECNFWCSTOSAP_SRV';

entity ZTOTECNFWCSTOSAPSet as projection on ZTOTECNFWCSTOSAP_SRV.ZTOTECNFWCSTOSAPSet{
  HUNumber,
  Scanner_Id,
  Transfer_Location_Update,
  Expected_Weight,
  Measured_Weight,
  Diversion_Reason
} ;
