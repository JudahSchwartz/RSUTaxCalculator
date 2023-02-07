package main

import (
	"time"
)

func getGrossValue(sellingDate *time.Time, amount int, stockSym string) (float64, error) {
	stockPrice, err := getStockPrice(stockSym, *sellingDate)
	if err != nil {
		return -1, err
	}
	grossValue := stockPrice * float64(amount)
	return grossValue, nil
}

func calculateTax(req *TaxCalculationRequest) TaxCalculationRespone {
	print(getGrossValue(&req.SellingDate.Time, req.SellingAmount, req.StockSymbol))

	return TaxCalculationRespone{}
}
