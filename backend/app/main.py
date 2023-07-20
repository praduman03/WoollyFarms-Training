from fastapi import FastAPI
from .routes import user, contact, auth, group
from .database import engine
from . import models
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()


app = FastAPI()


origins = {"*"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(engine)

app.include_router(auth.router)
app.include_router(user.router)
app.include_router(group.router)
app.include_router(contact.router)
