import React from 'react';
import axios from 'axios';

const request = require('request');
const cheerio = require('cheerio');

function Webscrapping()
{
    axios
    .get('http://localhost:9000/api/showProduct')
    .then((res) => {
      if(res.data.success)
      {
            var url = res.data.product[0].flipkart_link;
            console.log(url)
            //1
            axios
            .get(url)
            .then((res)=>{
              if(res)
              {
                console.log('successfull connection')
                  //const $ = cheerio.load(res.data); //all html code of that url 
              }
              else
              {
                console.log('proble in connection')
              }
              //all html code of that url 
            })
            .catch((err)=>{
              console.log('problem in Webscrapping : '+err);
            });
           
            //2
            // request(url,(err,ress,html) => {
            //     if(!err && ress.statusCode == 200)
            //     {            
            //         console.log("request Successfull");                   
            //         const $ = cheerio.load(html);                    
            //     }
            //     else{
            //         console.log("request failed")
            //     }
            // });

            //3
          //   (async() => {
           
          //    //to get response of url,header and ontent-Encoding ,for get response we need target uri,header info,ontent-Encoding type
          //     var response = await request({
          //         uri: url,
          //         headers: {
          //             //inspact->network->request-header
          //             "accept": "*/*",
          //              "accept-encoding": "gzip, deflate, br",
          //              "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
          //             "content-length": 1174,
          //             "content-type": "application/x-www-form-urlencoded"
          //         },
          //         gzip: true //inspact->network->response-header->Content-Encoding : true
          //     });
              
          //         let $ = cheerio.load(response)
              
          //         //got by inspact in chorom
          //         let title = $('.B_NuCI').text()
          //         let price = $('._16Jk6d').text().trim()
          //         let ratting = $('._138NNC').text()
          //         let img_josn_data = JSON.parse($('script#jsonLD').html())
          //         let img = img_josn_data[0]['image']
              
          //         console.log("Title : "+title)
          //         console.log("Price : "+price)
          //         console.log("Ratting : "+ratting)
          //         console.log("imgs : "+img)
                       
          // })(); //run autometically
      }      
    })
    .catch((err) => {
      console.log('problem in PhowProduct API call : '+err);
    });
   return(<></>)
}

export default Webscrapping;