int n;

cin>>n;

int count=0;

for (int i=5;i<=n;i*=5){ count+=n/i;

}

cout<< count;

//5 contributes 1 zero.
//25 can contribute 2 Zeros.
//keep on dividing by 5s power.
//on dividing by 5 we get no. of elements that are divisible by 5
eg:-26
26/5=5
26/25=1
total 6 zeros