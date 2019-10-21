import React, { Component } from 'react';

export default class Kupuj extends Component {
    render() {
        return (
            <div>
            <div className="header bg-dark pb-5">
                <div className="container-fluid">
                {/* <div className="@@if(navPosition=='sidenav'||navPosition=='combo'){container-fluid}@@if(navPosition=='topnav'){container}"> */}

                <div className="row">
                    <div className="col-lg-6 col-12">
                        {/* <!-- Body --> */}
                        <div className="header-body">
                            <div className="row align-items-end">
                            <div className="col">

                                {/* <!-- Pretitle --> */}
                                <h6 className="header-pretitle text-secondary">
                                Wartość jednostek udziałowych
                                </h6>

                                {/* <!-- Title --> */}
                                <h1 className="header-title text-white">
                                Footroll
                                </h1>

                            </div>
                            <div className="col-auto">

                                {/* <!-- Nav --> */}
                                <ul className="nav nav-tabs header-tabs">
                                <li className="nav-item" data-toggle="chart" data-target="#headerChart" data-update='{"data":{"datasets":[{"data":[0,10,5,15,10,20,15,25,20,30,25,40]}]}}' data-prefix="" data-suffix="k PLN">
                                    <a href="true" className="nav-link text-center active" data-toggle="tab">
                                    <h6 className="header-pretitle text-secondary">
                                        Saldo
                                    </h6>
                                    <h3 className="text-white mb-0">
                                        19.2k PLN
                                    </h3>
                                    </a>
                                </li>
                                </ul>

                            </div>
                            </div> {/* <!-- / .row --> */}
                        </div> {/* <!-- / .header-body --> */}

                        {/* <!-- Footer --> */}
                        <div className="header-footer">

                            {/* <!-- Chart --> */}
                            <div className="chart">
                                <canvas id="headerChart" className="chart-canvas"></canvas>
                            </div>

                            {/* <!-- Card --> */}
                            <div className="card mt-4">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col">

                                            {/* <!-- Title --> */}
                                            <h6 className="card-title text-uppercase text-muted mb-2">
                                            Saldo
                                            </h6>

                                            {/* <!-- Heading --> */}
                                            <span className="h2 mb-0">
                                            19,200 PLN
                                            </span>

                                            {/* <!-- Badge --> */}
                                            <span className="badge badge-soft-success mt-n1">
                                            +13.5%
                                            </span>

                                        </div>
                                        <div className="col-auto">

                                            {/* <!-- Icon --> */}
                                            <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>

                                        </div>
                                    </div> {/* <!-- / .row --> */}

                                </div>
                            </div>

                            <div className="card card-inactive">

                            <div className="card-header">
                                <h2 className="header-title text-white">
                                    Więcej o Footroll
                                    </h2>
                            </div>

                            <div className="card-body">

                                <div className="card-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                </div>

                            </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                    {/* <!-- Body --> */}
                    <div className="header-body">
                        <div className="row align-items-end">
                        <div className="col">

                            {/* <!-- Pretitle --> */}
                            <h6 className="header-pretitle text-secondary">
                            Wartość jednostek udziałowych
                            </h6>

                            {/* <!-- Title --> */}
                            <h1 className="header-title text-white">
                            Techmed
                            </h1>

                        </div>
                        <div className="col-auto">

                            {/* <!-- Nav --> */}
                            <ul className="nav nav-tabs header-tabs">
                            <li className="nav-item" data-toggle="chart" data-target="#headerChart2" data-update='{"data":{"datasets":[{"data":[-20,10,5,15,10,-20,15,25,20,-30,25,100]}]}}' data-prefix="" data-suffix="k PLN">
                                <a href="true" className="nav-link text-center active" data-toggle="tab">
                                <h6 className="header-pretitle text-secondary">
                                    Saldo
                                </h6>
                                <h3 className="text-white mb-0">
                                    109.93k PLN
                                </h3>
                                </a>
                            </li>
                            </ul>

                        </div>
                    </div> {/* <!-- / .row --> */}
                    </div> {/* <!-- / .header-body --> */}

                    {/* <!-- Footer --> */}
                    <div className="header-footer">

                        {/* <!-- Chart --> */}
                        <div className="chart">
                        <canvas id="headerChart2" className="chart-canvas"></canvas>
                        </div>

                        <div className="card mt-4">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col">

                                    {/* <!-- Title --> */}
                                    <h6 className="card-title text-uppercase text-muted mb-2">
                                    Saldo
                                    </h6>

                                    {/* <!-- Heading --> */}
                                    <span className="h2 mb-0">
                                        109,930 PLN
                                    </span>

                                    {/* <!-- Badge --> */}
                                    <span className="badge badge-soft-success mt-n1">
                                    +28.21%
                                    </span>

                                </div>
                                <div className="col-auto">

                                    {/* <!-- Icon --> */}
                                    <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>

                                </div>
                            </div> {/* <!-- / .row --> */}

                        </div>
                        </div>

                        <div className="card card-inactive">

                            <div className="card-header">
                                <h2 className="header-title text-white">
                                    Więcej o Techmed
                                </h2>
                            </div>

                            <div className="card-body">

                            <div className="card-text">
                                <p>
                                    Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </p>
                            </div>

                            </div>

                        </div>

                    </div>
                    </div>
                </div>

                </div>
            </div>


            {/* <!-- CARDS --> */}
            <div className="container-fluid">
                {/* <div className="@@if(navPosition=='sidenav'||navPosition=='combo'){container-fluid}@@if(navPosition=='topnav'){container}"> */}
                <div className="row mt-4 mt-md-5">
                <div className="col-12 col-lg-6">



                </div>
                </div>
            </div>
            </div>
        )
    }
}