<?php

function check(int $number) : bool {
  $firstDigit = intval(substr( $number, 0, 1 ));
  $lastDigit =  intval(substr( $number, -1 ));
  $center =     intval(substr( $number, 1, -1 ));

  return ($firstDigit * $firstDigit + $lastDigit * $lastDigit) == $center;
}

?>
