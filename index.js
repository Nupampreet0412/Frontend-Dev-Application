import React from 'react';
import ReactDOM from 'react-dom';
import { BsGrid } from 'react-icons/bs';
import { BiBarChartSquare } from 'react-icons/bi';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { MdOutlinePinInvoke } from 'react-icons/md';
import { AiOutlineApi} from 'react-icons/ai';
import { FaCoins } from 'react-icons/fa';
import { AiOutlinePieChart } from 'react-icons/ai';
import {  BsBarChart } from 'react-icons/bs';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { IoCopySharp } from 'react-icons/io5';
import { SiBitcoinsv} from 'react-icons/si';
import { BiWalletAlt} from 'react-icons/bi';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { BsBoxArrowInUpRight} from 'react-icons/bs';
import { BsBoxArrowInRight} from 'react-icons/bs';
import { IoIosArrowDown} from 'react-icons/io';
import { HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import { BsShareFill} from 'react-icons/bs';
import { TiDocumentText} from 'react-icons/ti';
import { VscGlobe} from 'react-icons/vsc';
import { BsCircleFill} from 'react-icons/bs';
import { BsFillMoonStarsFill} from 'react-icons/bs';
import './index.css';
import App from './App';


class MyHeader extends React.Component {
  render() {
    return (
      <div>
      < a href=""><div class="row">
  <div class="column1"  style={{backgroundColor: "black"}}><br/>
  <div class="columns"><div class="c111"><div class="circle">N</div></div>
       <div class="c111"><div class="c222" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"20px",borderRadius:"20px",color:"white"}}>
      Name <HiOutlineArrowNarrowLeft/></div></div></div>
    <p style={{color:"grey",fontSize:"20px"}}>< BsGrid/> &nbsp;  &nbsp;Home</p>
    <p style={{color:"grey",fontSize:"20px"}}>< BiBarChartSquare/> &nbsp; &nbsp;Section 1</p>
    <p style={{color:"grey",fontSize:"20px"}}>< RiExchangeDollarLine/> &nbsp; &nbsp;Section 2</p>
    <p style={{color:"grey",fontSize:"20px"}}><MdOutlinePinInvoke /> &nbsp; &nbsp;Section 3</p>
    <p style={{color:"grey",fontSize:"20px"}}>< AiOutlineApi/> &nbsp; &nbsp;Section 4</p>
    <p style={{color:"grey",fontSize:"20px"}}><FaCoins /> &nbsp; &nbsp;Section</p>
    <p style={{color:"grey",fontSize:"20px"}}>< AiOutlinePieChart/> &nbsp; &nbsp;Section 6</p>
    <p style={{color:"grey",fontSize:"20px"}}><  BsBarChart/> &nbsp; &nbsp;Section 7</p>
    <p style={{color:"white",fontSize:"20px",backgroundColor:"rgb(57, 65, 68)",borderRadius:"10px",height:"40px"}}>&nbsp;
    &nbsp;<  BsShareFill/> &nbsp; &nbsp;Section 8</p>
    <p style={{color:"grey",fontSize:"20px"}}><  TiDocumentText/> &nbsp; &nbsp;Documentation</p><br/><br/>
    <br/><br/>
    <center> <div class="columns"><div class="c1"><div class="c2" style={{backgroundColor:"rgb(57, 65, 68)"}}>
       &nbsp; $0.90</div></div>
    <div class="c1" ><div class="c2" style={{backgroundColor:"rgb(142, 234, 250)",color:"rgb(22, 115, 158)"}} > 
    &nbsp;  Buy $XYZ</div></div></div></center>
   <div style={{color:"white",fontSize:"22px"}}>
    </div><br/>
     <div class="columns"><div class="c11"><div class="c22" style={{backgroundColor:"black",fontSize:"30px"}} >
       &nbsp;  <VscGlobe/></div></div>
       <div class="c11"><div class="c22" style={{backgroundColor:"rgb(57, 65, 68)",fontSize:"20px",borderRadius:"20px",color:"rgb(22, 115, 158)"}}>
       &nbsp;<BsFillMoonStarsFill/>&nbsp;&nbsp;&nbsp;<BsCircleFill/></div></div></div>
    </div>
  
  
  <a href=""><div class="column2 vl" style={{backgroundColor: "black"}}>
  <u style={{color:"blue"}}><h2 style={{color:"white"}}>Section</h2></u>

    <div class="p0" style={{color:"black"}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/><br/>
    <div class="p01"><div style={{marginLeft:"18px"}}>Tutorial</div>
    </div></div>
    <div class="p1" style={{color:"white"}}><div style={{fontSize:"20px"}}>Your rewards</div><br/><div style={{fontWeight:"bold",fontSize:"30px"}}>$0.26231428 
    <div class="coolumn p00" ><div style={{fontSize:"15px",marginLeft:"10px",marginTop:"5px",color:"white" }}>< BsBoxArrowInUpRight/> &nbsp;custom link</div></div></div>
   <div class="columns"> <div class="columnn ph"><div style={{marginLeft:"12px",marginTop:"5px",fontSize:"12px"}} >$40 AVAX</div></div> 
   <div class="columnn ph"><div style={{marginLeft:"12px",marginTop:"5px",fontSize:"12px"}} >$10 BNB</div> </div>
   <div class="columnn ph"><div style={{marginLeft:"12px",marginTop:"5px",fontSize:"12px"}} >$210 BTC</div></div> </div></div>
    <div class="p2"><div style={{color:"white",fontWeight:"bold",fontSize:"20px"}}>12.5% of fee</div><br/>
    <div style={{color:"grey",fontSize:"20px"}}>Your Referral Link for xyz</div><br/>
    <div class="col p7" style={{backgroundColor:"rgb(57, 65, 68)",color:"white"}} >
      <div style={{marginTop:"10px",marginLeft:"6px"}}>https://unityexchange.design  &nbsp;  &nbsp;    < IoCopySharp/></div></div> </div>
    <div class="p3"><div style={{color:"white",fontWeight:"bold",fontSize:"20px"}}>12.5% of fee</div><br/>
    <div style={{color:"grey",fontSize:"20px"}}>Your Referral Link for xyz</div><br/>
    <div class="col p7" style={{backgroundColor:"rgb(57, 65, 68)",color:"white"}} >
      <div style={{marginTop:"10px",marginLeft:"6px"}}>https://unityexchange.design   &nbsp; &nbsp;    < IoCopySharp/></div></div> </div>
    <div style={{color:"white"}}><div class="columns">
  <div class="column" style={{marginLeft:"22px",fontSize:"20px"}}>
    <u style={{color:"blue"}}><div style={{color:"white"}}>First Tab</div></u>
  </div><div class="column" style={{color:"grey",fontSize:"20px"}}>
    Second Tab
  </div></div>
    </div>
    <div class="p4"><div class="columns" style={{color:"grey"}}>
  <div class="column">
    ASSET
  </div>
  <div class="column">
    AMOUNT
  </div>
  <div class="column">
    USER ACOUNT
  </div>
  <div class="column">
    REFERAL EARING
  </div>
</div></div>
    <div class="p5"><div class="columns" style={{color:"white"}}>
  <div class="column">
    <SiBitcoinsv/> &nbsp;Bitcoin<br/><div class="columns"> 
   <div > <div class="nn" style={{fontSize:"10px",marginLeft:"20px"}}><div style={{marginLeft:"12px"}}>AVAX</div></div></div> 
  </div></div>
  <div class="column">
    0.00000 BNB<br/><div style={{color:"grey",marginLeft:"15px"}}>Expired</div>
  </div>
  <div class="column">
    0*FbE..0f58A7D
  </div>
  <div class="column">
    0.000.BNB<br/><div style={{color:"grey"}}>View on BSC Scan &nbsp;< MdOutlineOpenInNew/></div>
  </div>
</div></div>
  </div></a>
  <div class="column3 vl" style={{backgroundColor: "black"}}><br/>
    <div class="columns"><div class="cl"><select class="av">
    <option value="Avalanche" >Avalanche</option>
    
  </select></div><div class="cl"><div class="av" style={{width:"200px"}}>
    <div><div ><BiWalletAlt/> &nbsp;   0XF6...1353  &nbsp; &nbsp; &nbsp; <IoIosArrowDown/></div></div>
    
  </div></div></div><br/>
    <h3 style={{color:"white"}}><AiOutlineArrowLeft/> &nbsp;Custom link</h3><br/>
    <p style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://testnet.xyz.xyz/trade?ref=</p>
    <div class="col p88" style={{color:"grey"}}>&nbsp;&nbsp;Enter</div><br/>
   <center> <div class="columns"><div class="ccc"><div class="hn" style={{backgroundColor:"rgb(22, 115, 158)"}}>< BsBoxArrowInUpRight/>  &nbsp; Custom link</div></div>
    <div class="ccc" ><div class="hn" ><BsBoxArrowInRight/> &nbsp;  Cancel</div></div></div></center>
  </div>
</div>
</a>
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));
