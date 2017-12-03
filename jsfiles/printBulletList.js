      function printBulletList(heading, headingLevel, bulletArray, noOfColsRequested) {

        var windowWidth;
        var noOfCols;
        var noOfColsPhone = 1;
        var noOfColsTablet = 2;
        
        windowWidth = window.innerWidth;
        
        if ( (windowWidth < 450) && (noOfColsRequested > noOfColsPhone) ) {
            noOfCols = noOfColsPhone;
        }
        else if ( (windowWidth > 450) && (windowWidth <= 700) && (noOfColsRequested > noOfColsTablet) ) {
            noOfCols = noOfColsTablet;
        }
        else noOfCols = noOfColsRequested;

      //If no of cols requested exceeds no. of bullets then set no of cols to no. of bullets  

        if (bulletArray.length < noOfColsRequested) {
          noOfCols = bulletArray.length;
        }


      //Divide number of items in bullet array by no of requested columns to determine
      //How many rows will be needed
        var noOfRows = Math.ceil(bulletArray.length/noOfCols);      

          
       //Write html for heading, followed by unordered list column by column
        document.write("<div class='wrapper'>");  
        document.write("<p style='margin-top: 0px; margin-bottom: 0px;'>");
        
        //Heading level 0 is used when there is no heading, and no space desired between successive
        //columns of bullets
        if (headingLevel > 0) {
          document.write("<h"+headingLevel+">"+heading+"</h"+headingLevel+">");
        }
        for (i=0; i<noOfCols; i++) {
/*          if (headingLevel > 0)
            document.write("<ul style='float: left; top-margin: 0; bottom-margin: 0;'>");
          else
            document.write("<ul style='float: left; top-margin: 0; bottom-margin: 0;'>");*/
          document.write("<ul style='float: left; top-margin: 0; bottom-margin: 0;'>");
          for (j=0; j< noOfRows; j++) {
            //since last row may not be fully populated, do not write if reached end of bullet array
            if ((i + noOfCols*j) < bulletArray.length)
              document.write("<li>"+bulletArray[i+noOfCols*j]+"</li>");
                }
          document.write("</ul>");
        }
        document.write("</p>");
        document.write("</div>");
        if (headingLevel>0) {
          document.write("<div style='clear:both; margin-top: 0px; margin-bottom: 0px; height: 0px;'>&nbsp;</div>");
        }
        
      }
