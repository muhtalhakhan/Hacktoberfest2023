/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * I will use the greedy algorithm to solve this problem, so i can have a better complexity.
 */

const maxProfit = (prices) => {
	let min = prices[0] || 0;
	let maxProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		if (min > prices[i]) {
			min = prices[i];
		}
		let tempProfit = prices[i] - min;
		maxProfit = Math.max(maxProfit, tempProfit);
	}
	return maxProfit;
};
/**
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 *
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 */
