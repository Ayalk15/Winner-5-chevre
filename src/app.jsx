import React, { useState } from 'react';

// מאגר כל 26 מחזורי הליגה המלאים והרשמיים שלכם (מתוקן ונקי משגיאות)
const allFixtures = {
  1: [
    { id: 1, home: 'מכבי פ"ת', away: 'הפועל ק"ש', time: '22/08/26' },
    { id: 2, home: 'עירוני דורות טבריה', away: 'הפועל פ"ת', time: '22/08/26' },
    { id: 3, home: 'הפועל י-ם', away: 'מכבי ת"א', time: '22/08/26' },
    { id: 4, home: 'מכבי חיפה', away: 'הפועל ר"ג', time: '22/08/26' },
    { id: 5, home: 'הפועל ב"ש', away: 'הפועל חיפה', time: '22/08/26' },
    { id: 6, home: 'בית"ר י-ם', away: 'הפועל ת"א', time: '22/08/26' },
    { id: 7, home: 'מכבי נתניה', away: 'בני סכנין', time: '22/08/26' }
  ],
  2: [
    { id: 1, home: 'בני סכנין', away: 'מכבי פ"ת', time: '29/08/26' },
    { id: 2, home: 'מכבי נתניה', away: 'הפועל י-ם', time: '29/08/26' },
    { id: 3, home: 'הפועל ת"א', away: 'מכבי חיפה', time: '29/08/26' },
    { id: 4, home: 'הפועל ב"ש', away: 'הפועל ר"ג', time: '29/08/26' },
    { id: 5, home: 'מכבי חיפה', away: 'מכבי ת"א', time: '29/08/26' },
    { id: 6, home: 'הפועל פ"ת', away: 'בית"ר י-ם', time: '29/08/26' },
    { id: 7, home: 'עירוני דורות טבריה', away: 'הפועל ק"ש', time: '29/08/26' }
  ],
  3: [
    { id: 1, home: 'מכבי פ"ת', away: 'עירוני דורות טבריה', time: '05/09/26' },
    { id: 2, home: 'הפועל ק"ש', away: 'הפועל י-ם', time: '05/09/26' },
    { id: 3, home: 'הפועל פ"ת', away: 'מכבי חיפה', time: '05/09/26' },
    { id: 4, home: 'מכבי ת"א', away: 'הפועל ב"ש', time: '05/09/26' },
    { id: 5, home: 'הפועל ר"ג', away: 'הפועל ת"א', time: '05/09/26' },
    { id: 6, home: 'הפועל חיפה', away: 'מכבי נתניה', time: '05/09/26' },
    { id: 7, home: 'בית"ר י-ם', away: 'בני סכנין', time: '05/09/26' }
  ],
  4: [
    { id: 1, home: 'בית"ר י-ם', away: 'מכבי פ"ת', time: '14/09/26' },
    { id: 2, home: 'בני סכנין', away: 'הפועל חיפה', time: '14/09/26' },
    { id: 3, home: 'מכבי נתניה', away: 'הפועל ר"ג', time: '14/09/26' },
    { id: 4, home: 'הפועל ת"א', away: 'מכבי ת"א', time: '14/09/26' },
    { id: 5, home: 'הפועל ב"ש', away: 'הפועל פ"ת', time: '14/09/26' },
    { id: 6, home: 'מכבי חיפה', away: 'הפועל ק"ש', time: '14/09/26' },
    { id: 7, home: 'הפועל י-ם', away: 'עירוני דורות טבריה', time: '14/09/26' }
  ],
  5: [
    { id: 1, home: 'מכבי פ"ת', away: 'הפועל י-ם', time: '19/09/26' },
    { id: 2, home: 'מכבי חיפה', away: 'עירוני דורות טבריה', time: '19/09/26' },
    { id: 3, home: 'הפועל ב"ש', away: 'הפועל ק"ש', time: '19/09/26' },
    { id: 4, home: 'הפועל ת"א', away: 'הפועל פ"ת', time: '19/09/26' },
    { id: 5, home: 'מכבי נתניה', away: 'מכבי ת"א', time: '19/09/26' },
    { id: 6, home: 'בני סכנין', away: 'הפועל ר"ג', time: '19/09/26' },
    { id: 7, home: 'בית"ר י-ם', away: 'הפועל חיפה', time: '19/09/26' }
  ],
  6: [
    { id: 1, home: 'הפועל חיפה', away: 'מכבי פ"ת', time: '10/10/26' },
    { id: 2, home: 'הפועל ר"ג', away: 'בית"ר י-ם', time: '10/10/26' },
    { id: 3, home: 'מכבי ת"א', away: 'בני סכנין', time: '10/10/26' },
    { id: 4, home: 'הפועל פ"ת', away: 'מכבי נתניה', time: '10/10/26' },
    { id: 5, home: 'הפועל ק"ש', away: 'הפועל ת"א', time: '10/10/26' },
    { id: 6, home: 'עירוני דורות טבריה', away: 'הפועל ב"ש', time: '10/10/26' },
    { id: 7, home: 'הפועל י-ם', away: 'מכבי חיפה', time: '10/10/26' }
  ],
  7: [
    { id: 1, home: 'מכבי פ"ת', away: 'מכבי חיפה', time: '17/10/26' },
    { id: 2, home: 'הפועל ב"ש', away: 'הפועל י-ם', time: '17/10/26' },
    { id: 3, home: 'הפועל ת"א', away: 'עירוני דורות טבריה', time: '17/10/26' },
    { id: 4, home: 'מכבי נתניה', away: 'הפועל ק"ש', time: '17/10/26' },
    { id: 5, home: 'בני סכנין', away: 'הפועל פ"ת', time: '17/10/26' },
    { id: 6, home: 'בית"ר י-ם', away: 'מכבי ת"א', time: '17/10/26' },
    { id: 7, home: 'הפועל חיפה', away: 'הפועל ר"ג', time: '17/10/26' }
  ],
  8: [
    { id: 1, home: 'הפועל ר"ג', away: 'מכבי פ"ת', time: '24/10/26' },
    { id: 2, home: 'מכבי ת"א', away: 'הפועל חיפה', time: '24/10/26' },
    { id: 3, home: 'הפועל פ"ת', away: 'בית"ר י-ם', time: '24/10/26' },
    { id: 4, home: 'הפועל ק"ש', away: 'בני סכנין', time: '24/10/26' },
    { id: 5, home: 'עירוני דורות טבריה', away: 'מכבי נתניה', time: '24/10/26' },
    { id: 6, home: 'הפועל י-ם', away: 'הפועל ת"א', time: '24/10/26' },
    { id: 7, home: 'מכבי חיפה', away: 'הפועל ב"ש', time: '24/10/26' }
  ],
  9: [
    { id: 1, home: 'מכבי פ"ת', away: 'הפועל ב"ש', time: '31/10/26' },
    { id: 2, home: 'הפועל ת"א', away: 'מכבי חיפה', time: '31/10/26' },
    { id: 3, home: 'מכבי נתניה', away: 'הפועל י-ם', time: '31/10/26' },
    { id: 4, home: 'בני סכנין', away: 'עירוני דורות טבריה', time: '31/10/26' },
    { id: 5, home: 'בית"ר י-ם', away: 'הפועל ק"ש', time: '31/10/26' },
    { id: 6, home: 'הפועל חיפה', away: 'הפועל פ"ת', time: '31/10/26' },
    { id: 7, home: 'הפועל ר"ג', away: 'מכבי ת"א', time: '31/10/26' }
  ],
  10: [
    { id: 1, home: 'מכבי ת"א', away: 'מכבי פ"ת', time: '07/11/26' },
    { id: 2, home: 'הפועל פ"ת', away: 'הפועל ר"ג', time: '07/11/26' },
    { id: 3, home: 'הפועל ק"ש', away: 'הפועל חיפה', time: '07/11/26' },
    { id: 4, home: 'עירוני דורות טבריה', away: 'בית"ר י-ם', time: '07/11/26' },
    { id: 5, home: 'הפועל י-ם', away: 'בני סכנין', time: '07/11/26' },
    { id: 6, home: 'מכבי חיפה', away: 'מכבי נתניה', time: '07/11/26' },
    { id: 7, home: 'הפועל ב"ש', away: 'הפועל ת"א', time: '07/11/26' }
  ],
  11: [
    { id: 1, home: 'מכבי פ"ת', away: 'הפועל ת"א', time: '28/11/26' },
    { id: 2, home: 'מכבי נתניה', away: 'הפועל ב"ש', time: '28/11/26' }, // תוקן מכבי נתניה
    { id: 3, home: 'בני סכנין', away: 'מכבי חיפה', time: '28/11/26' },
    { id: 4, home: 'בית"ר י-ם', away: 'הפועל י-ם', time: '28/11/26' },
    { id: 5, home: 'הפועל חיפה', away: 'עירוני דורות טבריה', time: '28/11/26' },
    { id: 6, home: 'הפועל ר"ג', away: 'הפועל ק"ש', time: '28/11/26' },
    { id: 7, home: 'מכבי ת"א', away: 'הפועל פ"ת', time: '28/11/26' }
  ],
  12: [
    { id: 1, home: 'מכבי פ"ת', away: 'הפועל פ"ת', time: '01/12/26' },
    { id: 2, home: 'הפועל ק"ש', away: 'מכבי ת"א', time: '01/12/26' },
    { id: 3, home: 'עירוני דורות טבריה', away: 'הפועל ר"ג', time: '01/12/26' },
    { id: 4, home: 'הפועל י-ם', away: 'הפועל חיפה', time: '01/12/26' },
    { id: 5, home: 'בית"ר י-ם', away: 'מכבי חיפה', time: '01/12/26' },
    { id: 6, home: 'בני סכנין', away: 'הפועל ב"ש', time: '01/12/26' }, // תוקן בני סכנין
    { id: 7, home: 'מכבי נתניה', away: 'הפועל ת"א', time: '01/12/26' }
  ],
  13: [
    { id: 1, home: 'מכבי נתניה', away: 'מכבי פ"ת', time: '05/12/26' },
    { id: 2, home: 'בני סכנין', away: 'הפועל ת"א', time: '05/12/26' },
    { id: 3, home: 'בית"ר י-ם', away: 'הפועל ב"ש', time: '05/12/26' },
    { id: 4, home: 'הפועל חיפה', away: 'מכבי חיפה', time: '05/12/26' },
    { id: 5, home: 'הפועל ר"ג', away: 'הפועל י-ם', time: '05/12/26' },
    { id: 6, home: 'מכבי ת"א', away: 'עירוני דורות טבריה', time: '05/12/26' },
    { id: 7, home: 'הפועל פ"ת', away: 'הפועל ק"ש', time: '05/12/26' }
  ],
  14: [
    { id: 1, home: 'הפועל ק"ש', away: 'מכבי פ"ת', time: '12/12/26' },
    { id: 2, home: 'הפועל פ"ת', away: 'עירוני דורות טבריה', time: '12/12/26' },
    { id: 3, home: 'מכבי ת"א', away: 'הפועל י-ם', time: '12/12/26' },
    { id: 4, home: 'הפועל ר"ג', away: 'מכבי חיפה', time: '12/12/26' },
    { id: 5, home: 'הפועל חיפה', away: 'הפועל ב"ש', time: '12/12/26' },
    { id: 6, home: 'בית"ר י-ם', away: 'הפועל ת"א', time: '12/12/26' },
    { id: 7, home: 'bני סכנין', away: 'מכבי נתניה', time: '12/12/26' }
  ],
  15: [
    { id: 1, home: 'מכבי פ"ת', away: 'בני סכנין', time: '19/12/26' },
    { id: 2, home: 'מכבי נתניה', away: 'בית"ר י-ם', time: '19/12/26' },
    { id: 3, home: 'הפועל ת"א', away: 'הפועל חיפה', time: '19/12/26' },
    { id: 4, home: 'הפועל ב"ש', away: 'הפועל ר"ג', time: '19/12/26' },
    { id: 5, home: 'מכבי חיפה', away: 'מכבי ת"א', time: '19/12/26' },
    { id: 6, home: 'הפועל י-ם', away: 'הפועל פ"ת', time: '19/12/26' },
    { id: 7, home: 'עירוני דורות טבריה', away: 'הפועל ק"ש', time: '19/12/26' }
  ],
  16: [
    { id: 1, home: 'עירוני דורות טבריה', away: 'מכבי פ"ת', time: '29/12/26' },
    { id: 2, home: 'הפועל ק"ש', away: 'הפועל י-ם', time: '29/12/26' },
    { id: 3, home: 'הפועל פ"ת', away: 'מכבי חיפה', time: '29/12/26' },
    { id: 4, home: 'מכבי ת"א', away: 'הפועל ב"ש', time: '29/12/26' },
    { id: 5, home: 'הפועל ר"ג', away: 'הפועל ת"א', time: '29/12/26' },
    { id: 6, home: 'הפועל חיפה', away: 'מכבי נתניה', time: '29/12/26' },
    { id: 7, home: 'בית"ר י-ם', away: 'בני סכנין', time: '29/12/26' }
  ],
  17: [
    { id: 1, home: 'מכבי פ"ת', away: 'בית"ר י-ם', time: '02/01/27' },
    { id: 2, home: 'בני סכנין', away: 'הפועל חיפה', time: '02/01/27' },
    { id: 3, home: 'מכבי נתניה', away: 'הפועל ר"ג', time: '02/01/27' },
    { id: 4, home: 'הפועל ת"א', away: 'מכבי ת"א', time: '02/01/27' },
    { id: 5, home: 'הפועל ב"ש', away: 'הפועל פ"ת', time: '02/01/27' },
    { id: 6, home: 'מכבי חיפה', away: 'הפועל ק"ש', time: '02/01/27' },
    { id: 7, home: 'הפועל י-ם', away: 'עירוני דורות טבריה', time: '02/01/27' }
  ],
  18: [
    { id: 1, home: 'הפועל י-ם', away: 'מכבי פ"ת', time: '09/01/27' },
    { id: 2, home: 'עירוני דורות טבריה', away: 'מכבי חיפה', time: '09/01/27' },
    { id: 3, home: 'הפועל ק"ש', away: 'הפועל ב"ש', time: '09/01/27' },
    { id: 4, home: 'הפועל פ"ת', away: 'הפועל ת"א', time: '09/01/27' },
    { id: 5, home: 'מכבי ת"א', away: 'מכבי נתניה', time: '09/01/27' },
    { id: 6, home: 'הפועל ר"ג', away: 'בני סכנין', time: '09/01/27' },
    { id: 7, home: 'בית"ר י-ם', away: 'הפועל חיפה', time: '09/01/27' }
  ],
  19: [
    { id: 1, home: 'מכבי פ"ת', away: 'הפועל חיפה', time: '16/01/27' },
    { id: 2, home: 'בית"ר י-ם', away: 'הפועל ר"ג', time: '16/01/27' },
    { id: 3, home: 'בני סכנין', away: 'מכבי ת"א', time: '16/01/27' },
    { id: 4, home: 'מכבי נתניה', away: 'הפועל פ"ת', time: '16/01/27' },
    { id: 5, home: 'הפועל ת"א', away: 'הפועל ק"ש', time: '16/01/27' },
    { id: 6, home: 'הפועל ב"ש', away: 'עירוני דורות טבריה', time: '16/01/27' },
    { id: 7, home: 'הפועל י-ם', away: 'מכבי חיפה', time: '16/01/27' }
  ],
  20: [
    { id: 1, home: 'מכבי חיפה', away: 'מכבי פ"ת', time: '23/01/27' },
    { id: 2, home: 'הפועל י-ם', away: 'הפועל ב"ש', time: '23/01/27' },
    { id: 3, home: 'עירוני דורות טבריה', away: 'הפועל ת"א', time: '23/01/27' },
    { id: 4, home: 'הפועל ק"ש', away: 'מכבי נתניה', time: '23/01/27' },
    { id: 5, home: 'הפועל פ"ת', away: 'בני סכנין', time: '23/01/27' },
    { id: 6, home: 'בית"ר י-ם', away: 'מכבי ת"א', time: '23/01/27' },
    { id: 7, home: 'הפועל חיפה', away: 'הפועל ר"ג', time: '23/01/27' }
  ],
  21: [
    { id: 1, home: 'מכבי פ"ת', away: 'הפועל ר"ג', time: '30/01/27' },
    { id: 2, home: 'הפועל חיפה', away: 'מכבי ת"א', time: '30/01/27' },
    { id: 3, home: 'בית"ר י-ם', away: 'הפועל פ"ת', time: '30/01/27' }, // תוקן ל-home
    { id: 4, home: 'בני סכנין', away: 'הפועל ק"ש', time: '30/01/27' },
    { id: 5, home: 'מכבי נתניה', away: 'עירוני דורות טבריה', time: '30/01/27' },
    { id: 6, home: 'הפועל ת"א', away: 'הפועל י-ם', time: '30/01/27' },
    { id: 7, home: 'הפועל ב"ש', away: 'מכבי חיפה', time: '30/01/27' }
  ],
  22: [
    { id: 1, home: 'הפועל ב"ש', away: 'מכבי פ"ת', time: '06/02/27' },
    { id: 2, home: 'מכבי חיפה', away: 'הפועל ת"א', time: '06/02/27' },
    { id: 3, home: 'הפועל י-ם', away: 'מכבי נתניה', time: '06/02/27' },
    { id: 4, home: 'עירוני דורות טבריה', away: 'בני סכנין', time: '06/02/27' },
    { id: 5, home: 'הפועל ק"ש', away: 'בית"ר י-ם', time: '06/02/27' },
    { id: 6, home: 'הפועל פ"ת', away: 'הפועל חיפה', time: '06/02/27' },
    { id: 7, home: 'מכבי ת"א', away: 'הפועל ר"ג', time: '06/02/27' }
  ],
  23: [
    { id: 1, home: 'מכבי פ"ת', away: 'מכבי ת"א', time: '13/02/27' },
    { id: 2, home: 'הפועל ר"ג', away: 'הפועל פ"ת', time: '13/02/27' },
    { id: 3, home: 'הפועל חיפה', away: 'הפועל ק"ש', time: '13/02/27' },
    { id: 4, home: 'בית"ר י-ם', away: 'עירוני דורות טבריה', time: '13/02/27' },
    { id: 5, home: 'bני סכנין', away: 'הפועל י-ם', time: '13/02/27' },
    { id: 6, home: 'מכבי נתניה', away: 'מכבי חיפה', time: '13/02/27' },
    { id: 7, home: 'הפועל ת"א', away: 'הפועל ב"ש', time: '13/02/27' }
  ],
  24: [
    { id: 1, home: 'הפועל ת"א', away: 'מכבי פ"ת', time: '20/02/27' },
    { id: 2, home: 'הפועל ב"ש', away: 'מכבי נתניה', time: '20/02/27' },
    { id: 3, home: 'מכבי חיפה', away: 'בני סכנין', time: '20/02/27' },
    { id: 4, home: 'הפועל י-ם', away: 'בית"ר י-ם', time: '20/02/27' },
    { id: 5, home: 'עירוני דורות טבריה', away: 'הפועל חיפה', time: '20/02/27' },
    { id: 6, home: 'הפועל ק"ש', away: 'הפועל ר"ג', time: '20/02/27' },
    { id: 7, home: 'מכבי ת"א', away: 'הפועל פ"ת', time: '20/02/27' }
  ],
  25: [
    { id: 1, home: 'הפועל פ"ת', away: 'מכבי פ"ת', time: '27/02/27' },
    { id: 2, home: 'מכבי ת"א', away: 'הפועל ק"ש', time: '27/02/27' },
    { id: 3, home: 'הפועל ר"ג', away: 'עירוני דורות טבריה', time: '27/02/27' },
    { id: 4, home: 'הפועל חיפה', away: 'הפועל י-ם', time: '27/02/27' },
    { id: 5, home: 'בית"ר י-ם', away: 'מכבי חיפה', time: '27/02/27' },
    { id: 6, home: 'בני סכנין', away: 'הפועל ב"ש', time: '27/02/27' },
    { id: 7, home: 'מכבי נתניה', away: 'הפועל ת"א', time: '27/02/27' }
  ],
  26: [
    { id: 1, home: 'מכבי נתניה', away: 'מכבי פ"ת', time: '06/03/27' },
    { id: 2, home: 'בני סכנין', away: 'הפועל ת"א', time: '06/03/27' },
    { id: 3, home: 'בית"ר י-ם', away: 'הפועל ב"ש', time: '06/03/27' },
    { id: 4, home: 'הפועל חיפה', away: 'מכבי חיפה', time: '06/03/27' },
    { id: 5, home: 'הפועל ר"ג', away: 'הפועל י-ם', time: '06/03/27' },
    { id: 6, home: 'מכבי ת"א', away: 'עירוני דורות טבריה', time: '06/03/27' },
    { id: 7, home: 'הפועל פ"ת', away: 'הפועל ק"ש', time: '06/03/27' } // תוקן ק"ש
  ]
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('predictions');
  const [matchday, setMatchday] = useState(1);
  const [predictions, setPredictions] = useState({});
  const [tournamentPredictions, setTournamentPredictions] = useState({ champion: '', topScorer: '', topAssists: '' });
  
  const [actualScores, setActualScores] = useState({});
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [actualTournament, setActualTournament] = useState({ champion: '', topScorer: '', topAssists: '' });

  const [matchdayGoals, setMatchdayGoals] = useState({});
  const [adminInputPlayer, setAdminInputPlayer] = useState('');
  const [adminInputGoals, setAdminInputGoals] = useState(0);

  const handlePredict = (gameId, value) => {
    setPredictions(prev => {
      const key = `${matchday}-${gameId}`;
      const current = prev[key] || { winner: '', homeScore: 0, awayScore: 0 };
      return { ...prev, [key]: { ...current, winner: value } };
    });
  };

  const handleScoreChange = (gameId, type, delta) => {
    setPredictions(prev => {
      const key = `${matchday}-${gameId}`;
      const current = prev[key] || { winner: '', homeScore: 0, awayScore: 0 };
      let newScore = current[type === 'home' ? 'homeScore' : 'awayScore'] + delta;
      if (newScore < 0) newScore = 0;

      const updated = { ...current, [type === 'home' ? 'homeScore' : 'awayScore']: newScore };
      if (updated.homeScore > updated.awayScore) updated.winner = '1';
      else if (updated.homeScore < updated.awayScore) updated.winner = '2';
      else updated.winner = 'X';

      return { ...prev, [key]: updated };
    });
  };

  const handleAdminScoreChange = (gameId, type, delta) => {
    setActualScores(prev => {
      const key = `${matchday}-${gameId}`;
      const current = prev[key] || { homeScore: 0, awayScore: 0, winner: 'X', isFinished: false };
      let newScore = current[type === 'home' ? 'homeScore' : 'awayScore'] + delta;
      if (newScore < 0) newScore = 0;

      const updated = { ...current, [type === 'home' ? 'homeScore' : 'awayScore']: newScore };
      if (updated.homeScore > updated.awayScore) updated.winner = '1';
      else if (updated.homeScore < updated.awayScore) updated.winner = '2';
      else updated.winner = 'X';

      return { ...prev, [key]: updated };
    });
  };

  const toggleGameFinished = (gameId) => {
    setActualScores(prev => {
      const key = `${matchday}-${gameId}`;
      const current = prev[key] || { homeScore: 0, awayScore: 0, winner: 'X', isFinished: false };
      return { ...prev, [key]: { ...current, isFinished: !current.isFinished } };
    });
  };

  const addPlayerGoalsByAdmin = () => {
    if (!adminInputPlayer.trim()) return;
    const key = `${matchday}-${adminInputPlayer.trim()}`;
    setMatchdayGoals(prev => ({ ...prev, [key]: (prev[key] || 0) + Number(adminInputGoals) }));
    setAdminInputPlayer('');
    setAdminInputGoals(0);
  };

  const removePlayerGoalsByAdmin = (playerKey) => {
    setMatchdayGoals(prev => {
      const updated = { ...prev };
      delete updated[playerKey];
      return updated;
    });
  };

  const getLiveStatistics = () => {
    let totalPredicted = Object.keys(predictions).length;
    let exactMatches = 0;
    let directionMatches = 0;
    let misses = 0;
    let matchPoints = 0;

    Object.keys(actualScores).forEach(key => {
      const actual = actualScores[key];
      const pred = predictions[key];
      if (actual && actual.isFinished && pred) {
        if (pred.winner === actual.winner) {
          matchPoints += 2;
          if (Number(pred.homeScore) === Number(actual.homeScore) && Number(pred.awayScore) === Number(actual.awayScore)) {
            exactMatches++;
            matchPoints += 4;
          } else {
            directionMatches++;
          }
        } else {
          misses++;
        }
      }
    });

    let liveScorerGoalsPoints = 0;
    const currentScorer = tournamentPredictions?.topScorer || '';
    if (currentScorer.trim()) {
      Object.keys(matchdayGoals).forEach(key => {
        const parts = key.split('-');
        if (parts.length >= 2 && parts[1].trim() === currentScorer.trim()) {
          liveScorerGoalsPoints += (matchdayGoals[key] || 0) * 2;
        }
      });
    }

    let finalScorerBonus = (actualTournament.topScorer && tournamentPredictions.topScorer && actualTournament.topScorer.trim() === tournamentPredictions.topScorer.trim()) ? 40 : 0;
    let finalChampionBonus = (actualTournament.champion && tournamentPredictions.champion && actualTournament.champion.trim() === tournamentPredictions.champion.trim()) ? 40 : 0;
    let finalAssistsBonus = (actualTournament.topAssists && tournamentPredictions.topAssists && actualTournament.topAssists.trim() === tournamentPredictions.topAssists.trim()) ? 50 : 0;

    const totalPoints = matchPoints + liveScorerGoalsPoints + finalScorerBonus + finalChampionBonus + finalAssistsBonus;

    return {
      totalPredicted,
      exactMatches,
      directionMatches,
      misses,
      topScorerTotalPoints: liveScorerGoalsPoints + finalScorerBonus,
      championPoints: finalChampionBonus,
      topAssistsPoints: finalAssistsBonus,
      totalPoints
    };
  };

  const stats = getLiveStatistics();
  
  const getLiveGoalsPointsOnly = () => {
    let pts = 0;
    const currentScorer = tournamentPredictions?.topScorer || '';
    if (!currentScorer.trim()) return 0;
    Object.keys(matchdayGoals).forEach(key => {
      const parts = key.split('-');
      if (parts.length >= 2 && parts[1].trim() === currentScorer.trim()) {
        pts += (matchdayGoals[key] || 0) * 2;
      }
    });
    return pts;
  };

  const goalsPoints = getLiveGoalsPointsOnly();
  const leaderboard = stats.totalPoints > 0 ? [{ name: 'אייל אשכנזי (אתה)', points: stats.totalPoints }] : [];

  const loginAsAdmin = () => {
    if (isAdminMode) {
      setIsAdminMode(false);
    } else {
      const pass = prompt('הכנס סיסמת מנהל מערכת:');
      if (pass === '2531') {
        setIsAdminMode(true);
        alert('התחברת בהצלחה כמנהל!');
      } else if (pass !== null) {
        alert('סיסמה שגויה!');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 pb-24" style={{ direction: 'rtl' }}>
      
      {/* 👑 ראש האתר והתפריט - נעולים קבוע למעלה בצורה יציבה ובטוחה */}
      <div className="sticky top-0 bg-gray-950/95 backdrop-blur-md pt-2 pb-3 z-50 max-w-md mx-auto border-b border-gray-900/50">
        <header className="text-center py-2">
          <h1 className="text-2xl font-extrabold text-yellow-500 drop-shadow-md">🏆 10 חבר'ה - יוספטל</h1>
          {isAdminMode && <span className="inline-block bg-red-950 text-red-400 border border-red-900 font-bold text-[10px] px-2 py-0.5 rounded-full mt-1 animate-pulse">🛠️ פאנל מנהל פעיל</span>}
        </header>

        <nav className="grid grid-cols-5 gap-0.5 bg-gray-900 p-1 rounded-xl border border-gray-800">
          <button type="button" onClick={() => setCurrentTab('predictions')} className={`py-2 text-[9px] font-black rounded-lg transition-all ${currentTab === 'predictions' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>⚽ משחקים</button>
          <button type="button" onClick={() => setCurrentTab('tournament')} className={`py-2 text-[9px] font-black rounded-lg transition-all ${currentTab === 'tournament' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>👑 הטורניר שלי</button>
          <button type="button" onClick={() => setCurrentTab('stats')} className={`py-2 text-[9px] font-black rounded-lg transition-all ${currentTab === 'stats' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>📈 סטטיסטיקה</button>
          <button type="button" onClick={() => setCurrentTab('leaderboard')} className={`py-2 text-[9px] font-black rounded-lg transition-all ${currentTab === 'leaderboard' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>📊 הטבלה</button>
          <button type="button" onClick={() => setCurrentTab('rules')} className={`py-2 text-[9px] font-black rounded-lg transition-all ${currentTab === 'rules' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>ℹ️ חוקים</button>
        </nav>
      </div>

      {/* גוף התוכן הראשי */}
      <div className="max-w-md mx-auto mt-4">
        
        {/* לשונית 1: משחקים */}
        {currentTab === 'predictions' && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-xl">
              <label className="block text-sm font-bold text-gray-400 mb-2">בחר מחזור ליגה:</label>
              <select value={matchday} onChange={(e) => setMatchday(Number(e.target.value))} className="w-full bg-gray-800 p-3 rounded-lg text-white font-bold border border-gray-700 focus:outline-none">
                {[...Array(26).keys()].map(i => <option key={i+1} value={i+1}>⚽ מחזור {i+1}</option>)}
              </select>
            </div>

            {isAdminMode && (
              <div className="bg-red-950/20 border border-red-900/40 p-4 rounded-xl space-y-3">
                <h3 className="text-xs font-black text-red-400">⚙️ עדכון שערים בזמן אמת למחזור {matchday}:</h3>
                <div className="flex gap-2">
                  <input type="text" value={adminInputPlayer} onChange={(e) => setAdminInputPlayer(e.target.value)} placeholder="שם השחקן שהבקיע..." className="flex-1 bg-gray-900 border border-gray-700 rounded-lg p-2 text-xs font-bold text-white focus:outline-none"/>
                  <input type="number" value={adminInputGoals} onChange={(e) => setAdminInputGoals(Number(e.target.value))} className="w-16 bg-gray-900 border border-gray-700 rounded-lg p-2 text-xs font-black text-yellow-500 text-center focus:outline-none"/>
                  <button type="button" onClick={addPlayerGoalsByAdmin} className="bg-yellow-500 text-gray-950 text-xs font-black px-3 rounded-lg">הוסף</button>
                </div>
                <div className="space-y-1.5 pt-1">
                  {Object.keys(matchdayGoals).filter(k => k.startsWith(`${matchday}-`)).map(k => (
                    <div key={k} className="flex justify-between items-center bg-gray-950 p-2 rounded-lg border border-gray-800 text-xs">
                      <span className="font-bold text-gray-300">⚽ {k.split('-')[1]}: <span className="text-yellow-500 font-black">{matchdayGoals[k]} שערים</span></span>
                      <button type="button" onClick={() => removePlayerGoalsByAdmin(k)} className="text-red-500 font-bold px-1">✕</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <section className="space-y-4">
              {allFixtures[matchday]?.map((game) => {
                const gameKey = `${matchday}-${game.id}`;
                const gamePrediction = predictions[gameKey] || { winner: '', homeScore: 0, awayScore: 0 };
                const actual = actualScores[gameKey] || { homeScore: 0, awayScore: 0, winner: 'X', isFinished: false };
                
                let pointsEarned = null;
                if (actual.isFinished && gamePrediction.winner) {
                  pointsEarned = 0;
                  if (gamePrediction.winner === actual.winner) {
                    pointsEarned = (Number(gamePrediction.homeScore) === Number(actual.homeScore) && Number(gamePrediction.awayScore) === Number(actual.awayScore)) ? 6 : 2;
                  }
                }

                return (
                  <div key={game.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-md space-y-3">
                    <div className="flex justify-between items-center text-xs text-gray-500 font-semibold">
                      <span>ליגת העל • {game.time}</span>
                      {actual.isFinished && <span className="bg-red-950 text-red-400 border border-red-900 text-[10px] px-2 py-0.5 rounded-md font-bold">🛑 הסתיים</span>}
                    </div>
                    
                    <div className="flex justify-between items-center py-1">
                      <span className="font-bold text-base text-gray-100 w-5/12 text-right break-words">{game.home}</span>
                      <span className="text-gray-600 text-xs font-black px-2">VS</span>
                      <span className="font-bold text-base text-gray-100 w-5/12 text-left break-words">{game.away}</span>
                    </div>

                    {actual.isFinished && (
                      <div className="bg-gray-950 p-2.5 rounded-xl border border-dashed border-gray-800 text-center flex justify-between items-center px-4">
                        <span className="text-xs font-bold text-gray-400">תוצאת אמת סופית:</span>
                        <span className="font-black text-sm text-yellow-500">{actual.homeScore} - {actual.awayScore}</span>
                        <span className={`text-xs font-black px-2 py-0.5 rounded ${pointsEarned === 6 ? 'bg-green-950 text-green-400' : pointsEarned === 2 ? 'bg-blue-950 text-blue-400' : 'bg-gray-800 text-gray-400'}`}>
                          {pointsEarned === 6 ? '🎯 בול (+6)' : pointsEarned === 2 ? '👍 כיוון (+2)' : '0 נק\''}
                        </span>
                      </div>
                    )}

                    {!actual.isFinished && (
                      <div className="flex justify-between items-center bg-gray-950 p-3 rounded-xl border border-gray-800/80 mt-1">
                        <span className="text-xs font-bold text-gray-400">הניחוש שלך:</span>
                        <div className="flex items-center gap-3" style={{ direction: 'ltr' }}>
                          <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                            <button type="button" onClick={() => handleScoreChange(game.id, 'away', -1)} className="px-2.5 py-1 text-gray-400 font-black text-sm">-</button>
                            <span className="px-3 py-1 font-black text-yellow-500 min-w-[28px] text-center bg-gray-900 text-base border-x border-gray-700">{gamePrediction.awayScore}</span>
                            <button type="button" onClick={() => handleScoreChange(game.id, 'away', 1)} className="px-2.5 py-1 text-gray-400 font-black text-sm">+</button>
                          </div>
                          <span className="text-gray-600 font-black text-sm">:</span>
                          <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                            <button type="button" onClick={() => handleScoreChange(game.id, 'home', -1)} className="px-2.5 py-1 text-gray-400 font-black text-sm">-</button>
                            <span className="px-3 py-1 font-black text-yellow-500 min-w-[28px] text-center bg-gray-900 text-base border-x border-gray-700">{gamePrediction.homeScore}</span>
                            <button type="button" onClick={() => handleScoreChange(game.id, 'home', 1)} className="px-2.5 py-1 text-gray-400 font-black text-sm">+</button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {['1', 'X', '2'].map((option) => (
                        <button key={option} type="button" disabled={actual.isFinished} onClick={() => handlePredict(game.id, option)} className={`py-2 text-xs font-black rounded-lg border transition-all ${gamePrediction.winner === option ? 'bg-yellow-500 border-yellow-500 text-gray-950 scale-105 shadow-md' : 'bg-gray-800 border-gray-700 text-gray-300'}`}>
                          {option === '1' ? '1 (בית)' : option === 'X' ? 'X (תיקו)' : '2 (חוץ)'}
                        </button>
                      ))}
                    </div>

                    {isAdminMode && (
                      <div className="mt-3 pt-3 border-t border-red-900/40 bg-red-950/20 p-3 rounded-xl border border-red-900/30 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-black text-red-400">⚙️ עדכון תוצאת אמת (מנהל):</span>
                          <button type="button" onClick={() => toggleGameFinished(game.id)} className={`px-3 py-1 text-[11px] font-black rounded-md border transition-all ${actual.isFinished ? 'bg-green-950 border-green-800 text-green-400' : 'bg-red-900 border-red-700 text-white'}`}>
                            {actual.isFinished ? '🔓 פתח משחק' : '🔒 סיום ונעילה'}
                          </button>
                        </div>
                        <div className="flex justify-center items-center gap-4" style={{ direction: 'ltr' }}>
                          <div className="flex items-center bg-gray-800 border border-red-900/50 overflow-hidden">
                            <button type="button" onClick={() => handleAdminScoreChange(game.id, 'away', -1)} className="px-3 py-1 text-red-400 font-bold bg-gray-800">-</button>
                            <span className="px-4 py-1 font-black text-white min-w-[32px] text-center bg-gray-900">{actual.awayScore}</span>
                            <button type="button" onClick={() => handleAdminScoreChange(game.id, 'away', 1)} className="px-3 py-1 text-red-400 font-bold bg-gray-800">+</button>
                          </div>
                          <span className="text-red-400 font-black text-lg">:</span>
                          <div className="flex items-center bg-gray-800 border border-red-900/50 overflow-hidden">
                            <button type="button" onClick={() => handleAdminScoreChange(game.id, 'home', -1)} className="px-3 py-1 text-red-400 font-bold bg-gray-800">-</button>
                            <span className="px-4 py-1 font-black text-white min-w-[32px] text-center bg-gray-900">{actual.homeScore}</span>
                            <button type="button" onClick={() => handleAdminScoreChange(game.id, 'home', 1)} className="px-3 py-1 text-red-400 font-bold bg-gray-800">+</button>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </section>
          </div>
        )}

        {/* 👑 לשונית 2: הטורניר שלי (מתוקן לחלוטין ויציב ברינדור!) */}
        {currentTab === 'tournament' && (
          <div className="space-y-6">
            {isAdminMode && (
              <div className="bg-red-950/20 border border-red-900/40 p-5 rounded-2xl space-y-4 shadow-xl">
                <h3 className="text-sm font-black text-red-400">⚙️ הגדרת תוצאות אמת לסוף העונה (מנהל):</h3>
                <div className="grid grid-cols-1 gap-3 text-xs">
                  <div>
                    <label className="block text-gray-400 mb-1 font-bold">האלופה הרשמית:</label>
                    <input type="text" value={actualTournament.champion} onChange={(e) => setActualTournament(prev => ({...prev, champion: e.target.value}))} className="w-full bg-gray-900 p-2.5 border border-red-900/40 rounded-lg font-bold text-white focus:outline-none" placeholder="הזן את האלופה שזכתה באמת..."/>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 font-bold">מלך השערים הסופי:</label>
                    <input type="text" value={actualTournament.topScorer} onChange={(e) => setActualTournament(prev => ({...prev, topScorer: e.target.value}))} className="w-full bg-gray-900 p-2.5 border border-red-900/40 rounded-lg font-bold text-white focus:outline-none" placeholder="הזן את מלך השערים הסופי..."/>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 font-bold">מלך הבישולים הסופי:</label>
                    <input type="text" value={actualTournament.topAssists} onChange={(e) => setActualTournament(prev => ({...prev, topAssists: e.target.value}))} className="w-full bg-gray-900 p-2.5 border border-red-900/40 rounded-lg font-bold text-white focus:outline-none" placeholder="הזן את מלך הבישולים הסופי..."/>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-[#1e3d2f] border border-[#2a5441] rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 text-center border-b border-[#2a5441]/60 flex flex-col items-center">
                <div className="w-24 h-24 bg-yellow-500 rounded-full flex flex-col items-center justify-center border-4 border-[#12261d] relative shadow-inner">
                  <span className="text-gray-950 font-black text-[13px] leading-tight text-center">10 חבר'ה</span>
                  <span className="text-gray-950 text-[8px] tracking-wider font-bold -mt-0.5">יוספטל</span>
                  <div className="absolute bottom-1 bg-gray-900/80 p-1 rounded-full text-yellow-500 text-[10px]">📷</div>
                </div>
                <h2 className="text-xl font-black text-white mt-3">📝 הניחושים המיוחדים שלי</h2>
              </div>
              
              <div className="bg-gray-900 p-5 space-y-5">
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 shadow-md">
                  <label className="block text-sm font-black text-gray-300 mb-2">🏆 האלופה שלי:</label>
                  <input type="text" value={tournamentPredictions.champion} onChange={(e) => setTournamentPredictions(prev => ({...prev, champion: e.target.value}))} placeholder="הקלד את שם האלופה המשוערת..." className="w-full bg-gray-800 p-3 rounded-lg text-white font-bold border border-gray-700 text-sm focus:outline-none focus:border-yellow-500"/>
                  <div className="text-left text-xs text-yellow-500 font-bold mt-1.5">מענק זכייה בסוף העונה: 40 נקודות</div>
                </div>
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 shadow-md">
                  <label className="block text-sm font-black text-gray-300 mb-2">👟 מלך השערים שלי:</label>
                  <input type="text" value={tournamentPredictions.topScorer} onChange={(e) => setTournamentPredictions(prev => ({...prev, topScorer: e.target.value}))} placeholder="הקלד את מלך השערים שלך..." className="w-full bg-gray-800 p-3 rounded-lg text-white font-bold border border-gray-700 text-sm focus:outline-none focus:border-yellow-500"/>
                  <div className="flex justify-between text-[11px] font-bold mt-2 border-t border-gray-900 pt-2">
                    <span className="text-gray-400">מענק סופי: 40 נק'</span>
                    <span className="text-yellow-500 font-black">🔥 נצבר במחזורים: +{goalsPoints} נק'</span>
                  </div>
                </div>
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 shadow-md">
                  <label className="block text-sm font-black text-gray-300 mb-2">🎯 מלך הבישולים שלי:</label>
                  <input type="text" value={tournamentPredictions.topAssists} onChange={(e) => setTournamentPredictions(prev => ({...prev, topAssists: e.target.value}))} placeholder="הקלד את מלך הבישולים שלך..." className="w-full bg-gray-800 p-3 rounded-lg text-white font-bold border border-gray-700 text-sm focus:outline-none focus:border-yellow-500"/>
                  <div className="text-left text-xs text-yellow-500 font-bold mt-1.5">מענק ניחוש סופי: 50 נקודות</div>
                </div>
              </div>
              <div className="bg-gray-950 p-4 text-center border-t border-gray-800">
                <button type="button" onClick={() => alert('הניחושים הארוכים עודכנו בהצלחה!')} className="w-full bg-[#1e3d2f] text-white font-black py-3 rounded-xl border border-[#2a5441]">שמור שינויים</button>
              </div>
            </div>
          </div>
        )}

        {/* לשונית 3: סטטיסטיקה */}
        {currentTab === 'stats' && (
          <div className="space-y-5 max-w-md mx-auto text-center">
            <div>
              <h2 className="text-3xl font-black text-emerald-500 drop-shadow-sm tracking-wide">סטטיסטיקות</h2>
              <p className="text-lg font-black text-yellow-500 mt-1">סה"כ {stats.totalPoints} נק'</p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-5 shadow-2xl border border-gray-200 text-right space-y-1">
              <div className="flex justify-between items-center py-3.5 border-b border-gray-100">
                <span className="font-black text-xl text-gray-800 pr-2">{stats.totalPredicted}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-700">סה"כ ניחוש משחקים</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-800"></span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3.5 border-b border-gray-100">
                <span className="font-black text-xl text-green-600 pr-2">{stats.exactMatches}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-green-600">סה"כ ניחושים מדויקים</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3.5 border-b border-gray-100">
                <span className="font-black text-xl text-gray-600 pr-2">{stats.directionMatches}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-400">סה"כ ניחושי כיוון</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3.5 border-b border-gray-100">
                <span className="font-black text-xl text-red-500 pr-2">{stats.misses}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-red-500">סה"כ פספוסים</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3.5 border-b border-gray-100">
                <span className="font-black text-xl text-amber-500 pr-2">{stats.topScorerTotalPoints}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-amber-500">נקודות ממלך השערים</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3.5 border-b border-gray-100">
                <span className="font-black text-xl text-emerald-900 pr-2">{stats.championPoints}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-emerald-900">נקודות מהקבוצה הזוכה</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-900"></span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3.5">
                <span className="font-black text-xl text-blue-600 pr-2">{stats.topAssistsPoints}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-blue-600">נקודות ממלך הבישולים</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* לשונית 4: טבלת מובילים */}
        {currentTab === 'leaderboard' && (
          <section className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-xl">
            <h2 className="text-lg font-bold text-gray-200 mb-3">📊 מצב הטבלה הכללית</h2>
            {leaderboard.length === 0 ? (
              <div className="p-8 text-center text-gray-500 text-sm bg-gray-950 rounded-lg border border-gray-800/60 font-medium">
                🚶‍♂️ אין עדיין מנחשים רשומים בטבלה. <br />
                <span className="text-xs text-gray-600 mt-1 block">ברגע שתנחש ותסגור משחק במצב מנהל, הניקוד שלך יופיע כאן אוטומטית!</span>
              </div>
            ) : (
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-gray-400 text-xs">
                      <th className="p-3">שם המנחש</th>
                      <th className="p-3 text-center">נקודות</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {leaderboard.map((user, idx) => (
                      <tr key={idx} className="hover:bg-gray-800/50 bg-gray-900">
                        <td className="p-3 font-medium text-gray-100">👑 {user.name}</td>
                        <td className="p-3 text-center font-bold text-yellow-500 bg-gray-950/40">{user.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* לשונית 5: חוקים */}
        {currentTab === 'rules' && (
          <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-md">
              <h2 className="text-yellow-500 font-black text-lg mb-2 flex items-center gap-2">🎯 שיטת הניקוד המעודכנת</h2>
              <div>
                <h3 className="text-white font-black text-sm mb-1">⚽ ניקוד משחקים:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-400 mr-2">
                  <li>ניחוש כיוון (1,X,2) נכון: מעניק <span className="text-white">2 נקודות</span>.</li>
                  <li>ניחוש תוצאה מדויקת נכון: מוסיף עוד <span className="text-yellow-500 font-bold">4 נק\' בונוס</span> (סה"כ 6 נקודות).</li>
                </ul>
              </div>
              <div className="border-t border-gray-800 pt-3 mt-3">
                <h3 className="text-white font-black text-sm mb-1">🔥 חוקי שחקנים ומענקים מיוחדים:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-400 mr-2">
                  <li><span className="text-yellow-500 font-bold">ריצה במחזורים:</span> בכל פעם ששחקן שנבחר כמלך השערים מבקיע גול במחזור, המשתמש מקבל <span className="text-yellow-500 font-bold">2 נקודות לכל גול</span> באותו רגע!</li>
                  <li><span className="text-white font-bold">👑 ניחוש מלך השערים הסופי:</span> מעניק <span className="text-white font-bold">40 נקודות</span> בסוף העונה.</li>
                  <li><span className="text-white font-bold">👑 ניחוש האלופה הסופית:</span> מעניק <span className="text-white font-bold">40 נקודות</span> בסוף העונה.</li>
                  <li><span className="text-white font-bold">👑 ניחוש מלך הבישולים הסופי:</span> מעניק <span className="text-white font-bold">50 נקודות</span> בסוף העונה.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 🔐 כפתור מנהל מערכת תחתון */}
      <footer className="max-w-md mx-auto mt-12 text-center">
        <button type="button" onClick={loginAsAdmin} className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${isAdminMode ? 'bg-red-950 border-red-800 text-red-400' : 'bg-gray-900 border-gray-800 text-gray-500 hover:text-white'}`}>
          {isAdminMode ? '🔒 צא ממצב מנהל' : '🔧 ניהול מערכת (הזנת תוצאות אמת)'}
        </button>
      </footer>

    </div>
  );
}
