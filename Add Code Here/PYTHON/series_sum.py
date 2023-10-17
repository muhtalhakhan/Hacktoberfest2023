#Write a python function to add the first ‘n’ terms of the series:
#1+1/2-1/3+1/4-1/5+……………………
def series_sum():
    n=int(input('Enter no of terms:'))
    c=1
    for i in range(2,n+1):
        k=1/i
        if i%2==0:
            c=c+k
        else:
            c=c-k
    print(c)
series_sum()
