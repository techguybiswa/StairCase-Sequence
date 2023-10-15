def staircase(n):              #fuction that checks if a number follows staircase pattern
    s=str(n)
    first=int(s[0])            #extracting first digit
    last=int(s[len(s)-1])      #extracting last digit
    mid=int(s[1:len(s)-1])      #extracting middle digits
    if mid==pow(first,2)+pow(last,2):    #comparind middle digits with sum of square
        return True                #return 'True' if it satisfies condition else returns 'False
    else:
        return False

if __name__=="__main__":
    lb=int(input())            #Enter lower bound for the staircase pattern
    ub=int(input())          #Enter upper bound for th staircase pattern
    count=0                   #maintains count of the number that are included in patter
    for i in range(lb,ub+1):  
        if staircase(i):       # checks if the number follow the pattern condition
            count+=1           #incrementing count 
            print(i,end=" ")   #printing number 
    print()
    print("Total numbers present in the given bound are",count)     #printing count
