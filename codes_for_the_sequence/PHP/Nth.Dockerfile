FROM php:cli

RUN mkdir /script

ADD functions.inc.php /script
ADD php_script_to_get_nth_staircase_number.php /script

RUN chmod +x /script/*.php

WORKDIR /script
CMD php php_script_to_get_nth_staircase_number.php
