import React, { useState } from 'react';

// מאגר כל 26 מחזורי הליגה המלאים והרשמיים שלכם
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
    { id: 2, home: 'מכבי נתניה', away: 'הפועל ב"ש', time: '28/11/26' },
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
    { id: 6, home: 'בני סכנין', away: 'הפועל ב"ש', time: '01/12/26' },
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
    { id: 7, home: 'בני סכנין', away: 'מכבי נתניה', time: '12/12/26' }
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
    { id: 3, home: 'בית"ר י-ם', away: 'הפועל פ"ת', time: '30/01/27' },
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
    { id: 5, home: 'בני סכנין', away: 'הפועל י-ם', time: '13/02/27' },
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
    { id: 7, home: 'הפועל פ"ת', away: 'הפועל ק"ש', time: '06/03/27' }
  ]
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('predictions');
  const [matchday, setMatchday] = useState(1);
  const [predictions, setPredictions] = useState({});
  
  // ניחושי משתמש ארוכי טווח
  const [tournamentPredictions, setTournamentPredictions] = useState({ champion: '', topScorer: '', topAssists: '' });
  
  // תוצאות אמת (משחקים) של המנהל
  const [actualScores, setActualScores] = useState({});
  const [isAdminMode, setIsAdminMode] = useState(false);

  // ⚙️ תוצאות אמת של הטורניר (סוף העונה) שנשמרות על ידי המנהל
  const [actualTournament, setActualTournament] = useState({ champion: '', topScorer: '', topAssists: '' });

  // ⚙️ מאגר השערים המחזורי של שחקנים בליגה (מפתח: 'matchday-playerName', ערך: שערים)
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

  // הוספת שער לשחקן במחזור הנוכחי על ידי המנהל
  const addPlayerGoalsByAdmin = () => {
    if (!adminInputPlayer.trim()) return;
    const key = `${matchday}-${adminInputPlayer.trim()}`;
    setMatchdayGoals(prev => ({
      ...prev,
      [key]: (prev[key] || 0) + Number(adminInputGoals)
    }));
    setAdminInputPlayer('');
    setAdminInputGoals(0);
  };

  // מחיקת שחקן מרשימת הכובשים של המחזור
  const removePlayerGoalsByAdmin = (playerKey) => {
    setMatchdayGoals(prev => {
      const updated = { ...prev };
      delete updated[playerKey];
      return updated;
    });
  };

  // 🧮 מנוע חישוב הניקוד המשוכלל והמתוקן בזמן אמת לכל משתמש
  const calculateLivePoints = () => {
    let score = 0;
    
    // 1. ניקוד ממשחקים (2 כיוון, 4 בונוס בול)
    Object.keys(actualScores).forEach(key => {
      const actual = actualScores[key];
      const pred = predictions[key];
      if (actual && actual.isFinished && pred) {
        if (pred.winner === actual.winner) {
          score += 2;
          if (Number(pred.homeScore) === Number(actual.homeScore) && Number(pred.awayScore) === Number(actual.awayScore)) {
            score += 4;
          }
        }
      }
    });

    // 2. 🔥 חישוב שערים חסר תקדים בזמן אמת: 2 נקודות על כל גול של מלך השערים של המשתמש במחזור
    if (tournamentPredictions.topScorer.trim()) {
      Object.keys(matchdayGoals).forEach(key => {
        const [md, pName] = key.split('-');
        if (pName.trim() === tournamentPredictions.topScorer.trim()) {
          score += (matchdayGoals[key] || 0) * 2;
        }
      });
    }

    // 3. 👑 מענקי סוף עונה רשמיים ומעודכנים:
    if (actualTournament.champion && tournamentPredictions.champion && actualTournament.champion.trim() === tournamentPredictions.champion.trim()) {
      score += 40; // 40 נקודות על אלופה נכונה
    }
    if (actualTournament.topScorer && tournamentPredictions.topScorer && actualTournament.topScorer.trim() === tournamentPredictions.topScorer.trim()) {
      score += 40; // 40 נקודות על מלך שערים נכון
    }
    if (actualTournament.topAssists && tournamentPredictions.topAssists && actualTournament.topAssists.trim() === tournamentPredictions.topAssists.trim()) {
      score += 50; // 50 נקודות על מלך בישולים נכון
    }

    return score;
  };

  // חישוב בנפרד רק של נקודות שערים לטובת תצוגת הפרופיל
  const getLiveGoalsPointsOnly = () => {
    let pts = 0;
    if (!tournamentPredictions.topScorer.trim()) return 0;
    Object.keys(matchdayGoals).forEach(key => {
      const [md, pName] = key.split('-');
      if (pName.trim() === tournamentPredictions.topScorer.trim()) {
        pts += (matchdayGoals[key] || 0) * 2;
      }
    });
    return pts;
  };

  const userLivePoints = calculateLivePoints();
  const goalsPoints = getLiveGoalsPointsOnly();
  const leaderboard = userLivePoints > 0 ? [{ name: 'אייל אשכנזי (אתה)', points: userLivePoints }] : [];

  const loginAsAdmin = () => {
    if (isAdminMode) {
      setIsAdminMode(false);
    } else {
      const pass = prompt('הכנס סיסמת מנהל מערכת:');
      if (pass === '2531') {
        setIsAdminMode(true);
        alert('התחברת בהצלחה כמנהל! כעת פתוחים בפניך כלי עדכון שערים ותוצאות אמת.');
      } else if (pass !== null) {
        alert('סיסמה שגויה!');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 pb-16" style={{ direction: 'rtl' }}>
      
      <header className="max-w-md mx-auto text-center py-4 border-b border-gray-800">
        <h1 className="text-2xl font-extrabold text-yellow-500 drop-shadow-md">
          🏆 10 חבר'ה - יוספטל
        </h1>
        {isAdminMode && (
          <span className="inline-block bg-red-950 text-red-400 border border-red-900 font-bold text-[10px] px-2 py-0.5 rounded-full mt-2 animate-pulse">
            🛠️ פאנל מנהל פעיל
          </span>
        )}
      </header>

      {/* תפריט לשוניות עליון */}
      <nav className="max-w-md mx-auto mt-4 grid grid-cols-4 gap-1 bg-gray-900 p-1 rounded-xl border border-gray-800">
        <button onClick={() => setCurrentTab('predictions')} className={`py-2 text-[11px] font-black rounded-lg transition-all ${currentTab === 'predictions' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>⚽ משחקים</button>
        <button onClick={() => setCurrentTab('tournament')} className={`py-2 text-[11px] font-black rounded-lg transition-all ${currentTab === 'tournament' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>👑 הטורניר שלי</button>
        <button onClick={() => setCurrentTab('leaderboard')} className={`py-2 text-[11px] font-black rounded-lg transition-all ${currentTab === 'leaderboard' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>📊 הטבלה</button>
        <button onClick={() => setCurrentTab('rules')} className={`py-2 text-[11px] font-black rounded-lg transition-all ${currentTab === 'rules' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>ℹ️ חוקים</button>
      </nav>

      <main className="max-w-md mx-auto mt-6">
        
        {/* לשונית 1: משחקים וניהול כובשים מחזורי */}
        {currentTab === 'predictions' && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-xl">
              <label className="block text-sm font-bold text-gray-400 mb-2">בחר מחזור ליגה:</label>
              <select value={matchday} onChange={(e) => setMatchday(Number(e.target.value))} className="w-full bg-gray-800 p-3 rounded-lg text-white font-bold border border-gray-700 focus:outline-none">
                {[...Array(26).keys()].map(i => <option key={i+1} value={i+1}>⚽ מחזור {i+1}</option>)}
              </select>
            </div>

            {/* 🔧 פאנל ניהול כובשים מחזורי למנהל המערכת */}
            {isAdminMode && (
              <div className="bg-red-950/20 border border-red-900/40 p-4 rounded-xl space-y-3">
                <h3 className="text-xs font-black text-red-400">⚙️ עדכון שערים בזמן אמת למחזור {matchday}:</h3>
                <div className="flex gap-2">
                  <input type="text" value={adminInputPlayer} onChange={(e) => setAdminInputPlayer(e.target.value)} placeholder="שם השחקן שהבקיע..." className="flex-1 bg-gray-900 border border-gray-700 rounded-lg p-2 text-xs font-bold text-white focus:outline-none"/>
                  <input type="number" value={adminInputGoals} onChange={(e) => setAdminInputGoals(Number(e.target.value))} className="w-16 bg-gray-900 border border-gray-700 rounded-lg p-2 text-xs font-black text-yellow-500 text-center focus:outline-none"/>
                  <button onClick={addPlayerGoalsByAdmin} className="bg-yellow-500 text-gray-950 text-xs font-black px-3 rounded-lg hover:bg-yellow-400">הוסף</button>
                </div>
                {/* רשימת הכובשים שהוזנו במחזור הנוכחי */}
                <div className="space-y-1.5 pt-2">
                  {Object.keys(matchdayGoals).filter(k => k.startsWith(`${matchday}-`)).map(k => (
                    <div key={k} className="flex justify-between items-center bg-gray-950 p-2 rounded-lg border border-gray-800 text-xs">
                      <span className="font-bold text-gray-300">⚽ {k.split('-')[1]}: <span className="text-yellow-500 font-black">{matchdayGoals[k]} שערים</span></span>
                      <button onClick={() => removePlayerGoalsByAdmin(k)} className="text-red-500 font-bold hover:text-red-400 px-1">✕</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <section className="space-y-4">
              {allFi
