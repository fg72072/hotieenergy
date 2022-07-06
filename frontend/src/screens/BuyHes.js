import { Col, Container, Row } from "react-bootstrap";
import bogged from '../assets/images/bogged.png'
import pancake from '../assets/images/pancake.png'
import poocoin from '../assets/images/poocoin.png'
import coinmarketcap from '../assets/images/coinmarketcap.png'
import coingecko from '../assets/images/coingecko.png'
import bscscan from '../assets/images/bscscan.png'
import {FinancialChartStockIndexChart} from '../components/Index'

function BuyHes(){
    return <>
            <Container fluid className="main-height">
                <Row>
                    <Col lg={8} md={12}>
                        <div className="custom-chart-margin">
                        <FinancialChartStockIndexChart/>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                    {/* <div className="trade-section">
                        <p className="text-center head">Trade Tokens in an instant</p>
                        <div className="trade-btn-group">
                            <button className="custom-btn-sm btn-secondary-sm">BUY</button>
                            <button className="custom-btn-sm btn-primary-sm">SELL</button>
                        </div>
                        <div className="">
                            <div className="drop-down-btn">
                                <img src={Hest}/>
                                <span>Hest</span>
                                <img src={Arrow}/>
                            </div>
                            <input className="mt-1 form-control input-green"/>
                            <div className="mt-3 mb-3 text-center">
                                <button className="swap-btn"><img src={ArrowWhite}/></button>
                            </div>
                            <div className="drop-down-btn">
                                <img src={Usdt}/>
                                <span>Usdt</span>
                                <img src={Arrow}/>
                            </div>
                            <input className="mt-1 form-control input-green"/>
                            <div className="price-section">
                                <span className="green">Price</span>
                                <span>0.085 HEST Per USDT</span>
                                <i class="fa-solid fa-arrows-rotate green"></i>
                            </div>
                            <div className="price-section">
                                <span className="green">Commision</span>
                                <span>3%</span>
                            </div>
                            <div className="mt-2 text-center">
                            <button className="custom-btn secondary-btn">Buy</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="mint-section">
                    {/* <a href="https://pancakeswap.finance/" target="_blank" className="custom-btn secondary-btn">Buy</a> */}
                    <h5 class="btn-like">Buy HES Token</h5>

                    <ul className="buy-hest">
                        <li>
                            <a href="https://www.bogged.finance/" target="_blank">
                                <img src={bogged}/>
                                <span>Bogged Finance</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://pancakeswap.finance/" target="_blank">
                                <img src={pancake}/>
                                <span>PancakeSwap Finance</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://poocoin.app/" target="_blank">
                                <img src={poocoin}/>
                                <span>Poocoin</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://coinmarketcap.com/" target="_blank">
                                <img src={coinmarketcap}/>
                                <span>CoinMarketCap</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.coingecko.com/" target="_blank">
                                <img src={coingecko}/>
                                <span>Coingecko</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://bscscan.com/" target="_blank">
                                <img src={bscscan}/>
                                <span>BscContract</span>
                            </a>
                        </li>

                    </ul>

{/* 
                    <a href="https://pancakeswap.finance/" target="_blank" className="custom-btn secondary-btn">Pancakeswap</a>
                    <a href="https://poocoin.app/" target="_blank" className="custom-btn secondary-btn">Poocoin</a> */}
                    </div>
                    </Col>
                </Row>
            </Container>
    </>
}
export default BuyHes;