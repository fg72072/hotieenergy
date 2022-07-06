import { Col, Container, Row,Table, Form } from "react-bootstrap";
import Hest from '../assets/images/hest.png'
import Minipooltable from "../components/MiniPoolTable";


function Calculator(){
    return <>
            <Container fluid className="main-height">

                <Row>

                    <Col xl={8} lg={12}>

                        <div className="page-margin-top">
                        
                        <h5 className="section-title">INTRODUCE YOUR DATA</h5>


                        <div className="calculator-parent mt-3">
                        
                        <p >%  SHARED EARNINGS</p>

                        <div className="calculator">

                            <Form>
                                <div className="calculator-group">
                                    <label>Introduce an amount that you consider Hotei’s may deposit</label>
                                    <div className="calculator-values">
                                        <input type="number"/>
                                        <span>USD</span>
                                    </div>
                                </div>

                                <div className="calculator-group">
                                    <label>Your estimated HEST balance</label>
                                    <div className="calculator-values">
                                        <input type="number"/>
                                        <span>HEST</span>
                                    </div>
                                </div>

                                <div className="calculator-group">
                                    <label>HEST approx. value</label>
                                    <div className="calculator-values">
                                        <input type="number"/>
                                        <span>USD / HEST</span>
                                    </div>
                                </div>
                            </Form>

                            <div className="calculator-meta">

                                <div className="calculator-ammount">
                                <p>Amount shared To support HEST</p>
                                <div>
                                    <span></span>
                                    <span className="position-absolute">USDT</span>
                                </div>

                                <div>
                                    <span>51%</span>
                                </div>
                                </div>

                                <div className="calculator-ammount">
                                <p>Amount shared To support HEST</p>
                                <div>
                                    <span></span>
                                    <span className="position-absolute">USDT</span>
                                </div>

                                <div>
                                    <span>51%</span>
                                </div>
                                </div>

                                <div className="calculator-ammount">
                                <p>Amount shared To support HEST</p>
                                <div>
                                    <span></span>
                                    <span className="position-absolute">USDT</span>
                                </div>

                                <div>
                                    <span>51%</span>
                                </div>

                                </div>

                              
                            </div>

                        </div>

                        </div>

                        

                       


                        </div>

                        <div className="trade-section">

                            <h5 class="section-title">Stake - MiniPools</h5>

                            <div className="select-minipool">

                                <div>
                                <p class="head mb-0">Select a MiniPool</p>
                                <p class="light-small-p">HEST Balance Required</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <span className="border-bg">Total Reward</span>
                                    <span className="border-bg">58,500 <sub>USDT</sub></span>
                                    <div className="position-relative">
                                        <p className="light-small-p absolute-p">REMAINING TIME TO CLOSE</p>
                                        <span className="border-bg">00 : 00 : 00 : 00</span>
                                    </div>
                                </div>

                            </div>

                            <Form className="minipool-form">

                           
                            <div className="minipool-check">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Prestige
                                        <span>176,000 - above</span>
                                    </label>
                                </div>
                                
                                <div className="form-check-basis">
                                    <span className="border-bg">25</span>
                                    <span className="border-bg">14,625 <sub>USDT</sub></span>
                                    <span className="border-bg">4</span>
                                    <button class="custom-btn secondary-btn">Join</button>

                                </div>
                            </div>

                            <div className="minipool-check">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Prestige
                                        <span>176,000 - above</span>
                                    </label>
                                </div>
                                
                                <div className="form-check-basis">
                                    <span className="border-bg">25</span>
                                    <span className="border-bg">14,625 <sub>USDT</sub></span>
                                    <span className="border-bg">4</span>
                                    <button class="custom-btn secondary-btn">Join</button>

                                </div>
                            </div>

                            <div className="minipool-check">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Prestige
                                        <span>176,000 - above</span>
                                    </label>
                                </div>
                                
                                <div className="form-check-basis">
                                    <span className="border-bg">25</span>
                                    <span className="border-bg">14,625 <sub>USDT</sub></span>
                                    <span className="border-bg">4</span>
                                    <button class="custom-btn secondary-btn">Join</button>

                                </div>
                            </div>

                            <div className="minipool-check">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Prestige
                                        <span>176,000 - above</span>
                                    </label>
                                </div>
                                
                                <div className="form-check-basis">
                                    <span className="border-bg">25</span>
                                    <span className="border-bg">14,625 <sub>USDT</sub></span>
                                    <span className="border-bg">4</span>
                                    <button class="custom-btn secondary-btn">Join</button>

                                </div>
                            </div>

                            <div className="minipool-check">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Prestige
                                        <span>176,000 - above</span>
                                    </label>
                                </div>
                                
                                <div className="form-check-basis">
                                    <span className="border-bg">25</span>
                                    <span className="border-bg">14,625 <sub>USDT</sub></span>
                                    <span className="border-bg">4</span>
                                    <button class="custom-btn secondary-btn">Join</button>

                                </div>
                            </div>

                            <div className="minipool-check">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Prestige
                                        <span>176,000 - above</span>
                                    </label>
                                </div>
                                
                                <div className="form-check-basis">
                                    <span className="border-bg">25</span>
                                    <span className="border-bg">14,625 <sub>USDT</sub></span>
                                    <span className="border-bg">4</span>
                                    <button class="custom-btn secondary-btn">Join</button>

                                </div>
                            </div>


                            <div className="minipool-check">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Prestige
                                        <span>176,000 - above</span>
                                    </label>
                                </div>
                                
                                <div className="form-check-basis">
                                    <span className="border-bg">25</span>
                                    <span className="border-bg">14,625 <sub>USDT</sub></span>
                                    <span className="border-bg">4</span>
                                    <button class="custom-btn secondary-btn">Join</button>

                                </div>
                            </div>

                            <div className="minipool-check">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Prestige
                                        <span>176,000 - above</span>
                                    </label>
                                </div>
                                
                                <div className="form-check-basis">
                                    <span className="border-bg">25</span>
                                    <span className="border-bg">14,625 <sub>USDT</sub></span>
                                    <span className="border-bg">4</span>
                                    <button class="custom-btn secondary-btn">Join</button>

                                </div>
                            </div>

                            <div className="minipool-check">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Prestige
                                        <span>176,000 - above</span>
                                    </label>
                                </div>
                                
                                <div className="form-check-basis">
                                    <span className="border-bg">25</span>
                                    <span className="border-bg">14,625 <sub>USDT</sub></span>
                                    <span className="border-bg">4</span>
                                    <button class="custom-btn secondary-btn">Join</button>

                                </div>
                            </div>

                            
                                
                            </Form>
                           
                        </div>
                        
                    </Col>

                    <Col xl={4} lg={12} >

                    <div className="trade-section">

                        <p className="head">Stake</p>
                        
                        <div className="time-refresh">
                            <p>ESTIMATED TIME TO REFRESH</p>
                            <div className="stake-time">
                            <span>MIN &nbsp; SEC</span>
                            <span>00 : 00</span>
                            </div>
                        </div>

                        <div className="stake-meta">

                        <div className="stake-meta-div">
                            <p>MiniPool Selected</p>
                            <h4 className="head">Advance 3</h4>
                        </div>

                        <div className="stake-meta-div">
                            <p>MiniPool %</p>
                            <h4 className="head">5%</h4>
                        </div>

                        <div className="stake-meta-div">
                            <p>MiniPool Rewards</p>
                            <h4 className="head">295<sub>USD</sub></h4>
                        </div>

                        <div className="stake-meta-div">
                            <p>MiniPool Users joined</p>
                            <span>Actual</span>
                            <h4 className="head">525</h4>
                        </div>

                        <div className="stake-meta-div">
                            <p>MiniPool Rewards</p>
                            <span>Actual</span>
                            <h4 className="head">408<sub>HEST</sub></h4>
                        </div>

                        <div className="stake-meta-div">
                            <p>MiniPool Users joined</p>
                            <span>Actual</span>
                            <h4 className="head">0.29</h4>
                        </div>

                        <div className="stake-meta-div stake-green">
                            <p>Current Value</p>
                            <h4 className="head">HEST</h4>
                        </div>

                        <div className="stake-meta-div stake-green">
                            <p>Estimated Value</p>
                            <h4 className="head">USD</h4>
                        </div>


                        </div>


                        <div className="input-stake">

                            <img src={Hest}/>
                            <p>Input Amount to Stake</p>

                        </div>

                        <div className="btn-group justify-content-end">
                        <button class="custom-btn secondary-btn">Unstake</button>
                        <button class="custom-btn secondary-btn">Stake</button>
                        </div>

                        <div className="minipool-table">
                            <p>MiniPool Current Detail</p>
                            <Minipooltable/>
                        </div>

                    </div>

                   

                    </Col>

                </Row>
            </Container>
    </>
}
export default Calculator;