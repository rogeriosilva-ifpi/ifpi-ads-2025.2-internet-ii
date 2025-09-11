from typing import Literal
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Schemas
class Partida(BaseModel):
  id: int | None = None
  nome: str
  data: str
  local: str
  categoria: Literal['p', 'a', 's'] = 'a'

# GET /partidas --> List[Partida] -- 200 (OK)
#   Paramatros:
#   Query: categoria (http://galeravolei.com/partidas?categoria=P)
@app.get('/partidas', response_model=list[Partida])
def list_partidas(categoria: str | None = None):
  return []


# GET /partidas/[id] --> Partida -- 200 (OK)
# Paramentros:
  # Path/Route --> id: integer, id do da partida, required
@app.get('/partidas/{id}', response_model=Partida)
def detail_partida(id:int):
  return Partida(id=1, nome='Patro#01', 
                 categoria='a', local='Patro Beach')


@app.post('/partidas', status_code=201)
def create_partida(nova_partida: Partida):
  return 