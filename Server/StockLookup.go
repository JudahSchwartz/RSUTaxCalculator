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

	bars, err := dataClient.GetBars(symbol, marketdata.GetBarsParams{
		Adjustment: marketdata.Split,
		Start:      date,
		TotalLimit: 5,
		PageLimit:  5,
	})
	if err != nil {
		return -1, err
	}

	if len(bars) == 0 {
		return -1, fmt.Errorf("could not find the symbol")
	}
	return bars[0].Close, nil

}
