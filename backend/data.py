import pandas as pd

df = pd.read_csv("./ind_nifty500list.csv")

# Access the 'Symbol' column
symbols = df["Symbol"]

# Iterate through the column and print each symbol
for sym in symbols:
    print(sym)