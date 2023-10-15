<?php

include "functions.inc.php";

function main() {
  do {
    $lowerBound = readline("Enter lower bound: ");
  }
  while( ! preg_match( "/^\d+$/", $lowerBound ) );
  do {
    $upperBound = readline("Enter upper bound: ");
  }
  while( ! preg_match( "/^\d+$/", $upperBound ) );

  $count = 0;

  for( $i = $lowerBound; $i < $upperBound; $i++ ) {
    if( check( $i ) ) {
      echo $i . "\n";
      $count++;
    }
  }

  echo "Total number of staircase numbers: " . $count . "\n";
}

main();
?>
