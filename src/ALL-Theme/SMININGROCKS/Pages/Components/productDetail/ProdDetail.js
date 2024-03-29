import React, { useState,useEffect} from 'react'
import './proddetail.css'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'
import SmilingRock from '../home/smiling_Rock/SmilingRock'
import { Checkbox, Divider, Skeleton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import filterData from '../../jsonFile/M_4_95oztttesi0o50vr.json'

const ProdDetail = () => {

    const[acc,setAcc]=useState(false);
    const[accNo,setAccNo]=useState('');
    const [imgLoading, setImgLoading] = useState(true);

    const[productData,setProductData]=useState();
    const[thumbImg,setThumbImg]=useState();

    const handelImgLoad = () =>{
      setImgLoading(false)
    }

    useEffect(() => {
      let localProductData = JSON.parse(localStorage.getItem('srProductsData'))
      setProductData(localProductData)
    }, [])


    let imgData=[
        {links:'https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-ring-srr00363wht_11c94dae-c1d2-45e8-ae46-d16152c77f45_90x90_crop_center.jpg?v=1613627318'},
        {links:'https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-model-ring-SRR00363wht_90x90_crop_center.jpg?v=1613627318'},
        {links:'https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-rose-gold-ring-SRR00363wht_90x90_crop_center.jpg?v=1613627318'},
        {links:'https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-rose-gold-ring-SRR00363wht_90x90_crop_center.jpg?v=1613627318'},
        {links:'https://smilingrocks.com/cdn/shop/products/IMG_5326_90x90_crop_center.jpg?v=1613627318'},
        {links:'https://smilingrocks.com/cdn/shop/products/Set_image.2_cf499c9c-486b-47a3-b3fc-97aa9eda7ca5_90x90_crop_center.jpg?v=1661753045'},
        {links:'https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-ring-srr00363wht_11c94dae-c1d2-45e8-ae46-d16152c77f45_90x90_crop_center.jpg?v=1613627318'},
    ]


    console.log("productdetailData",productData?.thumbimage.split(","));

    const handelmainImg = () =>{
      let filterImg=productData?.originalimage.split(",").filter((ele,i)=>{
       return i === thumbImg 
      })

      return filterImg 
    }

    console.log("handelmainImg",handelmainImg());
    

  return (
    <div
      style={{
        backgroundColor: "#c0bbb1",
        height: "100%",
        width: "100%",
        paddingBottom: "100px",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className='prodDetailWhitecont' >
          <div className="product-detail-container" >
            <div className='srprodetail1' >
              {/* {!imgLoading */}
              
              {imgLoading && 
              <Skeleton sx={{
                  width: "100%",
                  // zindex: 11111,
                  // position: "relative",
                  // objectFit: "cover",
                  marginLeft:'51px',
                  marginTop:'5%',
                  height:'90%'
                  // display: !imgLoading ? "none": "block"
                }} 
                variant="rounded"  />
                }
              <img
                src={
                  productData?.imagepath +( !handelmainImg()?.length?productData?.originalimage.split(",")[0] :handelmainImg())
                }
                alt={""}
                style={{
                  width: "100%",
                  zindex: -1,
                  position: "relative",
                  objectFit: "cover",
                  marginLeft:'51px',
                  display: imgLoading ? "none": "block"
                }}

                onLoad={handelImgLoad}
              />
              {/* } */}
              <div className='srthumb_images' >
                {productData?.thumbimage.split(",").map((data,i) => (
                  <img
                    src={productData?.imagepath+data}
                    alt={""}
                    className='srthumb_images_el'
                    onClick={()=>setThumbImg(i)}
                  />
                ))}
              </div>
            </div>
            <div className='srprodetail2' >
              <div className='srprodetail2-cont'>
                <p
                  style={{
                    fontSize: "40px",
                    fontFamily: "FreightDisp Pro Medium",
                    color: "#7d7f85",
                    lineHeight: "40px",
                  }}
                >
                  {productData?.title}
                </p>

                <p style={{ color: "#7d7f85", fontSize: "14px" }}>
                  Slip this open Drizzle Ring from Smiling Rock's iconic
                  collection- Drizzle. It’s an exquisite ring with diamonds all
                  around the ring. The ring creates a wide space to decorate
                  your fingers as much as possible! Featured in lab grown
                  diamonds set in 14K gold, this ring is perfect for your best
                  times.
                </p>

                <div
                  className="part-container"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    borderBottom: "1px solid #e1e1e1",
                    paddingBottom: "12px",
                  }}
                >
                  <div
                    className="part1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <span
                      style={{
                        // textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#7d7f85",
                      }}
                    >
                      Metal Purity : {productData?.MetalPurity}
                    </span>
                    <sapn
                      style={{
                        textTransform: "capitalize",
                        fontSize: "12px",
                        color: "#7d7f85",
                      }}
                    >
                      Metal Color : {productData?.MetalColorName}
                    </sapn>
                    <sapn
                      style={{
                        textTransform: "capitalize",
                        fontSize: "12px",
                        color: "#7d7f85",
                      }}
                    >
                      Diamond Quality Color: {`${productData?.diamondquality}-${productData?.diamondcolorname}` }
                    </sapn>
                  </div>
                  {productData?.IsColorWiseImageExists 
                  !==null && <div
                    style={{ display: "flex", gap: "5px" }}
                    className="part2"
                  >
                    <div
                      style={{
                        border: "1px solid #c8c8c8",
                        borderRadius: "50%",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#c8c8c8",
                          borderRadius: "50%",
                          margin: "1px",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffcfbc",
                        borderRadius: "50%",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#ffcfbc",
                          borderRadius: "50%",
                          margin: "1px",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        border: "1px solid #e0be77",
                        borderRadius: "50%",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#e0be77",
                          borderRadius: "50%",
                          margin: "1px",
                        }}
                      ></div>
                    </div>
                  </div>}
                </div>

                <div
                  style={{ display: "flex", width: "100%", marginTop: "12px" }}
                  className="srcolorsizecarat"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "49.5%",
                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      SIZE:
                    </label>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                    >
                      <option>5</option>
                      <option>5.5</option>
                      <option>6</option>
                      <option>6.5</option>
                      <option>7</option>
                      <option>7.5</option>
                      <option>8</option>
                      <option>8.5</option>
                      <option>9</option>
                      <option>9.5</option>
                      <option>10</option>
                      <option>10.5</option>
                    </select>
                  </div>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      opacity: 1,
                      height: "30px",
                      margin: "10px 10px 0px 10px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "49.5%",
                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      CARAT:
                    </label>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                    >
                      <option>0.51</option>
                    </select>
                  </div>
                </div>
                 
                <Divider sx={{marginTop:'20px',background:'#a9a7a7'}}/>

                <div
                  style={{ display: "flex", width: "100%", marginTop: "12px" }}
                  className="srcolorsizecarat"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "49.5%",
                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      METAL COLOR:
                    </label>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                    >
                      {
                        filterData.MetalColorList.map((mtcol)=>(
                          <option>{mtcol.MetalColorName}</option>
                        ))
                      }
                    </select>
                  </div>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      opacity: 1,
                      height: "30px",
                      margin: "10px 10px 0px 10px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "49.5%",
                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      METAL TYPE:
                    </label>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                    >
                      {
                        filterData.MetalTypeList.map((mtype)=>(
                          <option>{mtype.MetalTypeName}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>


                <div style={{ marginTop: "23px" }}>
                  <p style={{ color: "#7d7f85", fontSize: "12px" }}>
                    Price: {`$${productData?.price}`}
                  </p>
                </div>

                <div>
                  <button className="prodetailbtn">
                    Inquire about product
                  </button>
                </div>

                <div style={{ marginLeft: "-12px" }}>
                  <Checkbox
                    icon={
                      <StarBorderIcon
                        sx={{ fontSize: "22px", color: "#ffd200" }}
                      />
                    }
                    checkedIcon={
                      <StarIcon sx={{ fontSize: "22px", color: "#ffd200" }} />
                    }
                    disableRipple={true}
                  />
                  <span style={{ fontSize: "12px", color: "#7d7f85" }}>
                    Wishlist
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/files/BM_Logo_v02_small.png?v=1659083102"
                      }
                      alt={""}
                      style={{ width: "48px" }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#7f7d85",
                      }}
                    >
                      {" "}
                      Certified Sustainable Brand
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/files/Frame_1_b70eff1d-e385-41c6-bf21-8cc1b7f0d15d_small.png?v=1613696587"
                      }
                      alt={""}
                      style={{ width: "48px" }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#7f7d85",
                      }}
                    >
                      Lifetime Warranty
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/files/Frame_4_4bb99b96-ffc8-4d77-bf9a-62257c771ff1_small.png?v=1613696586"
                      }
                      alt={""}
                      style={{ width: "48px" }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#7f7d85",
                      }}
                    >
                      24 Hours Customer Service
                    </p>
                  </div>
                </div>

                <div style={{ fontSize: "12.5px", color: "#7f7d85" }}>
                  <p>DIAMONDS ARE FOR EVERYONE ®</p>

                  <p>
                    Smiling Rocks aims to create a Chain of Smile and will
                    donate 3% of your purchase to your choice of charity during
                    check-out.
                    <br /> <u style={{ cursor: "pointer" }}>Learn More</u>
                  </p>

                  <p>
                    Custom Jewelry: If you would like to customize this jewelry,
                    please email us at order@smilingrocks.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='Acc-container'
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontSize: "30px",
                  fontFamily: "FreightDisp Pro Medium",
                  color: "#7d7f85",
                }}
              >
                Tell Me More
              </p>
              <ul className='srAccul'>
                <li
                  className="tellmoreli"
                  onClick={() => {
                    setAccNo("");
                    setAccNo("1");
                    setAcc(!acc);
                  }}
                  style={{ userSelect: "none" }}
                >
                  <span className="tellmorep">
                    PRODUCT DETAILS
                    <span style={{ fontSize: "24px" }}>
                      {acc && accNo === "1" ? "-" : "+"}
                    </span>
                  </span>
                  {/* <div style={{display:acc && accNo === '1' ? 'block':'none',userSelect:'none',transition:'0.5s'}}> */}
                  <div
                    className={`my-list-fineJewe ${
                      acc && accNo === "1" ? "openAcc" : ""
                    }`}
                  >
                    <div>
                      <div className="srAccContainer">
                        <div className="srFloat">
                          <span>
                            <b>MetalPurity</b>: {productData?.MetalPurity}
                          </span>
                          <span>
                            <b>MetalWeight</b>: {productData?.MetalWeight}
                          </span>
                          <span>
                            <b>GrossWeight</b>: {productData?.Grossweight}
                          </span>
                          <span>
                            <b>DiamondWeight</b>: {productData?.diamondweight}
                          </span>
                          <span>
                            <b>NumberOfDiamonds</b>: {productData?.diamondpcs}
                          </span>
                        </div>
                        <div className="srFloat">
                          <span>
                            <b>Netwt</b>: {productData?.netwt}
                          </span>
                          <span>
                          <b>DiamondQuality</b>: {productData?.diamondquality}
                          </span>
                          <span>
                            <b>DiamondColorname</b>: {productData?.diamondcolorname}
                          </span>
                          <span>
                            <b>TotalDiamondWeight</b>: {productData?.totaldiamondweight}
                          </span>
                          <span>
                            <b>DiamondSetting</b>: {productData?.diamondsetting}
                          </span>
                        </div>
                      </div>
                      {/* <div style={{marginBottom:'15px'}}>
                        <span style={{fontSize:'13px',fontWeight:'normal'}}>
                          Total carat weight (ctw) represents the approximate
                          total weight of all diamonds in each jewelry and may
                          vary from 0.48 to 0.54 carats. All diamonds are lab
                          grown diamonds.
                        </span>
                      </div> */}
                    </div>
                  </div>
                </li>
                {/* <div style={{display:acc && accNo === '2' ? 'block':'none',userSelect:'none',transition:'0.5s'}}>  */}
                {/* <li
                  className="tellmoreli"
                  onClick={() => {
                    setAccNo("");
                    setAccNo("2");
                    setAcc(!acc);
                  }}
                  style={{ userSelect: "none" }}
                >
                  <span className="tellmorep">
                    STYLE & FIT
                    <span style={{ fontSize: "24px" }}>
                      {acc && accNo === "2" ? "-" : "+"}
                    </span>
                  </span>
                  <div
                    className={`my-list-fineJewe ${
                      acc && accNo === "2" ? "openAcc" : ""
                    }`}
                  >
                    <span style={{fontSize:'12px'}}>A Comfort fit ring with high gold polish for your everyday comfort. Check out your ring size below.</span>
                    <table style={{width:'100%',margin:'20px 0px'}} className='sracctable'>
                      <tbody>
                        <tr>
                          <td className='sracctabletd1'>INSIDE DIAMETER</td>
                          <td className='sracctabletd2'></td>
                          <td className='sracctabletd3'></td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>INCHES</td>
                          <td className='sracctabletd2'>MM</td>
                          <td className='sracctabletd3'>US SIZE</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.6</td>
                          <td className='sracctabletd2'>15.5</td>
                          <td className='sracctabletd3'>5</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.64</td>
                          <td className='sracctabletd2'>16.1</td>
                          <td className='sracctabletd3'>6</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.69</td>
                          <td className='sracctabletd2'>17.35</td>
                          <td className='sracctabletd3'>7</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.72</td>
                          <td className='sracctabletd2'>18.19</td>
                          <td className='sracctabletd3'>8</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.75</td>
                          <td className='sracctabletd2'>19.1</td>
                          <td className='sracctabletd3'>9</td>
                        </tr>
                      </tbody>
                    </table>
                    <span style={{fontSize:'12px'}}>All our rings can be resized by one size up or down, except for Eternity Bands.</span>
                  </div>
                </li> */}
                  {/* <div style={{display:acc && accNo === '3' ? 'block':'none',userSelect:'none',transition:'0.5s'}}> */}
                {/* <li
                  className="tellmoreli"
                  onClick={() => {
                    setAccNo("");
                    setAccNo("3");
                    setAcc(!acc);
                  }}
                  style={{ userSelect: "none" }}
                >
                  <span className="tellmorep">
                    SHIPPING AND RETURNS
                    <span style={{ fontSize: "24px" }}>
                      {acc && accNo === "3" ? "-" : "+"}
                    </span>
                  </span>
                  <div
                    className={`my-list-fineJewe ${
                      acc && accNo === "3" ? "openAcc" : ""
                    }`}
                  >
                   We ship all over the USA only. 
                   International shipping is not available at the 
                   moment.We offer a free return & refund up to 30 days after 
                   your purchase. For more please read our Shipping and Returns Policy
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="compeletethelook_cont">
            <img
              src={
                "https://cdn.accentuate.io/3245609615460/4121939443812/99-v1581576944425.jpg?2048x1950"
              }
              alt={""}
              className='ctl_img'
            />

            <div className="compeletethelook_prodt" >
              <p
                style={{
                  fontFamily: "FreightDisp Pro Medium",
                  color: "#7d7f85",
                  fontSize: "30px",
                }}
              >
                Complete The Look
              </p>

              <div className='completethelook_outer' >
                <div style={{ display: "flex", gap: "60px" }}>
                  <div style={{ marginLeft: "12px" }}>
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-earrings-sre00362wht_medium.jpg?v=1590473229"
                      }
                      className='srthelook_img'
                    />
                  </div>
                  <div
                    className='srthelook_prodinfo'
                  >
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "#7d7f85",
                        textTransform: "uppercase",
                      }}
                    >
                      <p>
                        Drizzle 0.78ct Lab Grown Diamond Earrings
                        <br />
                        E-00362WHT
                        <br />
                        $2,075.00
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: "30px", color: "#7d7f85",padding:'5px'}} className=''>
                        &#8250;
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "60px" }}>
                  <div style={{ marginLeft: "12px" }}>
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-necklace-srnl00367wht_medium.jpg?v=1613626874"
                      }
                      className='srthelook_img'
                    />
                  </div>
                  <div
                    className='srthelook_prodinfo'
                  >
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "#7d7f85",
                        textTransform: "uppercase",
                      }}
                    >
                      <p>
                        Drizzle 0.78ct Lab Grown Diamond Earrings
                        <br />
                        E-00362WHT
                        <br />
                        $2,075.00
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: "30px", color: "#7d7f85" }}>
                        &#8250;
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "60px" }}>
                  <div style={{ marginLeft: "12px" }}>
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-bracelet-srbl00236wht_medium.jpg?v=1590473675"
                      }
                      className='srthelook_img'
                    />
                  </div>
                  <div
                    className='srthelook_prodinfo'
                  >
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "#7d7f85",
                        textTransform: "uppercase",
                      }}
                    >
                      <p>
                        Drizzle 0.78ct Lab Grown Diamond Earrings
                        <br />
                        E-00362WHT
                        <br />
                        $2,075.00
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: "30px", color: "#7d7f85" }}>
                        &#8250;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <SmilingRock /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ProdDetail