import React, { useState, useEffect } from 'react';

// מאגר כל 36 מחזורי הליגה המלאים (26 ליגה סדירה + 10 מחזורי פלייאוף)
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
{ id: 4, home: 'הפועל ק"ש', away: 'bני סכנין', time: '24/10/26' },
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
{ id: 2, base: 'בני סכנין', away: 'הפועל חיפה', time: '02/01/27' },
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
{ id: 3, home: 'bני סכנין', away: 'מכבי ת"א', time: '16/01/27' },
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
{ id: 3, home: 'מכבי חיפה', away: 'bני סכנין', time: '20/02/27' },
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
 ],
27: [
{ id: 1, home: 'מקום 1', away: 'מקום 6', time: '13/03/27' },
{ id: 2, home: 'מקום 2', away: 'מקום 5', time: '13/03/27' },
{ id: 3, home: 'מקום 3', away: 'מקום 4', time: '13/03/27' },
{ id: 4, home: 'מקום 7', away: 'מקום 11', time: '13/03/27' },
{ id: 5, home: 'מקום 8', away: 'מקום 13', time: '13/03/27' },
{ id: 6, home: 'מקום 9', away: 'מקום 12', time: '13/03/27' },
{ id: 7, home: 'מקום 10', away: 'מקום 14', time: '13/03/27' }
 ],
28: [
{ id: 1, home: 'מקום 6', away: 'מקום 4', time: '20/03/27' },
{ id: 2, home: 'מקום 5', away: 'מקום 3', time: '20/03/27' },
{ id: 3, home: 'מקום 1', away: 'מקום 2', time: '20/03/27' },
{ id: 4, home: 'מקום 11', away: 'מקום 14', time: '20/03/27' },
{ id: 5, home: 'מקום 12', away: 'מקום 10', time: '20/03/27' },
{ id: 6, home: 'מקום 13', away: 'מקום 9', time: '20/03/27' },
{ id: 7, home: 'מקום 7', away: 'מקום 8', time: '20/03/27' }
 ],
29: [
{ id: 1, home: 'מקום 2', away: 'מקום 6', time: '03/04/27' },
{ id: 2, home: 'מקום 3', away: 'מקום 1', time: '03/04/27' },
{ id: 3, home: 'מקום 4', away: 'מקום 5', time: '03/04/27' },
{ id: 4, home: 'מקום 8', away: 'מקום 11', time: '03/04/27' },
{ id: 5, home: 'מקום 9', away: 'מקום 7', time: '03/04/27' },
{ id: 6, home: 'מקום 10', away: 'מקום 13', time: '03/04/27' },
{ id: 7, home: 'מקום 14', away: 'מקום 12', time: '03/04/27' }
 ],
30: [
{ id: 1, home: 'מקום 6', away: 'מקום 5', time: '10/04/27' },
{ id: 2, home: 'מקום 1', away: 'מקום 4', time: '10/04/27' },
{ id: 3, home: 'מקום 2', away: 'מקום 3', time: '10/04/27' },
{ id: 4, home: 'מקום 11', away: 'מקום 12', time: '10/04/27' },
{ id: 5, home: 'מקום 13', away: 'מקום 14', time: '10/04/27' },
{ id: 6, home: 'מקום 7', away: 'מקום 10', time: '10/04/27' },
{ id: 7, home: 'מקום 8', away: 'מקום 9', time: '10/04/27' }
 ],
31: [
{ id: 1, home: 'מקום 3', away: 'מקום 6', time: '17/04/27' },
{ id: 2, home: 'מקום 4', away: 'מקום 2', time: '17/04/27' },
{ id: 3, home: 'מקום 5', away: 'מקום 1', time: '17/04/27' },
{ id: 4, home: 'מקום 9', away: 'מקום 11', time: '17/04/27' },
{ id: 5, home: 'מקום 10', away: 'מקום 8', time: '17/04/27' },
{ id: 6, home: 'מקום 14', away: 'מקום 7', time: '17/04/27' },
{ id: 7, home: 'מקום 12', away: 'מקום 13', time: '17/04/27' }
 ],
32: [
{ id: 1, home: 'מקום 6', away: 'מקום 1', time: '24/04/27' },
{ id: 2, home: 'מקום 5', away: 'מקום 2', time: '24/04/27' },
{ id: 3, home: 'מקום 4', away: 'מקום 3', time: '24/04/27' },
{ id: 4, home: 'מקום 11', away: 'מקום 13', time: '24/04/27' },
{ id: 5, home: 'מקום 7', away: 'מקום 12', time: '24/04/27' },
{ id: 6, home: 'מקום 8', away: 'מקום 14', time: '24/04/27' },
{ id: 7, home: 'מקום 9', away: 'מקום 10', time: '24/04/27' }
 ],
33: [
{ id: 1, home: 'מקום 4', away: 'מקום 6', time: '01/05/27' },
{ id: 2, home: 'מקום 3', away: 'מקום 5', time: '01/05/27' },
{ id: 3, home: 'מקום 2', away: 'מקום 1', time: '01/05/27' },
{ id: 4, home: 'מקום 10', away: 'מקום 11', time: '01/05/27' },
{ id: 5, home: 'מקום 14', away: 'מקום 9', time: '01/05/27' },
{ id: 6, home: 'מקום 12', away: 'מקום 8', time: '01/05/27' },
{ id: 7, home: 'מקום 13', away: 'מקום 7', time: '01/05/27' }
 ],
34: [
{ id: 1, home: 'מקום 6', away: 'מקום 2', time: '08/05/27' },
{ id: 2, home: 'מקום 1', away: 'מקום 3', time: '08/05/27' },
{ id: 3, home: 'מקום 5', away: 'מקום 4', time: '08/05/27' }
 ],
35: [
{ id: 1, home: 'מקום 5', away: 'מקום 6', time: '15/05/27' },
{ id: 2, home: 'מקום 4', away: 'מקום 1', time: '15/05/27' },
{ id: 3, home: 'מקום 3', away: 'מקום 2', time: '15/05/27' }
 ],
36: [
{ id: 1, home: 'מקום 6', away: 'מקום 3', time: '22/05/27' },
{ id: 2, home: 'מקום 2', away: 'מקום 4', time: '22/05/27' },
{ id: 3, home: 'מקום 1', away: 'מקום 5', time: '22/05/27' }
 ]
};

const ISRAELI_TEAMS = ['מכבי ת"א', 'מכבי חיפה', 'בית"ר י-ם', 'הפועל ב"ש', 'הפועל ת"א', 'מכבי נתניה', 'הפועל חיפה', 'מכבי פ"ת', 'בני סכנין', 'עירוני דורות טבריה', 'הפועל ק"ש', 'הפועל פ"ת', 'הפועל ר"ג', 'הפועל י-ם'];

// פונקציות עזר גלובליות קבועות מחוץ לרכיב
const getGameLockDeadline = (dateStr) => {
if (!dateStr || dateStr === 'יעודכן בהמשך') return null;
const parts = dateStr.split('/');
if (parts.length !== 3) return null;
const day = parseInt(parts[0], 10);
const month = parseInt(parts[1], 10) - 1;
const year = 2000 + parseInt(parts[2], 10);
const gameDate = new Date(year, month, day);
const lockDate = new Date(gameDate.getTime() - 24 * 60 * 60 * 1000);
lockDate.setHours(0, 0, 0, 0);
return lockDate;
};

const isGameLockedByDate = (dateStr) => {
const deadline = getGameLockDeadline(dateStr);
if (!deadline) return false;
return new Date() >= deadline;
};

const isTournamentLocked = () => {
const startOfSeason = new Date(2026, 7, 22);
startOfSeason.setHours(0, 0, 0, 0);
return new Date() >= startOfSeason;
};

export default function App() {
const [currentTab, setCurrentTab] = useState('predictions');
const [matchday, setMatchday] = useState(1);
const [predictions, setPredictions] = useState({});
const [tournamentPredictions, setTournamentPredictions] = useState({ champion: '', topScorer: '', topAssists: '', favoriteTeam: '' });
const [actualScores, setActualScores] = useState({});
const [isAdminMode, setIsAdminMode] = useState(false);
const [actualTournament, setActualTournament] = useState({ champion: '', topScorer: '', topAssists: '' });
const [matchdayGoals, setMatchdayGoals] = useState({});
const [adminInputPlayer, setAdminInputPlayer] = useState('');
const [adminInputGoals, setAdminInputGoals] = useState(0);
const [jokers, setJokers] = useState({});
const [countdownText, setCountdownText] = useState('');

// שעון עצר דינמי
useEffect(() => {
const updateTimer = () => {
const fixtures = allFixtures[matchday];
if (!fixtures || fixtures.length === 0) {
setCountdownText('');
return;
}
let earliestDeadline = null;
fixtures.forEach(g => {
const d = getGameLockDeadline(g.time);
if (d && (!earliestDeadline || d < earliestDeadline)) {
earliestDeadline = d;
}
});

if (!earliestDeadline) {
setCountdownText('');
return;
}

const diff = earliestDeadline.getTime() - new Date().getTime();
if (diff <= 0) {
setCountdownText('🔒 מחזור זה נעול לניחושים!');
} else {
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
setCountdownText(⏱️ הזנת ניחושים ננעלת בעוד: ${days} ימים, ${hours} שעות ו-${minutes} דקות`);
}
};

updateTimer();
const interval = setInterval(updateTimer, 60000);
return () => clearInterval(interval);
}, [matchday]);

const handlePredict = (gameId, value) => {
setPredictions(prev => {
const key = ``${matchday}-${gameId};
const current = prev[key] || { winner: '', homeScore: 0, awayScore: 0 };
return { ...prev, [key]: { ...current, winner: value } };
});
};

const handleScoreChange = (gameId, type, delta) => {
setPredictions(prev => {
const key = ``${matchday}-${gameId};
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
const key = ``${matchday}-${gameId};
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
const key = ``${matchday}-${gameId};
const current = prev[key] || { homeScore: 0, awayScore: 0, winner: 'X', isFinished: false };
return { ...prev, [key]: { ...current, isFinished: !current.isFinished } };
});
};

const toggleJoker = (gameId, isLocked) => {
if (isLocked) return;
setJokers(prev => {
if (prev[matchday] === gameId) {
const updated = { ...prev };
delete updated[matchday];
return updated;
}
return { ...prev, [matchday]: gameId };
});
};

const addPlayerGoalsByAdmin = () => {
if (!adminInputPlayer.trim()) return;
const key = ``${matchday}-${adminInputPlayer.trim()};
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
const [md, gameId] = key.split('-');
let localPoints = 0;

if (pred.winner === actual.winner) {
localPoints += 2;
if (Number(pred.homeScore) === Number(actual.homeScore) && Number(pred.awayScore) === Number(actual.awayScore)) {
exactMatches++;
localPoints += 4;
} else {
directionMatches++;
}
} else {
misses++;
}

if (jokers[md] && String(jokers[md]) === String(gameId)) {
localPoints *= 2;
}
matchPoints += localPoints;
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

const getMatchdayScoreOnly = () => {
let matchdayPoints = 0;
allFixtures[matchday]?.forEach(game => {
const key = ``${matchday}-${game.id};
const actual = actualScores[key];
const pred = predictions[key];
if (actual && actual.isFinished && pred) {
let p = 0;
if (pred.winner === actual.winner) {
p += 2;
if (Number(pred.homeScore) === Number(actual.homeScore) && Number(pred.awayScore) === Number(actual.awayScore)) p += 4;
}
if (jokers[matchday] && String(jokers[matchday]) === String(game.id)) {
p *= 2;
}
matchdayPoints += p;
}
});

const currentScorer = tournamentPredictions?.topScorer || '';
if (currentScorer.trim()) {
const goalKey = ``${matchday}-${currentScorer.trim()};
if (matchdayGoals[goalKey]) {
matchdayPoints += matchdayGoals[goalKey] * 2;
}
}
return matchdayPoints;
};

const stats = getLiveStatistics();
const currentMatchdayScore = getMatchdayScoreOnly();

let goalsPoints = 0;
const currentScorer = tournamentPredictions?.topScorer || '';
if (currentScorer.trim()) {
Object.keys(matchdayGoals).forEach(key => {
const parts = key.split('-');
if (parts.length >= 2 && parts[1].trim() === currentScorer.trim()) {
goalsPoints += (matchdayGoals[key] || 0) * 2;
}
});
}

const userTeamSuffix = tournamentPredictions.favoriteTeam ? (${tournamentPredictions.favoriteTeam}): ''; const leaderboard = stats.totalPoints &gt; 0 ? [{ name:אייל אשכנזי${userTeamSuffix}, points: stats.totalPoints, trend: '–' }] : [];

return (
<div className="min-h-screen bg-gray-950 text-white p-4 pb-24" style={{ direction: 'rtl' }}>

<div className="sticky top-0 bg-gray-950/95 backdrop-blur-md pt-2 pb-3 z-50 max-w-md mx-auto border-b border-gray-900/50">
<header className="text-center py-2">
<h1 className="text-2xl font-extrabold text-yellow-500 drop-shadow-md">🏆 10 חבר'ה - יוספטל</h1>
{isAdminMode && <span className="inline-block bg-red-950 text-red-400 border border-red-900 font-bold text-[10px] px-2 py-0.5 rounded-full mt-1 animate-pulse">🛠️ פאנל מנהל פעיל</span>}
</header>

<nav className="grid grid-cols-5 gap-0.5 bg-gray-900 p-1 rounded-xl border border-gray-800">
<button type="button" onClick={() => setCurrentTab('predictions')} className={py-2 text-[9px] font-black rounded-lg transition-all${currentTab === 'predictions' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}}&gt;⚽ משחקים&lt;/button&gt; &lt;button type="button" onClick={() =&gt; setCurrentTab('tournament')} className={py-2 text-[9px] font-black rounded-lg transition-all latex
{currentTab === 'tournament' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}&gt;👑 הטורניר שלי&lt;/button&gt; &lt;button type="button" onClick={() =&gt; setCurrentTab('stats')} className={`py-2 text-[9px] font-black rounded-lg transition-all 

{currentTab === 'stats' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}}&gt;📈 סטטיסטיקה&lt;/button&gt; &lt;button type="button" onClick={() =&gt; setCurrentTab('leaderboard')} className={py-2 text-[9px] font-black rounded-lg transition-all latex
{currentTab === 'leaderboard' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}&gt;📊 הטבלה&lt;/button&gt; &lt;button type="button" onClick={() =&gt; setCurrentTab('rules')} className={`py-2 text-[9px] font-black rounded-lg transition-all 

{currentTab === 'rules' ? 'bg-yellow-500 text-gray-950 shadow-md' : 'text-gray-400'}`}>ℹ️ חוקים</button>
</nav>
</div>

<div className="max-w-md mx-auto mt-4">

{currentTab === 'predictions' && (
<div className="space-y-6">
<div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-xl space-y-3">
<div>
<label className="block text-sm font-bold text-gray-400 mb-1.5">בחר מחזור ליגה:</label>
<select value={matchday} onChange={(e) => setMatchday(Number(e.target.value))} className="w-full bg-gray-800 p-3 rounded-lg text-white font-bold border border-gray-700 focus:outline-none">
{[...Array(36).keys()].map(i => <option key={i+1} value={i+1}>{i+1 >= 27 ? 🔥 פלייאוף - מחזור ${i+1}:⚽ מחזור ${i+1}}</option>)}
</select>
</div>

{countdownText && (
<div className={p-2 rounded-lg text-center text-xs font-black border ${countdownText.includes('🔒') ? 'bg-red-950/40 border-red-900 text-red-400' : 'bg-amber-950/30 border-amber-900/60 text-amber-400'}`}>
{countdownText}
</div>
)}

<div className="bg-gray-950/80 p-2.5 rounded-lg border border-gray-800 text-center text-xs font-bold text-gray-300">
📊 ניקוד שנצבר עבורך במחזור {matchday}: <span className="text-yellow-500 text-sm font-black">{currentMatchdayScore} נק'</span>
</div>
</div>

{isAdminMode && (
<div className="bg-red-950/20 border border-red-900/40 p-4 rounded-xl space-y-3">
<h3 className="text-xs font-black text-red-400">⚙️ עדכון שערים למחזור {matchday}:</h3>
<div className="flex gap-2">
<input type="text" value={adminInputPlayer} onChange={(e) => setAdminInputPlayer(e.target.value)} placeholder="שם השחקן שהבקיע..." className="flex-1 bg-gray-900 border border-gray-700 rounded-lg p-2 text-xs font-bold text-white focus:outline-none"/>
<input type="number" value={adminInputGoals} onChange={(e) => setAdminInputGoals(Number(e.target.value))} className="w-16 bg-gray-900 border border-gray-700 rounded-lg p-2 text-xs font-black text-yellow-500 text-center focus:outline-none"/>
<button type="button" onClick={addPlayerGoalsByAdmin} className="bg-yellow-500 text-gray-950 text-xs font-black px-3 rounded-lg">הוסף</button>
</div>
<div className="space-y-1.5 pt-1">
{Object.keys(matchdayGoals).filter(k => k.startsWith(``${matchday}-`)).map(k => (
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
const gameKey = ${matchday}-${game.id};
const gamePrediction = predictions[gameKey] || { winner: '', homeScore: 0, awayScore: 0 };
const actual = actualScores[gameKey] || { homeScore: 0, awayScore: 0, winner: 'X', isFinished: false };

const isLocked = isGameLockedByDate(game.time) || actual.isFinished;
const isCurrentJoker = jokers[matchday] === game.id;

let pointsEarned = null;
if (actual.isFinished && gamePrediction.winner) {
pointsEarned = 0;
if (gamePrediction.winner === actual.winner) {
pointsEarned = (Number(gamePrediction.homeScore) === Number(actual.homeScore) && Number(gamePrediction.awayScore) === Number(actual.awayScore)) ? 6 : 2;
if (isCurrentJoker) pointsEarned *= 2;
}
}

return (
<div key={game.id} className={border rounded-xl p-4 shadow-md space-y-3 transition-all ${isCurrentJoker ? 'bg-gradient-to-br from-gray-900 to-amber-950/40 border-yellow-600/60' : 'bg-gray-900 border-gray-800'}}&gt; &lt;div className="flex justify-between items-center text-xs text-gray-500 font-semibold"&gt; &lt;span&gt;{matchday &gt;= 27 ? 'פלייאוף ליגת ווינר' : 'ליגת העל'} • {game.time}&lt;/span&gt; &lt;div className="flex items-center gap-2"&gt; &lt;button type="button" disabled={isLocked} onClick={() =&gt; toggleJoker(game.id, isLocked)} className={px-2 py-0.5 rounded text-[10px] font-black transition-all border ${isCurrentJoker ? 'bg-yellow-500 border-yellow-500 text-gray-950 scale-105' : 'bg-gray-950 border-gray-800 text-gray-500 hover:text-gray-300 disabled:opacity-40'}}
>
{isCurrentJoker ? "🃏 ג'וקר פעיל!" : "🃏 סמן ג'וקר"}
</button>
{actual.isFinished ? (
<span className="bg-red-950 text-red-400 border border-red-900 text-[10px] px-2 py-0.5 rounded-md font-bold">🛑 הסתיים</span>
) : isGameLockedByDate(game.time) ? (
<span className="bg-amber-950 text-amber-400 border border-amber-900 text-[10px] px-2 py-0.5 rounded-md font-bold">🔒 נעול</span>
) : null}
</div>
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
<span className={text-xs font-black px-2 py-0.5 rounded ${pointsEarned > 0 ? 'bg-green-950 text-green-400' : 'bg-gray-800 text-gray-400'}}&gt; {pointsEarned &gt; 0 ?👍 זכית (+${pointsEarned}) : "0 נק'"}
</span>
</div>
)}

{!isLocked ? (
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
) : (
<div className="bg-gray-950/40 p-2 text-center rounded-lg border border-gray-900 text-xs text-gray-400">
הניחוש השמור שלך: <span className="text-white font-bold">{gamePrediction.winner ? ${gamePrediction.homeScore}-${gamePrediction.awayScore} (${gamePrediction.winner})` : 'לא ניחשת'}</span>
</div>
)}

<div className="grid grid-cols-3 gap-2 pt-1">
{['1', 'X', '2'].map((option) => (
<button key={option} type="button" disabled={isLocked} onClick={() => handlePredict(game.id, option)} className={py-2 text-xs font-black rounded-lg border transition-all${gamePrediction.winner === option ? 'bg-yellow-500 border-yellow-500 text-gray-950 scale-105 shadow-md' : 'bg-gray-800 border-gray-700 text-gray-300 disabled:opacity-50'}`}>
{option === '1' ? '1 (בית)' : option === 'X' ? 'X (תיקו)' : '2 (חוץ)'}
</button>
))}
</div>

{isLocked && (
<div className="bg-gray-950 border border-gray-800/80 rounded-xl p-3 mt-2 space-y-1.5">
<span className="text-[10px] font-black text-yellow-500 tracking-wide block">👥 ניחושי החבר'ה ביוספטל:</span>
<div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
<div className="bg-gray-900/50 p-1.5 rounded border border-gray-900/80">👨‍⚕️ דודו: <span className="text-white font-bold">2 - 1 (1)</span></div>
<div className="bg-gray-900/50 p-1.5 rounded border border-gray-900/80">👩‍⚕️ אביטל: <span className="text-white font-bold">1 - 1 (X)</span></div>
<div className="bg-gray-900/50 p-1.5 rounded border border-gray-900/80">🪖 דולב: <span className="text-white font-bold">0 - 2 (2)</span></div>
<div className="bg-gray-900/50 p-1.5 rounded border border-gray-900/80">🚕 גל נהג: <span className="text-white font-bold">3 - 1 (1)</span></div>
</div>
</div>
)}

{isAdminMode && (
<div className="mt-3 pt-3 border-t border-red-900/40 bg-red-950/20 p-3 rounded-xl border border-red-900/30 space-y-3">
<div className="flex justify-between items-center">
<span class
