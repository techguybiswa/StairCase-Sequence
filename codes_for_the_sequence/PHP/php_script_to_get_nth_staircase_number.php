<?php

include "functions.inc.php";

function main() {
  do {
    $nth = readline("Nth Staircase number wanted: ");
  }
  while( ! preg_match( "/^\d+$/", $nth ) );

  $count = 0;
  $step = 110 - 1;

  while( $count < $nth ) {
    if( check( ++$step ) ) {
      $count++;
    }
  }

  echo $nth . "th staircase number is: " . $step . "\n";
}

main();
?>
