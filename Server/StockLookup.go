package main

import (
	"fmt"
	"os"
	"time"

	"github.com/alpacahq/alpaca-trade-api-go/v2/marketdata"
)

func getStockPrice(symbol string, date time.Time) (float64, error) {
	apiKey := os.Getenv("API_KEY")
	apiSecret := os.Getenv("API_SECRET")

	dataClient := marketdata.NewClient(marketdata.ClientOpts{
		ApiKey:    apiKey,
		ApiSecret: apiSecret,
	})

	trades, err := dataClient.GetTrades(symbol, marketdata.GetTradesParams{
		Start:      date,
		TotalLimit: 5,
		PageLimit:  5,
	})
	if err != nil {
		return -1, err
	}

	if len(trades) == 0 {
		return -1, fmt.Errorf("Could not find the symbol")
	}
	return trades[0].Price, nil

}
