# Staircase numbers - PHP language

## Info

Written in PHP7, in HacktoberFest 2018

## PHP CLI way

### Generating staircase numbers between 2 values

  php php_script_for_generating_staircase_numbers.php

### Generating staircase numbers between 2 values

  php_script_to_get_nth_staircase_number.php

## Docker way (same but encapsulate)

### Generating staircase numbers between 2 values

  # Build
  docker build -f Generating.Dockerfile -t staircase-generating .

  # Run
  docker run -ti staircase-generating

### Generating staircase numbers between 2 values

  # Build
  docker build -f Nth.Dockerfile -t staircase-nth .

  # Run
  docker run -ti staircase-nth
