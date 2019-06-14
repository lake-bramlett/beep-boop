# _Beep Boop_

#### _Week 3 Code Review, 14 June 2019_

#### By _**Lake Bramlett**_

## Description

_'Beep Boop' is a client-side program that takes a user inputted number and returns a count up to said number, replacing certain integers with strings of text based on preset logic and conditions. Visit lake-bramlett.github.io/beep-boop for the hosted version of this program._

## Setup/Installation Requirements

* _Clone https://github.com/lake-bramlett/beep-boop repo locally_
* _Open up index.html in preferred web browser or equivalent software_
* _Use preferred text editor to edit_
* _Make any pull requests to https://github.com/lake-bramlett/beep-boop ._

## Specs
| Spec        | Input           | Output  |
| ------------- |:-------------:| -----:|
| Program does nothing on a non-numerical input value      | 'three' | NaN |
| Program creates sequence of numbers counting up to input value | 4 | 1, 2, 3, 4|
| Program returns 'Beep!' for all singe-digit 1 values      | 1      |   'Beep!' |
| Program returns 'Boop!' for all singe-digit 2 values | 2    |    'Boop!' |
| Program returns "I'm sorry, Dave. I'm afraid I can't do that." for all single-digit 3 values  | 3 | "I'm sorry, Dave. I'm afraid I can't do that." |
| Program uses prior logic in number sequence for singe-digit values    | 0, 1, 2, 3, 4, 5    | 0, "Beep!", "Boop!",  "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5 |
| Program applies logic to multiple-digit values with the highest numerical condition taking priority (e.g. logic for values with 3, logic for values with 2, etc.) |  7, 8, 9, 10, 11, 12, 13, 14, 15    |  7, 8, 9, "Beep!", "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", 14, 15|

## Known Bugs

_There are no known bugs at this time (14 June 2019)._

## Support and contact details

_email: lake.bramlett@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_
* _Git_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Lake Bramlett_**
