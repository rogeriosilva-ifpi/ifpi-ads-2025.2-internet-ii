from fastapi import FastAPI

app = FastAPI()

@app.get('/rivers')
def list_rivers():
  return ['Poti', 'Parnaíba', 'Longá']


@app.get('/rivers/{id}')
def detail_rivers(id: int):
  return 'Parnaíba'