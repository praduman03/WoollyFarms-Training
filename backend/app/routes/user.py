from fastapi import APIRouter, Depends, status, HTTPException
from .. import database, models, schemas
from sqlalchemy.orm import Session



router = APIRouter(
    prefix="/user",
    tags=["Users"]
)

get_db = database.get_db

@router.post("/", response_model=schemas.ShowUser)
def create_user(request:schemas.User, db: Session = Depends(get_db)):
    new_user = models.User(name = request.name, email = request.email, password = request.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.get("/user/{id}")
def getUser():
    return {"message":"get user by id"}