const path = require('path');
const express = require('express');
const format = require('./format');
const Player = require('../server/db/Player');
const app = express();
const fs = require('fs');

module.exports = app;

app.use(require('body-parser').json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));

const index = path.join(__dirname, '../index.html');

app.get('/', (req, res)=> res.sendFile(index));



//----------

var request = require('request');
var cheerio = require('cheerio');
// var URL = require('url-parse');
// var fs = require('fs')
// var DOMParser = require('dom-parser');

// app.listen(3000, () => {
//   console.log('Listening on port 3000')
// });


var pageToVisit = "https://www.pro-football-reference.com/years/2018/fantasy.htm";


app.get('/data', (req, res) => {
  request(pageToVisit, function(error, response, body) {
  
    console.log("Status code: " + response.statusCode);
    console.log('------------------------------------');
    console.log("Getting player data: ");

    if(error) {
      console.log("Error: " + error);
    }

    if(response.statusCode === 200) {
      var $ = cheerio.load(body);
      var text = $('tbody').html();
      var rawData = text.split('<td')
      var playerData = format(rawData);
    }

    playerData.map(player => 
      Player.create(player)
    );

    res.send(playerData);
  });
});

app.get('/1', (req, res) => {
  request(pageToVisit, function(error, response, body) {
    if(error) throw error;

    if(response.statusCode === 200){
      var $ = cheerio.load(body);
      var text = $('body');
      res.send(text + "");
    }
  });
});

app.get('/2', (req, res) => {
  request(pageToVisit, function(error, response, body) {
    if(error) throw error;

    if(response.statusCode === 200){
      var $ = cheerio.load(body);
      var text = $('tbody');
      res.send(text + "");
    }
  });
});

app.get('/3', (req, res) => {
  request(pageToVisit, function(error, response, body) {
    if(error) throw error;

    if(response.statusCode === 200){
      var $ = cheerio.load(body);
      var text = $('tbody').html();
      text = text.split('<td')
      res.send(text);
    }
  });
});

app.get('/4', (req, res) => {
  request(pageToVisit, function(error, response, body) {
    if(error) throw error;

    if(response.statusCode === 200){
      var $ = cheerio.load(body);
      var text = $('tbody').html();
      text = text.split('<td');
      res.send(format(text));
    }
  });
});

app.get('/5', (req, res) => {
  request(pageToVisit, function(error, response, body) {
    if(error) throw error;

    if(response.statusCode === 200){

      var $ = cheerio.load(body);
      var text = '<table>' + $('tbody').html() + '</table>';

      fs.writeFile("/Users/jamierobinson/Desktop/football.txt", text, function(err) {
        if(err) {
            return console.log(err);
        }
        res.send("The file was saved!");
      }); 
    }
  });
});

app.get('/6', (req, res) => {
  request(pageToVisit, function(error, response, body) {
    if(error) throw error;
    if(response.statusCode === 200){

      var $ = cheerio.load(body);
      var text = '<table>' + $('tbody').html() + '</table>';

      var $ = cheerio.load(body);
      var text = $('tbody').html();
      var rawData = text.split('<td')
      var playerData = format(rawData);

      let final = 
      `<div>
        <table className='table'>
          <tbody>
            <tr align='center' >
              <td> Name </td>
              <td> Team </td>
              <td> Position </td>
              <td> PPR Score </td>
              <td> Position Rank </td>
              <td> Overall Rank </td>
            </tr>`;

      
      playerData.map(player => {
        final += `
          <tr key=${player.id} align='center' >
            <td>${player.info_player}</td>
            <td>${player.info_team}</td>
            <td>${player.info_position}</td>
            <td>${player.fantasy_pprPoints}</td>
            <td>${player.fantasy_positionalRanking}</td>
            <td>${player.fantasy_overallRanking}</td>
          </tr>
          `
      })

      final+= `
          </tbody>
        </table> 
      </div>`;


      fs.writeFile("/Users/jamierobinson/Desktop/football_formatted.txt", final, function(err) {
        if(err) {
            return console.log(err);
        }
        res.send("The formatted file was saved!");
      }); 
    }
  });
});


    

module.exports = app;

// app.use((err, req, res, next)=> {
//   console.log(err);
//   res.status(500).send({ error: err.message });
// });
