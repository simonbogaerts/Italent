import React  from 'react';
import PxlBreakfast from './pxlbreakfast';
import InfoFarm from './infofarm';
import SmartIct from './smartict';
import YellowGround from './yellowground';
import Icapps from './icapps';
import MediaFoundry from './mediafoundry';
import Craftworkz from './craftworkz';
import AppFoundry from './appfoundry';
import Euricom from './euricom';
import Cegeka from './cegeka';
import Ux from './ux';

const Seminaries = () => {
    return (
        <div id="tabs">
            <div className="container">
                <h6 className="section-title h1">Seminaries</h6>
                <div className="row">
                    <div className="col-xs-12 ">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-ux-tab" data-toggle="tab" href="#nav-ux" role="tab" aria-controls="nav-ux" aria-selected="true">UX</a>
                                <a className="nav-item nav-link" id="nav-pxl-tab" data-toggle="tab" href="#nav-pxl" role="tab" aria-controls="nav-pxl" aria-selected="false">PXL</a>
                                <a className="nav-item nav-link" id="nav-infofarm-tab" data-toggle="tab" href="#nav-infofarm" role="tab" aria-controls="nav-infofarm" aria-selected="false">InfoFarm</a>
                                <a className="nav-item nav-link" id="nav-smartict-tab" data-toggle="tab" href="#nav-smartict" role="tab" aria-controls="nav-smartict" aria-selected="false">Smart ICT</a>
                                <a className="nav-item nav-link" id="nav-yellowground-tab" data-toggle="tab" href="#nav-yellowground" role="tab" aria-controls="nav-yellowground" aria-selected="false">YellowGround</a>
                                <a className="nav-item nav-link" id="nav-icapps-tab" data-toggle="tab" href="#nav-icapps" role="tab" aria-controls="nav-icapps" aria-selected="false">ICapps</a>
                                <a className="nav-item nav-link" id="nav-mediafoundry-tab" data-toggle="tab" href="#nav-mediafoundry" role="tab" aria-controls="nav-mediafoundry" aria-selected="false">IDA-MediaFoundry</a>
                                <a className="nav-item nav-link" id="nav-craftworkz-tab" data-toggle="tab" href="#nav-craftworkz" role="tab" aria-controls="nav-craftworkz" aria-selected="false">Craftworkz</a>
                                <a className="nav-item nav-link" id="nav-appfoundry-tab" data-toggle="tab" href="#nav-appfoundry" role="tab" aria-controls="nav-appfoundry" aria-selected="false">AppFoundry</a>
                                <a className="nav-item nav-link" id="nav-euricom-tab" data-toggle="tab" href="#nav-euricom" role="tab" aria-controls="nav-euricom" aria-selected="false">Euricom</a>
                                <a className="nav-item nav-link" id="nav-cegeka-tab" data-toggle="tab" href="#nav-cegeka" role="tab" aria-controls="nav-cegeka" aria-selected="false">Cegeka</a>
                            </div>
                        </nav>
                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-ux" role="tabpanel" aria-labelledby="nav-ux-tab">
                                <Ux  />
                            </div>
                            <div className="tab-pane fade" id="nav-pxl" role="tabpanel" aria-labelledby="nav-pxl-tab">
                                <PxlBreakfast />
                            </div>
                            <div className="tab-pane fade" id="nav-infofarm" role="tabpanel" aria-labelledby="nav-infofarm-tab">
                                <InfoFarm />
                            </div>
                            <div className="tab-pane fade" id="nav-smartict" role="tabpanel" aria-labelledby="nav-smartict-tab">
                                <SmartIct />
                            </div>
                            <div className="tab-pane fade" id="nav-yellowground" role="tabpanel" aria-labelledby="nav-yellowground-tab">
                                <YellowGround />
                            </div>
                            <div className="tab-pane fade" id="nav-icapps" role="tabpanel" aria-labelledby="nav-icapps-tab">
                                <Icapps />
                            </div>
                            <div className="tab-pane fade" id="nav-mediafoundry" role="tabpanel" aria-labelledby="nav-mediafoundry-tab">
                                <MediaFoundry />
                            </div>
                            <div className="tab-pane fade" id="nav-craftworkz" role="tabpanel" aria-labelledby="nav-craftworkz-tab">
                                <Craftworkz />
                            </div>
                            <div className="tab-pane fade" id="nav-appfoundry" role="tabpanel" aria-labelledby="nav-appfoundry-tab">
                                <AppFoundry />
                            </div>
                            <div className="tab-pane fade" id="nav-euricom" role="tabpanel" aria-labelledby="nav-euricom-tab">
                                <Euricom />
                            </div>
                            <div className="tab-pane fade" id="nav-cegeka" role="tabpanel" aria-labelledby="nav-cegeka-tab">
                                <Cegeka />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default Seminaries;