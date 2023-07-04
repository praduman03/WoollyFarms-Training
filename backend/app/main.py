from fastapi import FastAPI
from .routes import user
from .database import engine
from . import models

app = FastAPI()

models.Base.metadata.create_all(engine)

app.include_router(user.router)


