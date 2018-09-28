/*-------------------------------------------------Generating_The_StairCase_Sequence -----
         |  Author: Biswarup Banerjee
         |  Project Name: The staircase sequence
         |  Purpose: The program generates all the staircase number from 10,000 to 100,000
         *-------------------------------------------------------------------*/


#include <stdio.h>
#include<iostream>
#include<math.h>
using namespace std;

/*-------------------------------------------------------------------------------------------------*/
//The following function counts the number of digits. It takes in a number n as argument
//and returns the number of digits it has.
/*-------------------------------------------------------------------------------------------------*/


int count(int n)
{
    int digitCount=0;
    while (n)
    {
        n/=10;
        digitCount++;
    }
return digitCount;
}

/*-------------------------------------------------------------------------------------------------*/
//The following function contains the core algorithm to detect if a number is staircase number or not.
//It takes an integer n as argument and returns 1 if n is a staircase number and 0 if not.
/*-------------------------------------------------------------------------------------------------*/

int check(int n)
{
    int firstDigit,lastDigit,digitCount,k;
    digitCount=count(n);                    //The algorith goes like the following:
    k=pow(10,digitCount-1);                 //1. Extract the first digit.
    lastDigit=n%10;                        //2. Extract the last digit
    firstDigit=n/k;                          //3. Extract the digits except the first and last digit
    n=n%k;                                  //4. Square the first and last digit and add them.
    n=n/10;                                 //5. Check if the summation equals to the number without the first and last digit
    if(((firstDigit*firstDigit)+(lastDigit*lastDigit))==n)
    {
        return 1;                           //return 1 if it is a staircase number
    }
    else
    {
        return 0;                           //else return 0
    }
}

/*-------------------------------------------------------------------------------------------------*/
//This is the main function.
/*-------------------------------------------------------------------------------------------------*/

int main()
{
  int i,count=0,lowerBound,upperBound;    //count is for counting the total number of staircase numbers
  cout<<"Enter lower bound: ";
  cin>>lowerBound;
  cout<<endl;
  cout<<"Enter upper bound: ";
  cin>>upperBound;
  cout<<endl;
  for(i=lowerBound;i<upperBound;i++)     //Numbers from 10,000 to 100,000 are sent one by one to the function check()
  {                                      //The check() functions check if the number is a staircase number
      if (check(i)==1)                   //If it is a staircase number then the function returns 1
      {
          cout<<i<<" ";                  //And the number is printed in the console
          count++;                       //Also the count variable is incremented
          cout<<endl;
      }
  }
  cout<<"Total number of staircase numbers: "<<count;   //Printing the total number of staircase numbers in the given range
  return 0;

}
