

import  React from "react";

function IntroVideo(){
    return(
        <div className="container ">
           <div className="flex item-center justify-center">
                 {/* Video iframe */}
                 <div className="grid md:grid-cols-2 gap-6">
                     <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                          style={{paddingTop: "56.25%"}}
                      >
                          <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                              src="https://www.youtube.com/embed/v64KOxKVLVg"
                              allowfullscreen
                              ></iframe>
                     </div>


                     <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                          style={{paddingTop: "56.25%" }}
                      >
                          <iframe className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                                src="https://player.vimeo.com/video/137857207" allowfullscreen >
                          </iframe>
                     </div>
                </div>


                {/** video Youtube */}
                <div class="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden"
                     style={{paddingTop: "75%" }} >
                     <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                          allowfullscreen=""
                          data-gtm-yt-inspected-2340190_699="true"
                          id="240632615"
                     ></iframe>

                </div>
                

                
            </div>
        </div>
    )
}
export  default IntroVideo;