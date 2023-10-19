#include <bits/stdc++.h>
using namespace std;

void merge(int array[], int const left, int const mid, int const right)
{
    int nL = mid - left + 1;
    int nR = right - mid;

    int *arrL = new int[nL];
    int *arrR = new int[nR];

    for (int i = 0; i < nL; i++)
        arrL[i] = array[left + i];
    for (int j = 0; j < nR; j++)
        arrR[j] = array[mid + 1 + j];

    int iL = 0, iR = 0;
    int I = left; // Initial index of merged array

    while (iL < nL && iR < nR)
    {
        if (arrL[iL] <= arrR[iR])
        {
            array[I] = arrL[iL];
            iL++;
        }
        else
        {
            array[I] = arrR[iR];
            iR++;
        }
        I++;
    }
    
    while (iL < nL)
    {
        array[I] = arrL[iL];
        iL++; I++;
    }
    
    while (iR < nR)
    {
        array[I] = arrR[iR];
        iR++; I++;
    }
    delete[] arrL;
    delete[] arrR;
}

void mergeSort(int array[], int const begin, int const end)
{
    if (begin >= end)
        return;

    int mid = begin + (end - begin) / 2;
    mergeSort(array, begin, mid);
    mergeSort(array, mid + 1, end);
    merge(array, begin, mid, end);
}

int main()
{
    int n;
    cin>>n;
    int arr[n];
    for (int i=0; i<n; i++)
    {
        cin>>arr[i];
    }

    mergeSort(arr, 0, n - 1);

    for (int i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }
    return 0;
}