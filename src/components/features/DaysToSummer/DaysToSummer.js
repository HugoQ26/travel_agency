import React from 'react';

import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {


  getCountdownDays(){

    const currentDate = new Date();
    const summerStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const summerEnds = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23));
    const NextYearSummerStart = new Date(Date.UTC(currentDate.getUTCFullYear()+ 1, 5, 21));

    const timeToEndOfYear = new Date(Date.UTC(currentDate.getUTCFullYear(), 11, 31)) - currentDate;
    const timeToSummerFromNewYear = NextYearSummerStart - new Date(Date.UTC(currentDate.getUTCFullYear() + 1, 0, 1));

    const daysToNextYearSummer = Math.ceil((timeToEndOfYear + timeToSummerFromNewYear)/(1000 * 60 * 60 * 24 ));

    let days = '';
    let hours = '';

    /* if time difference is more than 2 days returns No of days to Summer */
    if((summerStart-currentDate) > (1000 * 60 * 60 * 24 * 2) ) {
      days = Math.ceil((summerStart-currentDate)/(1000 * 60 * 60 * 24 ));
      return <div>{days} days to Summer!</div>;

      /* if time difference is less than 1 day and more than 0 miliseconds returns No of hours to Summer */
    } else if((summerStart-currentDate) < (1000 * 60 * 60 * 24) && (summerStart-currentDate) > (1000 * 60 ) ) {
      hours = Math.ceil((summerStart-currentDate)/(1000 * 60 * 60 * 1 ));
      return <div>{hours-1} hours to Summer!</div>;    
      
      /* if time difference is less than 2 days and more than 1 day returns One day to Summer! */
    } else if ((summerStart-currentDate) > (1000 * 60 * 60 * 24) && (summerStart-currentDate) < (1000 * 60 * 60 * 24 * 2)){
      return <div>One day to Summer!</div>;
      
      /* if it is after this year summer returns No of days to next year Summer */
    } else if ((summerStart < currentDate) && (summerEnds < currentDate)) {
      return <div>{daysToNextYearSummer} days to Summer!</div>;
      
    }
    return <div>Enjoy the summer!</div>;
  }

  render(){      
      
    return (
      <div className={styles.component}>
        <div className={styles.daysToSummer}>{this.getCountdownDays()}</div>
      </div>
    );
  }
}


export default DaysToSummer;



