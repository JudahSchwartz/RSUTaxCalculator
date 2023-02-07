package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

type TaxMethod string

const (
	Fixed       TaxMethod = "Fixed"
	Progressive TaxMethod = "Progressive"
)

type TaxCalculationRequest struct {
	StockSymbol      string
	GrantDate        time.Time
	SellingDate      time.Time
	SellingAmount    int
	MonthlySalary    int
	AdditionalIncome int
	TaxMethod        TaxMethod
}

func calculateTax(r *TaxCalculationRequest) map[string]interface{} {
	data := map[string]interface{}{
		"gross_amount": 10000,
		"net_amount":   2000,
		"tax_deductions": []map[string]interface{}{
			{
				"effective_rate": 37,
				"taxed_amount":   2000,
				"amount":         0,
				"reason":         "because ... ",
			},
			{
				"effective_rate": 37,
				"taxed_amount":   2000,
				"amount":         0,
				"reason":         "because ... ",
			},
		},
	}
	return data
}

func main() {
	stockPrice, err := getStockPrice("PANW", time.Date(2021, 10, 13, 0, 0, 0, 0, time.UTC)) // an example call
	fmt.Printf("stock price is %.2f \n", stockPrice)
	if err != nil {
		print(err)
	}
	print(stockPrice)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		var req TaxCalculationRequest
		err := json.NewDecoder(r.Body).Decode(&req)
		print(err)
		data := calculateTax(&req)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(data)
	})

	fmt.Printf("Starting server at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
