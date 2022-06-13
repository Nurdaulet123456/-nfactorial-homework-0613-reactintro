import "../../index.css";
import "./style.css";
import Img from "./img/facebook.png";
import Image from "./img/img.jfif";
import Image2 from "./img/img2.jpg";
import Image3 from "./img/img3.jfif";
import Image4 from "./img/img4.jfif";
import Image5 from "./img/img5.jfif";
import {format} from 'date-fns';

function Container() {
    const formDate = format(new Date(), 'dd.MM.yyy hh:mm')
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="header h-20 flex items-center justify-between">
        <div className="f flex items-center">
          <img className="m mr-3" src={Img} alt="" />
          <input type="text" className="block_content" readOnly></input>
        </div>
        <h1 className="data">{formDate}</h1>
      </div>
    </div>
    <div className="img_block">
        <div className="image">
          <h1 className="title text-2xl uppercase tracking-widest">Hey</h1>
          <img className="img" src={Image} alt="" />
        </div>
        <div className="image">
          <h1 className="title text-2xl uppercase tracking-widest">Let's</h1>
          <img className="img" src={Image2} alt="" />
        </div>
        <div className="image">
          <h1 className="title text-2xl uppercase tracking-widest">give</h1>
          <img className="img" src={Image3} alt="" />
        </div>
        <div className="image">
          <h1 className="title text-2xl uppercase tracking-widest">All</h1>
          <img className="img" src={Image4} alt="" />
        </div>
        <div className="image">
        <h1 className="title text-2xl uppercase tracking-widest">You Can</h1>
          <img className="img" src={Image5} alt="" />
        </div>
      </div>
    </>
  );
}

export default Container;
