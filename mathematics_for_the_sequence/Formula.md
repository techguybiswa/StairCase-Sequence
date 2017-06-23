# Formula for Staircase Sequence


This formula works for $n \geq 84$.

$$a(n) = i(n) \cdot {10}^{D_{10}(n) - 1} + 10 \cdot (i(n)^2 + j(n)^2) + j(n)$$

Where:

* $a(n)$ is n-th term of `A274945` sequence.

* $D_{10}(n)$ is the number of decimal digits of $a(n)$

$$ D_{10}(n) = \Bigl{\lfloor} \frac{n + 366}{90} \Bigr{\rfloor}$$

* $i(n)$ is the first decimal digit of $a(n)$.

$$i(n) = 1+\Bigl{\lfloor} \frac{n - 90 \cdot D_{10}(n) + 366}{10} \Bigr{\rfloor}$$

$$ i(n) \in \{1, 2, \dots, 9 \} $$

* $j(n)$ is the last decimal digit of $a(n)$.

$$j(n) = (n-4) - 10 \cdot \Bigl{\lfloor} \frac{n - 4}{10} \Bigr{\rfloor}$$

$$ j(n) \in \{0, 1, \dots, 9 \} $$

## Links:

* [Floor and ceiling functions](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions)



