import React from 'react'
import './LandingPage.css'

function LandingPage(){
      return(
            <div className="main__container">
                <div className="company__logo">
                    <img src="../asserts/logo.png" alt="" />
                </div>
                <div className="middle__section">
                    <div className="left__section">
                        <img src="../asserts/1.png" alt="" />
                    </div>
                    <div className="right__section">
                         <div className="upper__text">
                             <span> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</span>
                             <ul>
                                <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                                <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                             </ul>
                         </div>
                         <div className="big__image">
                              <img src="../asserts/2.png" alt="" />
                         </div>
                         <div className="lower__text">
                            <span>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</span>
                         </div>
                    </div>
                </div>
                <div className="bottom__section">
                      <div className="top__heading">
                        <span>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </span>
                          <div className="tools__section">
                             <img src="../asserts/3.png" alt="" />
                             </div>
                             <div className="bottom__text">
                                <span>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </span>
                             </div>
                         </div>
                             <div className="border__design"></div>
                              <div className="bottom__heading">
                                  <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                                  <span>CHEMICALS & PROCESS<span class="red-pipe"></span>POWER WATER & WASTE WATER<span class="red-pipe"></span> OILS & GAS<span class="red-pipe"></span>PHARMA<span class="red-pipe"></span>SUGARS & DISTILLERIES<span class="red-pipe"></span>PAPER & PULP<span class="red-pipe"></span>MARINE & DEFENCE<span class="red-pipe"></span>METAL & MINING<span class="red-pipe"></span>FOOD & BEVERAGE<span class="red-pipe"></span>PETROCHEMICAL & REFINERIES<span class="red-pipe"></span>SOLAR<span class="red-pipe"></span>BUILDING<span class="red-pipe"></span>HVAC<span class="red-pipe"></span>FIRE FIGHTING<span class="red-pipe"></span>AGRICULTURE & RESIDENTIAL</span>
                              </div>
                </div>
                  <div className="footer__section">
                       <div className="reference__links">
                        <i class="fa-solid fa-phone"></i>
                            <p>Toll free 1800 200 1234</p>
                       </div>

                       <div className="reference__links">
                        <i class="fa-brands fa-facebook"></i>
                            <p>www.facebook.com/cripumps</p>
                       </div>
                       <div className="reference__links">
                        <i class="fa-solid fa-globe"></i>
                            <p>www.crigroups.com</p>
                       </div>
                  </div>
            </div>
      )
}
export default LandingPage