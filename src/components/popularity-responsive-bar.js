import { ResponsiveBar } from '@nivo/bar';
import React from 'react';
import { memo } from "react";

 function PopularityResponsiveBar(props) {
 
    const maxValue = 10;
    
    let addedChartData = [...props.popularityData].reverse();
    // addedChartData.reverse();
    let addedChartData2 = Object.assign([], addedChartData);
    addedChartData2.forEach(element => {element.reversePercentage = maxValue - element.percentage;    
                                        element.city = element.city.toUpperCase();
                                        }
                                    );
                                   
    // console.log(addedChartData);  
    // console.log(addedChartData.reverse());                             
                                    

    return(

        // OPTION 1  ----------------------bug-> once you resize the screen, tha labels move-----------------------------
    // <div>
    //     <div style={{ height: "220px" }}>
    //       <ResponsiveBar 
    //             data={props.popularityData} 
    //             keys={["blank", "blank","blank","blank", "percentage"]} 
    //             indexBy="city" 
    //             layout="horizontal"
    //             groupMode="grouped"
    //             reverse={false}
    //             // colorBy="id"
    //             colors={['transparent', '#000']}
    //             margin={{ top: 10, right: 0, bottom: 20, left: 0 }}
    //             padding={0}
    //             valueScale={{ type: "linear" }}
    //             // animate={true}
    //             minValue={0}
    //             maxValue={maxValue}
    //             enableLabel={false}
    //             axisTop={null}
    //             axisRight={{
    //                 tickSize: 0,
    //                 tickPadding: -185,
    //                 tickRotation: 0,
    //             }} 
    //             axisBottom={null}
    //             axisLeft={null}
    //             enableGridX = {false}  
    //             enableGridY = {false}                      
    //             />
    //     </div>
    //  </div>   
    
    // OPTION 2 -----------------------------------------------

    <div>
        <div style={{ height: "250px" }}>
          <ResponsiveBar 
                data={addedChartData} 
                keys={["percentage", "reversePercentage"]} 
                indexBy="city" 
                layout="horizontal"
                reverse={false}
                // colorBy="id"
                colors={[ '#000', '#bbb' ]}
                margin={{ top: 0, right: 120, bottom: 20, left: 0 }}
                padding={0.85}
                valueScale={{ type: "linear" }}
                animate={true}
                minValue={0}
                maxValue={maxValue}
                enableLabel={false}
                axisTop={null}
                axisRight={{
                    tickSize: 0,
                    tickPadding: 6,
                    tickRotation: 0,
                }} 
                axisBottom={null}
                axisLeft={null}
                isInteractive = {false} 
                enableGridX = {false}  
                enableGridY = {true}   
                                  
                />
        </div>
     </div>   
    
        )
    };

    export default memo(PopularityResponsiveBar);
