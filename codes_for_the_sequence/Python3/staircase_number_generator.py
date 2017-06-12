"""
.. module:: staircase_number_generator
   :platform: Unix, Windows
   :synopsis: This python library is meant to be used in order to generate Biswarup Banerjees staircase numbers.

.. moduleauthor:: Aron Heck

"""


class StaircaseGenerator(object):
    """ This class is an abstraction layer to generate staircase numbers between n0 and n1
    ... note: Initialize this object with the upper and lower bound of the desired number range
    """

    __lower_bound = 0
    __upper_bound = 0
    __generated_numbers = []
    __legal = True
    __print_distance = 1000
    __percentage = 10

    def __init__(self, lower_bound : int, upper_bound : int):
        """
        This method sets the  lower and upper bounds
        :param lower_bound:  lower bound of the number range
        :param upper_bound:  upper bound of the number range
        """
        self.__lower_bound = lower_bound
        self.__upper_bound = upper_bound
        self.__check_bounds_for_range_restrictions()

    def __check_bounds_for_range_restrictions(self):
        if self.__lower_bound < 100 or self.__upper_bound < 100:
            self.__legal = False
            print("ERROR: One or both of your bounds are either negative or less then three digits long")
        if self.__lower_bound > self.__upper_bound:
            self.__legal = False
            print("ERROR: Your lower bound is greater then your upper bound")

    def generate_staircase_from_lower_to_upper_bound(self):
        """
        Call the methods needed to generate the staircase numbers and fill the staircase number list
        """
        current_percentage_factor = 1
        if self.__legal:
            for i in range(self.__lower_bound, self.__upper_bound):
                if  i % (int(self.__upper_bound / self.__percentage)) == 0 and i != 0 and self.__upper_bound - self.__lower_bound >= self.__print_distance:
                    print (current_percentage_factor * self.__percentage, "% calculated")
                    current_percentage_factor += 1
                if StaircaseGenerator.__check_single_number(i):
                    self.__generated_numbers.append(i)

    @staticmethod
    def __check_single_number(number_to_check):
        """
        Check a single number whether it is a staircase number or not
        :param number_to_check: the number that is to be checked
        :return: True if number is staircase number, False if it is not
        """
        number_of_digits = len(str(abs(number_to_check)))
        first_digit = int(str(abs(number_to_check))[:1])
        last_digit = int(str(abs(number_to_check))[number_of_digits-1: number_of_digits])
        all_other_digits = int(str(abs(number_to_check))[1: number_of_digits-1])
        return (((first_digit * first_digit) + (last_digit * last_digit)) == all_other_digits)

    def reset_bounds(self, lower_bound: int, upper_bound: int):
        """
        Reset all class attributed to new bounds
        :param lower_bound: new lower bound
        :param upper_bound: new upper bound
        """
        self.__lower_bound = lower_bound
        self.__upper_bound = upper_bound
        self.__legal = True
        self.__generated_numbers = []
        self.__check_bounds_for_range_restrictions()

    def print_generated_numbers(self):
        """
        Print numbers nicely formated with additional information
        """
        print("Staircase numbers in range", self.__lower_bound, "to", self.__upper_bound)
        for i in range(len(self.__generated_numbers)):
            print(i+1, "--->", self.__generated_numbers[i])
        if self.__generated_numbers:
            print("Total number of staircase numbers:", i+1)
