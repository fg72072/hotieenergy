import { Col, Container, Row } from "react-bootstrap";
import Arrow from '../assets/images/arrow.png'
import ArrowWhite from '../assets/images/arrow-white.png'
import Hest from '../assets/images/hest.png'
import Usdt from '../assets/images/usdt.png'
import {InvestmentHistory,PieChartToken} from '../components/Index'

function TokenOverview(){
    return <>
            <Container fluid className="main-height">
                <div className="page-margin-top">
                <Row className="gy-5">
                    <Col lg={6} md={6}>
                        <div className='live-hest'>
                        <h2>Live hest <span>allocation</span></h2>
                        </div>
                        <PieChartToken/>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="token-section">
                        <div className="investment-history mb-3">
                        <h5>Your Investment History</h5>
                        <InvestmentHistory/>
                        </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                       <div className="token-section">

                        <h5 className="green">SmartContract Allocation</h5>

                           <div className="flex">
                               <span>total supply <span className="green">(hest)</span>:</span>
                               <div style={{width:"100px"}} className="custom-bar">
                               .

                               </div>
                           </div>
                           <div className="flex">
                               <span>TOTAL LOCKED  <span className="green">(hest)</span>:</span>
                               <div style={{width:"200px"}} className="custom-bar">
                               .

                               </div>
                           </div>
                           <div className="flex">
                               <span>TOTAL DeFi Available  <span className="green">(hest)</span>:</span>
                               <div style={{width:"200px"}} className="custom-bar">
                               .

                               </div>
                           </div>
                           <div className="flex">
                               <span>TOTAL Centr. Fi Available  <span className="green">(hest)</span>:</span>
                               <div style={{width:"200px"}} className="custom-bar">
                               .

                               </div>
                           </div>
                           <div className="flex">
                               <span>TOTAL STAKED  <span className="green">(hest)</span>:</span>
                               <div style={{width:"200px"}} className="custom-bar">
                               .

                               </div>
                           </div>
                           <div className="flex">
                               <span>TOTAL SALED  <span className="green">(hest)</span>:</span>
                               <div style={{width:"200px"}} className="custom-bar">
                                   .
                               </div>
                           </div>
                       </div>
                    </Col>
                    <Col lg={6} md={6}>
                       <div className="token-section">
                           <div className="balance-section">
                               <h5 className="green">YOUR BALANCE</h5>
                               <span>Balance of 0x0f7809</span>
                           </div>
                           <div className="balance-flex">
                               <div className="inner">
                               <span>TOTAL SUPPLY (HEST):</span>
                               </div>
                               <div className="inner">
                                   <div className="green-bar">
                                       <span>1</span>
                                   </div>
                               </div>
                           </div>
                           <div className="balance-flex">
                               <div className="inner">
                               <span>VALUE:</span>
                               </div>
                               <div className="inner d-flex">
                                   <div className="green-bar">
                                       <span>0.0085</span>
                                   </div>
                                   <span className="token-name">USD</span>
                               </div>
                           </div>
                           <div className="balance-flex">
                               <div className="inner">
                               <span>STAKE BALANCE:</span>
                               </div>
                               <div className="inner d-flex">
                                   <div className="green-bar">
                                       <span>150</span>
                                   </div>
                                   <span className="token-name">HEST</span>
                               </div>
                           </div>
                           <div className="balance-flex">
                               <div className="inner">
                               <span>CLAIMABLE BALANCE:</span>
                               </div>
                               <div className="inner d-flex">
                                   <div className="green-bar">
                                       <span>23</span>
                                   </div>
                                   <span className="token-name">USD</span>
                               </div>
                           </div>
                       </div>
                    </Col>
                </Row>
                </div>
            </Container>
    </>
}
export default TokenOverview;