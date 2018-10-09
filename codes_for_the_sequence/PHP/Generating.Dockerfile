FROM php:cli

RUN mkdir /script

ADD functions.inc.php /script
ADD php_script_for_generating_staircase_numbers.php /script

RUN chmod +x /script/*.php

WORKDIR /script
CMD php php_script_for_generating_staircase_numbers.php
