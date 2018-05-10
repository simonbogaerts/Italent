import React  from 'react';
import InternationaliseringReflectie from './internationaliseringreflect';
import InnovatieReflectie from './innovatiereflect';
import SeminarieReflectie from './seminarireflect';
import StudentEngagementReflectie from './engagementreflect';
import EindReflectie from './eindreflec';

const Reflecties = () => {
    return (
        <div id="tabs">
            <div className="container">
                <h6 className="section-title h1">Reflecties</h6>
                <div className="row">
                    <div className="col-xs-12 ">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-internat-tab" data-toggle="tab" href="#nav-internat" role="tab" aria-controls="nav-internat" aria-selected="true">Internationalisering</a>
                                <a className="nav-item nav-link" id="nav-innovation-tab" data-toggle="tab" href="#nav-innovation" role="tab" aria-controls="nav-innovation" aria-selected="false">Innovatie</a>
                                <a className="nav-item nav-link" id="nav-seminars-tab" data-toggle="tab" href="#nav-seminars" role="tab" aria-controls="nav-seminars" aria-selected="false">Seminaries</a>
                                <a className="nav-item nav-link" id="nav-engagement-tab" data-toggle="tab" href="#nav-engagement" role="tab" aria-controls="nav-engagement" aria-selected="false">Student Engagement</a>
                                <a className="nav-item nav-link" id="nav-finalrefl-tab" data-toggle="tab" href="#nav-finalrefl" role="tab" aria-controls="nav-finalrefl" aria-selected="false">Eindreflectie</a>
                                </div>
                        </nav>
                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-internat" role="tabpanel" aria-labelledby="nav-internat-tab">
                                <InternationaliseringReflectie />
                            </div>
                            <div className="tab-pane fade" id="nav-innovation" role="tabpanel" aria-labelledby="nav-innovation-tab">
                                <InnovatieReflectie />
                            </div>
                            <div className="tab-pane fade" id="nav-seminars" role="tabpanel" aria-labelledby="nav-seminars-tab">
                                <SeminarieReflectie />
                            </div>
                            <div className="tab-pane fade" id="nav-engagement" role="tabpanel" aria-labelledby="nav-engagement-tab">
                                <StudentEngagementReflectie />
                            </div>
                            <div className="tab-pane fade" id="nav-finalrefl" role="tabpanel" aria-labelledby="nav-finalrefl-tab">
                                <EindReflectie />
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

export default Reflecties;