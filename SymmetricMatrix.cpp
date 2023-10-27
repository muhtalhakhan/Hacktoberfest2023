#include <iostream>
#include <vector>

bool isSymmetric(const std::vector<std::vector<int>>& M) 
{
    int rw = M.size();
    int col = M[0].size();

    if (rw != col) 
    {
        // A non-square matrix can't be symmetric.
        return false;
    }

    for (int i = 0; i < rw; ++i) 
    {
        for (int j = 0; j < col; ++j) 
        {
            if (M[i][j] != M[j][i]) 
            {
                // If any element doesn't match its symmetric counterpart, it's not symmetric.
                return false;
            }
        }
    }

    // If all elements match their symmetric counterparts, the matrix is symmetric.
    return true;
}

int main() 
{
    std::vector<std::vector<int>> M = 
    {
        {9, 8, 3},
        {8, 5, 2},
        {3, 2, 7}
    };

    if (isSymmetric(M)) 
    {
        std::cout << "The matrix is symmetric." << std::endl;
    } 
    else 
    {
        std::cout << "The matrix is not symmetric." << std::endl;
    }

    return 0;
}
