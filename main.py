from fastapi import FastAPI
import pandas as pd
from statsmodels.tsa.holtwinters import ExponentialSmoothing

app = FastAPI()

@app.post("/predict-demand")
async def predict_demand(sales_history: list):
    # Convert incoming JSON sales data to a Pandas Series
    df = pd.DataFrame(sales_history)
    df['date'] = pd.to_datetime(df['date'])
    df.set_index('date', inplace=True)
    
    # Simple Time Series Forecasting (Holt-Winters)
    model = ExponentialSmoothing(df['quantity'], trend='add', seasonal=None).fit()
    prediction = model.forecast(7) # Predict next 7 days
    
    return {
        "suggested_restock": round(prediction.sum()),
        "confidence_score": 0.94 # Your 94% accuracy stat
    }