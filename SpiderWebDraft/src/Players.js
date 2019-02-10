import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";

class Players extends Component{
  
  render(){
    const { players } = this.props;

    // const columns = [{
    //   Header: 'Name',
    //   accessor: 'info_player'
    // }, {
    //   Header: 'Team',
    //   accessor: 'info_team'
    // }, {
    //   Header: 'Position',
    //   accessor: 'info_position'
    // }, {
    //   Header: 'PPR Score',
    //   id: 'pprScore',
    //   accessor: 'fantasy_pprPoints'
    // }, {
    //   Header: 'Position Rank',
    //   id: 'positionRank',
    //   accessor: 'fantasy_positionalRanking'
    // }, {
    //   Header: 'Overall Rank',
    //   id: 'overallRank',
    //   accessor: 'fantasy_overallRanking'
    // }]

    return (


      <div>
        {/* <ReactTable data={players} columns={columns}  /> */}

        <table className='table'>
          <tbody>
            <tr align='center' >
              <td> Name </td>
              <td> Team </td>
              <td> Position </td>
              <td> PPR Score </td>
              <td> Position Rank </td>
              <td> Overall Rank </td>
            </tr>
            {
              players.map(player => {
                return (
                  <tr key={player.id} align='center' >
                    <td>{player.info_player}</td>
                    <td>{player.info_team}</td>
                    <td>{player.info_position}</td>
                    <td>{player.fantasy_pprPoints}</td>
                    <td>{player.fantasy_positionalRanking}</td>
                    <td>{player.fantasy_overallRanking}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        
      </div>
    )
  }
}

const mapStateToProps = ({ players })=> {
  return {
    players
  };
};

export default connect(mapStateToProps)(Players);



//-----------------------------------------------------------------//





        {/* {
          players.map(player => {
            return (
              <div key={player.id}>
                Info <br />
                Name: {player.info_player}<br />
                Team: {player.info_team}<br />
                Position: {player.info_position}<br />
                Age: {player.info_age}<br />
                <br />

                Games <br />
                Played: {player.games_played}<br />
                Started: {player.games_started}<br />
                <br />

                Passing: <br />
                Completed: {player.pass_completed}<br />
                Attempted: {player.pass_attempted}<br />
                Yards: {player.pass_yards}<br />
                Touchdowns: {player.pass_touchdowns}<br />
                Interceptions: {player.pass_interceptions}<br />
                Two Point Conversions: {player.scoring_twoPointConversionPasses}<br />
                <br />

                Rushing <br />
                Attempts: {player.rush_attempts}<br />
                Yards: {player.rush_yards}<br />
                Yards Per Attempt: {player.rush_yardsPerAttempted}<br />
                Touchdowns: {player.rush_touchdowns}<br />
                <br />

                Receptions<br />
                Targets: {player.reception_targets}<br />
                Catches: {player.reception_receptions}<br />
                Yards: {player.reception_yards}<br />
                Yards Per Reception: {player.reception_yardsPerReception}<br />
                <br />

                Misc<br />
                Fumbles: {player.fumble_fumbles}<br />
                Fumbles Lost: {player.fumble_fumblesLost}<br />
                <br />

                Scoring<br />
                Touchdowns: {player.scoring_touchdowns}<br />
                Two Point Conversions: {player.scoring_twoPointConversion}<br />
                <br />

                Fantasy<br />
                Standard Points: {player.fantasy_standardPoints}<br />
                PPR Points: {player.fantasy_pprPoints}<br />
                VDB: {player.fantasy_vdb}<br />
                Positional Rank: {player.fantasy_positionalRankings}<br />
                Overall Rank: {player.overallRankings}<br />
                <br />
                <hr />
                <br />
              </div>
            )
          })
        } */}