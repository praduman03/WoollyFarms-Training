from pydantic import BaseModel
from typing import Optional
from typing import List


class User(BaseModel):
    name: str
    email: str
    password: str


class Group(BaseModel):
    type: str
    title: str
    body: str
    user_id: int

    class Config:
        from_attributes = True


class ShowUser(BaseModel):
    name: str
    email: str
    groups: List[Group] = []

    class Config:
        from_attributes = True


class ShowGroup(Group):
    type: str
    title: str
    body: str
    creator: ShowUser

    class Config:
        from_attributes = True


class Message(BaseModel):
    name: str
    email: str
    message: str


class Login(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None
