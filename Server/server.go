package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

type DateOnly struct {
	time.Time
}

func (do *DateOnly) UnmarshalJSON(data []byte) error {
	// Ignore null, like in the main JSON package.
	if string(data) == "null" {
		return nil
	}
	// Fractional seconds are handled implicitly by Parse.
	var err error
	do.Time, err = time.Parse("\"2006/01/02\"", string(data))
	return err
}

// example request
// {
//  "StockSymbol" : "PANW",
// 	"GrantDate" : "01/01/2021",
// 	"SellingDate": "01/01/2023",
// 	"SellingAmount" : 10,
// 	"MonthlySalary" : 10000,
// 	"AdditionalIncome" : 50000,
// 	"TaxMethod" : "Fixed"
// }
type TaxMethod string

const (
	Fixed       TaxMethod = "Fixed"
	Progressive TaxMethod = "Progressive"
)

type TaxDeduction struct {
	EffectiveRate float32
	TaxedAmount   float32
	Amount        float32
	Reason        string
}

type TaxCalculationRespone struct {
	GrossAmount   int
	NetAmount     int
	TaxDeductions []TaxDeduction
}

type TaxCalculationRequest struct {
	StockSymbol      string
	GrantDate        DateOnly
	SellingDate      DateOnly
	SellingAmount    int
	MonthlySalary    int
	AdditionalIncome int
	TaxMethod        TaxMethod
}

func calculateTaxMock(r *TaxCalculationRequest) map[string]interface{} {
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
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(data)
	})

	fmt.Printf("Starting server at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
