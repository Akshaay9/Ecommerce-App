import React, { useState,useEffect } from "react";
import { useSingleProductCOntextFun } from "../../Contexts/SingleProductContext/SingleProductContext";

function SingleProductView() {
    const [imageSlider, setImageSlider] = useState(0)
  const {
    state: { singleProduct },
    } = useSingleProductCOntextFun();
    
  return (
      <div className="single-product-viewer">
          {singleProduct.length > 0 &&
              <div className="single-product-viewer-container">
                  <div className="single-product-viewer-container-left">
                  <div className="single-product-viewer-images">
             
                      <img src={singleProduct[0].images[imageSlider].img} alt="" />
                      <i class="fas fa-chevron-right"
                          onClick={() => {
                              if (imageSlider == 2) {
                                setImageSlider(0)
                              }
                              else {
                                setImageSlider(imageSlider+1)  
                              }
                      }}
                      ></i>
                      <i class="fas fa-chevron-left"
                      onClick={() => {
                              if (imageSlider == 0) {
                                setImageSlider(2)
                              }
                              else {
                                setImageSlider(imageSlider-1)  
                              }
                      }}
                          
                      ></i>
                      </div>
                  </div>
                  <div className="single-product-viewer-container-right">
                      <div className="single-product-desc">
                      <span>New</span>
                      <div className="single-prod-desc-row-one">
                          <div className="single-prod-desc-row-one">
                              {singleProduct[0].name}
                          </div>
                          <div className="single-prod-desc-row-two">
                              {singleProduct[0].price}
                          </div>
                      </div>
                      Images:
                  <div className="single-product-desc-img-container">
                    {singleProduct[0].images.map((ele) => (
                        <div className="single-product-desc-img">
                            <img src={ele.img} alt="" />
                            </div>
                    ))}
                      </div>
                      <div className="single-product-description">
                          {singleProduct[0].desc}
                      </div>
                      </div>
                  </div>
              </div>
          }
    </div>
  );
}

export default SingleProductView;
