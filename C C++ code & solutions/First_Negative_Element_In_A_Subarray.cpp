

vector<long long> printFirstNegativeInteger(long long int a[],
                                             long long int n, long long int k) {
           
           
           deque<int> dq;
           vector<long long > v;
           
           for(int i=0;i<k;i++)
           {
               if(a[i]<0)
               dq.push_back(i);
           }
           if(dq.empty())
           v.push_back(0);
           else
           v.push_back(a[dq.front()]);
           
           for(int i=k;i<n;i++)
           {
               if(!dq.empty() and i-dq.front()>=k)
               dq.pop_front();
               
               if(a[i]<0)
               dq.push_back(i);
               
           if(dq.empty())
           v.push_back(0);
           else
           v.push_back(a[dq.front()]);
           
           
           }
           return v;
 }