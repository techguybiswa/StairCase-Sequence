from codes_for_the_sequence.Python3.staircase_number_generator import StaircaseGenerator

if __name__ == "__main__":
    lower_bound = int(input("Enter lower bound of number range:"))
    upper_bound = int(input("Enter upper bound of number range:"))

    staircase = StaircaseGenerator(lower_bound, upper_bound)
    staircase.generate_staircase_from_lower_to_upper_bound()
    staircase.print_generated_numbers()