"""
   :platform: Unix, Windows
   :synopsis: This is a minimal examples of the provided class StaircaseGenerator

.. moduleauthor:: Aron Heck

"""


from codes_for_the_sequence.Python3.staircase_number_generator import StaircaseGenerator

def main():
    """
    Asks for lower and upper bound then print staircase numbers and reset them and print them again
    """
    lower_bound = int(input("Enter lower bound of number range:"))
    upper_bound = int(input("Enter upper bound of number range:"))

    staircase = StaircaseGenerator(lower_bound, upper_bound)
    staircase.generate_staircase_from_lower_to_upper_bound()
    staircase.print_generated_numbers()
    staircase.reset_bounds(upper_bound - lower_bound, upper_bound + lower_bound)
    staircase.generate_staircase_from_lower_to_upper_bound()
    staircase.print_generated_numbers()

if __name__ == "__main__":
    main()

