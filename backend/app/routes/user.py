from fastapi import APIRouter, Depends, status, HTTPException
from .. import database, models, schemas, oauth2
from sqlalchemy.orm import Session
from ..hashing import Hash
from typing import List



router = APIRouter(
    prefix="/user",
    tags=["Users"]
)

get_db = database.get_db

@router.post("/", response_model=schemas.ShowUser)
def create_user(request:schemas.User, db: Session = Depends(get_db)):
    hashedPassword = Hash.bcrypt(request.password)
    new_user = models.User(name = request.name, email = request.email, password = hashedPassword)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# @router.get("/user/{id}")
# def getUser():
#     return {"message":"get user by id"}

@router.get('/', response_model=List[schemas.ShowUser])
def getUser(db: Session= Depends(get_db)):
    data = db.query(models.User).all()
    return data