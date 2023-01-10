package main

import (
    "fmt"
    "log"
    "net/http"
	"encoding/json"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
        data := map[string]interface{}{
			"gross_amount" : 10000,
			"net_amount" : 2000,
			"tax_deductions" : []map[string]interface{}{ 
				{ 
					"effective_rate" : 37,
					"taxed_amount" : 2000,
					"amount" : 0,
					"reason" : "because ... ",
				},
			   { 
					"effective_rate" : 37,
					"taxed_amount" : 2000,
					"amount" : 0,
					"reason" : "because ... ",
				},
			},
		}
    	w.Header().Set("Content-Type", "application/json")
    	w.WriteHeader(http.StatusCreated)
    	json.NewEncoder(w).Encode(data)
    })

    fmt.Printf("Starting server at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
}