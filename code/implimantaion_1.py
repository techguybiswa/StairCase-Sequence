ar = [] # list to store data
n = int(input("numbe of terms you want (limit 100x100) : "))
for i in range(1,100): 
	sum=0
	for j in range(0,100): 	
		sum = i*i+j*j
		ar.append(int(str(i)+str(sum)+str(j)))
ar.sort()
for k in range(0,n):
	print(ar[k])
			
