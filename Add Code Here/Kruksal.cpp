#include <bits/stdc++.h> 
using namespace std;
class DisjointSet{
private:
      vector<int>rank,size,parent;
public:
  DisjointSet(int n){
	   rank.resize(n+1,0);
       size.resize(n+1,1);
	   parent.resize(n+1);
	   for(int i=0;i<=n;++i){
		   parent[i]=i;
	   }
  }
int findPar(int node){
	  if(node==parent[node]){
		  return node;
	  }
	return parent[node]=findPar(parent[node]);
}
 void UnionByRank(int u ,int v){
	  int ulp_u=findPar(u);
	  int ulp_v=findPar(v);
	if(ulp_u==ulp_v){
		return ;
	}
	if(rank[ulp_u]>rank[ulp_v]){
		parent[ulp_v]=ulp_u;
	}else if(rank[ulp_u]<rank[ulp_v]){
		parent[ulp_u]=ulp_v;
	}else{
		parent[ulp_u]=ulp_v;
		rank[ulp_v]++;
	}
 }
void UnionBySize(int u ,int v){
	int ulp_u=findPar(u);
	int ulp_v=findPar(v);
	if(ulp_u==ulp_v){
		return ;
	}
	if(size[ulp_v]<size[ulp_u]){
		parent[ulp_v]=ulp_u;
		size[ulp_v]+=size[ulp_u];
	}else{
		parent[ulp_u]=ulp_v;
		size[ulp_u]+=size[ulp_u];
	}
  }
};
bool compare(vector<int>const &a , vector<int> const &b){
	  return a[2]<b[2];
}
int kruskalMST(int n, int m, vector<vector<int>> &graph) {
	    // vector<pair<int,pair<int,int>>>edges;
	    // for(auto it:graph){
		// 	int u=it[0];
		// 	int v=it[1];
		// 	int wt=it[2];
		// edges.push_back({wt,{u,v}});
		// }
		// sort(edges.begin(),edges.end());
		sort(graph.begin(),graph.end(),compare);
		int mstSum=0;
		DisjointSet ds(n);
	 for(auto it:graph){
		 int wt=it[2];
		 int u=it[0];
		 int v=it[1];
	if(ds.findPar(u) != ds.findPar(v)){
		 mstSum+=wt;
		 ds.UnionByRank(u,v);
	}
	 }
	 return mstSum;
}