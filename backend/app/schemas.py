from pydantic import BaseModel
from typing import Optional


class User(BaseModel):
    name:str
    email:str
    password:str

class ShowUser(BaseModel):
    name:str
    email:str
    class Config():
        from_attributes = True

class Message(BaseModel):
    name:str
    email:str
    message:str

class Login(BaseModel):
    username: str
    password:str

class Token(BaseModel):
    access_token:str
    token_type:str

class TokenData(BaseModel):
    email: Optional[str] = None