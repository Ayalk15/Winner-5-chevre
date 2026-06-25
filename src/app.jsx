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
  const [matchday, setMatchday] = useState(1);
  const [predictions, setPredictions] = useState({});

  // עדכון הניחוש הידני 1 X 2
  const handlePredict = (gameId, value) => {
    setPredictions(prev => {
      const key = `${matchday}-${gameId}`;
      const current = prev[key] || { winner: '', homeScore: 0, awayScore: 0 };
      return {
        ...prev,
        [key]: { ...current, winner: value }
      };
    });
  };

  // עדכון התוצאה המדויקת וחישוב אוטומטי של המנצחת
  const handleScoreChange = (gameId, type, delta) => {
    setPredictions(prev => {
      const key = `${matchday}-${gameId}`;
      const current = prev[key] || { winner: '', homeScore: 0, awayScore: 0 };
      
      let newScore = current[type === 'home' ? 'homeScore' : 'awayScore'] + delta;
      if (newScore < 0) newScore = 0; // מניעת תוצאה שלילית של שערים

      const updated = {
        ...current,
        [type === 'home' ? 'homeScore' : 'awayScore']: newScore
      };

      // חישוב אוטומטי של המנצחת לפי השערים
      if (updated.homeScore > updated.awayScore) updated.winner = '1';
      else if (updated.homeScore < updated.awayScore) updated.winner = '2';
      else updated.winner = 'X';

      return { ...prev, [key]: updated };
    });
  };

  // טבלת מובילים זמנית (עד לחיבור בסיס הנתונים)
  const leaderboard = [
    { name: 'אילן', points: 18 },
    { name: 'דודו', points: 15 },
    { name: 'יוסי', points: 14 },
    { name: 'גיל', points: 11 },
    { name: 'משה', points: 9 }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 pb-10" style={{ direction: 'rtl' }}>
      {/* כותרת ראשית */}
      <header className="max-w-md mx-auto text-center py-6 border-b border-gray-800">
        <h1 className="text-3xl font-extrabold text-yellow-500 drop-shadow-md">
          🏆 5 חבר'ה – ווינר ליגת העל
        </h1>
        <p className="text-gray-400 text-sm mt-2">טבלת הניחושים הרשמית של הקבוצה</p>
      </header>

      <main className="max-w-md mx-auto mt-6 space-y-6">
        
        {/* טבלת מובילים */}
        <section className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-xl">
          <h2 className="text-lg font-bold text-gray-200 mb-3">📊 מצב הטבלה</h2>
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
                  <tr key={idx} className="hover:bg-gray-800/50">
                    <td className="p-3 font-medium text-gray-300">
                      {idx === 0 ? '👑 ' : ''}{user.name}
                    </td>
                    <td className="p-3 text-center font-bold text-yellow-500">{user.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* בורר מחזורים */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-xl">
          <label className="block text-sm font-bold text-gray-400 mb-2">בחר מחזור ליגה:</label>
          <select 
            value={matchday} 
            onChange={(e) => setMatchday(Number(e.target.value))}
            className="w-full bg-gray-800 p-3 rounded-lg text-white font-bold border border-gray-700 focus:outline-none focus:border-yellow-500"
          >
            {[...Array(26).keys()].map(i => (
              <option key={i+1} value={i+1}>⚽ מחזור {i+1}</option>
            ))}
          </select>
        </div>

        {/* משחקים לניחוש לפי המחזור שנבחר */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-gray-200">
            📊 משחקי מחזור {matchday}
          </h2>
          
          {allFixtures[matchday]?.map((game) => {
            const gamePrediction = predictions[`${matchday}-${game.id}`] || { winner: '', homeScore: 0, awayScore: 0 };
            return (
              <div key={game.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-md space-y-3">
                <div className="flex justify-between text-xs text-gray-500 font-semibold">
                  <span>ליגת העל</span>
                  <span>{game.time}</span>
                </div>
                
                {/* שמות הקבוצות */}
                <div className="flex justify-between items-center py-1">
                  <span className="font-bold text-base text-gray-100 w-5/12 text-right break-words">{game.home}</span>
                  <span className="text-gray-600 text-xs font-black px-2">VS</span>
                  <span className="font-bold text-base text-gray-100 w-5/12 text-left break-words">{game.away}</span>
                </div>

                {/* מערכת בחירת תוצאה מדויקת עם פלוס ומינוס */}
                <div className="flex justify-between items-center bg-gray-950 p-3 rounded-xl border border-gray-800/80 mt-1">
                  <span className="text-xs font-bold text-gray-400">תוצאה מדויקת:</span>
                  <div className="flex items-center gap-3" style={{ direction: 'ltr' }}>
                    
                    {/* מחוונים לקבוצת החוץ */}
                    <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                      <button type="button" onClick={() => handleScoreChange(game.id, 'away', -1)} className="px-2.5 py-1 text-gray-400 hover:bg-gray-750 hover:text-white font-black text-sm">-</button>
                      <span className="px-3 py-1 font-black text-yellow-500 min-w-[28px] text-center bg-gray-900 text-base border-x border-gray-700">
                        {gamePrediction.awayScore}
                      </span>
                      <button type="button" onClick={() => handleScoreChange(game.id, 'away', 1)} className="px-2.5 py-1 text-gray-400 hover:bg-gray-750 hover:text-white font-black text-sm">+</button>
                    </div>
                    
                    <span className="text-gray-600 font-black text-sm">:</span>
                    
                    {/* מחוונים לקבוצת הבית */}
                    <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                      <button type="button" onClick={() => handleScoreChange(game.id, 'home', -1)} className="px-2.5 py-1 text-gray-400 hover:bg-gray-750 hover:text-white font-black text-sm">-</button>
                      <span className="px-3 py-1 font-black text-yellow-500 min-w-[28px] text-center bg-gray-900 text-base border-x border-gray-700">
                        {gamePrediction.homeScore}
                      </span>
                      <button type="button" onClick={() => handleScoreChange(game.id, 'home', 1)} className="px-2.5 py-1 text-gray-400 hover:bg-gray-750 hover:text-white font-black text-sm">+</button>
                    </div>

                  </div>
                </div>

                {/* כפתורי ווינר 1 X 2 */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {['1', 'X', '2'].map((option) => {
                    const isSelected = gamePrediction.winner === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handlePredict(game.id, option)}
                        className={`py-2 text-xs font-black rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-yellow-500 border-yellow-500 text-gray-950 scale-105 shadow-md'
                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-750'
                        }`}
                      >
                        {option === '1' ? '1 (בית)' : option === 'X' ? 'X (תיקו)' : '2 (חוץ)'}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* כפתור שמירה */}
        <button 
          onClick={() => alert('המשחקים והתוצאות עודכנו בהצלחה! השלב הבא הוא קישור ל-Firebase כדי להפוך אותו לאתר חי באמת.')}
          className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-950 font-black py-3.5 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all text-center block text-lg mt-8"
        >
          💾 שמור את הניחושים שלי
        </button>
      </main>
    </div>
  );
}
