import React from 'react'
import  Style from './style'
export default ()=>
{
    return(
        <>
        <div>
            <nav className="navbar p-0 fixed-top">
                <button className="navbar-toggler navbar-toggler-left rounded-0 border-0" type="button"
                        data-toggle="collapse" data-target="#megamenu-dropdown"
                        aria-controls="megamenu-dropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"/> <span className="ml-3">Advanced</span>
                </button>

                <div>
                    <div className="right-links float-right mr-4">
                        <a href="" className="home"><i className="fa fa-home mr-3"/></a>

                        <div className="d-inline dropdown rounded-0 mx-3">
                            <a className="dropdown-toggle" id="tools" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href=""><i className="fa fa-wrench" aria-hidden="true"/></a>
                            <div className="dropdown-menu dropdown-menu-right rounded-0 text-center" aria-labelledby="tools">
                                <a className="dropdown-item px-2" href="#">Recompile CSS</a>
                            </div>
                        </div>


                        <div className="d-inline dropDown mr-3">
                            <a className="dropDown-toggle" id="notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><span>10</span><i className="fa fa-bell"/></a>
                            <div className="dropdown-menu dropdown-menu-right rounded-0 pt-0" aria-labelledby="notifications">
                                <div className="list-group">
                                    <div className="lg">
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                                            <h5 className="mb-1">Real Estate Marketing Automation: 6 Simple Systems</h5>
                                            <p className="mb-0">17 October 2016 | 9:32 pm</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <h5 className="mb-1">How to Generate Seller Leads For $0.88 Using...</h5>
                                            <p className="mb-0">3 October 2016 | 9:58 pm</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <h5 className="mb-1">AgentFire Re-Opens For Business. New Services,...</h5>
                                            <p className="mb-0">20 September 2016 | 6:28 pm</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <h5 className="mb-1">Real Estate Blogging 101: How To Get Better...</h5>
                                            <p className="mb-0">7 September 2016 | 3:03 pm</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <h5 className="mb-1">How To Get More Listings With Strategic...</h5>
                                            <p className="mb-0">16 August 2016 | 8:26 pm</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <h5 className="mb-1">How To Find Strategic Real Estate Partners as...</h5>
                                            <p className="mb-0">9 August 2016 | 6:44 pm</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <h5 className="mb-1">Top 10 Real Estate Marketing Tools</h5>
                                            <p className="mb-0">2 August 2016 | 10:25 pm</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <h5 className="mb-1">The Beginner Guide To Google Adwords For Real...</h5>
                                            <p className="mb-0">27 July 2016 | 1:15 am</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <h5 className="mb-1">The Complete Guide To Hyper-Local SEO For Realtors</h5>
                                            <p className="mb-0">19 July 2016 | 5:51 pm</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <h5 className="mb-1">How We Took Ed Eakin’s Real Estate Website...</h5>
                                            <p className="mb-0">11 July 2016 | 6:19 pm</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-inline dropdown mr-3">
                            <a className="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i className="fa fa-envelope"/></a>
                            <div className="dropdown-menu dropdown-menu-right rounded-0 text-center" aria-labelledby="messages">
                                <a className="dropdown-item">There are no new messages</a>
                            </div>
                        </div>


                        <div className="d-inline dropdown">
                            <a className="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                <img src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right rounded-0" aria-labelledby="messages">
                                <a className="dropdown-item" href="#">Edit my profile</a>
                                <a className="dropdown-item" href="#">Log Out</a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="megamenu">
                    <div className="collapse navbar-collapse" id="megamenu-dropdown">
                        <div className="megamenu-links">
                            <div className="row">
                                <div className="col-md-3 px-0">
                                    <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3 pl-5" data-toggle="collapse" href="#menuOne" aria-expanded="false" aria-controls="collapseExample" id="more">Slider Revolution
                                        <i className="fa fa-minus float-right" aria-hidden="true"/>
                                        <i className="fa fa-plus float-right" aria-hidden="true"/>
                                    </a>
                                    <div className="collapse" id="menuOne">
                                        <div className="list-group border-0">
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Slider Revolution</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Navigation Editor</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Add-Ons</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 px-0">
                                    <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3" data-toggle="collapse" href="#menuTwo" aria-expanded="false" aria-controls="collapseExample" id="more">Flyouts
                                        <i className="fa fa-minus float-right" aria-hidden="true"/>
                                        <i className="fa fa-plus float-right" aria-hidden="true"/>
                                    </a>
                                    <div className="collapse" id="menuTwo">
                                        <div className="list-group border-0">
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">All Flyouts</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Add new Flyout</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Re-Order</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 px-0">
                                    <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3" data-toggle="collapse" href="#menuThree" aria-expanded="false" aria-controls="collapseExample" id="more">Cornerstone
                                        <i className="fa fa-minus float-right" aria-hidden="true"/>
                                        <i className="fa fa-plus float-right" aria-hidden="true"/>
                                    </a>
                                    <div className="collapse" id="menuThree">
                                        <div className="list-group border-0">
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Cornerstone</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Cornerstone</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Cornerstone</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 px-0">
                                    <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3 pl-5" data-toggle="collapse" href="#menuFour" aria-expanded="false" aria-controls="collapseExample" id="more">Ess. Grid
                                        <i className="fa fa-minus float-right" aria-hidden="true"/>
                                        <i className="fa fa-plus float-right" aria-hidden="true"/>
                                    </a>
                                    <div className="collapse" id="menuFour">
                                        <div className="list-group border-0">
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Essential Grid</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Item Skin Editor</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Meta Data Handling</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Search Settings</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Global Settings</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Import/Export</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 px-0">
                                    <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3" data-toggle="collapse" href="#menuFive" aria-expanded="false" aria-controls="collapseExample" id="more">AgentFire CTA Plus
                                        <i className="fa fa-minus float-right" aria-hidden="true"/>
                                        <i className="fa fa-plus float-right" aria-hidden="true"/>
                                    </a>
                                    <div className="collapse" id="menuFive">
                                        <div className="list-group border-0">
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Essential Grid</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Item Skin Editor</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Meta Data Handling</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Search Settings</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Global Settings</a>
                                            <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Import/Export</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </nav>
        </div>
        <div className="wp-content">
            <div className="container-fluid">
                CONTENT GOES HERE
            </div>
        </div>

        <Style/>
        </>

    );
}