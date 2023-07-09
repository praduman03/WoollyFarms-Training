from fastapi import FastAPI
from .routes import user
from .database import engine
from . import models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = {
    "http://localhost:3000"
}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

models.Base.metadata.create_all(engine)

app.include_router(user.router)


