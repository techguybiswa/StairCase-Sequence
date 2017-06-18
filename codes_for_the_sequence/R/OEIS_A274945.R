#  ----------------------------------------------------------------------------
#  OEIS Sequence A274945
#  Staircase Sequence
#  File: OEIS_A274945.R
#  (c) 2017 - Enrique Pérez Herrero
#  email: eph.project1500@gmail.com
#  ---------------------------------------------------------------------------


#' D_10 Decimal digits of n-th term of A274945
#'
#' @param n The position of an element in a sequence or index
#'
#' @return Number of decimal digits of a(n)
#' @export
#'
#' @examples
#' D_10(120)
D_10 <- function(n) {
  floor((n + 366) / 90) + ifelse(n < 8, -1, 0)
}


#' First Decimal digit of n-th term of A274945
#'
#' @inheritParams D_10
#'
#' @return First decimal digit of a(n), when n > 78
#' @export
#'
#' @examples
#' j(85)
j <- function(n) {
  (n - 4) %% 10
}


#' Last Decimal digit of n-th term of A274945
#'
#' @inheritParams D_10
#'
#' @return Last decimal digit of a(n), when n > 83
#' @export
#'
#' @examples
#' i(200)
i <- function(n) {
  1 + floor(((n - 90 * D_10(n) + 366) / 10))
}


#' n-th term of A274945, by numeric computation
#'
#' @inheritParams D_10
#'
#' @return a(n) when n > 83, with some limitations due multiprecission
#'   calculations.
#' @export
#'
#' @examples
#' a(130)
a <- function(n) {
  i(n) * 10 ^ (D_10(n) - 1) + 10 * (i(n)^2 + j(n)^2) + j(n)
}


#' Check if number n belogs to staircase sequence. This formula is used to brute
#' force calculations.
#'
#' @param a_n An integer number for testing if it belongs to A274945
#'
#' @return Bolean value, TRUE if a_n belongs to staircase sequence, FALSE
#'   otherwise.
#' @export
#'
#' @examples
#' isA274945(110)
isA274945 <- function(a_n) {
  n_string <- as.character(a_n)
  digits_number <- nchar(n_string)
  first_digit <- substr(n_string, start = 1L, stop = 1L)
  last_digit <-
    substr(n_string, start = digits_number, digits_number)
  inner_digits <- substr(n_string, start = 2, digits_number - 1L)
  first_digit <- as.integer(first_digit)
  last_digit <- as.integer(last_digit)
  inner_digits <- as.integer(inner_digits)
  answer <- first_digit ^ 2 + last_digit ^ 2 == inner_digits
  ifelse(is.na(answer), FALSE, answer)
}


#' Order of the first sequence term with k decimal digits. This function is used
#' to generate terms by bruteforce calculations.
#'
#' @param k number of decimal digits. It must hold k > 4.
#'
#' @return index of the first sequence term with k decimal digits.
#' @export
#'
#' @examples
#' first_k_digits_term(10)
first_k_digits_term <- function(k) {
  if (k < 5) {
    stop("To find terms with less digits than 5, use bruteforce")
  }
  (k - 5) * 90 + 84
} 

#' Construct a data.frame with the 90 terms that have k decimal digits.
#'
#' @inheritParams first_k_digits_term
#'
#' @return A data.frame with the 90 terms that have k decimal digits.
#' @export
#'
#' @examples
#' staircase_k_digits(6)
staircase_k_digits <- function(k) {
  A <- expand.grid(i = 1:9, j = 0:9)
  A$n <- first_k_digits_term(k) + 0:89
  A$central_digits <-
    mapply(function(x, y)
      as.character(x ^ 2 + y ^ 2), A$i, A$j)
  A$central_digits_nchar <- nchar(A$central_digits)
  A$central_zeroes <-
    sapply(k - 2 - A$central_digits_nchar, function(x)
      paste0(rep("0", times = x), collapse = ""))
  A$A274945 <- paste0(A$i, A$central_zeroes, A$central_digits, A$i)
  data.frame("n" = A$n, "A274945" = A$A274945)
}


#' Find all terms that are in the sequence less than x, by brute force.
#'
#' @inheritParams isA274945
#'
#' @return A data.frame with terms found.
#' @export
#'
#' @examples
#' bruteforce_find_terms(250)
bruteforce_find_terms <- function(a_n) {
  if (a_n < 110) {
    stop("no terms below a_n value, try a higher a_n")
  }
  A <- 110:a_n
  A <- A[isA274945(A)]
  data.frame("n" = 1:length(A), "A274945" = A)
}


# 
#' Find all terms that have k or less decimal digits
#'
#' @inheritParams first_k_digits_term
#'
#' @return A data.frame with terms found.
#' @export
#'
#' @examples
#' staircase_up_to_k_digits(6)
staircase_up_to_k_digits <- function(k) {
  first_terms <- bruteforce_find_terms(10010 - 1)
  digits <- 5:k
  last_terms <- lapply(digits, function(k) staircase_k_digits(k))
  last_terms <- do.call(rbind, last_terms)
  rbind(first_terms, last_terms)
}

