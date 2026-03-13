/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 152.0, "minX": 0.0, "maxY": 5104.0, "series": [{"data": [[0.0, 152.0], [0.1, 152.0], [0.2, 152.0], [0.3, 152.0], [0.4, 152.0], [0.5, 152.0], [0.6, 152.0], [0.7, 154.0], [0.8, 154.0], [0.9, 154.0], [1.0, 154.0], [1.1, 154.0], [1.2, 154.0], [1.3, 154.0], [1.4, 154.0], [1.5, 154.0], [1.6, 154.0], [1.7, 154.0], [1.8, 154.0], [1.9, 154.0], [2.0, 155.0], [2.1, 155.0], [2.2, 155.0], [2.3, 155.0], [2.4, 155.0], [2.5, 155.0], [2.6, 155.0], [2.7, 155.0], [2.8, 155.0], [2.9, 155.0], [3.0, 155.0], [3.1, 155.0], [3.2, 155.0], [3.3, 155.0], [3.4, 157.0], [3.5, 157.0], [3.6, 157.0], [3.7, 157.0], [3.8, 157.0], [3.9, 157.0], [4.0, 157.0], [4.1, 157.0], [4.2, 157.0], [4.3, 157.0], [4.4, 157.0], [4.5, 157.0], [4.6, 157.0], [4.7, 158.0], [4.8, 158.0], [4.9, 158.0], [5.0, 158.0], [5.1, 158.0], [5.2, 158.0], [5.3, 158.0], [5.4, 159.0], [5.5, 159.0], [5.6, 159.0], [5.7, 159.0], [5.8, 159.0], [5.9, 159.0], [6.0, 159.0], [6.1, 159.0], [6.2, 159.0], [6.3, 159.0], [6.4, 159.0], [6.5, 159.0], [6.6, 159.0], [6.7, 159.0], [6.8, 159.0], [6.9, 159.0], [7.0, 159.0], [7.1, 159.0], [7.2, 159.0], [7.3, 159.0], [7.4, 161.0], [7.5, 161.0], [7.6, 161.0], [7.7, 161.0], [7.8, 161.0], [7.9, 161.0], [8.0, 161.0], [8.1, 161.0], [8.2, 161.0], [8.3, 161.0], [8.4, 161.0], [8.5, 161.0], [8.6, 161.0], [8.7, 161.0], [8.8, 161.0], [8.9, 161.0], [9.0, 161.0], [9.1, 161.0], [9.2, 161.0], [9.3, 161.0], [9.4, 161.0], [9.5, 161.0], [9.6, 161.0], [9.7, 161.0], [9.8, 161.0], [9.9, 161.0], [10.0, 162.0], [10.1, 162.0], [10.2, 162.0], [10.3, 162.0], [10.4, 162.0], [10.5, 162.0], [10.6, 162.0], [10.7, 164.0], [10.8, 164.0], [10.9, 164.0], [11.0, 164.0], [11.1, 164.0], [11.2, 164.0], [11.3, 164.0], [11.4, 164.0], [11.5, 164.0], [11.6, 164.0], [11.7, 164.0], [11.8, 164.0], [11.9, 164.0], [12.0, 165.0], [12.1, 165.0], [12.2, 165.0], [12.3, 165.0], [12.4, 165.0], [12.5, 165.0], [12.6, 165.0], [12.7, 165.0], [12.8, 165.0], [12.9, 165.0], [13.0, 165.0], [13.1, 165.0], [13.2, 165.0], [13.3, 165.0], [13.4, 166.0], [13.5, 166.0], [13.6, 166.0], [13.7, 166.0], [13.8, 166.0], [13.9, 166.0], [14.0, 166.0], [14.1, 166.0], [14.2, 166.0], [14.3, 166.0], [14.4, 166.0], [14.5, 166.0], [14.6, 166.0], [14.7, 167.0], [14.8, 167.0], [14.9, 167.0], [15.0, 167.0], [15.1, 167.0], [15.2, 167.0], [15.3, 167.0], [15.4, 168.0], [15.5, 168.0], [15.6, 168.0], [15.7, 168.0], [15.8, 168.0], [15.9, 168.0], [16.0, 168.0], [16.1, 168.0], [16.2, 168.0], [16.3, 168.0], [16.4, 168.0], [16.5, 168.0], [16.6, 168.0], [16.7, 170.0], [16.8, 170.0], [16.9, 170.0], [17.0, 170.0], [17.1, 170.0], [17.2, 170.0], [17.3, 170.0], [17.4, 170.0], [17.5, 170.0], [17.6, 170.0], [17.7, 170.0], [17.8, 170.0], [17.9, 170.0], [18.0, 170.0], [18.1, 170.0], [18.2, 170.0], [18.3, 170.0], [18.4, 170.0], [18.5, 170.0], [18.6, 170.0], [18.7, 170.0], [18.8, 170.0], [18.9, 170.0], [19.0, 170.0], [19.1, 170.0], [19.2, 170.0], [19.3, 170.0], [19.4, 172.0], [19.5, 172.0], [19.6, 172.0], [19.7, 172.0], [19.8, 172.0], [19.9, 172.0], [20.0, 172.0], [20.1, 177.0], [20.2, 177.0], [20.3, 177.0], [20.4, 177.0], [20.5, 177.0], [20.6, 177.0], [20.7, 178.0], [20.8, 178.0], [20.9, 178.0], [21.0, 178.0], [21.1, 178.0], [21.2, 178.0], [21.3, 178.0], [21.4, 185.0], [21.5, 185.0], [21.6, 185.0], [21.7, 185.0], [21.8, 185.0], [21.9, 185.0], [22.0, 185.0], [22.1, 194.0], [22.2, 194.0], [22.3, 194.0], [22.4, 194.0], [22.5, 194.0], [22.6, 194.0], [22.7, 206.0], [22.8, 206.0], [22.9, 206.0], [23.0, 206.0], [23.1, 206.0], [23.2, 206.0], [23.3, 206.0], [23.4, 239.0], [23.5, 239.0], [23.6, 239.0], [23.7, 239.0], [23.8, 239.0], [23.9, 239.0], [24.0, 239.0], [24.1, 251.0], [24.2, 251.0], [24.3, 251.0], [24.4, 251.0], [24.5, 251.0], [24.6, 251.0], [24.7, 252.0], [24.8, 252.0], [24.9, 252.0], [25.0, 252.0], [25.1, 252.0], [25.2, 252.0], [25.3, 252.0], [25.4, 356.0], [25.5, 356.0], [25.6, 356.0], [25.7, 356.0], [25.8, 356.0], [25.9, 356.0], [26.0, 356.0], [26.1, 358.0], [26.2, 358.0], [26.3, 358.0], [26.4, 358.0], [26.5, 358.0], [26.6, 358.0], [26.7, 358.0], [26.8, 358.0], [26.9, 358.0], [27.0, 358.0], [27.1, 358.0], [27.2, 358.0], [27.3, 358.0], [27.4, 360.0], [27.5, 360.0], [27.6, 360.0], [27.7, 360.0], [27.8, 360.0], [27.9, 360.0], [28.0, 360.0], [28.1, 361.0], [28.2, 361.0], [28.3, 361.0], [28.4, 361.0], [28.5, 361.0], [28.6, 361.0], [28.7, 363.0], [28.8, 363.0], [28.9, 363.0], [29.0, 363.0], [29.1, 363.0], [29.2, 363.0], [29.3, 363.0], [29.4, 363.0], [29.5, 363.0], [29.6, 363.0], [29.7, 363.0], [29.8, 363.0], [29.9, 363.0], [30.0, 363.0], [30.1, 365.0], [30.2, 365.0], [30.3, 365.0], [30.4, 365.0], [30.5, 365.0], [30.6, 365.0], [30.7, 366.0], [30.8, 366.0], [30.9, 366.0], [31.0, 366.0], [31.1, 366.0], [31.2, 366.0], [31.3, 366.0], [31.4, 367.0], [31.5, 367.0], [31.6, 367.0], [31.7, 367.0], [31.8, 367.0], [31.9, 367.0], [32.0, 367.0], [32.1, 367.0], [32.2, 367.0], [32.3, 367.0], [32.4, 367.0], [32.5, 367.0], [32.6, 367.0], [32.7, 367.0], [32.8, 367.0], [32.9, 367.0], [33.0, 367.0], [33.1, 367.0], [33.2, 367.0], [33.3, 367.0], [33.4, 367.0], [33.5, 367.0], [33.6, 367.0], [33.7, 367.0], [33.8, 367.0], [33.9, 367.0], [34.0, 367.0], [34.1, 367.0], [34.2, 367.0], [34.3, 367.0], [34.4, 367.0], [34.5, 367.0], [34.6, 367.0], [34.7, 367.0], [34.8, 367.0], [34.9, 367.0], [35.0, 367.0], [35.1, 367.0], [35.2, 367.0], [35.3, 367.0], [35.4, 368.0], [35.5, 368.0], [35.6, 368.0], [35.7, 368.0], [35.8, 368.0], [35.9, 368.0], [36.0, 368.0], [36.1, 369.0], [36.2, 369.0], [36.3, 369.0], [36.4, 369.0], [36.5, 369.0], [36.6, 369.0], [36.7, 371.0], [36.8, 371.0], [36.9, 371.0], [37.0, 371.0], [37.1, 371.0], [37.2, 371.0], [37.3, 371.0], [37.4, 371.0], [37.5, 371.0], [37.6, 371.0], [37.7, 371.0], [37.8, 371.0], [37.9, 371.0], [38.0, 371.0], [38.1, 371.0], [38.2, 371.0], [38.3, 371.0], [38.4, 371.0], [38.5, 371.0], [38.6, 371.0], [38.7, 371.0], [38.8, 371.0], [38.9, 371.0], [39.0, 371.0], [39.1, 371.0], [39.2, 371.0], [39.3, 371.0], [39.4, 371.0], [39.5, 371.0], [39.6, 371.0], [39.7, 371.0], [39.8, 371.0], [39.9, 371.0], [40.0, 371.0], [40.1, 375.0], [40.2, 375.0], [40.3, 375.0], [40.4, 375.0], [40.5, 375.0], [40.6, 375.0], [40.7, 376.0], [40.8, 376.0], [40.9, 376.0], [41.0, 376.0], [41.1, 376.0], [41.2, 376.0], [41.3, 376.0], [41.4, 377.0], [41.5, 377.0], [41.6, 377.0], [41.7, 377.0], [41.8, 377.0], [41.9, 377.0], [42.0, 377.0], [42.1, 378.0], [42.2, 378.0], [42.3, 378.0], [42.4, 378.0], [42.5, 378.0], [42.6, 378.0], [42.7, 381.0], [42.8, 381.0], [42.9, 381.0], [43.0, 381.0], [43.1, 381.0], [43.2, 381.0], [43.3, 381.0], [43.4, 383.0], [43.5, 383.0], [43.6, 383.0], [43.7, 383.0], [43.8, 383.0], [43.9, 383.0], [44.0, 389.0], [44.1, 389.0], [44.2, 389.0], [44.3, 389.0], [44.4, 389.0], [44.5, 389.0], [44.6, 389.0], [44.7, 389.0], [44.8, 389.0], [44.9, 389.0], [45.0, 389.0], [45.1, 389.0], [45.2, 389.0], [45.3, 389.0], [45.4, 389.0], [45.5, 389.0], [45.6, 389.0], [45.7, 389.0], [45.8, 389.0], [45.9, 389.0], [46.0, 395.0], [46.1, 395.0], [46.2, 395.0], [46.3, 395.0], [46.4, 395.0], [46.5, 395.0], [46.6, 395.0], [46.7, 395.0], [46.8, 395.0], [46.9, 395.0], [47.0, 395.0], [47.1, 395.0], [47.2, 395.0], [47.3, 395.0], [47.4, 400.0], [47.5, 400.0], [47.6, 400.0], [47.7, 400.0], [47.8, 400.0], [47.9, 400.0], [48.0, 416.0], [48.1, 416.0], [48.2, 416.0], [48.3, 416.0], [48.4, 416.0], [48.5, 416.0], [48.6, 416.0], [48.7, 418.0], [48.8, 418.0], [48.9, 418.0], [49.0, 418.0], [49.1, 418.0], [49.2, 418.0], [49.3, 418.0], [49.4, 422.0], [49.5, 422.0], [49.6, 422.0], [49.7, 422.0], [49.8, 422.0], [49.9, 422.0], [50.0, 422.0], [50.1, 422.0], [50.2, 422.0], [50.3, 422.0], [50.4, 422.0], [50.5, 422.0], [50.6, 422.0], [50.7, 423.0], [50.8, 423.0], [50.9, 423.0], [51.0, 423.0], [51.1, 423.0], [51.2, 423.0], [51.3, 423.0], [51.4, 423.0], [51.5, 423.0], [51.6, 423.0], [51.7, 423.0], [51.8, 423.0], [51.9, 423.0], [52.0, 423.0], [52.1, 423.0], [52.2, 423.0], [52.3, 423.0], [52.4, 423.0], [52.5, 423.0], [52.6, 423.0], [52.7, 427.0], [52.8, 427.0], [52.9, 427.0], [53.0, 427.0], [53.1, 427.0], [53.2, 427.0], [53.3, 427.0], [53.4, 429.0], [53.5, 429.0], [53.6, 429.0], [53.7, 429.0], [53.8, 429.0], [53.9, 429.0], [54.0, 429.0], [54.1, 429.0], [54.2, 429.0], [54.3, 429.0], [54.4, 429.0], [54.5, 429.0], [54.6, 429.0], [54.7, 431.0], [54.8, 431.0], [54.9, 431.0], [55.0, 431.0], [55.1, 431.0], [55.2, 431.0], [55.3, 431.0], [55.4, 436.0], [55.5, 436.0], [55.6, 436.0], [55.7, 436.0], [55.8, 436.0], [55.9, 436.0], [56.0, 437.0], [56.1, 437.0], [56.2, 437.0], [56.3, 437.0], [56.4, 437.0], [56.5, 437.0], [56.6, 437.0], [56.7, 450.0], [56.8, 450.0], [56.9, 450.0], [57.0, 450.0], [57.1, 450.0], [57.2, 450.0], [57.3, 450.0], [57.4, 471.0], [57.5, 471.0], [57.6, 471.0], [57.7, 471.0], [57.8, 471.0], [57.9, 471.0], [58.0, 488.0], [58.1, 488.0], [58.2, 488.0], [58.3, 488.0], [58.4, 488.0], [58.5, 488.0], [58.6, 488.0], [58.7, 509.0], [58.8, 509.0], [58.9, 509.0], [59.0, 509.0], [59.1, 509.0], [59.2, 509.0], [59.3, 509.0], [59.4, 990.0], [59.5, 990.0], [59.6, 990.0], [59.7, 990.0], [59.8, 990.0], [59.9, 990.0], [60.0, 1009.0], [60.1, 1009.0], [60.2, 1009.0], [60.3, 1009.0], [60.4, 1009.0], [60.5, 1009.0], [60.6, 1009.0], [60.7, 1026.0], [60.8, 1026.0], [60.9, 1026.0], [61.0, 1026.0], [61.1, 1026.0], [61.2, 1026.0], [61.3, 1026.0], [61.4, 1055.0], [61.5, 1055.0], [61.6, 1055.0], [61.7, 1055.0], [61.8, 1055.0], [61.9, 1055.0], [62.0, 1055.0], [62.1, 1055.0], [62.2, 1055.0], [62.3, 1055.0], [62.4, 1055.0], [62.5, 1055.0], [62.6, 1055.0], [62.7, 1057.0], [62.8, 1057.0], [62.9, 1057.0], [63.0, 1057.0], [63.1, 1057.0], [63.2, 1057.0], [63.3, 1057.0], [63.4, 1069.0], [63.5, 1069.0], [63.6, 1069.0], [63.7, 1069.0], [63.8, 1069.0], [63.9, 1069.0], [64.0, 1074.0], [64.1, 1074.0], [64.2, 1074.0], [64.3, 1074.0], [64.4, 1074.0], [64.5, 1074.0], [64.6, 1074.0], [64.7, 1077.0], [64.8, 1077.0], [64.9, 1077.0], [65.0, 1077.0], [65.1, 1077.0], [65.2, 1077.0], [65.3, 1077.0], [65.4, 1203.0], [65.5, 1203.0], [65.6, 1203.0], [65.7, 1203.0], [65.8, 1203.0], [65.9, 1203.0], [66.0, 1208.0], [66.1, 1208.0], [66.2, 1208.0], [66.3, 1208.0], [66.4, 1208.0], [66.5, 1208.0], [66.6, 1208.0], [66.7, 1350.0], [66.8, 1350.0], [66.9, 1350.0], [67.0, 1350.0], [67.1, 1350.0], [67.2, 1350.0], [67.3, 1350.0], [67.4, 1362.0], [67.5, 1362.0], [67.6, 1362.0], [67.7, 1362.0], [67.8, 1362.0], [67.9, 1362.0], [68.0, 1363.0], [68.1, 1363.0], [68.2, 1363.0], [68.3, 1363.0], [68.4, 1363.0], [68.5, 1363.0], [68.6, 1363.0], [68.7, 1403.0], [68.8, 1403.0], [68.9, 1403.0], [69.0, 1403.0], [69.1, 1403.0], [69.2, 1403.0], [69.3, 1403.0], [69.4, 1409.0], [69.5, 1409.0], [69.6, 1409.0], [69.7, 1409.0], [69.8, 1409.0], [69.9, 1409.0], [70.0, 1409.0], [70.1, 1468.0], [70.2, 1468.0], [70.3, 1468.0], [70.4, 1468.0], [70.5, 1468.0], [70.6, 1468.0], [70.7, 1568.0], [70.8, 1568.0], [70.9, 1568.0], [71.0, 1568.0], [71.1, 1568.0], [71.2, 1568.0], [71.3, 1568.0], [71.4, 1638.0], [71.5, 1638.0], [71.6, 1638.0], [71.7, 1638.0], [71.8, 1638.0], [71.9, 1638.0], [72.0, 1638.0], [72.1, 1654.0], [72.2, 1654.0], [72.3, 1654.0], [72.4, 1654.0], [72.5, 1654.0], [72.6, 1654.0], [72.7, 1656.0], [72.8, 1656.0], [72.9, 1656.0], [73.0, 1656.0], [73.1, 1656.0], [73.2, 1656.0], [73.3, 1656.0], [73.4, 1664.0], [73.5, 1664.0], [73.6, 1664.0], [73.7, 1664.0], [73.8, 1664.0], [73.9, 1664.0], [74.0, 1664.0], [74.1, 1716.0], [74.2, 1716.0], [74.3, 1716.0], [74.4, 1716.0], [74.5, 1716.0], [74.6, 1716.0], [74.7, 1721.0], [74.8, 1721.0], [74.9, 1721.0], [75.0, 1721.0], [75.1, 1721.0], [75.2, 1721.0], [75.3, 1721.0], [75.4, 1829.0], [75.5, 1829.0], [75.6, 1829.0], [75.7, 1829.0], [75.8, 1829.0], [75.9, 1829.0], [76.0, 1829.0], [76.1, 1851.0], [76.2, 1851.0], [76.3, 1851.0], [76.4, 1851.0], [76.5, 1851.0], [76.6, 1851.0], [76.7, 1852.0], [76.8, 1852.0], [76.9, 1852.0], [77.0, 1852.0], [77.1, 1852.0], [77.2, 1852.0], [77.3, 1852.0], [77.4, 1990.0], [77.5, 1990.0], [77.6, 1990.0], [77.7, 1990.0], [77.8, 1990.0], [77.9, 1990.0], [78.0, 1990.0], [78.1, 1997.0], [78.2, 1997.0], [78.3, 1997.0], [78.4, 1997.0], [78.5, 1997.0], [78.6, 1997.0], [78.7, 2007.0], [78.8, 2007.0], [78.9, 2007.0], [79.0, 2007.0], [79.1, 2007.0], [79.2, 2007.0], [79.3, 2007.0], [79.4, 2011.0], [79.5, 2011.0], [79.6, 2011.0], [79.7, 2011.0], [79.8, 2011.0], [79.9, 2011.0], [80.0, 2011.0], [80.1, 2040.0], [80.2, 2040.0], [80.3, 2040.0], [80.4, 2040.0], [80.5, 2040.0], [80.6, 2040.0], [80.7, 2095.0], [80.8, 2095.0], [80.9, 2095.0], [81.0, 2095.0], [81.1, 2095.0], [81.2, 2095.0], [81.3, 2095.0], [81.4, 2130.0], [81.5, 2130.0], [81.6, 2130.0], [81.7, 2130.0], [81.8, 2130.0], [81.9, 2130.0], [82.0, 2130.0], [82.1, 2151.0], [82.2, 2151.0], [82.3, 2151.0], [82.4, 2151.0], [82.5, 2151.0], [82.6, 2151.0], [82.7, 2332.0], [82.8, 2332.0], [82.9, 2332.0], [83.0, 2332.0], [83.1, 2332.0], [83.2, 2332.0], [83.3, 2332.0], [83.4, 2412.0], [83.5, 2412.0], [83.6, 2412.0], [83.7, 2412.0], [83.8, 2412.0], [83.9, 2412.0], [84.0, 2412.0], [84.1, 2446.0], [84.2, 2446.0], [84.3, 2446.0], [84.4, 2446.0], [84.5, 2446.0], [84.6, 2446.0], [84.7, 2603.0], [84.8, 2603.0], [84.9, 2603.0], [85.0, 2603.0], [85.1, 2603.0], [85.2, 2603.0], [85.3, 2603.0], [85.4, 2686.0], [85.5, 2686.0], [85.6, 2686.0], [85.7, 2686.0], [85.8, 2686.0], [85.9, 2686.0], [86.0, 2686.0], [86.1, 2798.0], [86.2, 2798.0], [86.3, 2798.0], [86.4, 2798.0], [86.5, 2798.0], [86.6, 2798.0], [86.7, 2852.0], [86.8, 2852.0], [86.9, 2852.0], [87.0, 2852.0], [87.1, 2852.0], [87.2, 2852.0], [87.3, 2852.0], [87.4, 2922.0], [87.5, 2922.0], [87.6, 2922.0], [87.7, 2922.0], [87.8, 2922.0], [87.9, 2922.0], [88.0, 2922.0], [88.1, 3047.0], [88.2, 3047.0], [88.3, 3047.0], [88.4, 3047.0], [88.5, 3047.0], [88.6, 3047.0], [88.7, 3289.0], [88.8, 3289.0], [88.9, 3289.0], [89.0, 3289.0], [89.1, 3289.0], [89.2, 3289.0], [89.3, 3289.0], [89.4, 3370.0], [89.5, 3370.0], [89.6, 3370.0], [89.7, 3370.0], [89.8, 3370.0], [89.9, 3370.0], [90.0, 3370.0], [90.1, 3396.0], [90.2, 3396.0], [90.3, 3396.0], [90.4, 3396.0], [90.5, 3396.0], [90.6, 3396.0], [90.7, 3521.0], [90.8, 3521.0], [90.9, 3521.0], [91.0, 3521.0], [91.1, 3521.0], [91.2, 3521.0], [91.3, 3521.0], [91.4, 3572.0], [91.5, 3572.0], [91.6, 3572.0], [91.7, 3572.0], [91.8, 3572.0], [91.9, 3572.0], [92.0, 3572.0], [92.1, 3653.0], [92.2, 3653.0], [92.3, 3653.0], [92.4, 3653.0], [92.5, 3653.0], [92.6, 3653.0], [92.7, 4180.0], [92.8, 4180.0], [92.9, 4180.0], [93.0, 4180.0], [93.1, 4180.0], [93.2, 4180.0], [93.3, 4180.0], [93.4, 4181.0], [93.5, 4181.0], [93.6, 4181.0], [93.7, 4181.0], [93.8, 4181.0], [93.9, 4181.0], [94.0, 4181.0], [94.1, 4361.0], [94.2, 4361.0], [94.3, 4361.0], [94.4, 4361.0], [94.5, 4361.0], [94.6, 4361.0], [94.7, 4417.0], [94.8, 4417.0], [94.9, 4417.0], [95.0, 4417.0], [95.1, 4417.0], [95.2, 4417.0], [95.3, 4417.0], [95.4, 4477.0], [95.5, 4477.0], [95.6, 4477.0], [95.7, 4477.0], [95.8, 4477.0], [95.9, 4477.0], [96.0, 4477.0], [96.1, 4519.0], [96.2, 4519.0], [96.3, 4519.0], [96.4, 4519.0], [96.5, 4519.0], [96.6, 4519.0], [96.7, 4601.0], [96.8, 4601.0], [96.9, 4601.0], [97.0, 4601.0], [97.1, 4601.0], [97.2, 4601.0], [97.3, 4601.0], [97.4, 4631.0], [97.5, 4631.0], [97.6, 4631.0], [97.7, 4631.0], [97.8, 4631.0], [97.9, 4631.0], [98.0, 4631.0], [98.1, 4635.0], [98.2, 4635.0], [98.3, 4635.0], [98.4, 4635.0], [98.5, 4635.0], [98.6, 4635.0], [98.7, 4907.0], [98.8, 4907.0], [98.9, 4907.0], [99.0, 4907.0], [99.1, 4907.0], [99.2, 4907.0], [99.3, 4907.0], [99.4, 5104.0], [99.5, 5104.0], [99.6, 5104.0], [99.7, 5104.0], [99.8, 5104.0], [99.9, 5104.0], [100.0, 5104.0]], "isOverall": false, "label": "Login API Test", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 34.0, "series": [{"data": [[900.0, 1.0], [1000.0, 8.0], [1200.0, 2.0], [1300.0, 3.0], [1400.0, 3.0], [1500.0, 1.0], [1600.0, 4.0], [100.0, 34.0], [1700.0, 2.0], [1800.0, 3.0], [1900.0, 2.0], [2000.0, 4.0], [2100.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [2600.0, 2.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 4.0], [3300.0, 2.0], [3200.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [4100.0, 2.0], [4300.0, 1.0], [4400.0, 2.0], [4500.0, 1.0], [4600.0, 3.0], [300.0, 33.0], [4900.0, 1.0], [5100.0, 1.0], [400.0, 17.0], [500.0, 1.0]], "isOverall": false, "label": "Login API Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 150.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 150.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 150.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 30.520000000000014, "minX": 1.77339894E12, "maxY": 30.520000000000014, "series": [{"data": [[1.77339894E12, 30.520000000000014]], "isOverall": false, "label": "Load Test Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77339894E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 152.0, "minX": 1.0, "maxY": 3827.714285714286, "series": [{"data": [[33.0, 152.0], [32.0, 161.0], [35.0, 1664.0], [34.0, 388.75], [37.0, 1325.8], [36.0, 781.0], [39.0, 251.5], [38.0, 168.0], [40.0, 1841.0], [43.0, 1350.0], [42.0, 369.0], [45.0, 361.75], [46.0, 1810.0], [48.0, 1079.4615384615383], [3.0, 436.5], [50.0, 1094.814814814815], [4.0, 402.3333333333333], [8.0, 422.6], [10.0, 429.0], [11.0, 2045.4615384615386], [12.0, 3827.714285714286], [13.0, 400.0], [14.0, 373.0], [16.0, 181.5], [1.0, 1036.0], [17.0, 170.0], [18.0, 164.0], [19.0, 1790.5], [20.0, 372.4], [21.0, 1581.142857142857], [22.0, 2416.666666666667], [23.0, 165.0], [24.0, 161.0], [25.0, 155.0], [26.0, 161.0], [27.0, 1353.0], [28.0, 168.0], [29.0, 166.0], [30.0, 157.0], [31.0, 165.0]], "isOverall": false, "label": "Login API Test", "isController": false}, {"data": [[30.520000000000014, 1168.9133333333336]], "isOverall": false, "label": "Login API Test-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 572.2333333333333, "minX": 1.77339894E12, "maxY": 23207.733333333334, "series": [{"data": [[1.77339894E12, 23207.733333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77339894E12, 572.2333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77339894E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1168.9133333333336, "minX": 1.77339894E12, "maxY": 1168.9133333333336, "series": [{"data": [[1.77339894E12, 1168.9133333333336]], "isOverall": false, "label": "Login API Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77339894E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1026.3199999999997, "minX": 1.77339894E12, "maxY": 1026.3199999999997, "series": [{"data": [[1.77339894E12, 1026.3199999999997]], "isOverall": false, "label": "Login API Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77339894E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 603.1333333333334, "minX": 1.77339894E12, "maxY": 603.1333333333334, "series": [{"data": [[1.77339894E12, 603.1333333333334]], "isOverall": false, "label": "Login API Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77339894E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 173.5, "minX": 1.0, "maxY": 1403.0, "series": [{"data": [[1.0, 418.0], [5.0, 471.0], [6.0, 432.5], [25.0, 1403.0], [27.0, 423.0], [56.0, 368.0], [30.0, 173.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 173.0, "minX": 1.0, "maxY": 1236.0, "series": [{"data": [[1.0, 417.0], [5.0, 468.0], [6.0, 431.5], [25.0, 1236.0], [27.0, 422.0], [56.0, 366.0], [30.0, 173.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.77339894E12, "maxY": 2.5, "series": [{"data": [[1.77339894E12, 2.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77339894E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.77339894E12, "maxY": 2.5, "series": [{"data": [[1.77339894E12, 2.5]], "isOverall": false, "label": "403", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77339894E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.77339894E12, "maxY": 2.5, "series": [{"data": [[1.77339894E12, 2.5]], "isOverall": false, "label": "Login API Test-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77339894E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.77339894E12, "maxY": 2.5, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77339894E12, 2.5]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77339894E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

