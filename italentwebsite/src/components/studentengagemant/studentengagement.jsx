import React  from 'react';
import HashCode from './hashcore';
import StudyBuddy from './studybuddy';

const StudentenEngagement = () => {
    return (
        <div id="tabs">
            <div className="container">
                <h6 className="section-title h1">Student Engagement</h6>
                <div className="row">
                    <div className="col-xs-12 ">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-hash-tab" data-toggle="tab" href="#nav-hash" role="tab" aria-controls="nav-hash" aria-selected="true">Google HashCode 2017</a>
                                <a className="nav-item nav-link" id="nav-buddy-tab" data-toggle="tab" href="#nav-buddy" role="tab" aria-controls="nav-buddy" aria-selected="false">Study Buddy</a>
                                </div>
                        </nav>
                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-hash" role="tabpanel" aria-labelledby="nav-hash-tab">
                                <HashCode />
                            </div>
                            <div className="tab-pane fade" id="nav-buddy" role="tabpanel" aria-labelledby="nav-buddy-tab">
                                <StudyBuddy />
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

export default StudentenEngagement;