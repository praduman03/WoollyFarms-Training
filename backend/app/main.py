from fastapi import FastAPI

app = FastAPI()


@app.get('/user')
def user():
    return {"data":"hello"}

